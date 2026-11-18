// Lecciones de inglés. Cada evaluación: {q, a:[respuestas aceptadas]} para completar, o {q, o:[opciones], c:índice} para opción múltiple.
window.CONTENT_EN = {
  'to-be': {
    title: 'Verbo to be (am / is / are)', phase: 1,
    html: `
<h3>Qué es</h3>
<p>En inglés "ser" y "estar" son el mismo verbo: <b>to be</b>. <i>I am tired</i> (estoy cansado) e <i>I am Argentinian</i> (soy argentino) usan el mismo <b>am</b>. Es el verbo más usado del idioma: si lo dominás, ya podés presentarte, describir y contar cómo estás.</p>
<h3>Las formas</h3>
<table><tr><th>Persona</th><th>Afirmativo</th><th>Contracción</th><th>Negativo</th></tr>
<tr><td>I</td><td>I am</td><td>I'm</td><td>I'm not</td></tr>
<tr><td>you / we / they</td><td>you are</td><td>you're, we're, they're</td><td>aren't</td></tr>
<tr><td>he / she / it</td><td>she is</td><td>he's, she's, it's</td><td>isn't</td></tr></table>
<p>Las contracciones son lo normal al hablar. <i>I am</i> sin contraer suena formal o enfático.</p>
<h3>Preguntas y respuestas cortas</h3>
<p>Para preguntar, el verbo va <b>antes</b> del sujeto: <i>You are ready → Are you ready?</i> Respuestas cortas: <i>Yes, I am. / No, I'm not. / Yes, she is. / No, they aren't.</i> En la respuesta corta afirmativa no se contrae: <i>Yes, I am</i> (nunca <i>Yes, I'm</i>).</p>
<h3>Usos que te van a servir</h3>
<ul><li>Edad: <i>I'm 20 (years old)</i>. En inglés la edad se "es", no se "tiene": nunca <i>I have 20 years</i>.</li>
<li>Lugar: <i>I'm at work. The router is in the living room.</i></li>
<li>Estados: <i>I'm hungry, I'm cold, I'm in a hurry</i> (en castellano "tengo hambre, tengo frío, tengo apuro").</li>
<li><b>There is / there are</b> = "hay": <i>There is a problem. There are two tickets.</i></li></ul>
<h3>Errores típicos de hispanohablantes</h3>
<ul><li>Omitir el verbo: <i>She very busy</i> → <b>She is very busy</b>.</li>
<li>Omitir el sujeto: <i>Is late</i> → <b>It is late</b>. En inglés siempre va sujeto.</li>
<li>Usar "have" para edad o estados: <i>I have hungry</i> → <b>I am hungry</b>.</li></ul>
<h3>En el call center</h3>
<p><i>Hi, my name is Alex. I'm here to help. Is this a good time? Your account is active.</i></p>`,
    quiz: [
      { q: 'I ___ from Argentina.', a: ['am', "'m"] },
      { q: 'My sister ___ 15 years old.', a: ['is'] },
      { q: '___ you tired?', a: ['are'] },
      { q: 'They ___ (negativo) at home now.', a: ["aren't", 'are not'] },
      { q: '¿Cómo se dice "tengo 20 años"?', o: ['I have 20 years', 'I am 20 years old', 'I have 20 years old', 'I is 20'], c: 1 },
      { q: '¿Cuál es la respuesta corta correcta a "Are you ready?"', o: ["Yes, I'm.", 'Yes, I am.', 'Yes, I ready.', 'Yes, am.'], c: 1 },
      { q: '"Hay dos tickets abiertos" →', o: ['It has two open tickets.', 'There is two open tickets.', 'There are two open tickets.', 'Are two open tickets.'], c: 2 },
      { q: 'Corregí: "Is very cold today." → ___ very cold today.', a: ["it's", 'it is'] }
    ]
  },
  'pronouns': {
    title: 'Pronombres y posesivos', phase: 1,
    html: `
<h3>Qué son</h3>
<p>Los pronombres reemplazan a un nombre para no repetirlo. En inglés cambian según la función en la oración, y eso es lo que más confunde al principio.</p>
<table><tr><th>Sujeto</th><th>Objeto</th><th>Adjetivo posesivo</th><th>Pronombre posesivo</th></tr>
<tr><td>I</td><td>me</td><td>my</td><td>mine</td></tr><tr><td>you</td><td>you</td><td>your</td><td>yours</td></tr>
<tr><td>he</td><td>him</td><td>his</td><td>his</td></tr><tr><td>she</td><td>her</td><td>her</td><td>hers</td></tr>
<tr><td>it</td><td>it</td><td>its</td><td>—</td></tr><tr><td>we</td><td>us</td><td>our</td><td>ours</td></tr>
<tr><td>they</td><td>them</td><td>their</td><td>theirs</td></tr></table>
<h3>Cómo elegir</h3>
<ul><li><b>Sujeto</b>: hace la acción, va antes del verbo. <i><b>She</b> calls every day.</i></li>
<li><b>Objeto</b>: recibe la acción, va después del verbo o de una preposición. <i>Call <b>her</b>. Talk to <b>them</b>. Help <b>us</b>.</i></li>
<li><b>Adjetivo posesivo</b>: va antes de un sustantivo. <i><b>Her</b> phone. <b>Our</b> office.</i></li>
<li><b>Pronombre posesivo</b>: va solo, reemplaza "posesivo + sustantivo". <i>This phone is <b>mine</b>.</i></li></ul>
<h3>Trampas</h3>
<ul><li><b>his / her</b> concuerdan con el dueño, no con la cosa: "su auto" (de ella) = <i>her car</i>, aunque "car" no tenga género.</li>
<li><b>its</b> (de eso) no lleva apóstrofo. <b>it's</b> = it is. <i>The router lost its connection. It's broken.</i></li>
<li><b>their / there / they're</b> suenan igual: posesivo / "allí" o "hay" / they are.</li>
<li>Posesivo de nombres: <b>'s</b> → <i>Paula's phone, the customer's account.</i></li></ul>
<h3>En el call center</h3>
<p><i>Could you give me <b>your</b> account number? I'll send <b>you</b> an email. <b>Their</b> internet is down. Let <b>me</b> check.</i></p>`,
    quiz: [
      { q: 'This is ___ phone. (yo)', a: ['my'] },
      { q: 'Call ___ tomorrow. (ella)', a: ['her'] },
      { q: 'Can you help ___? (nosotros)', a: ['us'] },
      { q: 'The book is ___. (de él, va solo)', a: ['his'] },
      { q: '"Su auto" (de María) →', o: ['his car', 'her car', 'its car', 'hers car'], c: 1 },
      { q: 'The router lost ___ connection.', o: ["it's", 'its', 'their', 'his'], c: 1 },
      { q: 'This phone isn\'t yours, it\'s ___. (de mí)', a: ['mine'] },
      { q: '___ internet is down. (de ellos)', o: ['There', "They're", 'Their', 'Them'], c: 2 }
    ]
  },
  'present-simple': {
    title: 'Presente simple', phase: 1,
    html: `
<h3>Para qué sirve</h3>
<ul><li>Rutinas y hábitos: <i>I work six hours a day.</i></li><li>Verdades generales: <i>Water boils at 100°C.</i></li>
<li>Gustos y estados: <i>I like series. She knows the answer.</i></li><li>Horarios fijos: <i>The train leaves at 7.</i></li></ul>
<h3>La regla de la -s</h3>
<p>Con <b>he / she / it</b> el verbo lleva -s. Es el error número uno de los hispanohablantes.</p>
<ul><li>General: work → works, call → calls.</li><li>Terminados en -s, -sh, -ch, -x, -o: <b>-es</b> → watches, fixes, goes, does.</li>
<li>Consonante + y: <b>-ies</b> → study → studies. Vocal + y: solo -s → play → plays.</li><li>Irregular: have → <b>has</b>.</li></ul>
<h3>Negativo y preguntas</h3>
<p>Se usa el auxiliar <b>do / does</b>. Cuando aparece <b>does</b>, la -s se va del verbo principal.</p>
<ul><li><i>I <b>don't</b> work on Sundays. She <b>doesn't</b> work on Sundays</i> (no <i>doesn't works</i>).</li>
<li><i><b>Do</b> you speak English? <b>Does</b> he live here?</i></li><li>Respuestas cortas: <i>Yes, I do. / No, she doesn't.</i></li></ul>
<h3>Adverbios de frecuencia</h3>
<p>always (siempre) · usually (normalmente) · often (seguido) · sometimes (a veces) · rarely (casi nunca) · never (nunca). Van <b>antes</b> del verbo principal pero <b>después</b> de to be: <i>I <b>usually</b> take the train. I'm <b>always</b> tired on Mondays.</i></p>
<h3>Errores típicos</h3>
<ul><li><i>She work</i> → <b>She works</b>.</li><li><i>He don't like</i> → <b>He doesn't like</b>.</li><li><i>Does she works?</i> → <b>Does she work?</b></li></ul>`,
    quiz: [
      { q: 'She ___ (work) in a call center.', a: ['works'] },
      { q: 'He ___ (watch) series every night.', a: ['watches'] },
      { q: 'My brother ___ (study) English.', a: ['studies'] },
      { q: 'I ___ (not like) coffee.', a: ["don't like", 'do not like'] },
      { q: '___ she speak English?', a: ['does'] },
      { q: '¿Cuál es correcta?', o: ['She doesn\'t works here.', 'She don\'t work here.', 'She doesn\'t work here.', 'She not work here.'], c: 2 },
      { q: '¿Dónde va "usually"? I ___ take the train.', o: ['I take usually the train.', 'I usually take the train.', 'Usually I the train take.', 'I take the train usually always.'], c: 1 },
      { q: 'She ___ (have) two jobs.', a: ['has'] }
    ]
  },
  'questions': {
    title: 'Preguntas (do/does + wh-)', phase: 1,
    html: `
<h3>La estructura</h3>
<p><b>Palabra wh- + auxiliar + sujeto + verbo + resto</b>. <i>Where <b>do</b> you work? What time <b>does</b> she start?</i></p>
<p>Con <b>to be</b> no hay auxiliar: se invierte el verbo. <i>Where <b>are</b> you? How old <b>is</b> he?</i></p>
<h3>Las palabras de pregunta</h3>
<table><tr><th>Inglés</th><th>Significado</th><th>Ejemplo</th></tr>
<tr><td>What</td><td>qué / cuál</td><td>What's your name?</td></tr><tr><td>Where</td><td>dónde</td><td>Where do you live?</td></tr>
<tr><td>When</td><td>cuándo</td><td>When does it start?</td></tr><tr><td>Why</td><td>por qué</td><td>Why do you study English?</td></tr>
<tr><td>Who</td><td>quién</td><td>Who is your manager?</td></tr><tr><td>Which</td><td>cuál (entre opciones)</td><td>Which plan do you have?</td></tr>
<tr><td>How</td><td>cómo</td><td>How do you get to work?</td></tr><tr><td>How much / many</td><td>cuánto / cuántos</td><td>How much is it? How many devices?</td></tr>
<tr><td>How long</td><td>cuánto tiempo</td><td>How long does it take?</td></tr><tr><td>What time</td><td>a qué hora</td><td>What time do you finish?</td></tr></table>
<h3>Preguntas de sujeto</h3>
<p>Cuando <b>who</b> o <b>what</b> son el sujeto, no se usa do/does: <i>Who <b>calls</b> you every day?</i> (no <i>Who does call you</i>). <i>What happens next?</i></p>
<h3>Errores típicos</h3>
<ul><li>Olvidar el auxiliar: <i>Where you live?</i> → <b>Where do you live?</b></li><li>Dejar la -s: <i>Where does she lives?</i> → <b>Where does she live?</b></li>
<li>Traducir "¿cómo es?" con how: para describir algo se usa <b>What is it like?</b></li></ul>
<h3>En el call center</h3>
<p><i>How can I help you? What seems to be the problem? When did it start? Which device are you using? How long have you had this issue?</i></p>`,
    quiz: [
      { q: '___ do you live? (dónde)', a: ['where'] },
      { q: 'What time ___ you start work?', a: ['do'] },
      { q: 'How ___ he go to work?', a: ['does'] },
      { q: '___ old are you?', a: ['how'] },
      { q: '___ much is the plan? (cuánto)', a: ['how'] },
      { q: '¿Cuál es correcta?', o: ['Where she works?', 'Where does she works?', 'Where does she work?', 'Where do she work?'], c: 2 },
      { q: 'Pregunta de sujeto: "¿Quién te llama?"', o: ['Who does call you?', 'Who calls you?', 'Who do call you?', 'Who you call?'], c: 1 },
      { q: '"¿Cómo es tu trabajo?" (descripción)', o: ['How is your job like?', 'What is your job like?', 'How your job is?', 'What your job is?'], c: 1 }
    ]
  },
  'present-continuous': {
    title: 'Presente continuo', phase: 1,
    html: `
<h3>Forma</h3>
<p><b>am / is / are + verbo-ing</b>. <i>I'm studying. She's talking. They aren't working. Are you listening?</i></p>
<h3>Reglas del -ing</h3>
<ul><li>General: work → working.</li><li>Terminado en -e muda: se va la e → make → making, take → taking.</li>
<li>Una sílaba consonante-vocal-consonante: se duplica → stop → stopping, run → running, sit → sitting.</li><li>-ie → -ying: lie → lying, die → dying.</li></ul>
<h3>Usos</h3>
<ul><li>Lo que pasa <b>ahora</b>: <i>I'm checking your account right now.</i></li>
<li>Algo temporal: <i>I'm working at a call center this year.</i></li>
<li>Planes ya arreglados: <i>I'm meeting my manager tomorrow.</i></li></ul>
<h3>Presente simple vs. continuo</h3>
<table><tr><th>Simple</th><th>Continuo</th></tr><tr><td>Rutina: <i>I usually take the train.</i></td><td>Ahora: <i>I'm taking the bus today.</i></td></tr>
<tr><td>Permanente: <i>She lives in Glew.</i></td><td>Temporal: <i>She's living with a friend this month.</i></td></tr></table>
<h3>Verbos de estado</h3>
<p>Algunos verbos describen estados y casi nunca van en -ing: <b>like, love, hate, want, need, know, understand, believe, remember, own, belong, seem</b>. Se dice <i>I understand</i>, no <i>I'm understanding</i>; <i>I need help</i>, no <i>I'm needing help</i>.</p>
<h3>En el call center</h3>
<p><i>I'm transferring your call. The system is updating. Are you seeing an error message? I'm sending you the link now.</i></p>`,
    quiz: [
      { q: 'I ___ (study) right now.', a: ['am studying', "'m studying"] },
      { q: 'She ___ (talk) on the phone.', a: ['is talking', "'s talking"] },
      { q: 'They ___ (not watch) TV.', a: ["aren't watching", 'are not watching'] },
      { q: 'He ___ (run) to the station.', a: ['is running', "'s running"] },
      { q: 'We ___ (make) dinner.', a: ['are making', "'re making"] },
      { q: '¿Cuál es correcta?', o: ["I'm understanding the problem.", 'I understand the problem.', 'I am understand the problem.', 'I understanding the problem.'], c: 1 },
      { q: 'Rutina vs. ahora: "Normalmente tomo el tren, pero hoy ___ el colectivo."', o: ['I take', "I'm taking", 'I takes', 'I am take'], c: 1 },
      { q: '"Estoy transfiriendo tu llamada" →', o: ['I transfer your call.', "I'm transferring your call.", 'I transferring your call.', 'I am transfer your call.'], c: 1 }
    ]
  },
  'past-simple': {
    title: 'Pasado simple', phase: 1,
    html: `
<h3>Para qué sirve</h3>
<p>Acciones terminadas en un momento del pasado: <i>I worked yesterday. She called two hours ago. We met in 2024.</i></p>
<h3>Verbos regulares: -ed</h3>
<ul><li>work → worked, call → called.</li><li>Terminado en e: solo -d → live → lived.</li><li>Consonante + y → -ied: study → studied, try → tried.</li><li>CVC de una sílaba: duplica → stop → stopped, plan → planned.</li></ul>
<p>Pronunciación de -ed: /t/ después de sonidos sordos (worked, fixed), /d/ en general (called, played), /id/ después de t o d (wanted, needed).</p>
<h3>Irregulares que más vas a usar</h3>
<p>be → was/were · go → went · have → had · do → did · make → made · get → got · say → said · see → saw · take → took · come → came · know → knew · think → thought · buy → bought · tell → told · give → gave · find → found · send → sent · pay → paid · leave → left · lose → lost.</p>
<p>Truco: estudiá 5 por día en Anki con oración de ejemplo, no la lista suelta.</p>
<h3>Negativo y preguntas: did</h3>
<p>Con <b>did / didn't</b> el verbo vuelve a la forma base: <i>I <b>didn't go</b></i> (no <i>didn't went</i>). <i><b>Did</b> you <b>call</b>?</i> Respuesta corta: <i>Yes, I did. / No, I didn't.</i></p>
<h3>To be en pasado</h3>
<p><b>was</b> (I, he, she, it) · <b>were</b> (you, we, they). Sin did: <i>Was it working? I wasn't at home.</i></p>
<h3>Marcadores de tiempo</h3>
<p>yesterday · last week / last month · two days ago · in 2025 · when I was a kid.</p>
<h3>En el call center</h3>
<p><i>When did the problem start? Did you restart the router? I sent you an email yesterday. You were charged twice last month.</i></p>`,
    quiz: [
      { q: 'I ___ (work) yesterday.', a: ['worked'] },
      { q: 'She ___ (go) to the beach.', a: ['went'] },
      { q: 'They ___ (study) a lot.', a: ['studied'] },
      { q: 'We ___ (not see) the movie.', a: ["didn't see", 'did not see'] },
      { q: '___ you call the client?', a: ['did'] },
      { q: '¿Cuál es correcta?', o: ["I didn't went to work.", "I didn't go to work.", "I don't went to work.", 'I not went to work.'], c: 1 },
      { q: 'Pasado de "buy":', o: ['buyed', 'bought', 'brought', 'buied'], c: 1 },
      { q: 'I ___ at home yesterday. (to be, negativo)', a: ["wasn't", 'was not'] }
    ]
  },
  'present-perfect': {
    title: 'Present perfect', phase: 2,
    html: `
<h3>Forma</h3>
<p><b>have / has + participio</b>. <i>I have (I've) finished. She has (she's) called. They haven't arrived.</i> El participio de los regulares es igual al pasado (worked); los irregulares tienen tercera forma: go-went-<b>gone</b>, see-saw-<b>seen</b>, do-did-<b>done</b>, be-was-<b>been</b>, write-wrote-<b>written</b>, take-took-<b>taken</b>.</p>
<h3>Los 3 usos</h3>
<ul><li><b>Experiencia</b> sin decir cuándo: <i>I've been to Brazil. Have you ever worked in sales?</i></li>
<li><b>Algo que empezó antes y sigue</b>: <i>I've worked here <b>for</b> two months / <b>since</b> December.</i></li>
<li><b>Resultado que importa ahora</b>: <i>I've lost my password</i> (y ahora no puedo entrar).</li></ul>
<h3>For vs. since</h3>
<p><b>for</b> + duración (for two years, for a week). <b>since</b> + punto de inicio (since 2025, since Monday, since I was 18).</p>
<h3>Palabras que lo acompañan</h3>
<p>ever (alguna vez) · never (nunca) · already (ya) · yet (todavía, en negativas y preguntas) · just (recién) · so far (hasta ahora). <i>Have you restarted it yet? I've just sent it. I've already checked.</i></p>
<h3>Present perfect vs. pasado simple</h3>
<p>Si decís <b>cuándo</b> (yesterday, in 2023, last week, ago), va pasado simple. <i>I've been to Brazil</i> pero <i>I went to Brazil <b>in 2023</b></i>. Nunca <i>I have seen him yesterday</i>.</p>
<h3>Error típico</h3>
<p>Traducir "hace 2 años que trabajo acá" con presente: <i>I work here for two years</i> → <b>I've worked / I've been working here for two years</b>.</p>`,
    quiz: [
      { q: 'I ___ (finish) my homework.', a: ['have finished', "'ve finished"] },
      { q: 'She ___ (never be) to London.', a: ['has never been', "'s never been"] },
      { q: '___ you ever eaten sushi?', a: ['have'] },
      { q: 'He has worked here ___ 2025.', a: ['since'] },
      { q: 'I have studied English ___ six months.', a: ['for'] },
      { q: '¿Cuál es correcta?', o: ['I have seen him yesterday.', 'I saw him yesterday.', 'I have saw him yesterday.', 'I seen him yesterday.'], c: 1 },
      { q: '"Hace dos años que vivo acá" →', o: ['I live here for two years.', "I've lived here for two years.", 'I lived here since two years.', "I'm living here since two years."], c: 1 },
      { q: 'Have you restarted the router ___? (todavía)', a: ['yet'] }
    ]
  },
  'future': {
    title: 'Futuro: will / going to', phase: 2,
    html: `
<h3>Going to</h3>
<p><b>am/is/are + going to + verbo</b>. Para <b>planes ya decididos</b> y <b>predicciones con evidencia</b>.</p>
<ul><li><i>I'm going to study tonight</i> (ya lo decidí).</li><li><i>Look at those clouds. It's going to rain</i> (lo estoy viendo).</li></ul>
<h3>Will</h3>
<p><b>will + verbo</b> (contracción 'll, negativo won't). Para:</p>
<ul><li>Decisiones en el momento: <i>The phone is ringing. I'll get it.</i></li><li>Promesas y ofrecimientos: <i>I'll call you back in ten minutes. I'll help you.</i></li>
<li>Predicciones de opinión: <i>I think it will work.</i></li><li>Pedidos: <i>Will you send me the file?</i></li></ul>
<h3>Presente continuo para el futuro</h3>
<p>Para citas y arreglos con hora y lugar: <i>I'm meeting the recruiter on Friday.</i></p>
<h3>Cómo elegir rápido</h3>
<table><tr><th>Situación</th><th>Forma</th></tr><tr><td>Lo decido ahora</td><td>will</td></tr><tr><td>Ya lo tenía decidido</td><td>going to</td></tr><tr><td>Lo veo venir</td><td>going to</td></tr><tr><td>Prometo / ofrezco</td><td>will</td></tr><tr><td>Cita agendada</td><td>presente continuo</td></tr></table>
<h3>En el call center</h3>
<p>Vas a usar <b>I'll</b> todo el tiempo: <i>I'll check that for you. I'll transfer you to billing. A technician will contact you within 24 hours. It won't take long.</i></p>
<h3>Error típico</h3>
<p>Usar presente simple para ofrecer: <i>I help you</i> → <b>I'll help you</b>.</p>`,
    quiz: [
      { q: 'Look at the clouds! It ___ rain.', a: ['is going to', "'s going to"] },
      { q: "Don't worry, I ___ help you. (promesa)", a: ['will', "'ll"] },
      { q: 'We ___ visit my aunt tomorrow. (ya lo planeamos)', a: ['are going to', "'re going to"] },
      { q: 'It ___ take long. (negativo de will)', a: ["won't", 'will not'] },
      { q: 'Suena el teléfono y decidís atender:', o: ["I'm going to get it.", "I'll get it.", 'I get it.', 'I going to get it.'], c: 1 },
      { q: 'Un técnico ___ contact you within 24 hours.', o: ['is', 'will', 'going', 'does'], c: 1 },
      { q: 'Cita agendada con el reclutador el viernes:', o: ['I meet the recruiter on Friday.', "I'm meeting the recruiter on Friday.", 'I will to meet the recruiter.', 'I meeting the recruiter.'], c: 1 },
      { q: '"Te ofrezco ayuda" →', o: ['I help you.', "I'll help you.", 'I helping you.', 'I am help you.'], c: 1 }
    ]
  },
  'conditionals-01': {
    title: 'Condicionales 0 y 1', phase: 2,
    html: `
<h3>Condicional cero: siempre pasa</h3>
<p><b>If + presente, presente</b>. Verdades generales y reglas. <i>If you heat ice, it melts. If the light is red, the modem has no signal.</i> Acá <b>if</b> se puede cambiar por <b>when</b> sin cambiar el sentido.</p>
<h3>Primer condicional: posible en el futuro</h3>
<p><b>If + presente, will + verbo</b>. <i>If it rains, I'll stay home. If you restart the router, it will probably work.</i></p>
<h3>La regla de oro</h3>
<p>Después de <b>if</b> nunca va <b>will</b>, aunque hables del futuro: <i>If he <b>calls</b>, I'll tell him</i> (no <i>If he will call</i>). Lo mismo con <b>when, as soon as, unless, before, after</b>: <i>I'll call you <b>as soon as</b> I <b>finish</b>.</i></p>
<h3>Unless</h3>
<p><b>unless</b> = "a menos que" = if ... not. <i>I won't go unless you come = I won't go if you don't come.</i></p>
<h3>Orden y coma</h3>
<p>Podés empezar por cualquiera de las dos partes. Si empieza con <b>if</b>, lleva coma: <i>If you need help, call me. / Call me if you need help.</i></p>
<h3>En el call center</h3>
<p><i>If the problem continues, we'll send a technician. If you don't receive the email, check your spam folder. Unless you cancel, the plan renews automatically.</i></p>`,
    quiz: [
      { q: 'If you heat water to 100°C, it ___. (boil)', a: ['boils'] },
      { q: 'If it rains, I ___ stay home.', a: ['will', "'ll"] },
      { q: 'If you ___ (study) every day, you will improve.', a: ['study'] },
      { q: 'If she calls, I ___ (tell) her.', a: ['will tell', "'ll tell"] },
      { q: '¿Cuál es correcta?', o: ['If he will call, I will answer.', 'If he calls, I will answer.', 'If he call, I answer will.', 'If he will calls, I answer.'], c: 1 },
      { q: "I'll call you as soon as I ___. (terminar)", o: ['will finish', 'finish', 'finished', 'finishing'], c: 1 },
      { q: '"No voy a menos que vengas" →', o: ["I won't go unless you come.", "I won't go unless you don't come.", "I don't go unless you will come.", 'I go unless you come.'], c: 0 },
      { q: "If you don't receive the email, ___ your spam folder.", o: ['checks', 'check', 'will checking', 'checked'], c: 1 }
    ]
  },
  'comparatives': {
    title: 'Comparativos y superlativos', phase: 2,
    html: `
<h3>Adjetivos cortos (1 sílaba, o 2 terminadas en -y)</h3>
<ul><li>Comparativo <b>-er than</b>, superlativo <b>the -est</b>: fast → faster → the fastest.</li><li>Terminados en e: nice → nicer → the nicest.</li>
<li>CVC: big → bigger → the biggest.</li><li>-y → -ier / -iest: easy → easier → the easiest, busy → busier.</li></ul>
<h3>Adjetivos largos (2+ sílabas)</h3>
<p><b>more ... than / the most</b>: expensive → more expensive → the most expensive. Lo mismo con <b>less / the least</b>.</p>
<h3>Irregulares</h3>
<p>good → better → the best · bad → worse → the worst · far → further → the furthest · much/many → more → the most · little → less → the least.</p>
<h3>Igualdad</h3>
<p><b>as ... as</b>: <i>This plan is as fast as the other one. It isn't as cheap as I thought.</i></p>
<h3>Errores típicos</h3>
<ul><li>Doble comparativo: <i>more faster</i> → <b>faster</b>.</li><li><i>than</i> vs <i>that</i>: <i>bigger <b>than</b></i>, nunca <i>bigger that</i>.</li><li>Olvidar <b>the</b> en el superlativo: <i>She is best</i> → <b>She is the best</b>.</li></ul>
<h3>En el call center</h3>
<p><i>The fiber plan is faster and more stable than your current one. This is the cheapest option. The new router isn't as expensive as you think.</i></p>`,
    quiz: [
      { q: 'The train is ___ (fast) than the bus.', a: ['faster'] },
      { q: 'This is the ___ (good) day of my life.', a: ['best'] },
      { q: 'English is ___ (easy) than Chinese.', a: ['easier'] },
      { q: 'This phone is ___ (expensive) than mine.', a: ['more expensive'] },
      { q: 'Today is ___ (bad) than yesterday.', a: ['worse'] },
      { q: '¿Cuál es correcta?', o: ['This plan is more faster.', 'This plan is faster that the other.', 'This plan is faster than the other.', 'This plan is fastest than the other.'], c: 2 },
      { q: '"No es tan barato como pensaba" →', o: ["It isn't as cheap as I thought.", "It isn't cheaper as I thought.", "It isn't so cheap than I thought.", "It isn't as cheap than I thought."], c: 0 },
      { q: 'He is the ___ (tall) in the class.', a: ['tallest'] }
    ]
  },
  'review-2': {
    title: 'Repaso de la fase 2', phase: 2,
    html: `
<h3>Cómo usar este repaso</h3>
<p>Mezclar temas (práctica intercalada) obliga a tu cabeza a <b>elegir</b> qué estructura usar, que es lo que pasa en una charla real. Antes de responder cada pregunta, decí en voz alta qué tema es y por qué.</p>
<h3>Resumen de la fase</h3>
<ul><li><b>Present perfect</b>: have/has + participio. Experiencia, algo que sigue, resultado. Con fecha → pasado simple.</li>
<li><b>Futuro</b>: will (decido ahora, prometo), going to (plan, evidencia), presente continuo (cita).</li>
<li><b>Condicionales</b>: 0 = siempre pasa (presente + presente). 1 = posible (if + presente, will). Nunca will después de if.</li>
<li><b>Comparativos</b>: -er / more, the -est / the most, as ... as, irregulares good-better-best.</li></ul>
<p>Si errás una, volvé a esa lección y rehacé su evaluación.</p>`,
    quiz: [
      { q: 'I ___ (live) here since 2020.', a: ['have lived', "'ve lived"] },
      { q: 'If you need help, I ___ help you.', a: ['will', "'ll"] },
      { q: 'She is ___ (old) than me.', a: ['older'] },
      { q: 'We ___ travel next month. We bought the tickets.', a: ['are going to', "'re going to"] },
      { q: '___ you ever been to Brazil?', a: ['have'] },
      { q: 'If you mix red and blue, you ___ (get) purple.', a: ['get'] },
      { q: '¿Cuál es correcta?', o: ['I have called him two hours ago.', 'I called him two hours ago.', 'I have call him two hours ago.', 'I am calling him two hours ago.'], c: 1 },
      { q: '¿Cuál es correcta?', o: ['If it will rain, we stay.', 'If it rains, we will stay.', 'If it rain, we will stay.', 'If it rains, we staying.'], c: 1 }
    ]
  },
  'conditional-2': {
    title: 'Segundo condicional', phase: 3,
    html: `
<h3>Para qué sirve</h3>
<p>Situaciones <b>imaginarias, hipotéticas o poco probables</b> en el presente o futuro, y consejos.</p>
<h3>Forma</h3>
<p><b>If + pasado simple, would + verbo</b>. <i>If I had more time, I would study more. If I won the lottery, I'd travel.</i></p>
<p>Ojo: el verbo va en pasado pero <b>no habla del pasado</b>. <i>If I had a car</i> = "si tuviera auto" (ahora).</p>
<h3>Were para todos</h3>
<p>Con to be, lo correcto en inglés estándar es <b>were</b> para todas las personas: <i>If I were you, I'd accept the job. If she were here, she'd help.</i> "If I was" se escucha en lo informal, pero en una entrevista usá <b>were</b>.</p>
<h3>Could y might</h3>
<p>En lugar de would podés usar <b>could</b> (podría) o <b>might</b> (quizás): <i>If I spoke better English, I could work in a bilingual call center.</i></p>
<h3>1.° vs. 2.° condicional</h3>
<p><i>If I get the job, I'll move</i> (lo veo posible). <i>If I got the job, I'd move</i> (lo veo poco probable). La diferencia es cuán real lo ves.</p>
<h3>Usos en el trabajo</h3>
<p>Pedidos muy educados: <i>Would you mind holding for a moment? I would appreciate it if you could send a screenshot. It would help if you restarted the device.</i></p>`,
    quiz: [
      { q: 'If I ___ (have) more money, I would travel.', a: ['had'] },
      { q: 'If she studied, she ___ pass.', a: ['would', "'d"] },
      { q: 'If I ___ (be) you, I would call him.', a: ['were'] },
      { q: 'If they lived closer, we ___ (see) them more.', a: ['would see', "'d see"] },
      { q: 'What ___ you do if you won the lottery?', a: ['would'] },
      { q: '¿Qué significa "If I had a car"?', o: ['Si tuve un auto', 'Si tuviera un auto (ahora)', 'Si voy a tener un auto', 'Si tengo un auto'], c: 1 },
      { q: '¿Cuál es correcta?', o: ['If I would have time, I would help.', 'If I had time, I would help.', 'If I have time, I would help.', 'If I had time, I will help.'], c: 1 },
      { q: 'Pedido educado: "___ you mind holding for a moment?"', o: ['Will', 'Would', 'Do', 'Are'], c: 1 }
    ]
  },
  'conditional-3': {
    title: 'Tercer condicional', phase: 3,
    html: `
<h3>Para qué sirve</h3>
<p>Imaginar un <b>pasado distinto</b>: algo que no pasó y su resultado. Arrepentimientos, críticas, explicaciones.</p>
<h3>Forma</h3>
<p><b>If + had + participio, would have + participio</b>. <i>If I had studied, I would have passed</i> (no estudié, no aprobé).</p>
<p>Contracciones habladas: <i>If I'd known, I'd have called you.</i> Ojo: el primer 'd es <b>had</b> y el segundo es <b>would</b>.</p>
<h3>Variantes</h3>
<p><b>could have / might have</b>: <i>If you had called earlier, we could have fixed it.</i></p>
<h3>Condicional mixto</h3>
<p>Pasado distinto → presente distinto: <i>If I had learned English as a kid, I would speak it fluently now.</i></p>
<h3>Comparación de los 4 condicionales</h3>
<table><tr><th>Tipo</th><th>Forma</th><th>Ejemplo</th></tr>
<tr><td>0</td><td>if + presente, presente</td><td>If you press it, it turns off.</td></tr>
<tr><td>1</td><td>if + presente, will</td><td>If you press it, it will turn off.</td></tr>
<tr><td>2</td><td>if + pasado, would</td><td>If you pressed it, it would turn off.</td></tr>
<tr><td>3</td><td>if + had + part., would have + part.</td><td>If you had pressed it, it would have turned off.</td></tr></table>
<h3>En el call center</h3>
<p><i>If we had received your request earlier, we would have solved it the same day. I'm sorry, if I had known, I would have told you.</i></p>`,
    quiz: [
      { q: 'If I had studied, I ___ (pass).', a: ['would have passed', "'d have passed"] },
      { q: "If she ___ (leave) earlier, she wouldn't have missed the train.", a: ['had left', "'d left"] },
      { q: 'We would have come if you ___ (invite) us.', a: ['had invited', "'d invited"] },
      { q: "If he hadn't called, I ___ (not know).", a: ["wouldn't have known", 'would not have known'] },
      { q: 'En "If I\'d known, I\'d have called", los dos \'d son:', o: ['would / would', 'had / would', 'had / had', 'would / had'], c: 1 },
      { q: '¿Cuál es correcta?', o: ['If I would have known, I would have called.', 'If I had known, I would have called.', 'If I knew, I would have called.', 'If I had knew, I would call.'], c: 1 },
      { q: 'Mixto: "Si hubiera aprendido de chico, ahora lo hablaría"', o: ['If I had learned as a kid, I would speak it now.', 'If I learned as a kid, I would have spoken it now.', 'If I have learned, I will speak it now.', 'If I would learn, I spoke it now.'], c: 0 },
      { q: 'If you had called earlier, we ___ fixed it. (podríamos haber)', a: ['could have'] }
    ]
  },
  'passive': {
    title: 'Voz pasiva', phase: 3,
    html: `
<h3>Para qué sirve</h3>
<p>Cuando importa <b>lo que pasó</b> más que quién lo hizo, o no sabés quién fue. Es muy común en soporte, emails formales e informes.</p>
<h3>Forma</h3>
<p><b>to be (en el tiempo que corresponda) + participio</b>.</p>
<table><tr><th>Tiempo</th><th>Activa</th><th>Pasiva</th></tr>
<tr><td>Presente</td><td>They update the system.</td><td>The system <b>is updated</b>.</td></tr>
<tr><td>Pasado</td><td>They fixed the issue.</td><td>The issue <b>was fixed</b>.</td></tr>
<tr><td>Present perfect</td><td>We have created a ticket.</td><td>A ticket <b>has been created</b>.</td></tr>
<tr><td>Futuro</td><td>They will deliver it.</td><td>It <b>will be delivered</b>.</td></tr>
<tr><td>Continuo</td><td>They are reviewing it.</td><td>It <b>is being reviewed</b>.</td></tr>
<tr><td>Modal</td><td>You must restart it.</td><td>It <b>must be restarted</b>.</td></tr></table>
<h3>By</h3>
<p>Para decir quién lo hizo: <b>by</b>. Solo si aporta información: <i>The problem was fixed <b>by</b> the technician.</i></p>
<h3>Errores típicos</h3>
<ul><li>Olvidar el to be: <i>The email sent yesterday</i> → <b>The email was sent yesterday</b>.</li><li>Usar el pasado en vez del participio: <i>was wrote</i> → <b>was written</b>.</li></ul>
<h3>En el call center</h3>
<p><i>Your ticket has been escalated. The refund will be processed in 5 business days. Your call is being recorded for quality purposes.</i></p>`,
    quiz: [
      { q: 'The email ___ (send) yesterday.', a: ['was sent'] },
      { q: 'English ___ (speak) in many countries.', a: ['is spoken'] },
      { q: 'Your order ___ (deliver) tomorrow.', a: ['will be delivered'] },
      { q: 'A ticket ___ (create) for your case. (present perfect)', a: ['has been created'] },
      { q: 'Your call ___ (record) right now.', a: ['is being recorded'] },
      { q: '¿Cuál es correcta?', o: ['The report was wrote by Ana.', 'The report was written by Ana.', 'The report written by Ana.', 'The report is wrote by Ana.'], c: 1 },
      { q: 'Pasiva de "They fixed the issue":', o: ['The issue fixed.', 'The issue was fixed.', 'The issue is fix.', 'The issue has fixed.'], c: 1 },
      { q: 'The refund will ___ processed in 5 days.', a: ['be'] }
    ]
  },
  'reported': {
    title: 'Reported speech', phase: 3,
    html: `
<h3>Para qué sirve</h3>
<p>Contar lo que dijo otra persona sin citarla textual. Clave para notas de tickets y para pasar casos a otro sector.</p>
<h3>El paso atrás de los tiempos</h3>
<table><tr><th>Dijo</th><th>Reportado</th></tr>
<tr><td>"I <b>am</b> tired"</td><td>She said she <b>was</b> tired</td></tr><tr><td>"I <b>work</b> here"</td><td>He said he <b>worked</b> there</td></tr>
<tr><td>"I'<b>m calling</b>"</td><td>He said he <b>was calling</b></td></tr><tr><td>"I <b>called</b>"</td><td>She said she <b>had called</b></td></tr>
<tr><td>"I'<b>ve tried</b>"</td><td>He said he <b>had tried</b></td></tr><tr><td>"I <b>will</b> pay"</td><td>She said she <b>would</b> pay</td></tr>
<tr><td>"I <b>can</b> help"</td><td>He said he <b>could</b> help</td></tr></table>
<p>Si lo que dijo sigue siendo cierto, se puede no retroceder: <i>He said he lives in Glew.</i></p>
<h3>Cambian también</h3>
<p>Pronombres y referencias: here → there, today → that day, tomorrow → the next day, yesterday → the day before.</p>
<h3>Say vs. tell</h3>
<p><b>tell</b> lleva a quién: <i>She <b>told me</b> (that)...</i>. <b>say</b> no: <i>She <b>said</b> (that)...</i> Nunca <i>She said me</i>.</p>
<h3>Preguntas y pedidos</h3>
<ul><li>Preguntas sí/no: <b>if</b> + orden normal → <i>"Is it working?" → He asked if it was working.</i></li>
<li>Preguntas wh-: sin auxiliar → <i>"Where do you live?" → She asked where I lived.</i></li>
<li>Pedidos: <b>asked/told + to</b> → <i>"Please call back" → He asked me to call back.</i></li></ul>
<h3>En un ticket</h3>
<p><i>The customer said he had already restarted the router and that the light was still red. He asked if we could send a technician.</i></p>`,
    quiz: [
      { q: '"I am tired." → She said she ___ tired.', a: ['was'] },
      { q: '"I will call you." → She said she ___ call me.', a: ['would'] },
      { q: '"I can help." → She said she ___ help.', a: ['could'] },
      { q: '"I have finished." → He said he ___ finished.', a: ['had'] },
      { q: '¿Cuál es correcta?', o: ['She said me that she was busy.', 'She told me that she was busy.', 'She told that she was busy me.', 'She said to me she is busy yesterday.'], c: 1 },
      { q: '"Is it working?" → He asked ___', o: ['if it was working.', 'was it working.', 'if was it working.', 'that it is working?'], c: 0 },
      { q: '"Where do you live?" → She asked where I ___.', a: ['lived'] },
      { q: '"Please call back." → He asked me ___ call back.', a: ['to'] }
    ]
  },
  'phrasal': {
    title: 'Phrasal verbs de soporte y atención', phase: 3,
    html: `
<h3>Qué son</h3>
<p>Verbo + partícula (on, off, up, out, back...) que juntos tienen un significado propio. Los nativos los usan muchísimo más que los verbos "formales": dicen <i>find out</i> antes que <i>discover</i>.</p>
<h3>Los que vas a usar en atención y soporte</h3>
<table><tr><th>Phrasal</th><th>Significado</th><th>Ejemplo</th></tr>
<tr><td>hold on</td><td>esperar en línea</td><td>Hold on, please.</td></tr><tr><td>hang up</td><td>cortar</td><td>Please don't hang up.</td></tr>
<tr><td>call back</td><td>devolver la llamada</td><td>I'll call you back.</td></tr><tr><td>turn on / off</td><td>prender / apagar</td><td>Turn it off and on again.</td></tr>
<tr><td>log in / out</td><td>entrar / salir de la cuenta</td><td>I can't log in.</td></tr><tr><td>set up</td><td>configurar, instalar</td><td>Let's set up your email.</td></tr>
<tr><td>look into</td><td>investigar</td><td>I'll look into it.</td></tr><tr><td>find out</td><td>averiguar</td><td>Let me find out.</td></tr>
<tr><td>fill out</td><td>completar (formulario)</td><td>Fill out this form.</td></tr><tr><td>sort out</td><td>resolver</td><td>We'll sort it out.</td></tr>
<tr><td>back up</td><td>hacer copia de seguridad</td><td>Back up your files first.</td></tr><tr><td>plug in / unplug</td><td>enchufar / desenchufar</td><td>Unplug the modem.</td></tr>
<tr><td>go through</td><td>revisar paso a paso</td><td>Let's go through the steps.</td></tr><tr><td>follow up</td><td>hacer seguimiento</td><td>I'll follow up tomorrow.</td></tr></table>
<h3>Separables</h3>
<p>Muchos se pueden separar con el objeto: <i>turn off the router / turn the router off</i>. Si el objeto es un pronombre, <b>tiene</b> que ir en el medio: <i>turn <b>it</b> off</i> (nunca <i>turn off it</i>).</p>
<h3>Cómo estudiarlos</h3>
<p>Siempre en una oración completa, nunca sueltos. Agregalos a Anki con la frase de la tabla.</p>`,
    quiz: [
      { q: "Please ___ on, I'll check your account.", a: ['hold'] },
      { q: 'Can you ___ off the router and turn it on again?', a: ['turn'] },
      { q: "I'll ___ into the problem and call you back.", a: ['look'] },
      { q: 'Please ___ out this form.', a: ['fill'] },
      { q: "I can't ___ in to my account.", a: ['log'] },
      { q: '¿Cuál es correcta?', o: ['Turn off it.', 'Turn it off.', 'Off turn it.', 'Turn it of.'], c: 1 },
      { q: '"Hacer copia de seguridad" →', o: ['back up', 'set up', 'look up', 'call up'], c: 0 },
      { q: '"Voy a hacer seguimiento mañana" → I\'ll ___ up tomorrow.', a: ['follow'] }
    ]
  },
  'customer-service': {
    title: 'Inglés de atención al cliente', phase: 3,
    html: `
<h3>La estructura de una llamada</h3>
<ol><li><b>Saludo</b>: <i>Thank you for calling [company], my name is Alex. How can I help you today?</i></li>
<li><b>Verificación</b>: <i>Before we continue, could you please confirm your full name and the account number?</i></li>
<li><b>Escucha y empatía</b>: <i>I'm sorry to hear that. I understand how frustrating that must be.</i></li>
<li><b>Diagnóstico</b>: <i>Could you tell me when the problem started? Are you seeing any error message?</i></li>
<li><b>Solución o escalamiento</b>: <i>Let me check that for you. I'm going to escalate this to our technical team.</i></li>
<li><b>Resumen</b>: <i>Just to confirm, ...</i></li>
<li><b>Cierre</b>: <i>Is there anything else I can help you with? Thank you for your patience. Have a great day!</i></li></ol>
<h3>Frases para situaciones difíciles</h3>
<ul><li>No entendiste: <i>Sorry, could you repeat that, please? Could you spell that for me?</i></li>
<li>Poner en espera: <i>May I put you on hold for a couple of minutes while I check?</i> Y al volver: <i>Thank you for holding.</i></li>
<li>Cliente enojado: <i>I completely understand. I'm going to do everything I can to solve this.</i></li>
<li>No podés hacer algo: evitá "I can't". Decí lo que <b>sí</b> podés: <i>What I can do is...</i></li>
<li>Transferir: <i>I'm going to transfer you to the billing department. Please stay on the line.</i></li></ul>
<h3>Deletreo</h3>
<p>Practicá el alfabeto en inglés. Las letras que más confunden: <b>A</b> (ei), <b>E</b> (i), <b>I</b> (ai), <b>G</b> (yi), <b>J</b> (yei), <b>H</b> (eich), <b>R</b> (ar), <b>Y</b> (uai). Para confirmar: <i>Is that B as in Bravo?</i></p>
<h3>Tono</h3>
<p>En inglés de atención se suaviza todo con <b>could, would, may, please</b>. "Give me your number" suena brusco; <i>Could you give me your number, please?</i> es lo correcto.</p>`,
    quiz: [
      { q: 'Thank you for ___ (llamar), how can I help you?', a: ['calling'] },
      { q: 'Could you please ___ your account number? (confirmar)', a: ['confirm'] },
      { q: "I'm sorry to ___ that.", a: ['hear'] },
      { q: 'Is there anything ___ I can help you with?', a: ['else'] },
      { q: 'Al volver de la espera decís:', o: ['Thanks for wait.', 'Thank you for holding.', 'Thank you for hold on.', 'Sorry for the hold, you.'], c: 1 },
      { q: '¿Cuál es la forma más educada?', o: ['Give me your email.', 'Your email.', 'Could you give me your email, please?', 'You give me email?'], c: 2 },
      { q: 'En vez de "I can\'t do that", conviene decir:', o: ['No.', 'What I can do is...', 'Impossible.', "That's not my problem."], c: 1 },
      { q: 'Para transferir: "Please stay on the ___."', a: ['line'] }
    ]
  }
};

