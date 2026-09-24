// Registros destacados para la página de Inicio
export const RECENT_LOGS = [
  {
    id: "rec_1",
    timestamp: "03:17:42",
    date: "14/03/2024",
    level: "FATAL",
    message: 'El jugador "Desconocido" se ha conectado.',
    details: 'Login interceptado sin verificación de sesión de Mojang. Handshake packet saltado. Sockets locales redirigidos hacia el proceso anómalo. IP: 0.0.0.0.'
  },
  {
    id: "rec_2",
    timestamp: "03:16:23",
    date: "14/03/2024",
    level: "ALERT",
    message: "Se ha generado una nueva entidad.",
    details: 'Instancia EntityLiving creada en chunk (11, -58). No pertenece a ninguna clase mob conocida. La JVM asignó 4,120 MB exclusivos a esta instancia.'
  },
  {
    id: "rec_3",
    timestamp: "03:14:02",
    date: "14/03/2024",
    level: "ERROR",
    message: "Se ha eliminado el archivo del mundo.",
    details: 'System call: unlink("./world/level.dat"). Operación no ejecutada por ningún plugin ni operador humano. Intentos de sincronización con backup fallaron.'
  },
  {
    id: "rec_4",
    timestamp: "03:11:17",
    date: "14/03/2024",
    level: "WARN",
    message: "Comando ejecutado: /give @a diamond 1",
    details: 'Comando originado desde consola sin sesión SSH activa ni terminal web abierta. Fue el único comando emitido antes de que el mundo empezara a desmoronarse.'
  },
  {
    id: "rec_5",
    timestamp: "03:08:55",
    date: "14/03/2024",
    level: "ERROR",
    message: "Error en la región: (unknown)",
    details: 'Falla de lectura I/O en sector r.1.-2.mca. Bloques de aire reemplazados por IDs de textura nulos. Servidor experimentó un desfasaje de 14,820 ms.'
  }
];

