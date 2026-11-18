(() => {
  'use strict';
  const P = window.PLAN, EN = window.CONTENT_EN, IT = window.CONTENT_IT, JOB = window.CONTENT_JOB || {}, WHY = window.WHY || {}, WHYS = window.WHY_SECTIONS || {}, FIGS = window.FIGS || {};
  const SB_URL = 'https://komydubaacmstyibqzrp.supabase.co';
  const SB_KEY = 'sb_publishable_zRn7So7E6COVtzQzwgQjRQ_bHEzcEmf'; // clave pública: los datos los protege RLS
  const sb = window.supabase.createClient(SB_URL, SB_KEY);
  const PASS = 80;                                   // % para aprobar una evaluación
  const BOX_DAYS = { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 }; // repaso espaciado (Leitner)
  const KINDS = { ingles: 'Inglés', it: 'IT / documentación', libro: 'Libro', otro: 'Otro' };

  // ---------- Utilidades ----------
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');
  const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = () => iso(new Date());
  const parse = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const ymd = (s) => { const [y, m, d] = s.split('-').map(Number); return [y, m - 1, d]; };
  const diffDays = (a, b) => Math.round((Date.UTC(...ymd(b)) - Date.UTC(...ymd(a))) / 864e5);
  const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
  const fmt = (s) => { const t = parse(s).toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' }); return t.charAt(0).toUpperCase() + t.slice(1); };
  const norm = (s) => String(s).toLowerCase().replace(/[’`]/g, "'").replace(/\s+/g, ' ').replace(/[.!?]$/, '').trim();
  const dur = (sec) => { if (sec > 0 && sec < 60) return `${sec} s`; const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60); return h ? `${h} h ${m} min` : `${m} min`; };
  const clock = (sec) => `${pad(Math.floor(sec / 3600))}:${pad(Math.floor((sec % 3600) / 60))}:${pad(sec % 60)}`;
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const lessonOf = (id) => EN[id] || IT[id] || JOB[id];
  const trackOf = (id) => EN[id] ? 'en' : 'it';
  const gq = (q) => 'https://www.google.com/search?q=' + encodeURIComponent(q);
  const ytq = (q) => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
  const whyBox = (k) => WHYS[k] ? `<details class="whybox"><summary>¿Por qué esto?</summary><p>${esc(WHYS[k])}</p></details>` : '';
  const weekStart = (s) => { const d = parse(s); const wd = (d.getDay() + 6) % 7; return addDays(s, -wd); };

  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2400);
  }

  // ---------- Estado en memoria (espejo de la base) ----------
  let uid = null, S = null;
  const blank = () => ({ settings: {}, tasks: {}, flags: {}, lessons: {}, cards: {}, itWeeks: {}, journal: {}, errors: [], efset: [], reading: [], timer: null });

  async function q(promise, okMsg) {
    const { data, error } = await promise;
    if (error) { console.error(error); toast('No se pudo guardar. Revisá tu conexión.'); throw error; }
    if (okMsg) toast(okMsg);
    return data;
  }

  async function loadAll() {
    const tables = ['settings', 'day_tasks', 'day_flags', 'lesson_progress', 'review_cards', 'it_week_progress', 'journal', 'english_errors', 'efset_results', 'reading_sessions', 'reading_timer'];
    const res = await Promise.all(tables.map((t) => sb.from(t).select('*')));
    const err = res.find((r) => r.error);
    if (err) throw err.error;
    const [settings, tasks, flags, lessons, cards, weeks, journal, errors, efset, reading, timer] = res.map((r) => r.data);
    S = blank();
    S.settings = settings[0] || {};
    tasks.forEach((t) => { const d = (S.tasks[t.day] ||= { en: {}, it: {} }); d[t.scope][t.task_id] = true; });
    flags.forEach((f) => { S.flags[f.day] = f.short_day; });
    lessons.forEach((l) => { S.lessons[l.lesson_id] = l; });
    cards.forEach((c) => { S.cards[c.card_id] = c; });
    weeks.forEach((w) => { S.itWeeks[w.week] = w; });
    journal.forEach((j) => { S.journal[j.day] = j; });
    S.errors = errors.sort((a, b) => b.id - a.id);
    S.efset = efset.sort((a, b) => b.taken_on.localeCompare(a.taken_on));
    S.reading = reading.sort((a, b) => b.started_at.localeCompare(a.started_at));
    S.timer = timer[0] || null;
  }

  // ---------- Lógica de los planes ----------
  function enInfo(date) {
    if (!S.settings.en_start) return null;
    const diff = diffDays(S.settings.en_start, date);
    if (diff < 0) return { notStarted: true };
    const week = Math.floor(diff / 7) + 1;
    const pi = week <= 13 ? 0 : week <= 26 ? 1 : week <= 52 ? 2 : 3;
    const phase = P.phases[pi];
    let w = week - [1, 14, 27, 53][pi], topicId = phase.topics[phase.topics.length - 1][0];
    for (const [id, len] of phase.topics) { if (w < len) { topicId = id; break; } w -= len; }
    return { day: diff + 1, week, phase, topicId, finished: week > 64 };
  }
  function itInfo(date) {
    if (!S.settings.it_start) return null;
    const diff = diffDays(S.settings.it_start, date);
    if (diff < 0) return { notStarted: true };
    const week = Math.floor(diff / 7) + 1;
    return { week: Math.min(week, 16), over: week > 16 };
  }
  function enTasks(date, info) {
    const wd = parse(date).getDay();
    const prompts = P.writing[info.phase.id];
    const wprompt = prompts[(info.day - 1) % prompts.length];
    const title = EN[info.topicId].title;
    const anki = { id: 'vocab', t: 'Vocabulario · 15 min', d: 'Anki: 10 a 20 palabras nuevas + el repaso del día.' };
    if (wd === 0) return [anki, { id: 'movie', t: 'Peli o serie en inglés', d: 'Solo disfrutar. Subtítulos en inglés.' }];
    if (wd === 6) return [anki,
      { id: 'grammar', t: 'Repaso de gramática', d: `Rehacé la evaluación de "${title}" sin mirar la lección.`, lesson: info.topicId },
      { id: 'speak', t: 'Charla larga en Tandem o HelloTalk', d: '30 min o más. Anotá las palabras que te faltaron.' }];
    const tandem = info.phase.id >= 2 && (wd === 2 || wd === 4);
    return [anki,
      { id: 'grammar', t: 'Gramática · 25 min', d: `Leé, explicalo con tus palabras y hacé la evaluación: ${title}.`, lesson: info.topicId },
      { id: 'listen', t: 'Escucha activa · 30 min', d: 'Primero sin subtítulos, después con subtítulos en inglés. Anotá 5 frases útiles.', listen: true },
      { id: 'speak', t: 'Hablar · 25 min', d: tandem ? 'Hoy toca Tandem o HelloTalk (charla con nativo).' : info.phase.speaking },
      { id: 'write', t: 'Escribir · 15 min', d: `5 a 10 líneas: ${wprompt} Corregilo con el prompt "Corrector de escritura".` },
      { id: 'fun', t: 'Inglés por placer · 10 min o más', d: 'Series, música o YouTube en inglés. Si es lectura, cronometrala en Lectura.' }];
  }
  function itTasks(date, info) {
    const wd = parse(date).getDay();
    const w = P.itWeeks[info.week - 1], lid = 'it-' + info.week;
    if (wd === 0) return [];
    if (wd === 6) return [{ id: 'project', t: 'Proyecto del portfolio · 2 h', d: `Avanzá el entregable: ${w.d}. Subí lo que tengas a GitHub.` }];
    if (wd === 5) return [{ id: 'quiz', t: 'Evaluación de la semana · 45 min', d: `Hacé la evaluación de "${IT[lid].title}" sin mirar. Meta: ${PASS} % o más.`, lesson: lid }];
    return [
      { id: 'study', t: 'Estudiar · 40 min', d: `Leé la lección de la semana y el recurso: ${w.r}.`, lesson: lid },
      { id: 'practice', t: 'Práctica · 20 min', d: 'Hacé algo con las manos: probalo en tu PC, una VM o Packet Tracer.' }
    ];
  }

  const readSecs = (from, to) => S.reading.filter((r) => { const d = iso(new Date(r.started_at)); return d >= from && d <= to; }).reduce((s, r) => s + r.seconds, 0);
  function studiedOn(date) {
    const t = S.tasks[date];
    const n = t ? Object.keys(t.en).length + Object.keys(t.it).length : 0;
    return n >= 2 || !!S.journal[date] || readSecs(date, date) >= 600;
  }
  function streak() {
    let d = today(), n = 0;
    if (!studiedOn(d)) d = addDays(d, -1);
    while (studiedOn(d) && n < 3650) { n++; d = addDays(d, -1); }
    return n;
  }
  function missedLastWeek() {
    const start = [S.settings.en_start, S.settings.it_start].filter(Boolean).sort()[0];
    let miss = 0;
    for (let i = 1; i <= 7; i++) { const d = addDays(today(), -i); if (start && d >= start && !studiedOn(d)) miss++; }
    return miss;
  }
  const dueCards = () => Object.values(S.cards).filter((c) => c.due <= today() && lessonOf(c.card_id.split('#')[0]));


  // ---------- Puntos, niveles y logros (se calculan del progreso guardado: nada extra en la base) ----------
  const LEVELS = ['Aprendiz', 'Curioso', 'Practicante', 'Becario de soporte', 'N1 en formación', 'Técnico N1', 'N1 Pro', 'Casi N2', 'Experto en tickets', 'Leyenda de la mesa de ayuda'];
  function xpInfo() {
    const tasks = Object.values(S.tasks).reduce((n, d) => n + Object.keys(d.en).length + Object.keys(d.it).length, 0);
    const lessons = Object.values(S.lessons);
    const read = lessons.filter((l) => l.read_at).length, passed = lessons.filter((l) => l.passed_at).length;
    const mem = Object.values(S.cards).reduce((n, c) => n + (c.box - 1) * 3, 0);
    const readMin = Math.floor(S.reading.reduce((n, r) => n + r.seconds, 0) / 60);
    const journal = Object.keys(S.journal).length;
    const weeks = Object.values(S.itWeeks).filter((w) => w.study && w.practice && w.deliverable).length;
    const parts = [['Tareas del día', tasks * 10], ['Lecciones leídas', read * 10], ['Evaluaciones aprobadas', passed * 50], ['Memoria (repaso)', mem], ['Minutos de lectura', readMin], ['Bitácora', journal * 5], ['Semanas IT completas', weeks * 30], ['EF SET cargados', S.efset.length * 20]];
    const xp = parts.reduce((n, [, v]) => n + v, 0);
    let lvl = 1; while (lvl < LEVELS.length && xp >= 50 * lvl * (lvl + 1)) lvl++;
    const from = 50 * (lvl - 1) * lvl, to = 50 * lvl * (lvl + 1);
    return { xp, parts, lvl, name: LEVELS[lvl - 1], pct: lvl >= LEVELS.length ? 100 : Math.min(100, ((xp - from) / (to - from)) * 100), toNext: lvl >= LEVELS.length ? 0 : to - xp, counts: { tasks, read, passed, readMin, journal, weeks } };
  }
  const BADGES = [
    ['first', '🚀', 'Primer paso', 'Completá tu primera tarea', (x) => x.counts.tasks >= 1],
    ['streak3', '🔥', 'En racha', '3 días seguidos estudiando', () => streak() >= 3],
    ['streak7', '⚡', 'Semana perfecta', '7 días seguidos', () => streak() >= 7],
    ['streak30', '🏆', 'Imparable', '30 días seguidos', () => streak() >= 30],
    ['pass1', '✅', 'Aprobado', 'Aprobá tu primera evaluación', (x) => x.counts.passed >= 1],
    ['pass10', '🎓', 'Diez de diez', 'Aprobá 10 evaluaciones', (x) => x.counts.passed >= 10],
    ['read60', '📖', 'Lector', '1 hora de lectura', (x) => x.counts.readMin >= 60],
    ['read600', '📚', 'Biblioteca andante', '10 horas de lectura', (x) => x.counts.readMin >= 600],
    ['mem', '🧠', 'Memoria de elefante', '20 preguntas en caja 3 o más', () => Object.values(S.cards).filter((c) => c.box >= 3).length >= 20],
    ['journal7', '✍️', 'Bitácora al día', '7 días de bitácora', (x) => x.counts.journal >= 7],
    ['ef', '🌎', 'Nivel medido', 'Cargá tu primer EF SET', () => S.efset.length >= 1],
    ['phase1', '🇬🇧', 'Fase 1 dominada', 'Aprobá todos los temas de la fase 1', () => P.phases[0].topics.every(([id]) => S.lessons[id]?.passed_at)],
    ['it8', '🖥️', 'Medio camino IT', '8 semanas IT completas', (x) => x.counts.weeks >= 8],
    ['job', '💼', 'Listo para la entrevista', 'Aprobá los 5 módulos para conseguir trabajo', () => (window.JOB_ORDER || []).every((id) => S.lessons[id]?.passed_at)]
  ];
  let seenLevel = null, seenBadges = null;
  function checkProgress() {
    if (!S) return;
    const x = xpInfo(), got = BADGES.filter((b) => b[4](x)).map((b) => b[0]);
    if (seenLevel !== null) {
      if (x.lvl > seenLevel) { celebrate(); toast(`¡Subiste a nivel ${x.lvl}: ${x.name}!`); }
      const fresh = got.filter((g) => !seenBadges.includes(g));
      if (fresh.length) { const b = BADGES.find((bb) => bb[0] === fresh[0]); celebrate(); setTimeout(() => toast(`Logro desbloqueado: ${b[1]} ${b[2]}`), x.lvl > seenLevel ? 2500 : 0); }
    }
    seenLevel = x.lvl; seenBadges = got;
  }
  function celebrate() {
    const box = document.createElement('div'); box.className = 'confetti';
    const colors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#a855f7', '#e8ecf1'];
    for (let i = 0; i < 70; i++) {
      const c = document.createElement('i');
      c.style.left = Math.random() * 100 + '%'; c.style.background = colors[i % colors.length];
      c.style.animationDelay = Math.random() * 0.4 + 's'; c.style.transform = `rotate(${Math.random() * 360}deg)`;
      box.appendChild(c);
    }
    document.body.appendChild(box); setTimeout(() => box.remove(), 2600);
  }

  // ---------- Render: HOY ----------
  let viewDate = today();
  const drafts = {};
  document.addEventListener('input', (ev) => {
    if (['lg-done', 'lg-doubt', 'lg-next'].includes(ev.target.id)) drafts[viewDate] = { done: $('#lg-done').value, doubt: $('#lg-doubt').value, next_step: $('#lg-next').value };
  });

  function taskHTML(scope, t, done) {
    const extra = t.lesson ? ` <a href="#" data-open-lesson="${t.lesson}">Abrir lección →</a>` : '';
    return `<label class="task ${done ? 'done' : ''}"><input type="checkbox" data-task="${scope}:${t.id}" ${done ? 'checked' : ''}><span><b>${esc(t.t)}</b><small>${esc(t.d)}${extra}</small></span></label>`;
  }

  function renderHoy() {
    const el = $('#v-hoy');
    let html = importCardHTML();
    if (!S.settings.en_start && !S.settings.it_start) {
      el.innerHTML = html + `<div class="card"><h2>Arranquemos</h2><p>Elegí la fecha en la que empezás cada plan. Si no sabés tu nivel de inglés, primero hacé el <a href="https://www.efset.org" target="_blank" rel="noopener">EF SET</a> (gratis) y cargalo en la pestaña Inglés.</p>
      <div class="row"><label>Inicio inglés<input type="date" id="q-en" value="${today()}"></label><label>Inicio IT<input type="date" id="q-it" value="${today()}"></label></div>
      <button class="btn" id="q-save">Empezar</button></div>`;
      return;
    }
    const day = S.tasks[viewDate] || { en: {}, it: {} };
    const en = enInfo(viewDate), it = itInfo(viewDate), short = !!S.flags[viewDate];
    html += whyBox('hoy') + `<div class="datebar"><button class="ghost" data-shift="-1" aria-label="Día anterior">←</button><div><b>${esc(fmt(viewDate))}</b>${viewDate === today() ? '<small>hoy</small>' : '<small><a href="#" data-shift="0">volver a hoy</a></small>'}</div><button class="ghost" data-shift="1" aria-label="Día siguiente">→</button></div>`;
    const miss = missedLastWeek();
    if (viewDate === today() && miss >= 3) html += `<div class="alert">Te salteaste ${miss} de los últimos 7 días. No pasa nada, pero no lo dejes crecer: hoy hacé al menos el día corto (Anki + 20 min de escucha) y el repaso.</div>`;
    const enT = en && !en.notStarted ? (short ? enTasks(viewDate, en).filter((t) => t.id === 'vocab' || t.id === 'listen') : enTasks(viewDate, en)) : [];
    const itT = it && !it.notStarted ? itTasks(viewDate, it) : [];
    const all = [...enT.map((t) => ['en', t]), ...itT.map((t) => ['it', t])];
    const doneN = all.filter(([sc, t]) => day[sc][t.id]).length;
    const next = all.find(([sc, t]) => !day[sc][t.id]);
    if (all.length) {
      html += `<div class="card hero"><div class="cardhead"><small class="muted">${viewDate === today() ? 'Tu siguiente paso' : 'Pendiente de ese día'}</small><span class="pill">${doneN} de ${all.length} hechas</span></div>
        <div class="bar"><i style="width:${(doneN / all.length) * 100}%"></i></div>
        ${next ? `<h2>${esc(next[1].t)}</h2><p class="muted">${esc(next[1].d)}</p><div class="row"><button class="btn" data-next-step="${next[0]}:${next[1].id}">${next[1].lesson ? 'Abrir lección' : next[1].id === 'write' || next[1].id === 'quiz' ? 'Abrir prompts' : next[1].listen ? 'Qué escuchar' : 'Empezar'}</button><button class="ghost" data-mark-done="${next[0]}:${next[1].id}">✓ Ya lo hice</button></div>` : '<h2>🎉 ¡Día completo!</h2><p class="muted">Hiciste todo lo de hoy. Si te queda energía, un rato de lectura suma XP.</p>'}</div>`;
    }
    html += `<div class="quick"><button data-go="lectura">${S.timer ? '⏱ Leyendo…' : '▶ Leer'}</button><button data-review-due ${dueCards().length ? '' : 'disabled'}>↻ Repasar (${dueCards().length})</button><button data-scroll="bitacora">✎ Bitácora</button></div>`;
    if (S.timer) html += `<div class="card live"><b>Cronómetro de lectura corriendo</b> · ${esc(S.timer.title || KINDS[S.timer.kind])} · <span data-live>${clock(Math.max(0, Math.floor((Date.now() - new Date(S.timer.started_at)) / 1000)))}</span> <a href="#" data-go="lectura">Ir a Lectura →</a></div>`;
    const due = dueCards().length;
    if (viewDate === today() && due) html += `<div class="card"><div class="cardhead"><h2>Repaso espaciado</h2><span class="pill">${due} hoy</span></div><p class="muted">Preguntas de evaluaciones anteriores que tocan hoy, mezcladas. Cada acierto suma XP.</p>${whyBox('repaso')}<button class="btn" data-review-due>Empezar repaso</button></div>`;
    html += '<div id="review-box"></div>';
    if (en) {
      if (en.notStarted) html += `<div class="card"><h2>Inglés</h2><p>Empieza el ${esc(fmt(S.settings.en_start))}.</p></div>`;
      else {
        let tasks = enTasks(viewDate, en);
        if (short) tasks = tasks.filter((t) => t.id === 'vocab' || t.id === 'listen').map((t) => t.id === 'listen' ? { ...t, t: 'Escucha · 20 min' } : t);
        const done = tasks.filter((t) => day.en[t.id]).length;
        html += `<div class="card"><div class="cardhead"><h2>Inglés</h2><span class="pill">${esc(en.phase.name)}</span></div>
        <p class="muted">Día ${en.day} · Semana ${en.week} · Tema: <a href="#" data-open-lesson="${en.topicId}">${esc(EN[en.topicId].title)}</a>${en.finished ? ' · Terminaste las 64 semanas: hacé el EF SET.' : ''}</p>
        <div class="bar"><i style="width:${tasks.length ? (done / tasks.length) * 100 : 0}%"></i></div>
        ${tasks.map((t) => taskHTML('en', t, day.en[t.id])).join('')}
        ${tasks.some((t) => t.listen) ? `<details><summary>Qué escuchar en esta fase</summary><ul>${en.phase.listening.map((l) => `<li>${l.url ? `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.name)}</a>` : esc(l.name)}</li>`).join('')}</ul></details>` : ''}
        <label class="switch"><input type="checkbox" data-short ${short ? 'checked' : ''}> Día con poco tiempo (mínimo: Anki + 20 min de escucha)</label></div>`;
      }
    }
    if (it) {
      if (it.notStarted) html += `<div class="card"><h2>IT</h2><p>Empieza el ${esc(fmt(S.settings.it_start))}.</p></div>`;
      else {
        const tasks = itTasks(viewDate, it), w = P.itWeeks[it.week - 1];
        html += `<div class="card"><div class="cardhead"><h2>IT · Soporte</h2><span class="pill">Semana ${it.week} de 16</span></div>
        <p class="muted">${esc(w.t)}${it.over ? ' · Terminaste las 16 semanas.' : ''}</p>
        ${tasks.length ? tasks.map((t) => taskHTML('it', t, day.it[t.id])).join('') : '<p>Domingo: descanso. Si perdiste un día, recuperalo hoy.</p>'}</div>`;
      }
    }
    const lg = drafts[viewDate] || S.journal[viewDate] || {};
    html += `<div class="card" id="bitacora"><h2>Bitácora del día</h2>
      <textarea id="lg-done" placeholder="Qué hice" maxlength="2000">${esc(lg.done)}</textarea>
      <textarea id="lg-doubt" placeholder="Qué no entendí" maxlength="2000">${esc(lg.doubt)}</textarea>
      <textarea id="lg-next" placeholder="Qué sigue" maxlength="2000">${esc(lg.next_step)}</textarea>
      <button class="btn" data-save-log>Guardar bitácora</button></div>`;
    el.innerHTML = html;
    headerStats();
  }

  // ---------- Lecciones y evaluaciones ----------
  let openLesson = null, quizState = null;
  const STEP_NOTE = `<div class="card how"><b>Cómo estudiar esta lección</b><ol><li>Leela una vez con atención.</li><li>Cerrala y explicá el tema en voz alta o por escrito, con tus palabras y un ejemplo propio.</li><li>Hacé la evaluación sin mirar. Si sacás menos de ${PASS} %, releé solo lo que erraste y volvé a intentar otro día.</li><li>Las preguntas vuelven solas en el Repaso espaciado.</li></ol></div>`;

  function lessonStatus(id) {
    const l = S.lessons[id];
    if (!l) return '';
    if (l.passed_at) return `<span class="pill ok-pill">aprobada ${l.best_pct} %</span>`;
    if (l.best_pct != null) return `<span class="pill warn-pill">${l.best_pct} %</span>`;
    if (l.read_at) return '<span class="pill">leída</span>';
    return '';
  }

  let lessonTab = 'learn';
  const LTABS = [['learn', 'Aprender'], ['why', 'Por qué'], ['videos', 'Videos'], ['quiz', 'Evaluación']];
  function renderLesson(el, id) {
    const l = lessonOf(id), st = S.lessons[id] || {}, w = WHY[id] || {};
    const back = trackOf(id);
    let body = '';
    if (lessonTab === 'learn') {
      body = `<div class="card lesson">${FIGS[id] || ''}${l.html}
        <div class="row"><button class="ghost" data-mark-read="${id}">${st.read_at ? '✓ Leída' : 'Terminé de leer (+10 XP)'}</button><button class="btn" data-ltab="why">Siguiente: por qué importa →</button></div></div>
        <div class="card"><h2>Explicalo con tus palabras</h2><p class="muted">Antes de la evaluación: escribí en 3 o 4 líneas qué es, cuándo se usa y un ejemplo tuyo. Si te trabás, ahí está lo que no entendiste. No se guarda: es para vos.</p><textarea placeholder="Con mis palabras..."></textarea></div>`;
    } else if (lessonTab === 'why') {
      body = `<div class="card whycard"><h2>Por qué importa</h2><p>${esc(w.por || 'Es parte de lo que te piden para conseguir el puesto.')}</p>
        ${w.trabajo ? `<h2>En el trabajo</h2><p>${esc(w.trabajo)}</p>` : ''}
        ${w.entrevista ? `<h2>Así te lo pueden preguntar</h2><p class="quote">${esc(w.entrevista)}</p>` : ''}
        <div class="links"><a class="lnk" href="${gq(w.g || l.title)}" target="_blank" rel="noopener"><span>G</span>Buscar "${esc(w.g || l.title)}" en Google</a>
        <a class="lnk" href="${gq((w.g || l.title) + ' por qué es importante')}" target="_blank" rel="noopener"><span>G</span>Ver por qué es importante (Google)</a>
        ${back === 'it' ? `<a class="lnk" href="${gq(l.title + ' preguntas entrevista soporte técnico')}" target="_blank" rel="noopener"><span>G</span>Preguntas de entrevista sobre este tema</a>` : `<a class="lnk" href="${gq(l.title + ' ejercicios online')}" target="_blank" rel="noopener"><span>G</span>Más ejercicios de este tema</a>`}</div>
        <button class="btn" data-ltab="videos">Siguiente: videos →</button></div>`;
    } else if (lessonTab === 'videos') {
      const qs = (w.yt && w.yt.length ? w.yt : [l.title]).concat(back === 'en' ? [l.title.split('(')[0] + ' inglés explicación'] : [l.title + ' explicado']);
      body = `<div class="card"><h2>Videos para entenderlo mejor</h2><p class="muted">Se abren en YouTube con búsquedas ya armadas, así siempre ves videos actuales. Mirá uno corto antes de la evaluación.</p>
        <div class="vids">${qs.map((qq) => `<a class="vid" href="${ytq(qq)}" target="_blank" rel="noopener"><span class="play">▶</span><span><b>${esc(qq)}</b><small>Buscar en YouTube</small></span></a>`).join('')}</div>
        <button class="btn" data-ltab="quiz">Siguiente: evaluación →</button></div>`;
    } else {
      body = `${STEP_NOTE}<div class="card" id="quiz-card"><h2>Evaluación</h2><p class="muted">${l.quiz.length} preguntas · se aprueba con ${PASS} % (+50 XP) · ${st.best_pct != null ? `mejor resultado: ${st.best_pct} %` : 'sin intentos todavía'}</p><div id="quiz-box"><p class="muted small">Una pregunta por vez, con la corrección al instante.</p><button class="btn big" data-start-quiz="${id}">Empezar evaluación</button></div></div>`;
    }
    el.innerHTML = `<div class="lessonbar"><button class="ghost" data-close-lesson="${back}">← Volver</button><div class="lhead"><b>${esc(l.title)}</b>${lessonStatus(id)}</div></div>
      <div class="subtabs">${LTABS.map(([k, t]) => `<button class="${lessonTab === k ? 'on' : ''}" data-ltab="${k}">${t}</button>`).join('')}</div>${body}`;
  }

  async function updateCard(cardId, correct) {
    const prev = S.cards[cardId];
    const box = correct ? Math.min(5, (prev ? prev.box : 1) + 1) : 1;
    const row = { user_id: uid, card_id: cardId, box, due: addDays(today(), BOX_DAYS[box]), last_correct: correct, updated_at: new Date().toISOString() };
    S.cards[cardId] = row;
    return row;
  }

  // Evaluación y repaso: una pregunta por vez, con corrección inmediata (feedback al instante fija mejor).
  const answerOf = (qz) => qz.o ? qz.o[qz.c] : qz.a[0];
  let run = null;   // { mode: 'quiz'|'review', lessonId, items: [{card, lid, qz}], i, ok, rows, picked, checked }

  function startRun(mode, items, lessonId) {
    if (!items.length) return toast('No hay preguntas para mostrar.');
    run = { mode, lessonId, items, i: 0, ok: 0, rows: [], picked: null, checked: false };
    renderRun();
    $(run.mode === 'quiz' ? '#quiz-box' : '#review-box').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function startQuiz(id) {
    const l = lessonOf(id);
    startRun('quiz', shuffle(l.quiz.map((qz, i) => ({ card: `${id}#${i}`, lid: id, qz }))), id);
  }
  function startReview() {
    const items = shuffle(dueCards()).slice(0, 20).map((c) => { const [lid, i] = c.card_id.split('#'); return { card: c.card_id, lid, qz: lessonOf(lid).quiz[Number(i)] }; }).filter((x) => x.qz);
    startRun('review', items);
  }

  function renderRun() {
    const box = $(run.mode === 'quiz' ? '#quiz-box' : '#review-box');
    if (!box) return;
    if (run.i >= run.items.length) return renderRunEnd(box);
    const it = run.items[run.i], qz = it.qz, n = run.items.length;
    const topic = run.mode === 'review' ? `<small class="muted">${esc(lessonOf(it.lid).title)}</small>` : '';
    let answer;
    if (qz.o) answer = `<div class="opts">${qz.o.map((o, j) => {
      let cls = 'opt';
      if (run.picked === j) cls += ' sel';
      if (run.checked && j === qz.c) cls += ' right';
      if (run.checked && run.picked === j && j !== qz.c) cls += ' wrong';
      return `<button type="button" class="${cls}" data-pick="${j}" ${run.checked ? 'disabled' : ''}>${esc(o)}</button>`;
    }).join('')}</div>`;
    else answer = `<input id="run-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribí tu respuesta" ${run.checked ? 'disabled' : ''} value="${esc(run.picked ?? '')}">`;
    let feedback = '';
    if (run.checked) {
      const good = run.rows[run.rows.length - 1].last_correct;
      feedback = `<div class="feedback ${good ? 'ok' : 'bad'}">${good ? '✓ ¡Bien!' : `✗ La correcta es: <b>${esc(answerOf(qz))}</b>`}</div>`;
    }
    box.innerHTML = `<form id="runform" class="run">
      <div class="runhead"><span>Pregunta ${run.i + 1} de ${n}</span><span>${run.ok} bien</span></div>
      <div class="bar"><i style="width:${(run.i / n) * 100}%"></i></div>
      ${topic}<p class="q">${esc(qz.q)}</p>${answer}${feedback}
      <div class="row">${run.checked
        ? `<button class="btn" type="submit">${run.i + 1 < n ? 'Siguiente →' : 'Ver resultado'}</button>`
        : `<button class="btn" type="submit">Comprobar</button>`}<button class="ghost" type="button" data-run-quit>Salir</button></div></form>`;
    const inp = $('#run-input'); if (inp && !run.checked) inp.focus();
  }

  async function runSubmit() {
    if (!run) return;
    if (run.checked) { run.i++; run.picked = null; run.checked = false; return renderRun(); }
    const it = run.items[run.i], qz = it.qz;
    let good;
    if (qz.o) { if (run.picked === null) return toast('Elegí una opción'); good = run.picked === qz.c; }
    else { const v = $('#run-input').value; if (!v.trim()) return toast('Escribí una respuesta'); run.picked = v; good = qz.a.some((a) => norm(a) === norm(v)); }
    if (good) run.ok++;
    run.rows.push(await updateCard(it.card, good));
    run.checked = true;
    renderRun();
  }

  async function renderRunEnd(box) {
    const total = run.items.length, ok = run.ok, pct = Math.round((ok / total) * 100);
    const wrong = run.items.filter((_, k) => !run.rows[k].last_correct);
    let msg;
    if (run.mode === 'quiz') msg = pct >= PASS ? '¡Aprobada! Estas preguntas vuelven solas en el repaso espaciado.' : `Te faltó para el ${PASS} %. Releé lo que erraste y volvé a intentarlo mañana: esperar un día ayuda a fijarlo.`;
    else msg = 'Las que acertaste vuelven más adelante; las que erraste, mañana.';
    box.innerHTML = `<div class="result ${run.mode === 'quiz' ? (pct >= PASS ? 'ok' : 'bad') : ''}"><div class="big">${pct} %</div><b>${ok} de ${total} bien</b><p>${msg}</p>
      ${wrong.length ? `<details><summary>Ver las ${wrong.length} que erraste</summary><ul class="list">${wrong.map((w) => `<li>${esc(w.qz.q)} → <b>${esc(answerOf(w.qz))}</b></li>`).join('')}</ul></details>` : ''}
      <div class="row">${run.mode === 'quiz' ? `<button class="ghost" data-start-quiz="${run.lessonId}">Intentar de nuevo</button>` : ''}<button class="btn" data-run-quit>Listo</button></div></div>`;
    const done = run; run = null;
    if (done.mode === 'quiz' && pct >= PASS) celebrate();
    try {
      const ops = [q(sb.from('review_cards').upsert(done.rows))];
      if (done.mode === 'quiz') {
        const id = done.lessonId, prev = S.lessons[id] || {};
        const lp = { user_id: uid, lesson_id: id, read_at: prev.read_at || null, best_pct: Math.max(prev.best_pct ?? 0, pct), passed_at: prev.passed_at || (pct >= PASS ? new Date().toISOString() : null), updated_at: new Date().toISOString() };
        S.lessons[id] = lp;
        ops.push(q(sb.from('quiz_attempts').insert({ user_id: uid, lesson_id: id, correct: ok, total })), q(sb.from('lesson_progress').upsert(lp)));
      }
      await Promise.all(ops);
    } catch (e) { /* toast ya mostrado */ }
    headerStats();
  }

  // ---------- Render: INGLÉS ----------
  function renderIngles() {
    const el = $('#v-en');
    if (openLesson && EN[openLesson]) { renderLesson(el, openLesson); return; }
    const info = enInfo(today());
    const ids = Object.keys(EN);
    const passed = ids.filter((id) => S.lessons[id]?.passed_at).length;
    let html = whyBox('en') + `<div class="card"><h2>Tu progreso</h2><div class="bar"><i style="width:${(passed / ids.length) * 100}%"></i></div><p class="muted">${passed} de ${ids.length} temas aprobados${info && !info.notStarted ? ` · ${esc(info.phase.name)}` : ''}</p></div>`;
    for (const ph of P.phases) {
      html += `<div class="card"><h2>${esc(ph.name)}</h2><p class="muted">Meses ${ph.months[0]} a ${ph.months[1]} · Meta: ${esc(ph.goal)}</p><ul class="list">`;
      for (const [id] of ph.topics) html += `<li><a href="#" data-open-lesson="${id}">${esc(EN[id].title)}</a> ${info && info.topicId === id ? '<span class="pill">ahora</span>' : ''} ${lessonStatus(id)}</li>`;
      html += '</ul></div>';
    }
    const counts = {};
    S.errors.forEach((e) => { counts[e.category] = (counts[e.category] || 0) + 1; });
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    html += `<div class="card"><h2>Mis errores</h2><p class="muted">Anotá los errores que te marcan al corregir tus textos. Así ves cuáles se repiten.</p>
      <div class="row"><input id="er-text" maxlength="500" placeholder="Lo que escribí (ej: She don't like)"><input id="er-fix" maxlength="500" placeholder="Corrección (ej: She doesn't like)"></div>
      <div class="row"><select id="er-cat"><option>Gramática</option><option>Vocabulario</option><option>Ortografía</option><option>Pronunciación</option><option>Orden de palabras</option><option>Otro</option></select><button class="btn" data-add-error>Agregar</button></div>
      ${top.length ? `<p><b>Más repetidos:</b> ${top.map(([c, n]) => `${esc(c)} (${n})`).join(' · ')}</p>` : ''}
      <ul class="list">${S.errors.slice(0, 40).map((e) => `<li><s>${esc(e.wrong)}</s> → <b>${esc(e.fix)}</b> <small class="muted">${esc(e.category)} · ${esc(e.created_on)}</small> <button class="x" data-del-error="${e.id}" aria-label="Borrar">×</button></li>`).join('')}</ul></div>`;
    html += `<div class="card"><h2>EF SET</h2><ol><li>Reservá 90 minutos sin interrupciones y prepará auriculares y micrófono. Abrí el <a href="https://www.efset.org/es/4-skill/" target="_blank" rel="noopener">EF SET de cuatro habilidades</a>.</li><li>Completá lectura, escucha, escritura y expresión oral. Guardá tu certificado.</li><li>Copiá acá la fecha del examen, el puntaje global sobre 100 y el nivel MCER que figura en el certificado. Tocá Guardar y comprobá que aparezca en el historial.</li></ol><p class="muted">Repetí la misma modalidad cada dos o tres meses para comparar.</p>
      <div class="row"><input type="date" id="ef-date" value="${today()}"><input type="number" id="ef-score" min="0" max="100" placeholder="Puntaje"><select id="ef-level"><option>A1</option><option>A2</option><option>B1</option><option>B2</option><option>C1</option><option>C2</option></select><button class="btn" data-add-ef>Guardar</button></div>
      <ul class="list">${S.efset.map((r) => `<li><b>${esc(r.level)}</b> · ${esc(r.score)}/100 <small class="muted">${esc(r.taken_on)}</small></li>`).join('') || '<li class="muted">Todavía no cargaste ningún resultado.</li>'}</ul></div>`;
    html += `<div class="card"><h2>Recursos</h2><ul class="list">${P.resources.map((r) => `<li><a href="${r.url}" target="_blank" rel="noopener">${esc(r.name)}</a></li>`).join('')}</ul></div>`;
    el.innerHTML = html;
  }

  // ---------- Render: IT ----------
  function renderIT() {
    const el = $('#v-it');
    if (openLesson && (IT[openLesson] || JOB[openLesson])) { renderLesson(el, openLesson); return; }
    const info = itInfo(today());
    const doneWeeks = P.itWeeks.filter((_, i) => { const w = S.itWeeks[i + 1] || {}; return w.study && w.practice && w.deliverable; }).length;
    let html = whyBox('it') + `<div class="card"><h2>Plan IT · 16 semanas</h2><div class="bar"><i style="width:${(doneWeeks / 16) * 100}%"></i></div><p class="muted">${doneWeeks} de 16 semanas completas. Empezá a postularte a Soporte N1 desde el mes 2.</p></div>`;
    for (let m = 1; m <= 4; m++) {
      html += `<div class="card"><h2>Mes ${m}</h2><p class="muted">${esc(P.itMonths[m])}</p>`;
      P.itWeeks.forEach((w, i) => {
        if (w.m !== m) return;
        const n = i + 1, st = S.itWeeks[n] || {}, lid = 'it-' + n;
        const cur = info && !info.notStarted && info.week === n;
        html += `<div class="week ${cur ? 'cur' : ''}"><div><b>Semana ${n}${cur ? ' · ahora' : ''}</b> ${lessonStatus(lid)}<small><a href="#" data-open-lesson="${lid}">${esc(w.t)} →</a></small><small class="muted">Recurso: ${esc(w.r)}</small></div>
          <label><input type="checkbox" data-itw="${n}:study" ${st.study ? 'checked' : ''}> Estudié el tema</label>
          <label><input type="checkbox" data-itw="${n}:practice" ${st.practice ? 'checked' : ''}> Hice la práctica</label>
          <label><input type="checkbox" data-itw="${n}:deliverable" ${st.deliverable ? 'checked' : ''}> Entregable: ${esc(w.d)}</label>
          <input class="link" data-itlink="${n}" maxlength="500" placeholder="Link de GitHub del entregable" value="${esc(st.link)}"></div>`;
      });
      html += '</div>';
    }
    html += `<div class="card"><h2>Prácticas y portfolio</h2><div class="tiles">${window.PORTFOLIO_ORDER.map(id => `<button class="tile" data-open-lesson="${id}"><b>${esc(JOB[id].title)}</b>${lessonStatus(id)}</button>`).join("")}</div></div>`;
    const jobDone = (window.JOB_ORDER || []).filter((id) => S.lessons[id]?.passed_at).length;
    html += `<div class="card jobcard"><div class="cardhead"><h2>Para conseguir el trabajo</h2><span class="pill">${jobDone} de ${(window.JOB_ORDER || []).length}</span></div><p class="muted">Temas que piden en las entrevistas de Soporte N1 y que no entran en las 16 semanas. Hacelos cuando quieras, cada uno con su evaluación.</p>
      <div class="tiles">${(window.JOB_ORDER || []).map((id) => `<button class="tile" data-open-lesson="${id}"><b>${esc(JOB[id].title)}</b>${lessonStatus(id) || '<span class="pill">nuevo</span>'}</button>`).join('')}</div></div>`;
    html += `<div class="card"><h2>Recursos</h2><ul class="list">${P.itResources.map((r) => `<li><a href="${r.url}" target="_blank" rel="noopener">${esc(r.name)}</a></li>`).join('')}</ul></div>`;
    el.innerHTML = html;
  }

  // ---------- Render: LECTURA ----------
  let tick = null;
  function renderLectura() {
    const el = $('#v-lectura');
    const t = today(), ws = weekStart(t), ms = t.slice(0, 8) + '01';
    const total = S.reading.reduce((s, r) => s + r.seconds, 0);
    const byKind = {};
    S.reading.forEach((r) => { byKind[r.kind] = (byKind[r.kind] || 0) + r.seconds; });
    const days = [];
    for (let i = 13; i >= 0; i--) { const d = addDays(t, -i); days.push({ d, s: readSecs(d, d) }); }
    const max = Math.max(1800, ...days.map((x) => x.s));
    let html = whyBox('lectura');
    if (S.timer) {
      html += `<div class="card live"><h2>Leyendo ahora</h2><p class="muted">${esc(KINDS[S.timer.kind])}${S.timer.title ? ' · ' + esc(S.timer.title) : ''}</p><div class="bigclock" data-live>00:00:00</div>
        <div class="row"><input type="number" id="rd-pages" min="0" placeholder="Páginas leídas (opcional)"></div>
        <textarea id="rd-notes" maxlength="2000" placeholder="¿Qué aprendiste? Una o dos frases (opcional, ayuda a recordarlo)"></textarea>
        <div class="row"><button class="btn" data-stop-timer>Terminar y guardar</button><button class="ghost danger" data-cancel-timer>Descartar</button></div>
        <p class="muted small">El cronómetro sigue corriendo aunque cierres la página o cambies de dispositivo.</p></div>`;
    } else {
      html += `<div class="card"><h2>Empezar a leer</h2>
        <div class="row"><select id="rd-kind">${Object.entries(KINDS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select><input id="rd-title" maxlength="200" placeholder="Qué vas a leer (ej: Microsoft Learn PowerShell)"></div>
        <button class="btn big" data-start-timer>▶ Iniciar cronómetro</button></div>`;
    }
    html += `<div class="stats"><div><b>${dur(readSecs(t, t))}</b><small>hoy</small></div><div><b>${dur(readSecs(ws, t))}</b><small>esta semana</small></div><div><b>${dur(readSecs(ms, t))}</b><small>este mes</small></div></div>`;
    html += `<div class="card"><div class="cardhead"><h2>Últimos 14 días</h2><span class="pill">Total: ${dur(total)}</span></div>
      <div class="chart">${days.map((x) => `<div title="${esc(x.d)}: ${dur(x.s)}"><i style="height:${Math.round((x.s / max) * 100)}%"></i><small>${parse(x.d).getDate()}</small></div>`).join('')}</div>
      <p class="muted small">${Object.entries(byKind).sort((a, b) => b[1] - a[1]).map(([k, s]) => `${esc(KINDS[k])}: ${dur(s)}`).join(' · ') || 'Todavía no hay lecturas guardadas.'}</p></div>`;
    html += `<details class="card"><summary>Cargar una lectura a mano</summary><p class="muted">Para cuando leíste y te olvidaste del cronómetro.</p>
      <div class="row"><input type="date" id="mn-date" value="${t}"><input type="number" id="mn-min" min="1" max="600" placeholder="Minutos"><select id="mn-kind">${Object.entries(KINDS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select></div>
      <div class="row"><input id="mn-title" maxlength="200" placeholder="Qué leíste"><button class="btn" data-add-reading>Guardar</button></div></details>`;
    html += `<div class="card"><h2>Historial</h2><ul class="list hist">${S.reading.slice(0, 60).map((r) => `<li><b>${dur(r.seconds)}</b> · ${esc(KINDS[r.kind])}${r.title ? ' · ' + esc(r.title) : ''}${r.pages ? ` · ${r.pages} págs.` : ''} <small class="muted">${esc(fmt(iso(new Date(r.started_at))))}</small>${r.notes ? `<br><small>${esc(r.notes)}</small>` : ''} <button class="x" data-del-reading="${r.id}" aria-label="Borrar">×</button></li>`).join('') || '<li class="muted">Sin lecturas todavía.</li>'}</ul></div>`;
    html += `<div class="card how"><b>Por qué leer suma tanto</b><p class="muted">La lectura extensiva (mucho texto, a tu nivel, de temas que te interesan) mejora vocabulario, comprensión y escritura en inglés. Elegí textos donde entiendas casi todo: si tenés que buscar muchas palabras por página, bajá un nivel.</p></div>`;
    el.innerHTML = html;
    startTick();
  }
  function startTick() {
    clearInterval(tick);
    if (!S.timer) return;
    const upd = () => document.querySelectorAll('[data-live]').forEach((n) => { n.textContent = clock(Math.max(0, Math.floor((Date.now() - new Date(S.timer.started_at)) / 1000))); });
    upd(); tick = setInterval(() => { if (!S.timer) return clearInterval(tick); upd(); }, 1000);
  }

  // ---------- Render: BITÁCORA / PROMPTS / AJUSTES ----------
  function renderLog() {
    const entries = Object.values(S.journal).sort((a, b) => b.day.localeCompare(a.day));
    $('#v-log').innerHTML = `<div class="card"><h2>Bitácora</h2><p class="muted">${entries.length} días anotados. Se carga desde la pestaña Hoy.</p></div>` +
      entries.map((l) => `<div class="card"><b>${esc(fmt(l.day))}</b>${l.done ? `<p><small class="muted">Hice:</small> ${esc(l.done)}</p>` : ''}${l.doubt ? `<p><small class="muted">No entendí:</small> ${esc(l.doubt)}</p>` : ''}${l.next_step ? `<p><small class="muted">Sigue:</small> ${esc(l.next_step)}</p>` : ''}</div>`).join('');
  }
  function renderPrompts() {
    $('#v-prompts').innerHTML = `<div class="card"><p class="muted">Copialos y pegalos en Claude, ChatGPT o Gemini gratis. Cambiá lo que está entre corchetes.</p></div>` +
      ['Inglés', 'IT'].map((cat) => `<h3>${cat}</h3>` + P.prompts.map((p, i) => p.cat !== cat ? '' : `<div class="card"><div class="cardhead"><b>${esc(p.name)}</b><button class="btn sm" data-copy="${i}">Copiar</button></div><pre>${esc(p.text)}</pre></div>`).join('')).join('');
  }
  function renderAjustes() {
    const x = xpInfo();
    const badges = BADGES.map((b) => { const ok = b[4](x); return `<div class="badge ${ok ? 'got' : ''}" title="${esc(b[3])}"><span>${ok ? b[1] : '🔒'}</span><b>${esc(b[2])}</b><small>${esc(b[3])}</small></div>`; }).join('');
    $('#v-ajustes').innerHTML = whyBox('perfil') + `<div class="card hero"><div class="cardhead"><div><small class="muted">Nivel ${x.lvl}</small><h2>${esc(x.name)}</h2></div><div class="xpbig">${x.xp} XP</div></div>
      <div class="bar"><i style="width:${x.pct}%"></i></div><p class="muted small">${x.toNext ? `Te faltan ${x.toNext} XP para el nivel ${x.lvl + 1}.` : '¡Nivel máximo!'}</p>
      <details><summary>De dónde salen tus puntos</summary><ul class="list">${x.parts.map(([k, v]) => `<li>${esc(k)}: <b>${v} XP</b></li>`).join('')}</ul></details></div>
      <div class="card"><div class="cardhead"><h2>Logros</h2><span class="pill">${BADGES.filter((b) => b[4](x)).length} de ${BADGES.length}</span></div><div class="badges">${badges}</div></div>
      <div class="card"><h2>Fechas de inicio</h2>
      <div class="row"><label>Inglés<input type="date" id="set-en" value="${esc(S.settings.en_start)}"></label><label>IT<input type="date" id="set-it" value="${esc(S.settings.it_start)}"></label></div>
      <button class="btn" data-save-settings>Guardar</button></div>
      <div class="card how"><b>Los métodos que usa esta web</b><ul>
      <li><b>Práctica de recuperación</b>: cada tema termina en una evaluación sin mirar. Recordar es lo que fija, no releer.</li>
      <li><b>Repaso espaciado</b>: cada pregunta vuelve a 1, 3, 7, 14 y 30 días si la acertás; si la errás, vuelve mañana.</li>
      <li><b>Práctica intercalada</b>: el repaso mezcla temas para que aprendas a elegir qué usar.</li>
      <li><b>Autoexplicación</b>: explicar con tus palabras antes de evaluarte muestra qué no entendiste.</li>
      <li><b>Lectura extensiva</b>: tiempo de lectura medido para que sume todos los días.</li></ul>${FIGS.leitner || ''}</div>
      <div class="card"><h2>Cuenta</h2><p class="muted">Sesión iniciada como ${esc(sessionEmail)}. Tus datos se guardan en tu base de Supabase y solo vos podés verlos.</p><button class="ghost" data-logout>Cerrar sesión</button></div>`;
  }

  // ---------- Importar progreso del navegador (versión anterior) ----------
  function localData() { try { const d = JSON.parse(localStorage.getItem('pya-plan-v1') || 'null'); return d && !localStorage.getItem('pya-plan-imported') ? d : null; } catch (e) { return null; } }
  function importCardHTML() { return localData() ? '<div class="card alert"><b>Tenés progreso guardado en este navegador</b> de la versión anterior. <div class="row"><button class="btn" data-import-local>Pasarlo a mi cuenta</button><button class="ghost" data-skip-import>No, gracias</button></div></div>' : ''; }
  async function importLocal() {
    const d = localData(); if (!d) return;
    const ops = [];
    if (d.settings && (d.settings.enStart || d.settings.itStart) && !S.settings.en_start && !S.settings.it_start)
      ops.push(sb.from('settings').upsert({ user_id: uid, en_start: d.settings.enStart || null, it_start: d.settings.itStart || null }));
    const tasks = [], flags = [];
    for (const [day, v] of Object.entries(d.days || {})) {
      for (const scope of ['en', 'it']) for (const [tid, on] of Object.entries(v[scope] || {})) if (on) tasks.push({ user_id: uid, day, scope, task_id: tid });
      if (v.short) flags.push({ user_id: uid, day, short_day: true });
    }
    if (tasks.length) ops.push(sb.from('day_tasks').upsert(tasks));
    if (flags.length) ops.push(sb.from('day_flags').upsert(flags));
    const lessons = Object.entries(d.lessons || {}).filter(([id, l]) => l.seen && EN[id]).map(([id]) => ({ user_id: uid, lesson_id: id, read_at: new Date().toISOString() }));
    if (lessons.length) ops.push(sb.from('lesson_progress').upsert(lessons));
    const weeks = Object.entries(d.itWeeks || {}).map(([n, w]) => ({ user_id: uid, week: Number(n), study: !!w.study, practice: !!w.practice, deliverable: !!w.deliv, link: w.link || null })).filter((w) => w.week >= 1 && w.week <= 16);
    if (weeks.length) ops.push(sb.from('it_week_progress').upsert(weeks));
    const journal = Object.entries(d.log || {}).map(([day, l]) => ({ user_id: uid, day, done: l.done || null, doubt: l.doubt || null, next_step: l.next || null }));
    if (journal.length) ops.push(sb.from('journal').upsert(journal));
    const errors = (d.errors || []).map((e) => ({ user_id: uid, created_on: e.date, wrong: e.text, fix: e.fix, category: e.cat }));
    if (errors.length) ops.push(sb.from('english_errors').insert(errors));
    const ef = (d.efset || []).map((r) => ({ user_id: uid, taken_on: r.date, score: r.score, level: r.level }));
    if (ef.length) ops.push(sb.from('efset_results').insert(ef));
    try { for (const op of ops) await q(op); localStorage.setItem('pya-plan-imported', '1'); await loadAll(); toast('Progreso importado'); go('hoy'); } catch (e) { /* toast */ }
  }

  function doNextStep(scope, id) {
    const info = scope === 'en' ? enInfo(viewDate) : itInfo(viewDate);
    const t = (scope === 'en' ? enTasks(viewDate, info) : itTasks(viewDate, info)).find((x) => x.id === id);
    if (!t) return;
    if (t.lesson) { openLesson = t.lesson; lessonTab = t.id === 'quiz' ? 'quiz' : 'learn'; return go(trackOf(t.lesson)); }
    if (id === 'write' || id === 'quiz' || id === 'speak') return go('prompts');
    if (t.listen) { const l = info.phase.listening.find((x) => x.url); if (l) window.open(l.url, '_blank', 'noopener'); return; }
    toast('Hacelo y después tocá "Ya lo hice"');
  }

  // ---------- Navegación ----------
  const views = { hoy: renderHoy, lectura: renderLectura, en: renderIngles, it: renderIT, log: renderLog, prompts: renderPrompts, ajustes: renderAjustes };
  let current = 'hoy';
  function headerStats() {
    const h = $('#hstats'); if (!h || !S) return;
    const x = xpInfo();
    h.innerHTML = `<button class="lvl" data-go="ajustes" title="${x.xp} XP · ${esc(x.name)}"><b>Nv ${x.lvl}</b><span class="mini"><i style="width:${x.pct}%"></i></span></button><span title="Días seguidos estudiando">🔥 ${streak()}</span>`;
    checkProgress();
  }
  function go(v) {
    current = v; run = null;
    document.querySelectorAll('.view').forEach((x) => { x.hidden = x.id !== 'v-' + v; });
    document.querySelectorAll('nav button').forEach((b) => b.classList.toggle('on', b.dataset.go === v));
    views[v](); window.scrollTo(0, 0); headerStats();
    const ve = $('#v-' + v); ve.classList.remove('enter'); void ve.offsetWidth; ve.classList.add('enter');
    if (v !== 'lectura' && v !== 'hoy') clearInterval(tick); else startTick();
  }
  const rerender = () => views[current]();

  // ---------- Eventos ----------
  document.addEventListener('click', async (ev) => {
    const t = ev.target.closest('[data-go],[data-shift],[data-open-lesson],[data-close-lesson],[data-mark-read],[data-start-quiz],[data-review-due],[data-save-log],[data-add-error],[data-del-error],[data-add-ef],[data-copy],[data-save-settings],[data-logout],[data-start-timer],[data-stop-timer],[data-cancel-timer],[data-add-reading],[data-del-reading],[data-import-local],[data-skip-import],[data-pick],[data-run-quit],[data-next-step],[data-resend],[data-mark-done],[data-scroll],[data-ltab],#q-save,#auth-signup');
    if (!t) return;
    if (!uid && !t.id.startsWith('auth') && t.dataset.resend === undefined) return;
    if (t.matches('a')) ev.preventDefault();
    const d = t.dataset;
    try {
      if (t.id === 'auth-signup') return authAction(true);
      if (d.resend !== undefined) return resendConfirm();
      if (d.pick !== undefined) { if (run && !run.checked) { run.picked = Number(d.pick); renderRun(); } return; }
      if (d.runQuit !== undefined) { run = null; rerender(); return; }
      if (d.nextStep) { const [scope, id] = d.nextStep.split(':'); return doNextStep(scope, id); }
      if (d.ltab) { lessonTab = d.ltab; run = null; rerender(); window.scrollTo(0, 0); return; }
      if (d.scroll) { const n = document.getElementById(d.scroll); if (n) n.scrollIntoView({ behavior: 'smooth' }); return; }
      if (d.markDone) {
        const [scope, id] = d.markDone.split(':');
        const day = (S.tasks[viewDate] ||= { en: {}, it: {} });
        day[scope][id] = true; renderHoy();
        await q(sb.from('day_tasks').upsert({ user_id: uid, day: viewDate, scope, task_id: id }), '+10 XP ✓');
        return;
      }
      if (d.go) { openLesson = null; go(d.go); }
      else if (d.shift !== undefined) { viewDate = d.shift === '0' ? today() : addDays(viewDate, Number(d.shift)); renderHoy(); }
      else if (d.openLesson) { openLesson = d.openLesson; lessonTab = 'learn'; go(trackOf(openLesson)); }
      else if (d.closeLesson) { openLesson = null; go(d.closeLesson); }
      else if (d.markRead) {
        const id = d.markRead, prev = S.lessons[id] || {};
        const row = { user_id: uid, lesson_id: id, read_at: prev.read_at ? null : new Date().toISOString(), best_pct: prev.best_pct ?? null, passed_at: prev.passed_at ?? null, updated_at: new Date().toISOString() };
        S.lessons[id] = row; t.textContent = row.read_at ? '✓ Leída' : 'Terminé de leer';
        await q(sb.from('lesson_progress').upsert(row)); headerStats();
      }
      else if (d.startQuiz) startQuiz(d.startQuiz);
      else if (d.reviewDue !== undefined) startReview();
      else if (d.saveLog !== undefined) {
        const row = { user_id: uid, day: viewDate, done: $('#lg-done').value.trim() || null, doubt: $('#lg-doubt').value.trim() || null, next_step: $('#lg-next').value.trim() || null, updated_at: new Date().toISOString() };
        if (row.done || row.doubt || row.next_step) { await q(sb.from('journal').upsert(row), 'Bitácora guardada'); S.journal[viewDate] = row; }
        else { await q(sb.from('journal').delete().match({ user_id: uid, day: viewDate }), 'Bitácora borrada'); delete S.journal[viewDate]; }
        delete drafts[viewDate]; renderHoy();
      }
      else if (d.addError !== undefined) {
        const wrong = $('#er-text').value.trim(), fix = $('#er-fix').value.trim();
        if (!wrong || !fix) return toast('Completá lo que escribiste y la corrección');
        const [row] = await q(sb.from('english_errors').insert({ user_id: uid, wrong, fix, category: $('#er-cat').value }).select());
        S.errors.unshift(row); renderIngles();
      }
      else if (d.delError) { await q(sb.from('english_errors').delete().match({ id: Number(d.delError), user_id: uid })); S.errors = S.errors.filter((e) => String(e.id) !== d.delError); renderIngles(); }
      else if (d.addEf !== undefined) {
        const raw = $('#ef-score').value, score = Number(raw);
        if (!$('#ef-date').value || raw === '' || !(score >= 0 && score <= 100)) return toast('Poné fecha y puntaje (0 a 100)');
        const [row] = await q(sb.from('efset_results').insert({ user_id: uid, taken_on: $('#ef-date').value, score, level: $('#ef-level').value }).select());
        S.efset.unshift(row); S.efset.sort((a, b) => b.taken_on.localeCompare(a.taken_on)); renderIngles();
      }
      else if (d.copy) {
        const txt = P.prompts[Number(d.copy)].text;
        (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => toast('Copiado'), () => toast('No se pudo copiar: seleccioná el texto'));
      }
      else if (d.saveSettings !== undefined) {
        const row = { user_id: uid, en_start: $('#set-en').value || null, it_start: $('#set-it').value || null, updated_at: new Date().toISOString() };
        await q(sb.from('settings').upsert(row), 'Guardado'); S.settings = row;
      }
      else if (t.id === 'q-save') {
        const row = { user_id: uid, en_start: $('#q-en').value || null, it_start: $('#q-it').value || null, updated_at: new Date().toISOString() };
        await q(sb.from('settings').upsert(row)); S.settings = row; renderHoy();
      }
      else if (d.logout !== undefined) { await sb.auth.signOut(); }
      else if (d.startTimer !== undefined) {
        const row = { user_id: uid, started_at: new Date().toISOString(), kind: $('#rd-kind').value, title: $('#rd-title').value.trim() || null };
        await q(sb.from('reading_timer').upsert(row)); S.timer = row; renderLectura();
      }
      else if (d.stopTimer !== undefined) {
        const secs = Math.floor((Date.now() - new Date(S.timer.started_at)) / 1000);
        if (secs < 1) return;
        const pagesRaw = $('#rd-pages').value;
        const row = { user_id: uid, started_at: S.timer.started_at, seconds: Math.min(secs, 86400), kind: S.timer.kind, title: S.timer.title, pages: pagesRaw === '' ? null : Math.max(0, Math.min(32000, Number(pagesRaw))), notes: $('#rd-notes').value.trim() || null };
        const [saved] = await q(sb.from('reading_sessions').insert(row).select(), `Guardado: ${dur(row.seconds)} de lectura`);
        await q(sb.from('reading_timer').delete().match({ user_id: uid }));
        S.reading.unshift(saved); S.timer = null; renderLectura(); headerStats();
      }
      else if (d.cancelTimer !== undefined) {
        if (!confirm('¿Descartar esta lectura sin guardar el tiempo?')) return;
        await q(sb.from('reading_timer').delete().match({ user_id: uid })); S.timer = null; renderLectura();
      }
      else if (d.addReading !== undefined) {
        const min = Number($('#mn-min').value), date = $('#mn-date').value;
        if (!date || !(min >= 1 && min <= 600)) return toast('Poné fecha y minutos (1 a 600)');
        const row = { user_id: uid, started_at: new Date(parse(date).setHours(12)).toISOString(), seconds: Math.round(min * 60), kind: $('#mn-kind').value, title: $('#mn-title').value.trim() || null };
        const [saved] = await q(sb.from('reading_sessions').insert(row).select(), 'Lectura guardada');
        S.reading.push(saved); S.reading.sort((a, b) => b.started_at.localeCompare(a.started_at)); renderLectura();
      }
      else if (d.delReading) {
        if (!confirm('¿Borrar esta lectura del historial?')) return;
        await q(sb.from('reading_sessions').delete().match({ id: Number(d.delReading), user_id: uid }));
        S.reading = S.reading.filter((r) => String(r.id) !== d.delReading); renderLectura();
      }
      else if (d.importLocal !== undefined) await importLocal();
      else if (d.skipImport !== undefined) { localStorage.setItem('pya-plan-imported', '1'); renderHoy(); }
    } catch (e) { /* q() ya avisó */ }
  });

  document.addEventListener('change', async (ev) => {
    const t = ev.target;
    if (!uid) return;
    try {
      if (t.dataset.task) {
        const [scope, id] = t.dataset.task.split(':');
        const day = (S.tasks[viewDate] ||= { en: {}, it: {} });
        if (t.checked) { day[scope][id] = true; renderHoy(); await q(sb.from('day_tasks').upsert({ user_id: uid, day: viewDate, scope, task_id: id })); }
        else { delete day[scope][id]; renderHoy(); await q(sb.from('day_tasks').delete().match({ user_id: uid, day: viewDate, scope, task_id: id })); }
      } else if (t.dataset.short !== undefined) {
        S.flags[viewDate] = t.checked; renderHoy();
        await q(sb.from('day_flags').upsert({ user_id: uid, day: viewDate, short_day: t.checked }));
      } else if (t.dataset.itw) {
        const [n, k] = t.dataset.itw.split(':');
        const row = { study: false, practice: false, deliverable: false, link: null, ...(S.itWeeks[n] || {}), user_id: uid, week: Number(n), [k]: t.checked, updated_at: new Date().toISOString() };
        S.itWeeks[n] = row; renderIT();
        await q(sb.from('it_week_progress').upsert(row));
      } else if (t.dataset.itlink) {
        const n = t.dataset.itlink;
        const row = { study: false, practice: false, deliverable: false, ...(S.itWeeks[n] || {}), user_id: uid, week: Number(n), link: t.value.trim() || null, updated_at: new Date().toISOString() };
        S.itWeeks[n] = row; await q(sb.from('it_week_progress').upsert(row), 'Link guardado');
      }
    } catch (e) { /* q() ya avisó */ }
  });

  document.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (ev.target.id === 'runform') runSubmit();
    else if (ev.target.id === 'authform') authAction(false);
  });

  // ---------- Autenticación ----------
  let sessionEmail = '';
  let authBusy = false;
  function authMsg(text, kind) { const m = $('#auth-msg'); m.className = 'authmsg ' + (kind || ''); m.innerHTML = text; }
  async function authAction(signup) {
    if (authBusy) return;   // evita el doble envío (el error de "Database error saving new user")
    const email = $('#auth-email').value.trim(), password = $('#auth-pass').value;
    if (!/^\S+@\S+\.\S+$/.test(email)) return authMsg('Poné un email válido.', 'bad');
    if (password.length < 8) return authMsg('La contraseña tiene que tener al menos 8 caracteres.', 'bad');
    authBusy = true;
    document.querySelectorAll('#authform button').forEach((b) => { b.disabled = true; });
    authMsg(signup ? 'Creando tu cuenta...' : 'Entrando...');
    try {
      const { data, error } = signup
        ? await sb.auth.signUp({ email, password, options: { emailRedirectTo: location.origin } })
        : await sb.auth.signInWithPassword({ email, password });
      if (error) {
        const m = error.message || '';
        if (/not confirmed/i.test(m)) authMsg('Falta confirmar tu email. Revisá tu casilla (y spam). <button type="button" class="linkbtn" data-resend>Reenviar mail</button>', 'bad');
        else if (/invalid login/i.test(m)) authMsg('Email o contraseña incorrectos.', 'bad');
        else if (/already registered|already exists|saving new user/i.test(m)) authMsg('Ya hay una cuenta con ese email. Tocá <b>Entrar</b>.', 'bad');
        else if (/rate limit|too many/i.test(m)) authMsg('Demasiados intentos seguidos. Esperá un minuto y probá de nuevo.', 'bad');
        else authMsg('No se pudo: ' + esc(m), 'bad');
      } else if (signup && !data.session) {
        authMsg('¡Cuenta creada! Te mandamos un mail para confirmarla. Abrí el link y después entrá acá con tu email y contraseña. <button type="button" class="linkbtn" data-resend>Reenviar mail</button>', 'ok');
      }
    } catch (e) { authMsg('Sin conexión. Revisá internet y probá de nuevo.', 'bad'); }
    finally { authBusy = false; document.querySelectorAll('#authform button').forEach((b) => { b.disabled = false; }); }
  }
  async function resendConfirm() {
    const email = $('#auth-email').value.trim();
    if (!email) return authMsg('Poné tu email arriba.', 'bad');
    const { error } = await sb.auth.resend({ type: 'signup', email, options: { emailRedirectTo: location.origin } });
    authMsg(error ? 'No se pudo reenviar: ' + esc(error.message) : 'Listo, te reenviamos el mail.', error ? 'bad' : 'ok');
  }
  function showAuth() {
    uid = null; S = null; run = null; seenLevel = null; seenBadges = null; clearInterval(tick);
    const h = $('#hstats'); if (h) h.innerHTML = '';
    document.body.classList.add('auth');
    $('#v-auth').hidden = false;
    document.querySelectorAll('.view:not(#v-auth)').forEach((x) => { x.hidden = true; });
  }
  async function showApp(session) {
    uid = session.user.id; sessionEmail = session.user.email || '';
    document.body.classList.remove('auth');
    $('#v-auth').hidden = true;
    $('#v-hoy').hidden = false; $('#v-hoy').innerHTML = '<div class="card"><p>Cargando tu progreso...</p></div>';
    try { await loadAll(); go(current); }
    catch (e) { console.error(e); $('#v-hoy').innerHTML = '<div class="card alert">No se pudo cargar tu progreso. Revisá la conexión y recargá la página.</div>'; }
  }

  let lastUid = null;
  sb.auth.onAuthStateChange((event, session) => {
    if (session && session.user.id !== lastUid) { lastUid = session.user.id; setTimeout(() => showApp(session), 0); }
    else if (!session) { lastUid = null; showAuth(); }
  });
})();
