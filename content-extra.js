// Módulos complementarios para conseguir trabajo en Soporte N1 (no dependen de la semana del plan).
window.CONTENT_JOB = {
  'jt-ad': {
    title: 'Active Directory y cuentas de empresa',
    html: `
<h3>Qué es</h3>
<p><b>Active Directory (AD)</b> es el directorio de Microsoft donde una empresa guarda sus usuarios, equipos y grupos. Cuando alguien inicia sesión en una PC de la oficina, AD verifica la contraseña. Los servidores que lo corren se llaman <b>controladores de dominio</b>. Su versión en la nube es <b>Microsoft Entra ID</b> (antes Azure AD).</p>
<h3>Conceptos clave</h3>
<table><tr><th>Concepto</th><th>Qué es</th></tr>
<tr><td>Dominio</td><td>El "espacio" de la empresa, ej. <code>empresa.local</code></td></tr>
<tr><td>Usuario</td><td>La cuenta de cada persona</td></tr>
<tr><td>Grupo</td><td>Conjunto de usuarios. Los permisos se dan a grupos, no a personas sueltas</td></tr>
<tr><td>OU (unidad organizativa)</td><td>Carpeta para ordenar usuarios y equipos (por área, sede)</td></tr>
<tr><td>GPO (directiva de grupo)</td><td>Configuraciones que se aplican solas: fondo de pantalla, impresoras, bloqueo de USB</td></tr></table>
<h3>Lo que hace N1 todos los días</h3>
<ul><li><b>Desbloquear una cuenta</b>: después de varios intentos fallidos, la cuenta se bloquea. En la consola <i>Usuarios y equipos de Active Directory</i> (<code>dsa.msc</code>) → propiedades del usuario → pestaña Cuenta → desbloquear.</li>
<li><b>Restablecer contraseña</b>: siempre después de verificar la identidad. Se marca "El usuario debe cambiar la contraseña en el próximo inicio de sesión".</li>
<li><b>Agregar a un grupo</b>: para dar acceso a una carpeta o aplicación, siempre con la aprobación que pida el procedimiento.</li></ul>
<h3>Con PowerShell (módulo ActiveDirectory)</h3>
<pre>Get-ADUser -Identity jperez -Properties LockedOut
Unlock-ADAccount -Identity jperez</pre>
<h3>Cuidados</h3>
<p>Nunca des permisos "por las dudas" ni a pedido verbal: siempre con ticket y aprobación. Mínimo privilegio también acá.</p>`,
    quiz: [
      { q: '¿Qué es Active Directory?', o: ['Un antivirus', 'El directorio donde la empresa guarda usuarios, equipos y grupos', 'Un programa de Office', 'Un tipo de cable'], c: 1 },
      { q: 'La versión en la nube de Active Directory se llama hoy:', o: ['Microsoft Entra ID', 'OneDrive', 'Teams', 'Windows Update'], c: 0 },
      { q: 'Los permisos conviene darlos a:', o: ['Cada usuario suelto', 'Grupos', 'Nadie', 'El administrador'], c: 1 },
      { q: '¿Qué es una OU?', o: ['Una carpeta para ordenar usuarios y equipos', 'Un virus', 'Una contraseña', 'Un puerto'], c: 0 },
      { q: 'Una GPO sirve para:', o: ['Aplicar configuraciones automáticamente a usuarios o equipos', 'Imprimir', 'Hacer backups', 'Medir la red'], c: 0 },
      { q: 'Antes de restablecer una contraseña, siempre:', o: ['Verificás la identidad del usuario', 'Le pedís la contraseña vieja por chat', 'Avisás a todos', 'Reiniciás el servidor'], c: 0 },
      { q: '¿Qué consola abre Usuarios y equipos de AD?', o: ['dsa.msc', 'devmgmt.msc', 'services.msc', 'eventvwr.msc'], c: 0 },
      { q: 'Comando de PowerShell para desbloquear una cuenta:', o: ['Unlock-ADAccount', 'Open-User', 'Reset-Windows', 'Get-Service'], c: 0 }
    ]
  },
  'jt-m365': {
    title: 'Microsoft 365: Outlook, Teams y OneDrive',
    html: `
<h3>Por qué importa</h3>
<p>La mayoría de las oficinas trabaja con Microsoft 365. Los tickets más comunes: "no me llegan mails", "Outlook no abre", "en Teams no me escuchan", "OneDrive no sincroniza".</p>
<h3>El truco que más sirve: aislar</h3>
<p>Probá lo mismo <b>en la versión web</b> (outlook.office.com, Teams web). Si en la web anda, el problema es de la PC o de la app instalada. Si en la web tampoco anda, es la cuenta, la licencia o el servicio.</p>
<h3>Outlook</h3>
<ul><li>No llegan mails: revisar carpeta <b>correo no deseado</b>, <b>reglas</b> que muevan mails, buzón lleno y si Outlook está en <b>modo sin conexión</b> (pestaña Enviar y recibir).</li>
<li>No abre o se queda cargando: iniciar en modo seguro (<code>outlook.exe /safe</code>) para descartar complementos; si sigue, reparar o crear un perfil nuevo desde Panel de control → Correo.</li></ul>
<h3>Teams</h3>
<ul><li>No se escucha: revisar el dispositivo elegido en Configuración → Dispositivos y los permisos de micrófono de Windows.</li>
<li>Comportamiento raro: cerrar sesión, salir del todo y volver a entrar; si sigue, limpiar la caché siguiendo la guía oficial de Microsoft para tu versión.</li></ul>
<h3>OneDrive</h3>
<ul><li>No sincroniza: ver el ícono de la nube (pausado, error, sin sesión), espacio disponible y nombres de archivo con caracteres no permitidos.</li></ul>
<h3>Licencias</h3>
<p>Si a un usuario "le falta Teams" o no puede instalar Office, puede ser que no tenga la licencia asignada. Eso se ve en el Centro de administración de Microsoft 365 (normalmente lo gestiona N2 o el administrador).</p>`,
    quiz: [
      { q: 'Un problema anda en la web pero no en la app instalada. Está en:', o: ['La cuenta', 'La PC o la app instalada', 'El servidor de Microsoft', 'La licencia seguro'], c: 1 },
      { q: 'No le llegan mails a un usuario. ¿Qué revisás primero?', o: ['Correo no deseado y reglas', 'La placa de video', 'El BIOS', 'El teclado'], c: 0 },
      { q: 'Para descartar complementos, Outlook se abre con:', o: ['outlook.exe /safe', 'outlook.exe /delete', 'ping outlook', 'sfc /outlook'], c: 0 },
      { q: 'Outlook en "modo sin conexión" significa que:', o: ['No envía ni recibe hasta que se desactive', 'Tiene virus', 'Está actualizado', 'No tiene licencia'], c: 0 },
      { q: 'En Teams no lo escuchan. Revisás:', o: ['El dispositivo elegido y los permisos del micrófono', 'El DNS', 'La impresora', 'La RAM'], c: 0 },
      { q: 'A un usuario le falta Teams en su cuenta. Puede ser:', o: ['Que no tenga la licencia asignada', 'Que el monitor esté apagado', 'Un problema de cable', 'El fondo de pantalla'], c: 0 },
      { q: 'OneDrive no sincroniza. Una causa común:', o: ['Sesión cerrada o sin espacio', 'Mouse roto', 'Exceso de RAM', 'Driver de audio'], c: 0 },
      { q: 'Si Outlook sigue sin abrir en modo seguro, el paso siguiente suele ser:', o: ['Reparar o crear un perfil nuevo', 'Formatear la PC', 'Cambiar el teclado', 'Desinstalar Windows'], c: 0 }
    ]
  },
  'jt-remote': {
    title: 'Soporte remoto: herramientas y buenas prácticas',
    html: `
<h3>Herramientas comunes</h3>
<ul><li><b>Asistencia rápida (Quick Assist)</b>: viene en Windows. El usuario te da un código y vos ves o controlás su pantalla.</li>
<li><b>Escritorio remoto (RDP)</b>: para conectarte a equipos o servidores dentro de la red de la empresa. Usa el puerto 3389 y nunca debería quedar expuesto a internet.</li>
<li><b>TeamViewer, AnyDesk</b> y herramientas corporativas de gestión remota: cada empresa usa la suya.</li>
<li><b>Compartir pantalla en Teams</b>: a veces alcanza con ver lo que hace el usuario.</li></ul>
<h3>El protocolo de una sesión remota</h3>
<ol><li><b>Verificá la identidad</b> del usuario y que el ticket exista.</li>
<li><b>Pedí permiso</b> antes de conectarte y explicá qué vas a hacer.</li>
<li>Pedile que cierre lo que sea confidencial (homebanking, mails personales).</li>
<li><b>Contá lo que hacés</b> mientras lo hacés: genera confianza y el usuario aprende.</li>
<li>Nunca le pidas la contraseña: si tiene que escribirla, que lo haga él.</li>
<li>Al terminar, <b>verificá con el usuario</b>, cerrá la sesión y documentá en el ticket.</li></ol>
<h3>Estafas de "soporte técnico"</h3>
<p>Hay estafadores que llaman haciéndose pasar por soporte para que la víctima instale una herramienta remota. Por eso las empresas exigen que la sesión salga de un ticket y de herramientas aprobadas. Si un usuario cuenta que "lo llamó Microsoft", es una alerta de seguridad: se escala.</p>`,
    quiz: [
      { q: 'Herramienta remota que ya viene en Windows:', o: ['Asistencia rápida (Quick Assist)', 'Paint', 'Bloc de notas', 'Calculadora'], c: 0 },
      { q: 'RDP usa normalmente el puerto:', o: ['80', '443', '3389', '25'], c: 2 },
      { q: 'RDP expuesto directo a internet es:', o: ['Una buena práctica', 'Un riesgo de seguridad', 'Obligatorio', 'Más rápido y seguro'], c: 1 },
      { q: 'Antes de conectarte a la PC de un usuario:', o: ['Verificás identidad y pedís permiso', 'Te conectás sin avisar', 'Le pedís su contraseña', 'Reiniciás su PC'], c: 0 },
      { q: 'Si hace falta escribir la contraseña del usuario:', o: ['La escribe el usuario', 'Se la pedís por chat', 'La anotás en el ticket', 'Usás la tuya'], c: 0 },
      { q: 'Al terminar la sesión remota:', o: ['Verificás con el usuario, cerrás y documentás', 'Te quedás conectado por si acaso', 'Borrás el ticket', 'Apagás su PC'], c: 0 },
      { q: 'Un usuario dice que "lo llamó Microsoft" para conectarse a su PC. Es:', o: ['Normal', 'Una posible estafa: se escala a seguridad', 'Una actualización', 'Un error de impresora'], c: 1 },
      { q: '¿Por qué conviene contar lo que hacés durante la sesión?', o: ['Genera confianza y el usuario aprende', 'Para tardar más', 'No conviene', 'Para cobrar más'], c: 0 }
    ]
  },
  'jt-vm': {
    title: 'Máquinas virtuales y laboratorio',
    html: `
<h3>Qué es una máquina virtual</h3>
<p>Una <b>máquina virtual (VM)</b> es una computadora simulada dentro de tu PC: tiene su propio sistema operativo, disco y red. El programa que las administra es el <b>hipervisor</b>.</p>
<h3>Tipos de hipervisor</h3>
<ul><li><b>Tipo 1</b> (sobre el hardware): Hyper-V, VMware ESXi. Es lo que usan los servidores de las empresas.</li>
<li><b>Tipo 2</b> (sobre un sistema operativo): VirtualBox, VMware Workstation. Ideal para practicar en tu PC.</li></ul>
<h3>Para arrancar</h3>
<ol><li>Activar la virtualización en el BIOS/UEFI (Intel VT-x o AMD-V) si está apagada.</li>
<li>Instalar VirtualBox (gratis).</li><li>Crear la VM: asignar RAM, CPU y disco sin quitarle demasiado a tu PC.</li>
<li>Instalar el sistema desde un archivo <b>ISO</b> (por ejemplo, una versión de evaluación de Windows o una distribución Linux).</li></ol>
<h3>Funciones que más vas a usar</h3>
<ul><li><b>Instantáneas (snapshots)</b>: guardás el estado y si rompés algo, volvés atrás en segundos. Ideal para practicar sin miedo.</li>
<li><b>Red NAT</b>: la VM sale a internet a través de tu PC. <b>Red puente (bridged)</b>: la VM aparece como un equipo más de tu red.</li></ul>
<h3>Tu laboratorio</h3>
<p>Con VMs podés tener GLPI funcionando, probar scripts sin tocar tu PC y, más adelante, armar un mini dominio con Active Directory. Todo eso es material para tu portfolio.</p>`,
    quiz: [
      { q: '¿Qué es un hipervisor?', o: ['El programa que administra las máquinas virtuales', 'Un antivirus', 'Un cable de red', 'Un tipo de RAM'], c: 0 },
      { q: 'VirtualBox es un hipervisor de tipo:', o: ['1', '2', '3', 'Ninguno'], c: 1 },
      { q: 'Para practicar sin miedo a romper algo usás:', o: ['Instantáneas (snapshots)', 'El modo avión', 'La papelera', 'Un pendrive'], c: 0 },
      { q: 'Si la VM no arranca porque falta virtualización, activás en el BIOS:', o: ['VT-x o AMD-V', 'Secure Boot off', 'El Wi-Fi', 'El audio'], c: 0 },
      { q: 'En modo "puente" (bridged) la VM:', o: ['Aparece como un equipo más de tu red', 'No tiene internet', 'No arranca', 'Es más lenta siempre'], c: 0 },
      { q: 'El archivo para instalar un sistema operativo en la VM suele ser un:', o: ['ISO', 'MP3', 'DOCX', 'PNG'], c: 0 },
      { q: 'Hyper-V y VMware ESXi son hipervisores de tipo:', o: ['1', '2', 'Juegos', 'Navegadores'], c: 0 },
      { q: 'Una ventaja de un laboratorio con VMs para tu búsqueda laboral:', o: ['Practicar y mostrar proyectos en el portfolio', 'Ganar dinero', 'Evitar estudiar', 'Ninguna'], c: 0 }
    ]
  },
  'jt-interview': {
    title: 'Entrevista técnica de Soporte N1',
    html: `
<h3>Cómo es</h3>
<p>Suele tener tres partes: preguntas sobre vos, preguntas técnicas básicas y situaciones ("¿qué harías si...?"). En algunos lugares hay una llamada simulada.</p>
<h3>Lo que buscan de verdad</h3>
<ul><li>Que tengas un <b>método</b> para resolver problemas (no que sepas todo).</li><li>Que te comuniques <b>claro y con calma</b>.</li><li>Que seas <b>honesto</b> con lo que no sabés y sepas escalar.</li></ul>
<h3>Preguntas típicas y cómo encararlas</h3>
<table><tr><th>Pregunta</th><th>Qué conviene mostrar</th></tr>
<tr><td>Contame de vos</td><td>1 minuto: técnico en programación, experiencia en atención telefónica, lo que estás aprendiendo y tus proyectos</td></tr>
<tr><td>Un usuario no tiene internet</td><td>Orden: física → IP (ipconfig) → gateway → internet → DNS. Ir de lo cercano a lo lejano</td></tr>
<tr><td>La PC está lenta</td><td>Administrador de tareas (CPU, RAM, disco), programas de inicio, espacio libre, actualizaciones</td></tr>
<tr><td>¿Qué es DNS / DHCP?</td><td>Definición corta + para qué sirve + un síntoma cuando falla</td></tr>
<tr><td>Incidente vs. problema</td><td>Incidente: algo dejó de andar. Problema: la causa raíz de varios incidentes</td></tr>
<tr><td>Usuario enojado</td><td>Escuchar, reconocer la molestia, enfocarse en lo que sí podés hacer, próximo paso concreto</td></tr>
<tr><td>No sabés la respuesta</td><td>Decirlo con honestidad, cómo lo investigarías y cuándo escalarías</td></tr>
<tr><td>Tres tickets a la vez</td><td>Priorizar por impacto y urgencia, avisar tiempos, cuidar el SLA</td></tr></table>
<h3>Método STAR para contar experiencias</h3>
<p><b>S</b>ituación, <b>T</b>area, <b>A</b>cción, <b>R</b>esultado. Prepará 3 historias: un cliente difícil, un problema que resolviste y algo que aprendiste solo.</p>
<h3>Antes de ir</h3>
<p>Practicá en voz alta con el prompt "Entrevista Soporte N1", repasá las evaluaciones de esta web y llevá 2 preguntas para ellos (herramientas que usan, capacitación, posibilidad de pasar a N2).</p>`,
    quiz: [
      { q: '¿Qué buscan más en una entrevista de N1?', o: ['Que sepas absolutamente todo', 'Método, comunicación clara y honestidad', 'Que hables rápido', 'Que tengas título universitario'], c: 1 },
      { q: 'Te preguntan algo que no sabés:', o: ['Inventás una respuesta', 'Lo decís, explicás cómo lo investigarías y cuándo escalarías', 'Cambiás de tema', 'Te quedás callado'], c: 1 },
      { q: 'Para "un usuario no tiene internet" el orden es:', o: ['DNS → cable → IP', 'Física → IP → gateway → internet → DNS', 'Formatear primero', 'Llamar al proveedor primero'], c: 1 },
      { q: 'La PC está lenta. Lo primero que mirás:', o: ['Administrador de tareas: CPU, RAM y disco', 'El color del gabinete', 'El mouse', 'El fondo de pantalla'], c: 0 },
      { q: 'Tenés tres tickets a la vez. Priorizás por:', o: ['Orden alfabético', 'Impacto y urgencia', 'Quién grita más', 'El más fácil'], c: 1 },
      { q: 'STAR significa:', o: ['Situación, Tarea, Acción, Resultado', 'Soporte, Ticket, Atención, Red', 'Start, Test, Apply, Run', 'Sueldo, Trabajo, Área, Rol'], c: 0 },
      { q: '"Contame de vos" debería durar más o menos:', o: ['10 minutos', '1 minuto, enfocado en lo relevante para el puesto', '5 segundos', 'Lo que quieras, con tu vida entera'], c: 1 },
      { q: 'Una buena pregunta para hacerles al final:', o: ['¿Qué herramientas usan y cómo es la capacitación?', '¿Puedo faltar seguido?', 'No preguntar nada', '¿Cuándo me pagan?'], c: 0 }
    ]
  }
};
window.JOB_ORDER = ['jt-ad', 'jt-m365', 'jt-remote', 'jt-vm', 'jt-interview'];

