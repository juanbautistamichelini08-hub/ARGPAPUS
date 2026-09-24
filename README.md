# PAPUSCRAFSTERS // SERVER ARCHIVE [OFFICIAL]
## Portal Web y Centro de Investigación ARG para Servidor de Minecraft

Sitio web oficial abandonado del servidor de Minecraft **Papuscrafsters**. Diseñado con una estética de archivo institucional, terminal de servidor, registros técnicos, horror psicológico sutil, efectos CRT y mecánicas de investigación interactiva para los jugadores del ARG.

---

### 🌐 Cómo Iniciar el Servidor Local

1. Abre una terminal en la carpeta del proyecto:
   ```bash
   npm run dev
   ```
2. Abre tu navegador en:
   ```
   http://localhost:5173/
   ```

---

### 📂 Estructura Modular del Proyecto (Para agregar nuevas pistas)

Toda la información del ARG está organizada en módulos limpios y estructurados dentro de `src/data/`:

* **`src/data/filesData.js`**:
  * Lista de archivos del explorador de documentos (`player_logs.txt`, `unknown.txt`, `entity_report.dat`, etc.).
  * Puedes agregar nuevos archivos con propiedades: `id`, `name`, `path`, `size`, `date`, `status`, `access` (`ALLOWED`, `PASSWORD_REQUIRED`, `CORRUPT`, `NOT_FOUND`), y `content`.
* **`src/data/playersData.js`**:
  * Expedientes de jugadores (`Strainer747k`, `Tadic`, `Santiagofkl`, `Defri`, `Maxoso`, `Desconocido`, `???`).
  * Puedes agregar nuevos jugadores, inventarios y notas sospechosas.
* **`src/data/mapsData.js`**:
  * Puntos cartográficos y coordenadas (`X: 184, Y: 72, Z: -931` y secundarias).
* **`src/data/connectionsData.js`**:
  * Registro de sockets TCP, timestamps, IPs falsas y anomalías de red.
* **`src/data/logsData.js`**:
  * Registros cronológicos de incidentes (`DAY 01` al `DAY 07` y `DAY ??`).
* **`src/data/serverStatusData.js`**:
  * Diagnóstico general del host, versión 1.20.4, chunks corruptos y advertencias.

---

### 🧩 Secretos y Mecánicas del ARG Implementadas

1. **Consola Terminal Secreta (`_TERMINAL` o tecla `~`)**:
   * Comandos funcionales: `help`, `status`, `ls`, `cat <archivo>`, `coords`, `unlock <clave>`, `entity`, `whoami`, `ping`, `clear`.
2. **Sistema de Desbloqueo por Contraseña**:
   * Archivo restringido: `/system/admin_override.key`
   * Clave: `031742` (revelada a través de la firma de `— M.` en la sección *ACERCA DE* o registros de consola).
3. **Página 404 Personalizada**:
   * Cualquier ruta no válida (ej: `/ruta_inexistente`) despliega una pantalla de sector de chunks desvinculado con volcado técnico.
4. **Inspección de Código Fuente (`F12`)**:
   * Comentarios ocultos en `index.html` con cadenas en Base64, fragmentos hexadecimales y pistas criptográficas.
5. **Efectos de Audio Atmosféricos (Web Audio API)**:
   * Botón `[FX: ON/OFF]` en la barra superior. Genera zumbido eléctrico CRT de baja frecuencia (55Hz), interferencia estática y clics mecánicos sin requerir archivos de audio externos.
6. **Efecto de Redactado / Desclasificado**:
   * En la sección *ACERCA DE*, pasar el cursor sobre las barras negras desvela fragmentos de texto censurado por el servidor.
