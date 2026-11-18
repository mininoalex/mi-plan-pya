// Lecciones de IT: una por semana del plan. Evaluación de opción múltiple {q, o, c}.
window.CONTENT_IT = {
  'it-1': {
    title: 'Qué hace soporte N1, hardware y componentes', week: 1,
    html: `
<h3>El rol de Soporte N1</h3>
<p>Nivel 1 (N1) es la primera línea: recibe los pedidos de los usuarios (por teléfono, mail, chat o portal), registra cada uno en un <b>ticket</b>, resuelve lo conocido y <b>escala</b> a N2 o N3 lo que necesita más permisos o conocimiento. Lo que se evalúa en N1: que registres bien, que te comuniques claro y que no dejes casos sin seguimiento.</p>
<ul><li><b>N1</b>: contraseñas, cuentas bloqueadas, impresoras, Office, conectividad básica, instalación de software autorizado.</li>
<li><b>N2</b>: problemas más profundos, servidores, redes, permisos avanzados.</li><li><b>N3</b>: especialistas, proveedores, desarrollo.</li></ul>
<h3>Componentes de una PC</h3>
<table><tr><th>Componente</th><th>Qué hace</th><th>Síntoma típico de falla</th></tr>
<tr><td>CPU (procesador)</td><td>Ejecuta las instrucciones</td><td>Temperatura alta, apagados, lentitud extrema</td></tr>
<tr><td>RAM</td><td>Memoria de trabajo, se borra al apagar</td><td>Pantallazos azules, pitidos al encender, lentitud con muchas apps</td></tr>
<tr><td>Almacenamiento (HDD / SSD / NVMe)</td><td>Guarda datos en forma permanente</td><td>Arranque lento, archivos corruptos, ruidos (HDD)</td></tr>
<tr><td>Motherboard</td><td>Conecta todo</td><td>No enciende, puertos que no responden</td></tr>
<tr><td>Fuente (PSU)</td><td>Convierte y entrega energía</td><td>No enciende, se apaga sola</td></tr>
<tr><td>GPU</td><td>Procesa imagen</td><td>Artefactos en pantalla, sin video</td></tr></table>
<h3>BIOS / UEFI y POST</h3>
<p>Al encender, el firmware (BIOS o UEFI) hace el <b>POST</b> (autodiagnóstico). Si algo falla, avisa con <b>pitidos</b> o luces. Después busca el disco de arranque. UEFI es el reemplazo moderno de BIOS y permite <b>Secure Boot</b>.</p>
<h3>SSD vs HDD</h3>
<p>El SSD no tiene partes móviles, es mucho más rápido y resiste golpes. Cambiar un HDD por un SSD es la mejora más notoria en una PC lenta. Un SSD no se desfragmenta.</p>
<h3>Lo que te diferencia en N1</h3>
<p>Preguntar antes de tocar: <i>¿Qué estabas haciendo? ¿Desde cuándo? ¿Le pasa a alguien más? ¿Cambió algo?</i> Esas cuatro preguntas resuelven la mitad de los casos.</p>`,
    quiz: [
      { q: '¿Qué hace un agente N1 cuando un caso supera sus permisos?', o: ['Lo cierra', 'Lo escala a N2 con la información registrada', 'Le dice al usuario que llame otro día', 'Lo resuelve igual con la cuenta de un compañero'], c: 1 },
      { q: '¿Qué componente pierde su contenido al apagar la PC?', o: ['SSD', 'HDD', 'RAM', 'BIOS'], c: 2 },
      { q: 'Pitidos al encender y no da video suelen indicar problema en:', o: ['La impresora', 'RAM o placa de video', 'El antivirus', 'La cuenta de Windows'], c: 1 },
      { q: '¿Qué es el POST?', o: ['Un tipo de disco', 'El autodiagnóstico del firmware al encender', 'Un protocolo de red', 'Un programa de Office'], c: 1 },
      { q: 'La mejora más notoria para una PC lenta con HDD suele ser:', o: ['Cambiar el mouse', 'Pasar a SSD', 'Desfragmentar el SSD', 'Cambiar el fondo de pantalla'], c: 1 },
      { q: '¿Qué componente convierte y entrega la energía?', o: ['CPU', 'Fuente (PSU)', 'GPU', 'Motherboard'], c: 1 },
      { q: '¿Cuál de estas preguntas es más útil al empezar un caso?', o: ['¿Probaste comprar otra PC?', '¿Desde cuándo pasa y cambió algo?', '¿Cuál es tu color favorito?', '¿Querés que lo formatee?'], c: 1 },
      { q: 'UEFI, a diferencia de BIOS, permite:', o: ['Secure Boot', 'Imprimir', 'Navegar por internet', 'Usar Excel'], c: 0 }
    ]
  },
  'it-2': {
    title: 'Windows: usuarios, permisos, drivers, actualizaciones', week: 2,
    html: `
<h3>Cuentas de usuario</h3>
<ul><li><b>Local</b>: existe solo en esa PC. <b>Microsoft</b>: se inicia con un mail de Microsoft. <b>De dominio</b>: en empresas, la administra Active Directory / Entra ID y se usa en cualquier PC de la red.</li>
<li><b>Administrador</b> puede instalar y cambiar configuraciones. <b>Estándar</b> no. En empresas los usuarios son estándar: principio de <b>mínimo privilegio</b>.</li>
<li><b>UAC</b> (Control de cuentas de usuario) es la ventana que pide confirmación o credenciales de admin.</li></ul>
<h3>Permisos NTFS</h3>
<p>Cada carpeta tiene permisos: <b>Lectura</b>, <b>Escritura</b>, <b>Lectura y ejecución</b>, <b>Modificar</b> (incluye borrar), <b>Control total</b> (incluye cambiar permisos). Se heredan de la carpeta padre. Si un usuario "no puede guardar en la carpeta compartida", revisás si tiene Escritura o Modificar.</p>
<h3>Drivers</h3>
<p>El driver es el programa que permite a Windows usar un dispositivo. Se gestionan en el <b>Administrador de dispositivos</b> (<code>devmgmt.msc</code>). Un signo de exclamación amarillo indica problema. Opciones: actualizar, <b>revertir</b> (si falló después de actualizar), desinstalar y reiniciar. Bajá drivers siempre del fabricante.</p>
<h3>Actualizaciones</h3>
<p>Windows Update instala parches de seguridad y mejoras. Una actualización pendiente explica muchos "anda lento" o "se reinició solo". Si una actualización rompe algo, se puede desinstalar desde el historial de actualizaciones.</p>
<h3>Herramientas que usa N1 todos los días</h3>
<table><tr><th>Herramienta</th><th>Cómo abrirla</th><th>Para qué</th></tr>
<tr><td>Administrador de tareas</td><td>Ctrl + Shift + Esc</td><td>Procesos, uso de CPU/RAM/disco, programas de inicio</td></tr>
<tr><td>Visor de eventos</td><td><code>eventvwr.msc</code></td><td>Ver errores del sistema con fecha y hora</td></tr>
<tr><td>Administración de equipos</td><td><code>compmgmt.msc</code></td><td>Usuarios, discos, servicios</td></tr>
<tr><td>Servicios</td><td><code>services.msc</code></td><td>Iniciar/detener servicios (ej: cola de impresión)</td></tr>
<tr><td>Comprobador de archivos</td><td><code>sfc /scannow</code> (consola como admin)</td><td>Reparar archivos de sistema dañados</td></tr>
<tr><td>Modo seguro</td><td>Shift + Reiniciar → Solucionar problemas</td><td>Arrancar con lo mínimo para diagnosticar</td></tr></table>`,
    quiz: [
      { q: '¿Qué tipo de cuenta debería tener un usuario común en una empresa?', o: ['Administrador', 'Estándar', 'Invitado con control total', 'La del jefe'], c: 1 },
      { q: '¿Qué permiso NTFS permite cambiar los permisos de una carpeta?', o: ['Lectura', 'Escritura', 'Modificar', 'Control total'], c: 3 },
      { q: 'Después de actualizar un driver la placa de sonido dejó de andar. Lo más rápido es:', o: ['Formatear', 'Revertir el driver', 'Cambiar la placa', 'Desactivar Windows Update'], c: 1 },
      { q: '¿Cómo abrís el Administrador de tareas directo?', o: ['Ctrl + Alt + T', 'Ctrl + Shift + Esc', 'Win + L', 'Alt + F4'], c: 1 },
      { q: '¿Dónde ves errores del sistema con fecha y hora?', o: ['Visor de eventos', 'Paint', 'Bloc de notas', 'Panel de sonido'], c: 0 },
      { q: '¿Qué comando repara archivos de sistema dañados?', o: ['ipconfig', 'sfc /scannow', 'ping', 'dir'], c: 1 },
      { q: 'El signo amarillo en el Administrador de dispositivos indica:', o: ['Dispositivo funcionando bien', 'Problema con el dispositivo o su driver', 'Actualización instalada', 'Virus seguro'], c: 1 },
      { q: 'El principio de dar a cada usuario solo los permisos que necesita se llama:', o: ['Mínimo privilegio', 'Máximo acceso', 'Control total', 'Herencia'], c: 0 }
    ]
  },
  'it-3': {
    title: 'Tickets e ITIL básico', week: 3,
    html: `
<h3>Qué es ITIL</h3>
<p>Un marco de buenas prácticas para gestionar servicios de IT. No hace falta certificarte para empezar, pero en las entrevistas de mesa de ayuda preguntan sus conceptos básicos.</p>
<h3>Los cuatro tipos de registro</h3>
<table><tr><th>Tipo</th><th>Qué es</th><th>Ejemplo</th></tr>
<tr><td><b>Incidente</b></td><td>Algo que funcionaba dejó de funcionar o se degradó</td><td>"No puedo imprimir"</td></tr>
<tr><td><b>Solicitud de servicio</b></td><td>Un pedido estándar, nada está roto</td><td>"Necesito acceso a la carpeta de Ventas"</td></tr>
<tr><td><b>Problema</b></td><td>La causa raíz de uno o varios incidentes</td><td>"La impresora del 2.° piso se cuelga todos los días"</td></tr>
<tr><td><b>Cambio</b></td><td>Modificación planificada de la infraestructura</td><td>"Actualizar el firmware de los switches"</td></tr></table>
<h3>Prioridad = impacto × urgencia</h3>
<p><b>Impacto</b>: a cuánta gente o negocio afecta. <b>Urgencia</b>: qué tan rápido hace daño. Una PC de un usuario sin mail = impacto bajo; el sistema de cobros caído = impacto alto y urgencia alta → prioridad crítica (P1).</p>
<h3>SLA</h3>
<p>El <b>Acuerdo de Nivel de Servicio</b> fija tiempos máximos: de <b>respuesta</b> (cuándo se toma el caso) y de <b>resolución</b>. Ejemplo: P1 respuesta en 15 minutos, resolución en 4 horas. N1 cuida que no se venzan.</p>
<h3>Escalamiento</h3>
<ul><li><b>Funcional</b>: a un equipo con más conocimiento (N2, redes).</li><li><b>Jerárquico</b>: a un supervisor, cuando hay riesgo de incumplir el SLA o un conflicto.</li></ul>
<h3>Ciclo de vida de un ticket</h3>
<p>Nuevo → Asignado → En curso → En espera (del usuario o proveedor) → Resuelto → Cerrado. "Resuelto" no es "Cerrado": se cierra cuando el usuario confirma o pasa el plazo.</p>
<h3>Un buen ticket tiene</h3>
<p>Usuario y contacto · equipo o servicio afectado · descripción en palabras del usuario · pasos que ya se probaron · mensajes de error textuales o capturas · prioridad · qué se hizo y resultado. Escribilo como si lo fuera a leer alguien que no habló con el usuario.</p>
<h3>GLPI</h3>
<p>Es un software libre de mesa de ayuda e inventario. En tu proyecto 1 lo instalás en una máquina virtual y simulás tickets para mostrar que sabés usar uno.</p>`,
    quiz: [
      { q: '"No puedo imprimir" es un:', o: ['Cambio', 'Incidente', 'Problema', 'Solicitud de servicio'], c: 1 },
      { q: '"Necesito acceso a la carpeta de Ventas" es un:', o: ['Incidente', 'Solicitud de servicio', 'Problema', 'Cambio'], c: 1 },
      { q: 'La causa raíz de varios incidentes repetidos se gestiona como:', o: ['Problema', 'Solicitud', 'SLA', 'Cambio de usuario'], c: 0 },
      { q: 'La prioridad se calcula con:', o: ['Antigüedad del usuario × sueldo', 'Impacto × urgencia', 'Hora del día', 'Cantidad de mails'], c: 1 },
      { q: '¿Qué fija un SLA?', o: ['El sueldo del técnico', 'Tiempos máximos de respuesta y resolución', 'El color de los tickets', 'La marca de las PCs'], c: 1 },
      { q: 'Escalar a un supervisor porque se vence el SLA es escalamiento:', o: ['Funcional', 'Jerárquico', 'Lateral', 'Automático'], c: 1 },
      { q: '¿Cuál es la diferencia entre Resuelto y Cerrado?', o: ['Ninguna', 'Cerrado es cuando el usuario confirma o pasa el plazo', 'Resuelto es cuando se borra', 'Cerrado es antes de Resuelto'], c: 1 },
      { q: '¿Qué NO debería faltar en un ticket?', o: ['Pasos ya probados y mensaje de error', 'Tu opinión del usuario', 'Un chiste', 'Tu contraseña'], c: 0 }
    ]
  },
  'it-4': {
    title: 'Atención al usuario técnico y documentación', week: 4,
    html: `
<h3>Método de resolución de problemas</h3>
<p>Un método ordenado evita dar vueltas y es lo que buscan en las entrevistas. El más difundido tiene 7 pasos:</p>
<ol><li><b>Identificar el problema</b>: preguntar, reproducir, revisar cambios recientes.</li>
<li><b>Armar una teoría</b> de la causa probable (empezá por lo obvio: cable, energía, contraseña).</li>
<li><b>Probar la teoría</b>. Si no se confirma, armá otra o escalá.</li>
<li><b>Planificar la solución</b> y ver qué puede afectar.</li><li><b>Aplicarla</b> (o escalar).</li>
<li><b>Verificar</b> que todo funciona y aplicar medidas para que no se repita.</li><li><b>Documentar</b> hallazgos, acciones y resultado.</li></ol>
<h3>Comunicación con el usuario</h3>
<ul><li><b>Escucha activa</b>: dejá que termine, repetí con tus palabras: <i>"Entonces, desde esta mañana Outlook no te abre, ¿es así?"</i></li>
<li><b>Sin jerga</b>: "reiniciá el router" sí; "renová el lease DHCP" no.</li>
<li><b>Empatía</b>: <i>"Entiendo que lo necesitás para trabajar, lo vemos ya."</i></li>
<li><b>Expectativas claras</b>: decí qué vas a hacer y cuándo vuelve a tener noticias. Nunca prometas lo que no controlás.</li>
<li><b>Paso a paso</b>: una instrucción por vez y confirmá: <i>"¿Ya ves el ícono de la ruedita?"</i></li></ul>
<h3>Usuario enojado</h3>
<p>No lo tomes personal, bajá la velocidad, reconocé la molestia, enfocate en lo que sí podés hacer y dale un próximo paso concreto.</p>
<h3>Base de conocimiento (KB)</h3>
<p>Un artículo de KB evita resolver dos veces lo mismo. Estructura:</p>
<ol><li>Título con el síntoma, como lo diría el usuario: "Outlook no abre y se queda en Cargando perfil".</li><li>A quién aplica (versión, sistema).</li><li>Causa.</li><li>Solución paso a paso, con capturas.</li><li>Cómo verificar que funcionó.</li><li>Cuándo escalar si no funciona.</li></ol>`,
    quiz: [
      { q: '¿Cuál es el primer paso del método?', o: ['Formatear', 'Identificar el problema', 'Documentar', 'Escalar'], c: 1 },
      { q: 'Si tu teoría no se confirma:', o: ['Cerrás el ticket', 'Armás otra teoría o escalás', 'Le decís al usuario que es su culpa', 'Reinstalás Windows'], c: 1 },
      { q: '¿Qué es escucha activa?', o: ['Interrumpir para ganar tiempo', 'Dejar terminar y repetir con tus palabras', 'Escuchar música mientras atendés', 'Grabar la llamada'], c: 1 },
      { q: 'Lo correcto con un usuario no técnico es:', o: ['Usar siglas para sonar profesional', 'Dar una instrucción por vez y confirmar', 'Pedirle que lea el manual', 'Dar diez pasos juntos'], c: 1 },
      { q: '¿Cuál es el último paso del método?', o: ['Documentar', 'Teoría', 'Reiniciar', 'Escalar'], c: 0 },
      { q: 'El título de un artículo de KB debería:', o: ['Ser un código interno', 'Describir el síntoma como lo diría el usuario', 'Tener tu nombre', 'Ser lo más corto posible, una palabra'], c: 1 },
      { q: 'Con un usuario enojado conviene:', o: ['Responder con el mismo tono', 'Reconocer la molestia y dar un próximo paso concreto', 'Cortar', 'Ponerlo en espera largo'], c: 1 },
      { q: '¿Qué NO conviene hacer?', o: ['Explicar qué vas a hacer', 'Prometer un plazo que no controlás', 'Verificar con el usuario', 'Documentar'], c: 1 }
    ]
  },
  'it-5': {
    title: 'IP, máscara, DHCP, DNS y puerta de enlace', week: 5,
    html: `
<h3>Dirección IP</h3>
<p>Identifica a un equipo en una red. IPv4 son 4 números de 0 a 255: <code>192.168.1.15</code>. Cada equipo de la misma red necesita una IP distinta; si dos coinciden hay <b>conflicto de IP</b>.</p>
<h3>Rangos privados</h3>
<p>Se usan dentro de casas y oficinas y no salen a internet directamente: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, <code>192.168.0.0/16</code>. El router traduce entre la red privada y la IP pública (eso es <b>NAT</b>).</p>
<h3>Máscara de subred</h3>
<p>Indica qué parte de la IP es la red y qué parte el equipo. La más común es <code>255.255.255.0</code> = <b>/24</b>: los primeros tres números son la red y el último el equipo, así que en <code>192.168.1.0/24</code> entran equipos de .1 a .254 (el .0 es la red y el .255 es broadcast). Dos equipos se hablan directo solo si están en la misma red.</p>
<h3>Puerta de enlace (gateway)</h3>
<p>Es el equipo al que se manda todo lo que no es de la red local; casi siempre el router (<code>192.168.1.1</code> por ejemplo). Sin gateway correcto: ves la red local pero no internet.</p>
<h3>DHCP</h3>
<p>El servidor DHCP (normalmente el router) <b>reparte automáticamente</b> IP, máscara, gateway y DNS. Si una PC no recibe respuesta del DHCP, Windows se pone una IP <code>169.254.x.x</code> (<b>APIPA</b>). Ver una 169.254 = problema de DHCP o de conexión física.</p>
<h3>DNS</h3>
<p>Traduce nombres a IPs: <code>google.com</code> → una IP. Si "anda WhatsApp pero no abren las páginas" o "ping a 8.8.8.8 anda pero a google.com no", sospechá del DNS.</p>
<h3>IP fija vs. reserva DHCP</h3>
<p>Impresoras y servidores necesitan siempre la misma IP. Lo prolijo es una <b>reserva DHCP</b> (el router siempre le da la misma por su MAC) en vez de configurarla a mano en el equipo.</p>
<h3>MAC</h3>
<p>Dirección física de la placa de red, grabada de fábrica, formato <code>AA:BB:CC:11:22:33</code>. La IP puede cambiar, la MAC no.</p>`,
    quiz: [
      { q: '¿Cuál es una IP privada?', o: ['8.8.8.8', '192.168.1.20', '200.45.10.3', '1.1.1.1'], c: 1 },
      { q: '/24 equivale a la máscara:', o: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'], c: 2 },
      { q: 'Una PC con IP 169.254.10.5 indica:', o: ['Todo funciona', 'Que no recibió IP del DHCP', 'Que tiene IP pública', 'Que el DNS anda bien'], c: 1 },
      { q: '¿Qué servicio traduce nombres a IPs?', o: ['DHCP', 'DNS', 'NAT', 'MAC'], c: 1 },
      { q: 'Ves la red local pero no internet. Revisás primero:', o: ['La puerta de enlace', 'El mouse', 'La impresora', 'El fondo de pantalla'], c: 0 },
      { q: 'Ping a 8.8.8.8 anda pero a google.com no. Sospechás de:', o: ['El cable', 'El DNS', 'La RAM', 'El monitor'], c: 1 },
      { q: 'Para que una impresora tenga siempre la misma IP lo más prolijo es:', o: ['Reiniciarla todos los días', 'Una reserva DHCP', 'Usar APIPA', 'Cambiarle la MAC'], c: 1 },
      { q: '¿Qué dirección viene grabada de fábrica en la placa de red?', o: ['IP', 'MAC', 'DNS', 'Gateway'], c: 1 }
    ]
  },
  'it-6': {
    title: 'Comandos de red: ping, ipconfig, tracert, nslookup', week: 6,
    html: `
<h3>ipconfig</h3>
<ul><li><code>ipconfig</code>: IP, máscara y gateway de cada adaptador.</li><li><code>ipconfig /all</code>: además MAC, DNS, si DHCP está activo y servidor DHCP.</li>
<li><code>ipconfig /release</code> y <code>ipconfig /renew</code>: suelta y pide una IP nueva al DHCP.</li><li><code>ipconfig /flushdns</code>: borra la caché de DNS (sirve cuando una página cambió de IP).</li></ul>
<h3>ping</h3>
<p>Manda paquetes y mide si vuelven y cuánto tardan. <code>ping 8.8.8.8</code>. Resultados: "Respuesta desde..." = hay conexión; "Tiempo de espera agotado" = no responde (puede ser un firewall que bloquea ping); "Host de destino inaccesible" = no hay ruta.</p>
<h3>tracert</h3>
<p><code>tracert google.com</code> muestra cada salto (router) en el camino. Sirve para ver <b>dónde</b> se corta: si muere en el primer salto, el problema está en tu red; si llega lejos, es del proveedor o del destino.</p>
<h3>nslookup</h3>
<p><code>nslookup google.com</code> consulta al DNS y devuelve la IP. Si falla, el problema es de resolución de nombres. <code>nslookup google.com 8.8.8.8</code> pregunta a un DNS específico para comparar.</p>
<h3>Otros útiles</h3>
<ul><li><code>netstat -an</code>: conexiones y puertos abiertos.</li><li><code>getmac</code>: MACs del equipo.</li><li>En PowerShell: <code>Test-NetConnection google.com -Port 443</code> prueba si un puerto responde.</li></ul>
<h3>El orden para "no anda internet"</h3>
<ol><li>¿Cable conectado / Wi-Fi conectado? ¿Le pasa a otros?</li><li><code>ipconfig</code>: ¿tiene IP válida o una 169.254?</li>
<li><code>ping</code> al gateway (ej. 192.168.1.1): ¿llega al router?</li><li><code>ping 8.8.8.8</code>: ¿sale a internet?</li>
<li><code>ping google.com</code> o <code>nslookup</code>: ¿resuelve nombres?</li><li>Si todo anda: el problema es del navegador, proxy o la página.</li></ol>
<p>Ir de lo más cercano a lo más lejano es lo que te ordena la cabeza (y lo que querés mostrar en una entrevista).</p>`,
    quiz: [
      { q: '¿Qué comando muestra la MAC y los servidores DNS?', o: ['ipconfig', 'ipconfig /all', 'ping', 'tracert'], c: 1 },
      { q: 'Para pedir una IP nueva al DHCP:', o: ['ipconfig /flushdns', 'ipconfig /release y /renew', 'nslookup', 'netstat'], c: 1 },
      { q: '¿Qué comando muestra cada salto del camino?', o: ['tracert', 'ping', 'getmac', 'ipconfig'], c: 0 },
      { q: '"Tiempo de espera agotado" en ping puede deberse a:', o: ['Un firewall que bloquea ping', 'Que todo anda perfecto', 'Que falta tinta', 'Exceso de RAM'], c: 0 },
      { q: '¿Qué comando consulta al DNS?', o: ['nslookup', 'tracert', 'sfc', 'chkdsk'], c: 0 },
      { q: 'En el orden de diagnóstico, después de ver que hay IP válida hacés:', o: ['ping al gateway', 'formatear', 'ping google.com', 'cambiar el router'], c: 0 },
      { q: 'ping 8.8.8.8 anda, ping google.com falla. El problema es de:', o: ['Cable', 'Resolución de nombres (DNS)', 'Placa de red', 'Energía'], c: 1 },
      { q: 'Una página cambió de servidor y la PC sigue yendo a la IP vieja. Probás:', o: ['ipconfig /flushdns', 'getmac', 'netstat -an', 'tracert'], c: 0 }
    ]
  },
  'it-7': {
    title: 'Router, switch, wifi e impresoras en red', week: 7,
    html: `
<h3>Los equipos</h3>
<table><tr><th>Equipo</th><th>Qué hace</th></tr>
<tr><td><b>Módem / ONT</b></td><td>Convierte la señal del proveedor (cable, fibra) a red Ethernet</td></tr>
<tr><td><b>Router</b></td><td>Conecta redes distintas (tu red con internet), hace NAT y suele dar DHCP</td></tr>
<tr><td><b>Switch</b></td><td>Conecta muchos equipos dentro de la misma red, usando las MAC</td></tr>
<tr><td><b>Access point</b></td><td>Da Wi-Fi a la red cableada</td></tr>
<tr><td><b>Firewall</b></td><td>Filtra el tráfico según reglas</td></tr></table>
<p>En casa, el "router" del proveedor suele hacer todo eso en un solo aparato.</p>
<h3>Cables</h3>
<p>UTP con conector RJ45. <b>Cat 5e</b> soporta 1 Gbps; <b>Cat 6</b> también, con mejor margen y hasta 10 Gbps en distancias cortas. Distancia máxima típica de un tramo Ethernet: 100 metros.</p>
<h3>Wi-Fi: 2.4 GHz vs 5 GHz</h3>
<ul><li><b>2.4 GHz</b>: llega más lejos y atraviesa mejor paredes, pero es más lento y tiene más interferencia (vecinos, microondas).</li>
<li><b>5 GHz</b>: más rápido y con menos interferencia, menor alcance.</li><li>Seguridad: usar <b>WPA2 o WPA3</b>. Nunca WEP ni red abierta.</li></ul>
<h3>Impresoras en red</h3>
<p>Problemas más comunes en N1 y qué revisar:</p>
<ol><li>¿Está prendida, con papel, sin atasco y en línea?</li><li>¿La IP de la impresora cambió? (por eso se usa reserva DHCP)</li>
<li>¿La cola tiene un trabajo trabado? Cancelarlo.</li><li>Si la cola no se limpia: reiniciar el servicio <b>Cola de impresión</b> (Print Spooler) desde <code>services.msc</code>, o en consola como admin <code>net stop spooler</code> y <code>net start spooler</code>.</li>
<li>Driver correcto para el modelo y el Windows.</li></ol>
<h3>Lo que vas a armar</h3>
<p>En Packet Tracer simulás una oficina: router, switch, access point, PCs, impresora. Configurás DHCP en el router con una reserva para la impresora y probás con ping que todos se vean.</p>`,
    quiz: [
      { q: '¿Qué equipo conecta tu red con internet y hace NAT?', o: ['Switch', 'Router', 'Mouse', 'Access point'], c: 1 },
      { q: '¿Qué equipo conecta muchos equipos dentro de la misma red?', o: ['Switch', 'Módem', 'Impresora', 'DNS'], c: 0 },
      { q: 'La banda que llega más lejos pero es más lenta:', o: ['5 GHz', '2.4 GHz', '6 GHz', 'Bluetooth'], c: 1 },
      { q: '¿Qué seguridad Wi-Fi corresponde usar?', o: ['WEP', 'Red abierta', 'WPA2 o WPA3', 'Ninguna'], c: 2 },
      { q: 'Distancia máxima típica de un tramo de cable Ethernet:', o: ['10 m', '100 m', '1 km', '5 km'], c: 1 },
      { q: 'La cola de impresión no se limpia. Reiniciás el servicio:', o: ['DHCP', 'Print Spooler (Cola de impresión)', 'Windows Update', 'Explorador'], c: 1 },
      { q: 'La impresora dejó de imprimir para todos después de un corte de luz. Sospechás:', o: ['Que cambió su IP', 'Que la RAM falló', 'Que el usuario borró Office', 'Que el DNS de Google cayó'], c: 0 },
      { q: '¿Qué aparato convierte la señal de fibra del proveedor a Ethernet?', o: ['Switch', 'ONT / módem', 'Access point', 'Firewall'], c: 1 }
    ]
  },
  'it-8': {
    title: 'Seguridad básica: contraseñas, phishing, backups', week: 8,
    html: `
<h3>Contraseñas y MFA</h3>
<ul><li>Largas mejor que complicadas: una frase de 4 o 5 palabras es más difícil de adivinar que <i>P@ss1</i>.</li>
<li>Una contraseña distinta por servicio. Usar un <b>gestor de contraseñas</b>.</li>
<li><b>MFA</b> (autenticación multifactor): algo que sabés (contraseña) + algo que tenés (app de códigos, llave) o que sos (huella). Bloquea la mayoría de los robos de cuenta.</li>
<li>Regla de oro de soporte: <b>nunca pedir la contraseña al usuario</b>. Se resetea, no se pregunta.</li></ul>
<h3>Phishing</h3>
<p>Mensajes que se hacen pasar por alguien confiable para robar datos o instalar malware. Señales:</p>
<ul><li>Urgencia o amenaza: "tu cuenta se bloquea en 24 h".</li><li>Remitente raro o dominio parecido: <i>micros0ft-support.com</i>.</li>
<li>Links que al pasar el mouse muestran otra dirección.</li><li>Adjuntos inesperados (.zip, .exe, documentos que piden "habilitar macros").</li><li>Pedidos de datos o contraseñas.</li></ul>
<p>Variantes: <b>vishing</b> (por teléfono) y <b>smishing</b> (por SMS). En un call center vas a ver vishing: alguien que llama haciéndose pasar por el titular. Por eso existe la verificación de identidad.</p>
<h3>Ingeniería social en soporte</h3>
<p>"Soy el gerente, reseteame la clave ya que estoy apurado." Se sigue el procedimiento de verificación igual, sin importar quién diga ser.</p>
<h3>Backups: regla 3-2-1</h3>
<p><b>3</b> copias de los datos, en <b>2</b> medios distintos, con <b>1</b> fuera del lugar (otra ubicación o la nube). Y lo más olvidado: <b>probar restaurar</b>. Un backup que nunca se probó no es un backup confiable.</p>
<h3>Malware y ransomware</h3>
<p>El ransomware cifra los archivos y pide rescate. Si sospechás un equipo infectado: <b>desconectarlo de la red</b> (cable y Wi-Fi), no apagarlo si podés evitarlo, y escalar a seguridad. La defensa: actualizaciones al día, mínimo privilegio, backups y usuarios atentos.</p>`,
    quiz: [
      { q: '¿Qué protege más contra el robo de cuentas?', o: ['Cambiar el fondo', 'Activar MFA', 'Usar la misma clave en todo', 'Anotarla en la pantalla'], c: 1 },
      { q: 'Un usuario te dice su contraseña para "ayudarte". Lo correcto:', o: ['Usarla', 'No usarla y resetearla por el procedimiento', 'Guardarla', 'Pasarla al compañero'], c: 1 },
      { q: '¿Cuál es señal de phishing?', o: ['Urgencia y link a un dominio parecido', 'Un mail de tu jefe sobre una reunión que ya conocías', 'Un recibo de sueldo en el sistema habitual', 'Una newsletter a la que te suscribiste'], c: 0 },
      { q: 'Phishing por teléfono se llama:', o: ['Smishing', 'Vishing', 'Spam', 'Spoofing de MAC'], c: 1 },
      { q: 'La regla 3-2-1 de backups significa:', o: ['3 copias, 2 medios, 1 fuera del lugar', '3 discos, 2 PCs, 1 usuario', '3 días, 2 horas, 1 minuto', '3 contraseñas, 2 mails, 1 SMS'], c: 0 },
      { q: 'Lo que más se olvida con los backups es:', o: ['Comprar discos', 'Probar restaurar', 'Ponerles nombre', 'Hacerlos'], c: 1 },
      { q: 'Sospechás ransomware en una PC. Primero:', o: ['Desconectarla de la red y escalar', 'Pagar el rescate', 'Seguir trabajando', 'Abrir más archivos'], c: 0 },
      { q: 'Alguien que dice ser gerente pide un reseteo sin verificación:', o: ['Se lo hacés porque es gerente', 'Seguís el procedimiento de verificación igual', 'Le das tu clave', 'Cortás sin explicar'], c: 1 }
    ]
  },
  'it-9': {
    title: 'PowerShell: comandos, variables y pipeline', week: 9,
    html: `
<h3>Qué es</h3>
<p>La consola y lenguaje de automatización de Windows. A diferencia del CMD, trabaja con <b>objetos</b> (con propiedades), no solo texto. Saber lo básico te diferencia mucho en N1.</p>
<h3>Cmdlets: Verbo-Sustantivo</h3>
<p>Todos los comandos siguen el patrón <code>Verbo-Sustantivo</code>: <code>Get-Process</code>, <code>Get-Service</code>, <code>Stop-Process</code>, <code>Restart-Service</code>, <code>Get-ChildItem</code> (listar archivos).</p>
<h3>Los tres para no perderte</h3>
<ul><li><code>Get-Help Get-Service -Examples</code>: ayuda con ejemplos.</li><li><code>Get-Command *service*</code>: buscar comandos.</li>
<li><code>Get-Service | Get-Member</code>: ver qué propiedades tiene un objeto.</li></ul>
<h3>Pipeline</h3>
<p>El <code>|</code> pasa los objetos de un comando al siguiente.</p>
<pre>Get-Service | Where-Object Status -eq 'Stopped'
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU</pre>
<p>La primera lista los servicios detenidos; la segunda, los 5 procesos que más CPU usaron.</p>
<h3>Comparadores</h3>
<p><code>-eq</code> (igual), <code>-ne</code> (distinto), <code>-gt</code> (mayor), <code>-lt</code> (menor), <code>-like</code> (comodín *), <code>-match</code> (expresión regular). En PowerShell no se usa <code>==</code> ni <code>&gt;</code> para comparar.</p>
<h3>Variables</h3>
<pre>$nombre = 'Alex'
$servicios = Get-Service
$servicios.Count</pre>
<p>Empiezan con <code>$</code>. Pueden guardar objetos enteros.</p>
<h3>Comandos útiles de soporte</h3>
<ul><li><code>Get-ComputerInfo</code>: datos del equipo.</li><li><code>Restart-Service -Name Spooler</code>: reiniciar la cola de impresión (como admin).</li>
<li><code>Get-NetIPAddress</code>, <code>Test-Connection 8.8.8.8</code>: red.</li><li><code>Get-Volume</code>: discos y espacio libre.</li></ul>
<h3>Seguridad</h3>
<p>Nunca corras un comando copiado de internet que no entiendas. Abrí PowerShell como administrador solo cuando haga falta.</p>`,
    quiz: [
      { q: 'Los cmdlets siguen el formato:', o: ['Sustantivo_Verbo', 'Verbo-Sustantivo', 'verbo.sustantivo', 'Cualquiera'], c: 1 },
      { q: 'Para ver ejemplos de un comando:', o: ['Get-Help <comando> -Examples', 'Show-Me', 'help please', 'Get-Examples'], c: 0 },
      { q: '¿Qué hace el símbolo | ?', o: ['Comenta la línea', 'Pasa objetos al siguiente comando', 'Divide números', 'Cierra la consola'], c: 1 },
      { q: 'El comparador "igual a" en PowerShell es:', o: ['==', '-eq', '=', 'equals'], c: 1 },
      { q: 'Las variables empiezan con:', o: ['#', '$', '@', '%'], c: 1 },
      { q: '¿Qué hace Get-Service | Where-Object Status -eq "Stopped"?', o: ['Detiene todos los servicios', 'Lista los servicios detenidos', 'Borra servicios', 'Reinicia la PC'], c: 1 },
      { q: '¿Qué comando muestra las propiedades de un objeto?', o: ['Get-Member', 'Get-Props', 'Show-Object', 'Get-Info'], c: 0 },
      { q: 'PowerShell, a diferencia de CMD, trabaja con:', o: ['Solo texto', 'Objetos con propiedades', 'Imágenes', 'Sonido'], c: 1 }
    ]
  },
  'it-10': {
    title: 'PowerShell: scripts, condiciones y archivos', week: 10,
    html: `
<h3>Scripts .ps1</h3>
<p>Un script es un archivo de texto con extensión <code>.ps1</code>. Se corre con <code>.\\mi-script.ps1</code>. Por seguridad, Windows puede bloquear scripts según la <b>política de ejecución</b>. Para tu usuario: <code>Set-ExecutionPolicy -Scope CurrentUser RemoteSigned</code> (permite tus scripts locales y exige firma a los descargados). No la desactives del todo.</p>
<h3>Condiciones</h3>
<pre>$libre = (Get-Volume -DriveLetter C).SizeRemaining / 1GB
if ($libre -lt 10) {
    Write-Host "Poco espacio: $([math]::Round($libre,1)) GB" -ForegroundColor Red
} else {
    Write-Host "Espacio OK"
}</pre>
<h3>Bucles</h3>
<pre>$equipos = '8.8.8.8', '1.1.1.1', '192.168.1.1'
foreach ($ip in $equipos) {
    $ok = Test-Connection $ip -Count 1 -Quiet
    "$ip responde: $ok"
}</pre>
<h3>Funciones</h3>
<pre>function Get-Uptime {
    $os = Get-CimInstance Win32_OperatingSystem
    (Get-Date) - $os.LastBootUpTime
}</pre>
<p>Agrupar código en funciones lo hace reutilizable y legible.</p>
<h3>Información del sistema con CIM</h3>
<ul><li><code>Get-CimInstance Win32_OperatingSystem</code>: versión, memoria, último arranque.</li><li><code>Get-CimInstance Win32_LogicalDisk</code>: discos y espacio.</li>
<li><code>Get-CimInstance Win32_Processor</code>: CPU.</li><li><code>Get-CimInstance Win32_ComputerSystem</code>: fabricante, modelo, RAM total.</li></ul>
<h3>Guardar resultados</h3>
<ul><li><code>... | Out-File reporte.txt</code>: texto.</li><li><code>... | Export-Csv reporte.csv -NoTypeInformation</code>: tabla para Excel.</li><li><code>... | ConvertTo-Html | Out-File reporte.html</code>: página.</li></ul>
<h3>Buenas prácticas</h3>
<p>Comentarios con <code>#</code>, nombres de variables claros, probar en tu PC antes de usarlo en la de un usuario, y manejar errores con <code>try { } catch { }</code>.</p>`,
    quiz: [
      { q: 'La extensión de un script de PowerShell es:', o: ['.bat', '.ps1', '.exe', '.psx'], c: 1 },
      { q: 'Para permitir tus scripts locales sin desactivar la seguridad:', o: ['Set-ExecutionPolicy -Scope CurrentUser RemoteSigned', 'Set-ExecutionPolicy Unrestricted para todos', 'Desinstalar Windows Defender', 'Renombrar a .txt'], c: 0 },
      { q: '¿Qué estructura repite código para cada elemento de una lista?', o: ['if', 'foreach', 'function', 'try'], c: 1 },
      { q: '¿Qué clase CIM muestra discos y espacio?', o: ['Win32_LogicalDisk', 'Win32_Printer', 'Win32_Mouse', 'Win32_Sound'], c: 0 },
      { q: 'Para exportar una tabla que se abra en Excel:', o: ['Out-Host', 'Export-Csv', 'Write-Host', 'Clear-Host'], c: 1 },
      { q: 'El último arranque del equipo está en:', o: ['Win32_OperatingSystem LastBootUpTime', 'Get-Date', 'Get-Volume', 'Win32_Processor'], c: 0 },
      { q: 'Para manejar errores se usa:', o: ['try / catch', 'if / else', 'foreach', 'Out-File'], c: 0 },
      { q: 'Los comentarios en PowerShell empiezan con:', o: ['//', '#', '--', ';'], c: 1 }
    ]
  },
  'it-11': {
    title: 'Python básico para automatizar', week: 11,
    html: `
<h3>Por qué Python si ya tenés PowerShell</h3>
<p>Python corre en Windows, Linux y Mac, es el lenguaje más usado para automatización e IA, y lo vas a necesitar para el clasificador de tickets. Ya tenés base de programación: esto es un repaso orientado a soporte.</p>
<h3>Lo esencial</h3>
<pre>nombre = "Alex"              # str
tickets = 20                 # int
activo = True                # bool
equipos = ["pc1", "pc2"]     # list
usuario = {"nombre": "Ana", "piso": 2}   # dict

for e in equipos:
    print(f"Revisando {e}")

if tickets > 10:
    print("Mucho trabajo")

def saludar(n):
    return f"Hola {n}"</pre>
<p>La indentación (4 espacios) define los bloques. Los f-strings (<code>f"..."</code>) insertan variables.</p>
<h3>Archivos</h3>
<pre>with open("reporte.txt", "w", encoding="utf-8") as f:
    f.write("Reporte del equipo\\n")</pre>
<p><code>with</code> cierra el archivo solo. Modos: <code>"r"</code> leer, <code>"w"</code> escribir (pisa), <code>"a"</code> agregar al final.</p>
<h3>Módulos útiles para soporte</h3>
<ul><li><code>platform</code>: sistema y versión → <code>platform.system()</code>, <code>platform.node()</code> (nombre del equipo).</li>
<li><code>shutil.disk_usage("C:\\\\")</code>: espacio total, usado y libre.</li><li><code>socket</code>: nombre e IP del equipo.</li>
<li><code>subprocess.run(["ping", "-n", "1", "8.8.8.8"], capture_output=True, text=True)</code>: correr comandos.</li>
<li><code>csv</code> y <code>json</code>: leer y escribir datos.</li><li><code>datetime</code>: fechas en los reportes.</li></ul>
<h3>Entornos virtuales y paquetes</h3>
<p><code>python -m venv .venv</code> crea un entorno aislado por proyecto; <code>pip install requests</code> instala paquetes dentro. Así no rompés otros proyectos.</p>
<h3>Errores</h3>
<pre>try:
    total = int(texto)
except ValueError:
    print("No es un número")</pre>`,
    quiz: [
      { q: '¿Qué define los bloques de código en Python?', o: ['Llaves {}', 'La indentación', 'Punto y coma', 'Paréntesis'], c: 1 },
      { q: '{"nombre": "Ana"} es un:', o: ['list', 'dict', 'int', 'bool'], c: 1 },
      { q: 'El modo para agregar al final de un archivo sin borrar lo que hay:', o: ['"w"', '"r"', '"a"', '"x"'], c: 2 },
      { q: '¿Para qué sirve "with open(...)"?', o: ['Abre y cierra el archivo automáticamente', 'Borra el archivo', 'Lo encripta', 'Lo sube a internet'], c: 0 },
      { q: '¿Qué función da el espacio libre del disco?', o: ['shutil.disk_usage', 'platform.system', 'print', 'len'], c: 0 },
      { q: 'Para correr un comando del sistema desde Python:', o: ['subprocess.run', 'os.print', 'json.load', 'csv.writer'], c: 0 },
      { q: '¿Para qué sirve un entorno virtual (venv)?', o: ['Aislar los paquetes de cada proyecto', 'Hacer la PC más rápida', 'Crear una máquina virtual', 'Navegar seguro'], c: 0 },
      { q: 'Para manejar un error se usa:', o: ['try / except', 'if / else', 'for / in', 'def / return'], c: 0 }
    ]
  },
  'it-12': {
    title: 'Git y GitHub: commits, ramas y README', week: 12,
    html: `
<h3>Qué es</h3>
<p><b>Git</b> guarda la historia de cambios de un proyecto. <b>GitHub</b> es donde subís esos proyectos a internet: es tu portfolio. Un reclutador técnico mira tu GitHub.</p>
<h3>El flujo básico</h3>
<pre>git init                      # empieza a seguir la carpeta
git status                    # qué cambió
git add archivo.ps1           # prepara el cambio (o: git add .)
git commit -m "Agrega chequeo de disco"
git log --oneline             # historia</pre>
<p>Tres zonas: <b>directorio de trabajo</b> (tus archivos) → <b>staging</b> (lo que agregaste con add) → <b>repositorio</b> (lo guardado con commit).</p>
<h3>Buenos commits</h3>
<p>Pequeños y con mensaje que diga <b>qué</b> hace el cambio: <i>"Agrega exportación a CSV"</i>, no <i>"cambios"</i> ni <i>"asdf"</i>.</p>
<h3>Ramas</h3>
<pre>git switch -c reporte-html    # crea una rama y se pasa a ella
# ... trabajás y hacés commits ...
git switch main
git merge reporte-html</pre>
<p>Las ramas permiten probar algo sin romper lo que anda.</p>
<h3>Subir a GitHub</h3>
<pre>git remote add origin https://github.com/TU_USUARIO/diagnostico-pc.git
git push -u origin main</pre>
<p>Después, solo <code>git push</code>. Para bajar cambios: <code>git pull</code>.</p>
<h3>.gitignore</h3>
<p>Archivo que lista lo que <b>no</b> se sube: <code>.venv/</code>, reportes generados, y sobre todo <b>contraseñas, claves y archivos .env</b>. Subir un secreto a GitHub público es un error grave: aunque lo borres después, queda en la historia.</p>
<h3>README</h3>
<p>Es la portada del proyecto. Debe tener: qué problema resuelve, captura o ejemplo de salida, cómo instalarlo y usarlo, tecnologías, qué aprendiste y limitaciones. Un buen README vale más que mucho código.</p>`,
    quiz: [
      { q: '¿Qué comando muestra qué archivos cambiaron?', o: ['git status', 'git push', 'git init', 'git merge'], c: 0 },
      { q: 'El orden correcto para guardar un cambio:', o: ['commit → add', 'add → commit', 'push → add', 'init → merge'], c: 1 },
      { q: '¿Cuál es un buen mensaje de commit?', o: ['"cambios"', '"asdf"', '"Agrega exportación a CSV"', '"..."'], c: 2 },
      { q: '¿Para qué sirven las ramas?', o: ['Probar cambios sin romper lo que anda', 'Borrar el proyecto', 'Comprimir archivos', 'Cambiar de usuario'], c: 0 },
      { q: '¿Qué comando sube tus commits a GitHub?', o: ['git pull', 'git push', 'git log', 'git add'], c: 1 },
      { q: '¿Qué NUNCA debe subirse a un repo público?', o: ['El README', 'Contraseñas y archivos .env', 'Scripts', 'Capturas'], c: 1 },
      { q: '¿Qué archivo indica qué no subir?', o: ['README.md', '.gitignore', 'LICENSE', 'main.py'], c: 1 },
      { q: 'La portada de un proyecto en GitHub es:', o: ['El README', 'El primer commit', 'La rama main', 'El .gitignore'], c: 0 }
    ]
  },
  'it-13': {
    title: 'Prompts bien hechos, límites y riesgos de la IA', week: 13,
    html: `
<h3>Lo que buscan las empresas</h3>
<p>No alcanza con "saber usar ChatGPT". Valoran a quien <b>aplica la IA a un problema concreto, mide el resultado y conoce sus límites</b>.</p>
<h3>Anatomía de un buen prompt</h3>
<ol><li><b>Rol</b>: "Sos un técnico de soporte N1 con experiencia en Windows."</li><li><b>Contexto</b>: quién es el usuario, qué equipo, qué ya se probó.</li>
<li><b>Tarea concreta</b>: "Proponé 5 pasos de diagnóstico ordenados de más simple a más complejo."</li>
<li><b>Formato de salida</b>: lista, tabla, JSON, cantidad de palabras.</li><li><b>Ejemplos</b> (few-shot): uno o dos casos resueltos como querés que responda.</li>
<li><b>Restricciones</b>: "Si no sabés, decilo. No inventes comandos."</li></ol>
<h3>Técnicas</h3>
<ul><li>Pedir que pregunte lo que falta antes de responder.</li><li>Dividir tareas grandes en pasos.</li>
<li>Pedir salida estructurada (JSON) cuando un programa va a leer la respuesta.</li><li>Iterar: mirar la respuesta, ajustar el prompt, volver a probar.</li></ul>
<h3>Límites</h3>
<ul><li><b>Alucinaciones</b>: la IA puede inventar comandos, parámetros o datos con total seguridad. Todo comando se verifica en la documentación oficial antes de correrlo.</li>
<li>Información desactualizada según cuándo se entrenó el modelo.</li><li>No reemplaza tu criterio: vos sos responsable de lo que hacés en la PC del usuario.</li></ul>
<h3>Riesgos y privacidad</h3>
<p>Nunca pegues en una IA pública: contraseñas, datos personales de clientes, información interna de la empresa. Si tenés que analizar un ticket real, anonimizalo (reemplazá nombres, mails, IPs). Seguí siempre la política de IA de la empresa.</p>
<h3>Comparar prompts</h3>
<p>Para tu entregable: elegí 5 tareas de soporte, probá 2 versiones de prompt para cada una y anotá cuál dio mejor resultado y por qué. Eso es exactamente "medir", lo que te diferencia.</p>`,
    quiz: [
      { q: '¿Qué valoran hoy las empresas sobre IA?', o: ['Saber que existe ChatGPT', 'Aplicarla a un problema, medir y conocer límites', 'Usarla para todo sin revisar', 'No usarla'], c: 1 },
      { q: 'Dar uno o dos ejemplos resueltos en el prompt se llama:', o: ['Few-shot', 'Phishing', 'Fine-tuning', 'Debug'], c: 0 },
      { q: 'Una "alucinación" es cuando la IA:', o: ['Se apaga', 'Inventa datos o comandos con seguridad', 'Tarda mucho', 'Responde en otro idioma'], c: 1 },
      { q: 'Antes de correr un comando que sugirió la IA:', o: ['Lo corrés como admin', 'Lo verificás en la documentación oficial', 'Lo mandás a todos', 'Lo ignorás siempre'], c: 1 },
      { q: '¿Qué NO pegar en una IA pública?', o: ['Una pregunta general de Windows', 'Contraseñas y datos de clientes', 'Un error genérico anonimizado', 'Un tema de estudio'], c: 1 },
      { q: 'Si un programa va a leer la respuesta conviene pedir:', o: ['Un poema', 'Salida estructurada en JSON', 'Emojis', 'Respuesta larga libre'], c: 1 },
      { q: 'Pedirle que diga "no sé" si no sabe es una:', o: ['Restricción', 'Alucinación', 'Variable', 'Rama'], c: 0 },
      { q: 'Para analizar un ticket real con IA externa primero:', o: ['Lo anonimizás', 'Agregás la contraseña del usuario', 'Lo publicás', 'Nada'], c: 0 }
    ]
  },
  'it-14': {
    title: 'IA local con Ollama + Python', week: 14,
    html: `
<h3>Qué es Ollama</h3>
<p>Una herramienta gratis para correr modelos de lenguaje <b>en tu propia PC</b>. Ventajas: sin costo por uso, sin límite de mensajes y los datos no salen de tu máquina (ideal para tickets con información sensible). Desventaja: los modelos chicos son menos capaces que los grandes en la nube y necesitás RAM.</p>
<h3>Primeros pasos</h3>
<ol><li>Instalarlo desde su sitio oficial (ollama.com).</li><li>En la consola: <code>ollama pull &lt;modelo&gt;</code> para bajar un modelo y <code>ollama run &lt;modelo&gt;</code> para chatear.</li>
<li>Elegí un modelo chico acorde a tu RAM (la lista y los tamaños están en la biblioteca de modelos del sitio). Con 8 GB de RAM, modelos de pocos miles de millones de parámetros.</li><li><code>ollama list</code> muestra los que tenés.</li></ol>
<h3>Usarlo desde Python</h3>
<p>Ollama levanta un servidor local (por defecto en <code>http://localhost:11434</code>) con una API. Con la librería oficial (<code>pip install ollama</code>):</p>
<pre>import ollama, json

ticket = "No me anda la impresora del segundo piso desde esta mañana"
prompt = f"""Clasificá este ticket de soporte.
Respondé SOLO JSON con: categoria (hardware, red, software, cuenta, impresora),
prioridad (baja, media, alta) y motivo (una frase).
Ticket: {ticket}"""

r = ollama.chat(model="TU_MODELO", messages=[{"role": "user", "content": prompt}], format="json")
datos = json.loads(r["message"]["content"])
print(datos)</pre>
<p>Revisá en la documentación oficial de Ollama los nombres exactos de parámetros para tu versión antes de usarlo.</p>
<h3>Hacerlo robusto</h3>
<ul><li>Validá que el JSON tenga los campos y que la categoría sea una de las permitidas; si no, marcalo "revisar a mano".</li>
<li>Dale ejemplos en el prompt (few-shot) para mejorar la precisión.</li><li>Guardá cada resultado con el ticket original para poder medir después.</li>
<li>Nunca cierres ni respondas tickets solo con la IA: es una <b>sugerencia</b> para el agente.</li></ul>`,
    quiz: [
      { q: 'La principal ventaja de Ollama para tickets con datos sensibles es:', o: ['Es más rápido que todo', 'Los datos no salen de tu PC', 'No necesita RAM', 'Responde en todos los idiomas perfecto'], c: 1 },
      { q: '¿Qué comando baja un modelo?', o: ['ollama pull', 'ollama push', 'ollama get', 'ollama install'], c: 0 },
      { q: '¿Qué comando abre un chat con un modelo?', o: ['ollama run', 'ollama start chat', 'ollama talk', 'ollama open'], c: 0 },
      { q: 'Por defecto la API local de Ollama escucha en:', o: ['localhost:11434', 'localhost:80', 'google.com', '192.168.1.1'], c: 0 },
      { q: 'Para que la respuesta sea fácil de procesar en Python pedís:', o: ['Texto libre', 'JSON', 'Una imagen', 'Audio'], c: 1 },
      { q: 'Si el modelo devuelve una categoría no permitida:', o: ['La aceptás igual', 'Marcás el ticket para revisar a mano', 'Borrás el ticket', 'Reiniciás la PC'], c: 1 },
      { q: 'Una desventaja de los modelos locales chicos:', o: ['Son menos capaces que los grandes en la nube', 'Mandan tus datos a terceros', 'Cobran por mensaje', 'No funcionan sin internet nunca'], c: 0 },
      { q: 'El rol correcto del clasificador es:', o: ['Cerrar tickets solo', 'Sugerir, y el agente decide', 'Reemplazar al equipo', 'Responder al cliente sin revisión'], c: 1 }
    ]
  },
  'it-15': {
    title: 'Medir y documentar resultados', week: 15,
    html: `
<h3>Por qué medir</h3>
<p>"Hice un clasificador con IA" no dice nada. "Clasificó bien 16 de 20 tickets (80 %), ahorra unos 40 segundos por ticket y falla con los de red" es lo que convence a un reclutador.</p>
<h3>Cómo armar la prueba</h3>
<ol><li>Juntá tus 20 tickets simulados (del proyecto 1).</li><li><b>Antes</b> de correr la IA, clasificalos vos a mano: esa es la "respuesta correcta".</li>
<li>Corré el clasificador y guardá su respuesta al lado.</li><li>Compará.</li></ol>
<h3>Las métricas</h3>
<ul><li><b>Exactitud (accuracy)</b> = aciertos / total. 16/20 = 80 %.</li>
<li><b>Por categoría</b>: cuántos de "red" acertó, cuántos de "impresora", etc. Ahí aparecen los puntos débiles.</li>
<li><b>Matriz de confusión</b>: una tabla con lo correcto en filas y lo que dijo la IA en columnas. Muestra con qué se confunde (ej: manda "red" a "software").</li>
<li><b>Tiempo</b>: cronometrá cuánto tardás vos en clasificar 10 tickets y cuánto con la sugerencia de la IA.</li></ul>
<h3>Mejorar y volver a medir</h3>
<p>Cambiá una sola cosa por vez (agregar ejemplos al prompt, cambiar de modelo, aclarar categorías) y repetí la prueba con los mismos tickets. Si cambiás muchas cosas juntas no sabés qué mejoró.</p>
<h3>Documentar con honestidad</h3>
<p>En el README del proyecto: qué hace, cómo se probó, resultados con números, <b>dónde falla</b>, riesgos (privacidad, errores) y qué harías después. Contar los límites suma credibilidad, no resta. Con 20 tickets la muestra es chica: decilo.</p>`,
    quiz: [
      { q: 'Exactitud con 16 aciertos de 20:', o: ['16 %', '80 %', '20 %', '4 %'], c: 1 },
      { q: '¿Cuándo clasificás vos los tickets a mano?', o: ['Después de ver lo que dijo la IA', 'Antes de correr la IA', 'Nunca', 'Solo los fáciles'], c: 1 },
      { q: 'La tabla que muestra con qué categorías se confunde la IA es la:', o: ['Matriz de confusión', 'Tabla de rutas', 'Cola de impresión', 'Tabla ARP'], c: 0 },
      { q: 'Para saber qué mejoró el resultado:', o: ['Cambiar muchas cosas juntas', 'Cambiar una sola cosa por vez y repetir la prueba', 'No volver a medir', 'Usar otros tickets cada vez'], c: 1 },
      { q: 'En el README conviene:', o: ['Ocultar los errores', 'Contar resultados, dónde falla y límites', 'Solo poner capturas lindas', 'Exagerar los números'], c: 1 },
      { q: '¿Por qué medir el tiempo?', o: ['Para mostrar el ahorro concreto', 'Porque sí', 'Para cobrar más', 'No sirve'], c: 0 },
      { q: 'Con 20 tickets, la muestra es:', o: ['Enorme', 'Chica, y hay que aclararlo', 'Perfecta', 'Inútil'], c: 1 },
      { q: 'Analizar la exactitud por categoría sirve para:', o: ['Encontrar puntos débiles', 'Hacer la tabla más larga', 'Nada', 'Borrar categorías'], c: 0 }
    ]
  },
  'it-16': {
    title: 'Portfolio y CV de Soporte N1', week: 16,
    html: `
<h3>La página portfolio</h3>
<p>Simple y rápida: quién sos en una línea, los 4 proyectos y cómo contactarte. Cada proyecto:</p>
<ol><li><b>Problema</b> que resuelve (una frase).</li><li><b>Qué hiciste</b> (herramientas).</li><li><b>Resultado</b> con un número si lo hay.</li><li>Link a GitHub y una captura.</li></ol>
<h3>El CV orientado a Soporte N1</h3>
<ul><li>Título: <b>Soporte Técnico / Mesa de Ayuda N1</b>.</li>
<li>Resumen de 3 líneas: técnico en programación + experiencia en atención telefónica + lo que sabés hacer.</li>
<li><b>Habilidades</b> con las palabras de los avisos, solo las que sabés: Windows, redes TCP/IP, tickets (GLPI), PowerShell, Python, Git, Office 365.</li>
<li><b>Proyectos</b> como sección propia, con el link al portfolio.</li><li>Experiencia: destacá atención al cliente y resolución de problemas.</li></ul>
<h3>Escribir logros: método STAR</h3>
<p><b>S</b>ituación, <b>T</b>area, <b>A</b>cción, <b>R</b>esultado. En el CV va comprimido en una línea: <i>"Armé un script de PowerShell que genera un reporte de diagnóstico de PC en segundos, probado en 3 equipos"</i>. En la entrevista lo contás completo.</p>
<h3>Honestidad</h3>
<p>Si hiciste un curso, decí "curso", no "experiencia". Si es un proyecto propio, decilo. En una entrevista técnica te van a preguntar por cada cosa que pongas.</p>
<h3>Preparar la entrevista</h3>
<ul><li>Explicá en 2 minutos cada proyecto.</li><li>Practicá "contame de una vez que resolviste un problema difícil" con STAR.</li>
<li>Repasá las evaluaciones de esta web: son el tipo de preguntas técnicas de N1.</li><li>Prepará preguntas para ellos: herramientas que usan, cómo es la capacitación, posibilidades de pasar a N2.</li></ul>
<h3>Postularte</h3>
<p>Empezá desde el mes 2, no esperes a tener todo. Adaptá el resumen del CV a cada aviso con sus palabras clave.</p>`,
    quiz: [
      { q: 'Cada proyecto del portfolio debería mostrar:', o: ['Solo el código', 'Problema, qué hiciste, resultado y link', 'Tu foto', 'Solo el nombre'], c: 1 },
      { q: 'El título del CV para este objetivo:', o: ['Programador Senior', 'Soporte Técnico / Mesa de Ayuda N1', 'Estudiante', 'Sin título'], c: 1 },
      { q: 'STAR significa:', o: ['Situación, Tarea, Acción, Resultado', 'Sueldo, Trabajo, Área, Rol', 'Software, Tickets, Apps, Redes', 'Start, Test, Apply, Run'], c: 0 },
      { q: 'Si hiciste un curso de redes, en el CV ponés:', o: ['"Experiencia como administrador de redes"', '"Curso de redes" en formación', '"5 años en redes"', 'Nada'], c: 1 },
      { q: '¿Cuándo empezar a postularte?', o: ['Al terminar todo el plan', 'Desde el mes 2', 'En 2 años', 'Nunca'], c: 1 },
      { q: 'Las habilidades del CV deberían:', o: ['Usar las palabras de los avisos, solo las que sabés', 'Incluir todo lo que existe', 'Estar en inglés siempre', 'Ser inventadas'], c: 0 },
      { q: 'Una buena pregunta para hacerle al entrevistador:', o: ['¿Cuánto tengo que trabajar como mínimo?', '¿Qué posibilidades hay de pasar a N2?', '¿Puedo no atender teléfono?', 'Ninguna'], c: 1 },
      { q: 'Un logro bien escrito en el CV incluye:', o: ['Acción concreta y resultado', 'Adjetivos como "excelente"', 'Solo el nombre de la empresa', 'Un chiste'], c: 0 }
    ]
  }
};
