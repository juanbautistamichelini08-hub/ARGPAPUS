export const MAP_LOCATIONS = [
  {
    id: "crater_anomaly",
    name: "Fosa de la Manifestación (Punto Cero)",
    coords: { x: 184, y: 72, z: -931 },
    coordString: "X: 184, Y: 72, Z: -931",
    type: "CRITICAL_ANOMALY",
    severity: "DANGER",
    important: true,
    description: "Coordenada principal de alteración del servidor. Cráter de 16x16 bloques con fondo de roca madre expuesta. Estructura de madera con antorchas rojas apagadas. Aquí se originó el último paquete del socket a las 03:17:42.",
    notes: ''
  },
  {
    id: "old_village",
    name: "Pueblo Comunitario (Base Antigua)",
    coords: { x: -412, y: 64, z: 89 },
    coordString: "X: -412, Y: 64, Z: 89",
    type: "HISTORICAL",
    severity: "LOW",
    important: false,
    description: "Zona de residencia inicial de Santiagofkl y Defri. Actualmente en ruinas; los aldeanos desaparecieron sin registro de muerte en los logs.",
    notes: "Punto de interés secundario. No contiene eventos críticos de la entidad."
  },
  {
    id: "community_mine",
    name: "Mina Comunitaria - Sector Profundo",
    coords: { x: 1024, y: 12, z: -1500 },
    coordString: "X: 1024, Y: 12, Z: -1500",
    type: "INVESTIGATION",
    severity: "MEDIUM",
    important: false,
    description: "Túnel de extracción de diamantes. Reportes de bloques de bedrock generados a nivel Y: 12. Se escucharon sonidos de campanas a pesar de estar a cientos de bloques de cualquier aldea.",
    notes: "Pista secundaria para desviar o enriquecer el trasfondo del mapa."
  },
  {
    id: "original_spawn",
    name: "Spawn Original del Mundo",
    coords: { x: 0, y: 70, z: 0 },
    coordString: "X: 0, Y: 70, Z: 0",
    type: "RESTRICTED",
    severity: "MEDIUM",
    important: false,
    description: "Plataforma de inicio rodeada por un anillo de obsidiana colocado sin registro de jugador. El punto de reaparición fue modificado forzosamente hacia X: 184.",
    notes: "Coordenada estándar de reaparición."
  },
  {
    id: "tadic_shelter",
    name: "Refugio Aislado de Tadic",
    coords: { x: 350, y: 68, z: -420 },
    coordString: "X: 350, Y: 68, Z: -420",
    type: "ABANDONED",
    severity: "MEDIUM",
    important: false,
    description: "Cabaña solitaria donde Tadic reportó figuras estáticas observándolo a través del cristal antes de su desconexión forzosa.",
    notes: "Sitio del evento previo al incidente de las 03:17:42."
  },
  {
    id: "void_rift",
    name: "Grieta Térmica del Subsuelo",
    coords: { x: 742, y: -58, z: 320 },
    coordString: "X: 742, Y: -58, Z: 320",
    type: "DEEP_DARK",
    severity: "HIGH",
    important: false,
    description: "Cueva profunda en nivel -58. Sensores de sculk reaccionando a vibraciones inexistentes. No hay mobs hostiles en un radio de 500 bloques.",
    notes: "Lectura anómala de temperatura y paquetes de audio."
  }
];