Object.assign(window.CONTENT_EN, {
  "c1-evidence": {
    "title": "Comunicar incertidumbre",
    "phase": 4,
    "html": "<h3>Situación</h3><blockquote>The service recovered after the restart. We have not established the root cause.</blockquote><p>El orden temporal permite describir lo observado. Para atribuir una causa necesitás evidencia adicional.</p><h3>Práctica de producción</h3><p>Escribí dos hipótesis para un corte y un dato que te permitiría distinguirlas. Usá may have y would support.</p><p>Guardá tu respuesta en la bitácora. Comprobá precisión, claridad y adecuación al destinatario con una frase de evidencia para cada criterio.</p>",
    "quiz": [
      {
        "q": "Which sentence accurately reports uncertainty?",
        "o": [
          "The restart proves the cause.",
          "The restart may have restored service."
        ],
        "c": 1
      }
    ]
  },
  "c1-brief": {
    "title": "Sintetizar para dos audiencias",
    "phase": 4,
    "html": "<h3>Situación</h3><blockquote>Engineering reports intermittent timeouts. Sales reports delayed quotes. Both teams can still access the system.</blockquote><p>Una síntesis ejecutiva conserva impacto y alcance. Una nota técnica agrega síntomas y evidencia para investigar.</p><h3>Práctica de producción</h3><p>Redactá un resumen de 50 palabras para gerencia y uno de 90 para soporte. Compará qué omitiste y por qué.</p><p>Guardá tu respuesta en la bitácora. Comprobá precisión, claridad y adecuación al destinatario con una frase de evidencia para cada criterio.</p>",
    "quiz": [
      {
        "q": "Which detail belongs in both updates?",
        "o": [
          "The impact on issuing quotes",
          "Every individual log entry"
        ],
        "c": 0
      }
    ]
  },
  "c1-tradeoff": {
    "title": "Defender una decisión",
    "phase": 4,
    "html": "<h3>Situación</h3><blockquote>A rollback is reversible but delays the release. A hotfix preserves the schedule but has limited test coverage.</blockquote><p>Al recomendar una opción, explicitá el costo que aceptás y la condición que cambiaría tu recomendación.</p><h3>Práctica de producción</h3><p>Grabá una recomendación de dos minutos. Respondé luego a una objeción usando granted that y provided that.</p><p>Guardá tu respuesta en la bitácora. Comprobá precisión, claridad y adecuación al destinatario con una frase de evidencia para cada criterio.</p>",
    "quiz": [
      {
        "q": "Provided that introduces…",
        "o": [
          "a concession",
          "a condition"
        ],
        "c": 1
      }
    ]
  },
  "c1-handoff": {
    "title": "Mediar y cerrar un incidente",
    "phase": 4,
    "html": "<h3>Situación</h3><blockquote>The customer says the issue is fixed. Monitoring still shows sporadic failures.</blockquote><p>Podés reconocer la experiencia del cliente y comunicar el riesgo residual con un próximo control concreto.</p><h3>Práctica de producción</h3><p>Escribí un traspaso de 150 palabras. Incluí ambas perspectivas, responsable, próximo control y criterio de cierre. Reescribilo al día siguiente sin mirar.</p><p>Guardá tu respuesta en la bitácora. Comprobá precisión, claridad y adecuación al destinatario con una frase de evidencia para cada criterio.</p>",
    "quiz": [
      {
        "q": "Which handoff is actionable?",
        "o": [
          "Monitor as needed.",
          "Ana will review the error count at 14:00 and reopen if it rises."
        ],
        "c": 1
      }
    ]
  }
});
