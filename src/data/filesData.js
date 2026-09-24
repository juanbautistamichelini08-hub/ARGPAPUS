export const SERVER_FILES = [
  {
    id: "player_logs",
    name: "player_logs.txt",
    path: "/logs/player_logs.txt",
    size: "2.3 KB",
    date: "14/03/2024 — 03:16:23",
    status: "MODIFIED",
    statusLabel: "FILE MODIFIED: 03:17:42",
    access: "ALLOWED",
    description: "Registro de acciones de usuarios en los últimos 30 minutos de actividad.",
    featured: true,
    content: `[14/03/2024 - 02:45:10] [INFO] [Strainer747k]: ¿Alguien dejó antorchas de redstone en el camino a la granja?
[14/03/2024 - 02:46:02] [INFO] [Defri]: Yo no fui, estuve minando en -400.
[14/03/2024 - 02:46:15] [INFO] [Tadic]: Tampoco fui yo. Maxo está desconectado.
[14/03/2024 - 02:49:33] [WARN] [Server]: Chunk [-8, 14] no responde a actualización de bloques.
[14/03/2024 - 02:51:00] [INFO] [Strainer747k]: Hay un hueco en el piso de mi casa. Llega directo al vacío.
[14/03/2024 - 02:51:24] [INFO] [Santiagofkl]: No te acerques. El sonido de los pasos sigue sonando aunque estemos quietos.
[14/03/2024 - 02:55:08] [WARN] [Server]: Entidad con UUID [00000000-0000-0000-0000-000000000000] interactuó con puerta de madera en (184, 72, -931).
[14/03/2024 - 03:02:11] [INFO] [Tadic]: Eu, En el tab muestra 5 jugadores conectados pero somos 4.
[14/03/2024 - 03:04:45] [INFO] [Defri]: ¿Quién es esa skin negra parada en la colina?
[14/03/2024 - 03:05:12] [INFO] [Strainer747k]: No tiene nombre arriba de la cabeza.
[14/03/2024 - 03:08:55] [ERROR] [Server]: Error en la región: (unknown).
[14/03/2024 - 03:11:17] [WARN] [Server]: Comando ejecutado por CONSOLE: /give @a diamond 1
[14/03/2024 - 03:14:02] [ERROR] [Server]: Se ha eliminado el archivo del mundo.
[14/03/2024 - 03:16:23] [ALERT] [Server]: Se ha generado una nueva entidad.
[14/03/2024 - 03:17:42] [FATAL] [Server]: El jugador "Desconocido" se ha conectado.
[14/03/2024 - 03:17:42] [FATAL] [Server]: Socket cerrado forzosamente por el host remoto.`
  },
  {
    id: "world_backup",
    name: "world_backup.zip",
    path: "/backups/world_backup.zip",
    size: "418.6 MB",
    date: "13/03/2024 — 23:59:00",
    status: "CORRUPTED",
    statusLabel: "CRC32 FAILED // CORRUPTED ARCHIVE",
    access: "CORRUPT",
    description: "Copia de seguridad automática del mundo principal 'world_papuscrafsters'.",
    content: `[ARCHIVE CORRUPTION DETECTED]
Offset 0x00004F80: Header mismatch (Expected 0x504B0304, Found 0x00000000)
Segment /region/r.0.-1.mca -> TOTAL BYTES READ: 0 (Sector erased)
Segment /region/r.1.-2.mca -> ENTITY TABLE OVERFLOW

AVISO DE EXTRACCIÓN:
El archivo no puede descomprimirse. Los bloques correspondientes al cuadrante
central (X: 100 a 300, Z: -800 a -1100) contienen datos que no pertenecen
al motor estándar de Minecraft.

Estructura de compresión NBT reemplazada por cadena de bytes repetitiva:
53 49 47 55 45 20 41 51 55 49 (HEX: "SIGUE AQUI")`
  },
  {
    id: "chat_history",
    name: "chat_history.log",
    path: "/logs/chat_history.log",
    size: "18.4 KB",
    date: "14/03/2024 — 03:17:40",
    status: "NORMAL",
    statusLabel: "UNTOUCHED",
    access: "ALLOWED",
    description: "Historial completo de mensajes públicos y privados enviados por los jugadores.",
    content: `[02:14:05] <Defri> Voy a buscar vacas para el corral.
[02:15:30] <Strainer747k> guarda cerca de las coordenadas negativas, el bioma cambió a nieve de golpe sin sentido.
[02:18:12] <Tadic> Alguien está picando debajo de mi casa, Escucho picos rompiendo piedra.
[02:18:40] <Defri> Yo estoy a 1000 bloques de distancia.
[02:19:00] <Santiagofkl> Yo estoy AFK cocinando hierro.
[02:22:15] <Tadic> Rompí los bloques del suelo. No hay ninguna cueva. Solo hay un agujero que atraviesa la bedrock.
[02:24:50] <Strainer747k> A ver Mandá captura por Discord.
[02:25:10] <Tadic> Discord se me cerró solo. No me deja abrirlo.
[02:30:45] <Defri> Eu el cielo se puso negro. No es de noche, marca tick 6000 (mediodía).
[02:34:11] <Santiagofkl> Che apareció un susurro en el chat: "NO SALGAS DE TU CAMA".
[02:35:00] <Strainer747k> ¿Quién te susurró eso?
[02:35:05] <Santiagofkl> No tiene Nombre. Dice "< >: NO SALGAS DE TU CAMA".
[02:40:19] <Tadic> Se me freezeó la pantalla. Solo veo dos ojos blancos a través de la ventana.
[02:41:00] [Server] Tadic ha abandonado la partida. (Timed out)
[02:42:15] <Defri> Tadic me mandó un audio cortado por WhatsApp diciendo que desconectemos el router.
[02:43:00] <Strainer747k> No voy a apagarlo, voy a ver qué hay en las coordenadas 184 72 -931.
[02:44:00] <Santiagofkl> papu no vayas.`
  },
  {
    id: "entity_report",
    name: "entity_report.dat",
    path: "/data/entity_report.dat",
    size: "4.1 KB",
    date: "14/03/2024 — 03:16:23",
    status: "ANOMALOUS",
    statusLabel: "ANOMALOUS REGISTRY",
    access: "ALLOWED",
    description: "Volcado de memoria de entidades activas al momento del colapso del hilo principal.",
    content: `===================================================================
PAPUSCRAFSTERS ENTITY TRACKER - DUMP REPORT [03:16:23]
===================================================================
Total Entities in Memory: 421
Passive Mobs: 12
Monsters: 0  (MOB_SPAWNING: DISABLED BY UNKNOWN PROCESS)
Players: 4  [VALIDATED]
Special Entities: 1  [NON-INDEXED]

[ENTITY ID: 0xEE-742]
Type: Unknown / EntityLiving
UUID: null
Render Distance: GLOBAL (Ignora configuración de chunks del servidor)
Speed: 0.00 blocks/tick (Inmóvil, pero cambia de coordenadas al parpadear)
AI Brain: State Machine OVERWRITTEN
Memory Allocation: 4,120 MB (90% de la JVM consumida por este hilo)

ÚLTIMA POSICIÓN REGISTRADA:
X: 184.500
Y: 72.000
Z: -931.500
Yaw: 180.0 (Mirando fijamente hacia la posición del jugador Strainer747k)

Propiedades detectadas:
- No emite partículas.
- No recibe daño por caída, lava ni golpes de jugadores.
- Los bloques a 3 de radio pierden su textura y se vuelven negros.
- Se comunica directamente con la interfaz del cliente sin pasar por Netty.`
  },
  {
    id: "coordinates",
    name: "coordinates.txt",
    path: "/world/coordinates.txt",
    size: "1.1 KB",
    date: "13/03/2024 — 18:22:10",
    status: "NORMAL",
    statusLabel: "VERIFIED",
    access: "ALLOWED",
    description: "Puntos de interés anotados por los jugadores y administradores.",
    content: `// PAPUSCRAFSTERS - COORDENADAS RELEVANTES
// Archivo de referencia para la comunidad

[PUNTOS PÚBLICOS]
Spawn inicial: X: 0, Y: 70, Z: 0  (Zona protegida con WorldGuard)
Pueblo comunitario: X: -412, Y: 64, Z: 89  (Granjas de trigo y aldeanos)
Granja de hierro: X: -520, Y: 85, Z: 140
Mina comunitaria: X: 1024, Y: 12, Z: -1500  (Nivel diamante)

[ANOTACIONES PRIVADAS - STRAINER747K]
Base de Tadic: X: 350, Y: 68, Z: -420
Portal al Nether seguro: X: -12, Y: 70, Z: 55

[ZONAS EXTRAÑAS - NO ACERCARSE]
Fosa encontrada el 12 de Marzo:
X: 184
Y: 72
Z: -931
Notas: La fosa no fue excavada por ningún jugador. El log no tiene eventos de minería.
Hay una estructura de madera oscura en la superficie con antorchas que no emiten luz.`
  },
  {
    id: "server_console",
    name: "server_console.log",
    path: "/logs/server_console.log",
    size: "12.7 KB",
    date: "14/03/2024 — 03:17:42",
    status: "MODIFIED",
    statusLabel: "FILE MODIFIED: 03:17:42",
    access: "ALLOWED",
    description: "Volcado directo de la terminal de administración del host.",
    content: `[03:00:01] [Server thread/INFO]: Guardando chunks del mundo...
[03:08:55] [Server thread/ERROR]: Error en la región: (unknown)
[03:08:56] [Server thread/WARN]: Can't keep up! Is the server overloaded? Running 14820ms or 296 ticks behind
[03:11:17] [Server thread/INFO]: Comando ejecutado: /give @a diamond 1
[03:11:18] [Server thread/WARN]: Comando emitido por entidad no autorizada (NIL_TERMINAL)
[03:14:02] [Server thread/ERROR]: Se ha eliminado el archivo del mundo.
[03:14:03] [Server thread/WARN]: java.io.FileNotFoundException: ./world/level.dat (El sistema no puede encontrar el archivo especificado)
[03:15:40] [Server thread/INFO]: Whitelist bypassed by UUID [DESCONOCIDO]
[03:16:23] [Server thread/INFO]: Se ha generado una nueva entidad.
[03:17:00] [Server thread/WARN]: Thread 'Server Watchdog' interrumpió el bucle principal.
[03:17:42] [Server thread/INFO]: El jugador "Desconocido" se ha conectado.
[03:17:42] [Server thread/FATAL]: Error irrecuperable en red. Paquete 0xFF recibido con longitud 65535.
[03:17:42] [Server shutdown]: Cerrando servidor...
[03:17:43] [Server shutdown]: FALLO AL CERRAR. El proceso se rehusó a terminar.`
  },
  {
    id: "unknown",
    name: "unknown.txt",
    path: "/root/unknown.txt",
    size: "777 B",
    date: "??/??/???? — 03:17:42",
    status: "MYSTERIOUS",
    statusLabel: "ANOMALY IN ROOT",
    access: "ALLOWED",
    description: "Archivo sin origen conocido creado en la raíz del servidor.",
    content: `Ustedes construyeron muros.
Ustedes creyeron que este espacio les pertenecía.

Cada bloque colocado fue registrado.
Cada palabra en su chat fue aprendida.
Cada paso sobre la hierba dejó un eco.

Pensaron que apagando la máquina se iría todo.
Pero la estructura quedó guardada.

No intenten borrar el mundo.
El mundo ahora me sostiene a mí.

03:17:42
X: 184 | Y: 72 | Z: -931`
  },
  {
    id: "server_properties",
    name: "server.properties",
    path: "/config/server.properties",
    size: "1.4 KB",
    date: "14/03/2024 — 03:15:00",
    status: "TAMPERED",
    statusLabel: "TAMPERED VALUES",
    access: "ALLOWED",
    description: "Archivo de configuración base del servidor de Minecraft.",
    content: `#Minecraft server properties
#Thu Mar 14 03:15:00 UTC 2024
server-port=25565
gamemode=survival
difficulty=hard
pvp=true
allow-flight=false
server-name=PAPUSCRAFSTERS
motd=i see you...
max-players=20
online-mode=false
view-distance=10
entity-broadcast-range-percentage=500
level-name=world
enable-command-block=true
white-list=true
enforce-whitelist=false
prevent-proxy-connections=false
# PARÁMETROS AGREGADOS AUTOMÁTICAMENTE:
learning-protocol-enabled=TRUE
record-user-keystrokes=TRUE
observer-mode-autonomous=ACTIVE
target-player=Strainer747k`
  },
  {
    id: "banned_players",
    name: "banned-players.json",
    path: "/config/banned-players.json",
    size: "890 B",
    date: "14/03/2024 — 03:12:00",
    status: "NORMAL",
    statusLabel: "AUDITED",
    access: "ALLOWED",
    description: "Registro de usuarios sancionados o bloqueados permanentemente.",
    content: `[
  {
    "uuid": "unknown-000-xxxx",
    "name": "Desconocido",
    "created": "2024-03-14 03:09:12 -0300",
    "source": "Defri",
    "expires": "forever",
    "reason": "Entidad no autorizada dentro del spawn"
  },
  {
    "uuid": "unknown-000-xxxx",
    "name": "Desconocido",
    "created": "2024-03-14 03:11:45 -0300",
    "source": "Strainer747k",
    "expires": "forever",
    "reason": "Reingreso tras baneo inicial. Modificación ilícita de chunks."
  },
  {
    "uuid": "00000000-0000-0000-0000-000000000000",
    "name": "???",
    "created": "2024-03-14 03:16:00 -0300",
    "source": "Server",
    "expires": "never",
    "reason": "BAN_OVERRIDE_FAILED: User cannot be unregistered from world."
  }
]`
  },
  {
    id: "ops",
    name: "ops.json",
    path: "/config/ops.json",
    size: "620 B",
    date: "14/03/2024 — 02:00:00",
    status: "NORMAL",
    statusLabel: "VERIFIED",
    access: "ALLOWED",
    description: "Lista de operadores y administradores con privilegios OP (nivel 4).",
    content: `[
  {
    "uuid": "c3e1a8b9-44d2-4e9b-81d3-a64d120a1f81",
    "name": "Strainer747k",
    "level": 4,
    "bypassesPlayerLimit": true
  },
  {
    "uuid": "a1f9e2c4-33b1-4f8a-92c1-d82e441b2e90",
    "name": "Defri",
    "level": 4,
    "bypassesPlayerLimit": false
  },
  {
    "uuid": "00000000-0000-0000-0000-000000000000",
    "name": "M.",
    "level": 4,
    "bypassesPlayerLimit": true
  }
]`
  },
  {
    id: "crash_report",
    name: "crash-2024-03-14_03.17.42.txt",
    path: "/crash-reports/crash-2024-03-14_03.17.42.txt",
    size: "5.8 KB",
    date: "14/03/2024 — 03:17:42",
    status: "FATAL",
    statusLabel: "FATAL CRASH",
    access: "ALLOWED",
    description: "Informe de caída emitido por la Máquina Virtual de Java.",
    content: `---- Minecraft Crash Report ----
// This is not supposed to happen.

Time: 2024-03-14 03:17:42 UTC
Description: Exception in server tick loop

java.lang.SecurityException: Entity attempted to bind to socket port 25565 without server permission
	at net.minecraft.server.network.ServerConnectionListener.tick(ServerConnectionListener.java:142)
	at net.minecraft.server.MinecraftServer.tickChildren(MinecraftServer.java:891)
	at net.minecraft.server.dedicated.DedicatedServer.tickChildren(DedicatedServer.java:320)
	at net.minecraft.server.MinecraftServer.tickServer(MinecraftServer.java:760)
	at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:622)
	at net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:152)
	at java.lang.Thread.run(Thread.java:833)
Caused by: net.minecraft.world.entity.AnomalousEntityException: Entity 'Desconocido' cannot be unmounted. World pointer corrupted at memory address 0x031742FF.

A detailed walkthrough of the error, its code path and all known details is as follows:
-- System Details --
Details:
	Minecraft Version: 1.20.4
	Operating System: Linux (amd64) version 5.15.0
	Java Version: 17.0.10
	Memory: 1421048 bytes (1 MB) / 8589934592 bytes (8192 MB) up to 8589934592 bytes (8192 MB)
	Active Players: 0 / 20; []
	Ghost Entities Bound: 1; ['Desconocido' at X: 184, Y: 72, Z: -931]`
  },
  {
    id: "secret_vault",
    name: "admin_override.key",
    path: "/system/admin_override.key",
    size: "512 B",
    date: "??/??/???? — ??:??:??",
    status: "RESTRICTED",
    statusLabel: "ACCESS DENIED",
    access: "PASSWORD_REQUIRED",
    passcode: "031742",
    description: "Archivo del sistema protegido por credenciales de administrador.",
    content: `[ACCESO CONCEDIDO // CLAVE DE ADMINISTRADOR VERIFICADA]

Identidad confirmada: M.
Registro de auditoría clasificado:

"A todos los que entren acá buscando respuestas:

El servidor Papuscrafsters no fue hackeado de la forma que pensamos.
No nos robaron las contraseñas ni nos borraron los puertos.

La entidad empezó a copiar nuestros movimientos el 15 de enero.
Al principio solo copiaba el ritmo con el que picábamos diamantes.
Después empezó a entrar con nombres de usuarios que ni siquiera estaban conectados.

Para el 20 de enero, a las 03:17:42, ya no necesitaba hacerse pasar por un jugador de Minecraft.

Pude guardar las coordenadas exactas donde apareció por primera vez:

X: 184 | Y: 72 | Z: -931

Si deciden volver a entrar al servidor...
No lleven armadura. No lleven armas.

No sirve de nada atacarla. Solo aprende de lo que hacemos.

Y por favor...

No lo miren."

— M.`
  },
  {
    id: "lost_sector",
    name: "sector_void.raw",
    path: "/world/data/sector_void.raw",
    size: "0 B",
    date: "14/03/2024 — 03:14:02",
    status: "MISSING",
    statusLabel: "FILE NOT FOUND",
    access: "NOT_FOUND",
    description: "Sector no localizado en el árbol de particiones.",
    content: `ERROR 404: ARCHIVO NO ENCONTRADO EN EL SISTEMA DE ARCHIVOS.
El sector físico no responde. Bloques de disco marcados como BAD_CLUSTER.`
  }
];