Object.assign(window.CONTENT_JOB, {
  "lab-diag": {
    "title": "Diagnóstico reproducible en PowerShell",
    "html": "<h3>Caso</h3><p>Una PC de prueba tarda en abrir aplicaciones.</p><h3>Práctica</h3><p>Descargá el <a href=\"portfolio/diagnostico.ps1\" download>script de diagnóstico</a>. Leelo, ejecutalo en PowerShell en tu propia PC y compará la RAM libre con una segunda medición tras cerrar aplicaciones.</p><h3>Entregable</h3><p>Informe JSON y un README con síntoma, hipótesis, comparación y limitaciones.</p>",
    "quiz": [
      {
        "q": "¿Dos mediciones demuestran la causa?",
        "o": [
          "Sí",
          "No, orientan una hipótesis"
        ],
        "c": 1
      }
    ]
  },
  "lab-vm": {
    "title": "Laboratorio con máquinas virtuales",
    "html": "<h3>Caso</h3><p>Un usuario informa que la red falla en una estación de prueba.</p><h3>Práctica</h3><p>Creá dos VMs de laboratorio en una red interna. Registrá sus IP, probá conectividad, tomá una instantánea y desconectá desde el hipervisor el adaptador de una VM. Documentá cómo cambia el diagnóstico y reconectalo.</p><h3>Entregable</h3><p>Diagrama de red, tres observaciones antes y después y prueba de recuperación.</p>",
    "quiz": [
      {
        "q": "¿Qué permite volver al estado inicial del laboratorio?",
        "o": [
          "Una instantánea previa",
          "Cambiar la zona horaria"
        ],
        "c": 0
      }
    ]
  },
  "lab-domain": {
    "title": "Mini dominio de Active Directory",
    "html": "<h3>Caso</h3><p>Dos usuarios ficticios necesitan permisos distintos sobre una carpeta.</p><h3>Práctica</h3><p>En una red interna, configurá un servidor de laboratorio con AD DS y DNS. Uní un cliente Windows compatible al dominio. Creá dos usuarios ficticios y un grupo de lectura. Concedé acceso a la carpeta al grupo y probá con ambas cuentas.</p><h3>Entregable</h3><p>Matriz de permisos esperados y observados, más un ticket de alta y su validación.</p>",
    "quiz": [
      {
        "q": "¿A quién asignás el permiso común?",
        "o": [
          "A cada persona manualmente",
          "Al grupo del rol"
        ],
        "c": 1
      }
    ]
  },
  "lab-classifier": {
    "title": "Clasificador de tickets con IA local",
    "html": "<h3>Caso</h3><p>La mesa de ayuda quiere sugerencias de categoría.</p><h3>Práctica</h3><p>Prepará 20 tickets ficticios etiquetados de red, cuentas, hardware y aplicaciones. Reservá ocho para evaluación. En Ollama pedí una categoría o revisión humana. Compará cada respuesta con tu etiqueta y con una regla simple por palabras clave.</p><h3>Entregable</h3><p>Tabla de aciertos y errores por categoría, ejemplos ambiguos y limitaciones.</p>",
    "quiz": [
      {
        "q": "¿Qué ejemplos sirven para evaluar?",
        "o": [
          "Los reservados antes de ajustar el prompt",
          "Solo los usados para escribirlo"
        ],
        "c": 0
      }
    ]
  },
  "lab-triage": {
    "title": "Triage, escalamiento y cierre",
    "html": "<h3>Caso</h3><p>Un comercio informa que dos cajas dejaron de imprimir y una tercera sigue funcionando.</p><h3>Práctica</h3><p>Abrí un ticket ficticio en tu sistema de práctica, por ejemplo GLPI. Registrá síntoma, alcance, hora y alternativa temporal. Asigná prioridad según impacto y urgencia. Prepará una derivación con las comprobaciones y pedí validación al usuario antes del cierre.</p><h3>Entregable</h3><p>Ticket anonimizado con criterio de prioridad, responsable y evidencia de recuperación.</p>",
    "quiz": [
      {
        "q": "¿Qué ayuda más al segundo nivel?",
        "o": [
          "Reenviar solo el asunto",
          "Alcance, pruebas y resultados"
        ],
        "c": 1
      }
    ]
  }
});
window.PORTFOLIO_ORDER = ["lab-diag","lab-vm","lab-domain","lab-classifier","lab-triage"];
