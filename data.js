// Contenido fijo del plan. El progreso del usuario NO va acá: se guarda en el navegador (app.js).
window.PLAN = {
  phases: [
    {
      id: 1, name: 'Fase 1 · A1 → A2', months: [1, 3],
      goal: 'Presentarte y contar tu día.',
      listening: [
        { name: 'BBC Learning English — 6 Minute English', url: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english' },
        { name: 'English with Lucy (YouTube)', url: 'https://www.youtube.com/results?search_query=English+with+Lucy' },
        { name: 'Friends o Modern Family con subtítulos en inglés', url: '' }
      ],
      speaking: 'Shadowing: elegí 1 minuto del audio de hoy y repetilo en voz alta imitando ritmo y entonación (3 veces).',
      topics: [['to-be', 2], ['pronouns', 2], ['present-simple', 2], ['questions', 2], ['present-continuous', 2], ['past-simple', 3]]
    },
    {
      id: 2, name: 'Fase 2 · A2 → B1', months: [4, 6],
      goal: 'Sostener una charla de 10 minutos.',
      listening: [
        { name: 'All Ears English (podcast)', url: 'https://www.allearsenglish.com' },
        { name: "Luke's English Podcast", url: 'https://teacherluke.co.uk' },
        { name: 'Language Reactor (Netflix y YouTube)', url: 'https://www.languagereactor.com' }
      ],
      speaking: 'Shadowing 10 min + Tandem/HelloTalk 3 veces por semana (martes, jueves y sábado).',
      topics: [['present-perfect', 3], ['future', 3], ['conditionals-01', 3], ['comparatives', 2], ['review-2', 2]]
    },
    {
      id: 3, name: 'Fase 3 · B1 → B2', months: [7, 12],
      goal: 'B2 en el EF SET y poder hacer una entrevista laboral en inglés.',
      listening: [
        { name: 'Series en inglés sin subtítulos en español', url: '' },
        { name: 'Videos de atención al cliente en inglés (customer service calls)', url: 'https://www.youtube.com/results?search_query=customer+service+call+english+practice' },
        { name: "Luke's English Podcast / All Ears English", url: 'https://teacherluke.co.uk' }
      ],
      speaking: 'Simulación de llamada de atención al cliente (prompt "Llamada simulada") + Tandem.',
      topics: [['conditional-2', 3], ['conditional-3', 3], ['passive', 4], ['reported', 4], ['phrasal', 4], ['customer-service', 8]]
    }
  ],

  writing: {
    1: [
      'Presentate: nombre, edad, dónde vivís y qué hacés.',
      'Contá tu rutina de un día de semana.',
      'Describí tu casa o tu barrio.',
      'Contá qué te gusta hacer los fines de semana.',
      'Describí a una persona de tu familia.',
      'Qué comiste hoy y qué te gusta comer.',
      'Contá cómo viajás al trabajo (tren, colectivo).',
      'Qué hiciste ayer.',
      'Describí tu trabajo o lo que querés hacer.',
      'Qué series o música te gustan y por qué.'
    ],
    2: [
      'Contá algo que nunca hiciste y te gustaría hacer.',
      'Tus planes para el próximo mes.',
      'Compará dos trabajos que tuviste.',
      'Qué harías si un cliente está enojado (condicional 1).',
      'Contá tu mejor viaje.',
      'Ventajas y desventajas de trabajar desde casa.',
      'Un problema técnico que resolviste y cómo.',
      'Por qué querés aprender inglés.',
      'Describí tu ciudad ideal.',
      'Qué cambió en tu vida en el último año.'
    ],
    3: [
      'Qué harías si ganaras mucha plata (condicional 2).',
      'Algo que harías distinto en el pasado (condicional 3).',
      'Respondé por escrito el reclamo de un cliente por una factura mal cobrada.',
      'Contá una conversación que tuviste, en reported speech.',
      'Explicá a un cliente cómo reiniciar su router (paso a paso).',
      'Tu experiencia laboral, como en una entrevista.',
      'Por qué deberían contratarte para un puesto bilingüe.',
      'Opiná: ¿la IA va a reemplazar a los call centers?',
      'Describí un proceso de tu trabajo en voz pasiva.',
      'Email formal pidiendo disculpas a un cliente por una demora.'
    ]
  },

  resources: [
    { name: 'EF SET (test de nivel gratis)', url: 'https://www.efset.org' },
    { name: 'Anki (flashcards)', url: 'https://apps.ankiweb.net' },
    { name: 'British Council LearnEnglish', url: 'https://learnenglish.britishcouncil.org' },
    { name: 'Perfect English Grammar', url: 'https://www.perfect-english-grammar.com' },
    { name: 'Language Reactor', url: 'https://www.languagereactor.com' }
  ],

  itWeeks: [
    { m: 1, t: "Equipos y periféricos", r: 'Google "Fundamentos de asistencia técnica" (Coursera)', d: "Inventariá una notebook y sus periféricos. Separá síntoma, impacto y número de activo." },
    { m: 1, t: "Windows y herramientas de oficina", r: 'Mismo curso + Microsoft Learn', d: "Compará un fallo de Outlook web y de escritorio con la misma cuenta de prueba. Registrá qué funciona y qué escalarías." },
    { m: 1, t: "Triage en GLPI", r: 'ITIL 4 básico + documentación de GLPI', d: "Registrá un incidente y un pedido de alta. Asigná impacto, urgencia, responsable y próximo contacto." },
    { m: 1, t: "Atención remota y cierre", r: 'Cierre del curso de Google', d: "Simulá un llamado: pedí consentimiento para la asistencia, explicá un paso por vez y confirmá la solución con el usuario." },
    { m: 2, t: "Conectividad de una estación", r: 'Cisco NetAcad: Nociones básicas de redes', d: "Dibujá cliente, puerta de enlace y DNS de la VM. Separá pérdida de enlace de falla de resolución." },
    { m: 2, t: "Diagnóstico de red", r: 'Mismo curso', d: "Compará ipconfig, ping a la puerta de enlace y nslookup. Adjuntá dos resultados y explicá qué descarta cada uno." },
    { m: 2, t: "Impresoras y etiquetadoras", r: 'Cisco Packet Tracer', d: "Diagnosticá una cola pausada, un trabajo trabado y una impresora sin enlace. Documentá cuándo corresponde llamar al proveedor." },
    { m: 2, t: "Accesos y recuperación", r: 'NetAcad: Introducción a la ciberseguridad', d: "Usá usuarios ficticios y permisos por grupo. Restaurá una copia de un archivo de prueba y verificá su contenido." },
    { m: 3, t: "Inventario con PowerShell", r: 'Microsoft Learn (PowerShell)', d: "Armá un informe de versión de Windows, disco y memoria sin incluir datos personales." },
    { m: 3, t: "Diagnóstico reproducible", r: 'Mismo recurso', d: "Compará dos informes del script de diagnóstico ante el mismo síntoma. Adjuntá hipótesis y próximo control." },
    { m: 3, t: "Python para seguimiento", r: 'Documentación oficial de Python', d: "Leé un CSV ficticio de tickets y contá abiertos por categoría. Contrastá el resultado con un recuento manual." },
    { m: 3, t: "Documentar una solución", r: 'GitHub Docs', d: "Versioná un procedimiento de soporte. Pedile a otra persona que lo siga o repetilo desde una VM limpia y anotá los pasos ambiguos." },
    { m: 4, t: "Redacción técnica con IA", r: 'Guías oficiales de prompts (Anthropic, OpenAI, Google)', d: "Prepará una respuesta al usuario y un traspaso a N2 para el mismo caso. Revisá que cada afirmación se apoye en el ticket." },
    { m: 4, t: "Clasificación local con Ollama", r: 'Documentación de Ollama', d: "Probá cuatro categorías y una salida de revisión humana. Mantené la prioridad bajo decisión del operador." },
    { m: 4, t: "Evaluación del clasificador", r: 'Tus propios datos', d: "Compará el modelo con reglas simples usando ocho tickets reservados. Registrá errores y tiempos observados." },
    { m: 4, t: "Entrevista y portfolio N1", r: 'Tu página web', d: "Mostrá una incidencia de punta a punta: recepción, pruebas, comunicación, cierre y evidencia. Enlazá los cuatro proyectos." }
  ],
  itMonths: {
    1: 'Fundamentos de soporte · Proyecto 1: mesa de ayuda propia',
    2: 'Redes · Proyecto 2: lab de redes',
    3: 'Scripting · Proyecto 3: script de diagnóstico de PC',
    4: 'IA aplicada · Proyecto 4: clasificador de tickets con IA'
  },
  itResources: [
    { name: 'Google IT Support (Coursera)', url: 'https://www.coursera.org/professional-certificates/google-it-support' },
    { name: 'Cisco Networking Academy', url: 'https://www.netacad.com' },
    { name: 'Microsoft Learn', url: 'https://learn.microsoft.com' },
    { name: 'GLPI', url: 'https://glpi-project.org' },
    { name: 'Ollama', url: 'https://ollama.com' },
    { name: 'GitHub', url: 'https://github.com' }
  ],

  prompts: [
    { cat: 'Inglés', name: 'Corrector de escritura', text: 'Sos mi profe de inglés. Mi nivel es [NIVEL]. Corregí este texto: marcá cada error, explicame en español por qué está mal (corto) y después dame la versión natural, como lo diría un nativo. Al final, decime cuál es mi error más repetido.\n\nTexto:\n[PEGAR TEXTO]' },
    { cat: 'Inglés', name: 'Explicar gramática', text: 'Explicame [TEMA DE GRAMÁTICA] en español, corto y con 5 ejemplos de la vida diaria y del trabajo en un call center. Después dame 8 ejercicios para completar, sin las respuestas. Cuando te los mande resueltos, corregilos.' },
    { cat: 'Inglés', name: 'Mini quiz de repaso', text: 'Ya vi estos temas: [LISTA]. Haceme un quiz de 10 preguntas mezcladas, una por vez. Después de cada respuesta decime si está bien y por qué. Al final decime qué repasar.' },
    { cat: 'Inglés', name: 'Charla para practicar', text: "Let's have a conversation in English. My level is [NIVEL]. Talk about [TEMA]. Use simple words, ask me one question at a time, and after each of my answers correct my mistakes briefly (in Spanish) before continuing." },
    { cat: 'Inglés', name: 'Llamada simulada (fase 3)', text: "You are a customer calling a company's support line. I am the agent. Problem: [PROBLEMA, ej: my internet is not working / I was charged twice]. Be realistic: sometimes impatient, give details only when I ask. Stay in character until I write 'END CALL'. Then give me feedback in Spanish: greeting, verification, empathy, solution, closing, and my grammar mistakes." },
    { cat: 'Inglés', name: 'Entrevista bilingüe', text: 'Act as a recruiter for a bilingual customer service job in Buenos Aires. Interview me in English: 5 questions, one at a time. At the end, give me feedback in Spanish and an estimated English level.' },
    { cat: 'IT', name: 'Tutor de soporte', text: 'Sos mi tutor de soporte IT. Soy técnico en programación y estoy aprendiendo para conseguir trabajo en mesa de ayuda N1. Hoy estudio: [TEMA]. Explicame lo esencial en 5 puntos, con un ejemplo real de una oficina. Después haceme 3 preguntas para ver si entendí. No me des las respuestas hasta que conteste.' },
    { cat: 'IT', name: 'Quiz de los viernes', text: 'Esta semana estudié: [LISTA DE TEMAS]. Haceme 10 preguntas de opción múltiple, una por vez, como en una entrevista de soporte N1. Después de cada respuesta decime si estuvo bien y por qué. Al final, decime qué tema tengo que repasar.' },
    { cat: 'IT', name: 'Simulador de tickets', text: 'Generá 5 tickets realistas de usuarios de una oficina de 30 personas que llaman a mesa de ayuda. Variedad: Windows, impresora, red, Outlook, contraseña. Para cada uno: nombre ficticio, cómo lo cuenta el usuario (con palabras de no técnico) y prioridad. NO me des la solución.' },
    { cat: 'IT', name: 'Revisor de tickets', text: 'Resolví este ticket así: [MI SOLUCIÓN]. Revisalo como un líder de soporte exigente: qué está bien, qué faltó verificar, y cómo lo documentarías en el ticket.' },
    { cat: 'IT', name: 'Explicador de código', text: 'Explicame este código línea por línea, como si fuera mi primera vez con [POWERSHELL/PYTHON]. Después decime qué podría salir mal si lo corro en la PC de un usuario.\n[CÓDIGO]' },
    { cat: 'IT', name: 'Entrevista Soporte N1', text: 'Hacé de reclutador de una empresa que busca Soporte N1 en Buenos Aires. Entrevistame: 3 preguntas técnicas, 2 de atención al usuario y 1 situación difícil. Una pregunta por vez. Al final, dame una devolución honesta.' }
  ]
};

window.PLAN.phases.push({
  "id": 4,
  "name": "Taller B2 → C1",
  "months": [
    13,
    15
  ],
  "goal": "Comunicar evidencia y defender decisiones en inglés. Verificá tu nivel con una evaluación independiente.",
  "topics": [
    [
      "c1-evidence",
      3
    ],
    [
      "c1-brief",
      3
    ],
    [
      "c1-tradeoff",
      3
    ],
    [
      "c1-handoff",
      3
    ]
  ],
  "listening": [
    {
      "name": "BBC Learning English",
      "url": "https://www.bbc.co.uk/learningenglish"
    }
  ],
  "speaking": "Explicá una decisión técnica en dos minutos y respondé a una objeción."
});
window.PLAN.writing[4] = ["Which sentence accurately reports uncertainty?","Which detail belongs in both updates?","Provided that introduces…","Which handoff is actionable?"];