// Registros cronológicos completos para la sección REGISTROS
export const CHRONOLOGICAL_LOGS = [
  {
    day: "DAY 01",
    date: "08/03/2024",
    title: "Inicio y Configuración Inicial",
    summary: "Servidor iniciado.",
    severity: "INFO",
    entries: [
      "[10:00:15] [Server thread/INFO]: Cargando propiedades de Minecraft 1.20.4...",
      "[10:00:18] [Server thread/INFO]: Generando estructuras de spawn en X: 0, Z: 0.",
      "[10:01:02] [Server thread/INFO]: Servidor Papuscrafsters abierto en puerto 25565.",
      "[16:30:12] [Server thread/INFO]: Strainer747k se conectó al servidor.",
      "[17:02:18] [Server thread/INFO]: Defri se conectó al servidor.",
      "[18:45:00] [Server thread/INFO]: Tadic se conectó al servidor."
    ],
    notes: "Día de apertura normal. Construcción del spawn y trazado de caminos principales hacia los cuadrantes de supervivencia."
  },
  {
    day: "DAY 02",
    date: "09/03/2024",
    title: "Asentamiento Comunitario",
    summary: "Construcción comunitaria y minería sin anomalías registradas.",
    severity: "INFO",
    entries: [
      "[14:20:00] [Server thread/INFO]: Santiagofkl completó la granja comunitaria.",
      "[16:15:33] [Server thread/INFO]: Maxoso descubrió cueva profunda en sector este.",
      "[22:40:11] [Server thread/INFO]: Guardado automático del mundo: 384 chunks guardados."
    ],
    notes: "Los registros muestran una actividad de red limpia. Todos los pings dentro del rango de 30-45ms."
  },
  {
    day: "DAY 03",
    date: "10/03/2024",
    title: "Primeras Discrepancias de Chunks",
    summary: "Primer error de región.",
    severity: "WARN",
    entries: [
      "[19:12:04] [Server thread/WARN]: Chunk [-8, 14] tardó 450ms en serializar.",
      "[19:15:22] [Server thread/WARN]: Discrepancia en la tabla de iluminación en Y: 72.",
      "[21:30:45] [Server thread/INFO]: Defri reportó bloques de madera flotando sin hojas en el bioma de taiga.",
      "[23:58:00] [Server thread/WARN]: Region file r.-1.-1.mca reporta 1 bloque con ID inexistente (0xFF)."
    ],
    notes: "Los administradores asumieron que se trataba de un problema menor de generación de terreno tras reiniciar el host."
  },
  {
    day: "DAY 04",
    date: "11/03/2024",
    title: "Reportes de Comportamiento Inexplicable",
    summary: "Jugador reporta comportamiento extraño.",
    severity: "WARN",
    entries: [
      "[16:04:10] [Server thread/INFO]: <Tadic> Escucho picos picando piedra justo debajo de mi suelo.",
      "[16:05:00] [Server thread/INFO]: <Strainer747k> No hay nadie abajo de tu base según el mapa.",
      "[18:44:12] [Server thread/WARN]: Servidor recibió evento de clic en puerta en coordenadas (184, 72, -931) pero ningún jugador estaba en ese chunk.",
      "[22:15:30] [Server thread/INFO]: <Santiagofkl> ¿Quién dejó antorchas de redstone marcando una flecha hacia las coordenadas negativas?"
    ],
    notes: "Aparición de construcciones espontáneas. Ningún operador ejecutó comandos en ese horario."
  },
  {
    day: "DAY 05",
    date: "12/03/2024",
    title: "Detección de Objeto no Indexado",
    summary: "Se detecta una entidad no registrada.",
    severity: "ALERT",
    entries: [
      "[14:10:05] [Server thread/ALERT]: Thread JVM detectó instancia de EntityLiving huérfana.",
      "[14:10:06] [Server thread/WARN]: La entidad no tiene render de skin asignado.",
      "[15:22:40] [Server thread/INFO]: Intento de /kill @e ejecutado por Defri.",
      "[15:22:41] [Server thread/ERROR]: Fallo al aplicar daño: target entity does not accept entity damage events.",
      "[20:50:11] [Server thread/WARN]: Consumo de memoria salta del 24% al 98% en 4 segundos."
    ],
    notes: "La entidad comenzó a ubicarse en zonas con línea de visión directa a los refugios de los jugadores."
  },
  {
    day: "DAY 06",
    date: "13/03/2024",
    title: "Éxodo de Jugadores",
    summary: "Tres jugadores abandonan el servidor.",
    severity: "DANGER",
    entries: [
      "[21:40:00] [Server thread/INFO]: Tadic abandonó el servidor. Motivo: Desconexión voluntaria.",
      "[22:10:15] [Server thread/INFO]: Santiagofkl abandonó el servidor.",
      "[23:00:44] [Server thread/INFO]: Maxoso abandonó el servidor.",
      "[23:45:00] [Server thread/INFO]: <Defri> Strainer, no te quedes solo. Esa cosa no se va a ir."
    ],
    notes: "Los jugadores declararon en canales externos haber visto una silueta estática en las ventanas de sus refugios y mensajes ilegibles en el chat."
  },
  {
    day: "DAY 07",
    date: "14/03/2024",
    title: "Colapso del Hilo Principal (03:17:42)",
    summary: "El servidor deja de responder.",
    severity: "FATAL",
    entries: [
      "[03:08:55] [Server thread/ERROR]: Error en la región: (unknown)",
      "[03:11:17] [Server thread/INFO]: Comando ejecutado: /give @a diamond 1",
      "[03:14:02] [Server thread/ERROR]: Se ha eliminado el archivo del mundo.",
      "[03:16:23] [Server thread/INFO]: Se ha generado una nueva entidad.",
      "[03:17:42] [Server thread/FATAL]: El jugador 'Desconocido' se ha conectado.",
      "[03:17:42] [Server thread/FATAL]: SocketException: Socket closed. Proceso detenido de forma anormal."
    ],
    notes: "Fin de los registros del host original. El archivo server.log termina abruptamente aquí."
  },
  {
    day: "DAY ??",
    date: "??/??/????",
    title: "Registros Huérfanos Post-Cierre",
    summary: "Actividad en el host con el servidor marcado como OFFLINE.",
    severity: "UNKNOWN",
    entries: [
      "[??:??:??] [System]: Proceso java.exe detectado en ejecución en background sin puerto asignado.",
      "[??:??:??] [Memory]: Modificación autónoma de estructuras de datos en caché.",
      "[??:??:??] [Echo]: 'NO ESCRIBAN SU NOMBRE.'"
    ],
    notes: "Los archivos continuaron modificándose sin conexión a internet activa."
  }
];
