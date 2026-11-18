// Ilustraciones de las lecciones: diagramas propios (SVG) y una foto con licencia libre de Wikimedia Commons.
(() => {
  const box = (x, y, w, h, t, sub, hl) => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${hl ? '#16304f' : '#1c2533'}" stroke="${hl ? '#3b82f6' : '#3a4656'}" stroke-width="1.5"/><text x="${x + w / 2}" y="${y + (sub ? h / 2 - 3 : h / 2 + 5)}" text-anchor="middle" font-size="14" font-weight="600" fill="#e8ecf1">${t}</text>${sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" font-size="11" fill="#8b95a3">${sub}</text>` : ''}</g>`;
  const arrow = (x1, y1, x2, y2, label) => `<g><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#7fb0ff" stroke-width="2" marker-end="url(#ah)"/>${label ? `<text x="${(x1 + x2) / 2}" y="${(y1 + y2) / 2 - 6}" text-anchor="middle" font-size="11" fill="#9cc2ff">${label}</text>` : ''}</g>`;
  const svg = (w, h, body, title) => `<figure class="fig"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${title}"><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#7fb0ff"/></marker></defs>${body}</svg><figcaption>${title}</figcaption></figure>`;

  window.FIGS = {
    'it-1': svg(640, 300,
      box(240, 110, 160, 70, 'Motherboard', 'conecta todo', true) +
      box(30, 20, 150, 60, 'CPU', 'procesa') + box(460, 20, 150, 60, 'RAM', 'memoria de trabajo') +
      box(30, 220, 150, 60, 'SSD / HDD', 'guarda datos') + box(460, 220, 150, 60, 'GPU', 'imagen') +
      box(245, 230, 150, 50, 'Fuente (PSU)', 'energía') +
      arrow(180, 60, 245, 115) + arrow(460, 60, 395, 115) + arrow(180, 240, 245, 175) + arrow(460, 240, 395, 175) + arrow(320, 230, 320, 182),
      'Cómo se conectan los componentes de una PC') +
      `<figure class="fig"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/DDR5_SDRAM_IMGP6304_smial_wp.jpg?width=640" alt="Módulo de memoria RAM DDR5" loading="lazy"><figcaption>Un módulo de RAM DDR5. Foto: Rainer Knäpper, <a href="https://commons.wikimedia.org/wiki/File:DDR5_SDRAM_IMGP6304_smial_wp.jpg" target="_blank" rel="noopener">Wikimedia Commons</a>, Free Art License.</figcaption></figure>`,

    'it-3': svg(700, 230,
      box(10, 30, 100, 50, 'Nuevo') + box(140, 30, 100, 50, 'Asignado') + box(270, 30, 110, 50, 'En curso', '', true) +
      box(410, 30, 120, 50, 'Resuelto') + box(560, 30, 120, 50, 'Cerrado', 'usuario confirma') +
      box(260, 150, 130, 55, 'En espera', 'usuario / proveedor') + box(430, 150, 140, 55, 'Escalado', 'N2 / N3') +
      arrow(110, 55, 140, 55) + arrow(240, 55, 270, 55) + arrow(380, 55, 410, 55) + arrow(530, 55, 560, 55) +
      arrow(315, 80, 315, 150) + arrow(345, 150, 345, 80) + arrow(370, 80, 470, 150) + arrow(500, 150, 470, 80),
      'Ciclo de vida de un ticket'),

    'it-5': svg(700, 280,
      box(10, 110, 110, 55, 'Internet') + box(150, 110, 120, 55, 'Módem / ONT', 'del proveedor') +
      box(300, 100, 140, 75, 'Router', 'DHCP · NAT · gateway', true) +
      box(480, 30, 200, 55, 'Switch', 'cable: PCs, impresora') + box(480, 190, 200, 55, 'Access point', 'Wi-Fi: celu, notebook') +
      arrow(120, 137, 150, 137) + arrow(270, 137, 300, 137) + arrow(440, 125, 480, 65) + arrow(440, 150, 480, 210) +
      `<text x="370" y="200" text-anchor="middle" font-size="11" fill="#8b95a3">gateway: 192.168.1.1</text><text x="580" y="105" text-anchor="middle" font-size="11" fill="#8b95a3">IPs 192.168.1.x (por DHCP)</text>`,
      'Red típica de una casa u oficina chica'),

    'it-6': svg(640, 300,
      box(20, 10, 600, 46, '1. ¿Cable o Wi-Fi conectado? ¿Le pasa a otros?') +
      box(50, 66, 540, 46, '2. ipconfig → ¿IP válida o 169.254?') +
      box(80, 122, 480, 46, '3. ping al gateway → ¿llega al router?') +
      box(110, 178, 420, 46, '4. ping 8.8.8.8 → ¿sale a internet?') +
      box(140, 234, 360, 46, '5. nslookup → ¿resuelve nombres? (DNS)', '', true),
      'Diagnóstico de red: de lo más cercano a lo más lejano'),

    'it-7': null, // usa el de it-5 (ver abajo)

    'it-12': svg(700, 180,
      box(10, 60, 150, 60, 'Tus archivos', 'directorio de trabajo') + box(200, 60, 140, 60, 'Staging', 'preparado') +
      box(380, 60, 140, 60, 'Repo local', 'historia', true) + box(560, 60, 130, 60, 'GitHub', 'tu portfolio') +
      arrow(160, 90, 200, 90, 'git add') + arrow(340, 90, 380, 90, 'git commit') + arrow(520, 90, 560, 90, 'git push'),
      'Las tres zonas de Git y cómo llegar a GitHub'),

    'jt-ad': svg(640, 230,
      box(240, 10, 160, 55, 'empresa.local', 'dominio', true) +
      box(30, 100, 160, 50, 'OU Ventas') + box(240, 100, 160, 50, 'OU Sistemas') + box(450, 100, 160, 50, 'OU Equipos') +
      box(30, 170, 160, 50, 'Usuarios', 'jperez, mgomez') + box(240, 170, 160, 50, 'Grupos', 'permisos') + box(450, 170, 160, 50, 'PCs', 'PC-VTA-01') +
      arrow(300, 65, 110, 100) + arrow(320, 65, 320, 100) + arrow(340, 65, 530, 100) + arrow(110, 150, 110, 170) + arrow(320, 150, 320, 170) + arrow(530, 150, 530, 170),
      'Estructura de Active Directory'),

    'leitner': svg(700, 150,
      [1, 2, 3, 4, 5].map((b, i) => box(10 + i * 138, 30, 118, 70, `Caja ${b}`, ['1 día', '3 días', '7 días', '14 días', '30 días'][i], b === 5)).join('') +
      [0, 1, 2, 3].map((i) => arrow(128 + i * 138, 55, 148 + i * 138, 55)).join('') +
      `<text x="350" y="135" text-anchor="middle" font-size="12" fill="#9cc2ff">Si acertás, la pregunta sube de caja. Si errás, vuelve a la caja 1 (mañana).</text>`,
      'Repaso espaciado: cuándo vuelve cada pregunta')
  };
  window.FIGS['it-7'] = window.FIGS['it-5'];
})();
