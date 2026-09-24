import React, { useState, useEffect, useRef } from "react";
import { soundFX } from "../utils/audio";
import { SERVER_FILES } from "../data/filesData";

export default function TerminalModal({ isOpen, onClose, onSelectFile }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "sys", text: "PAPUSCRAFSTERS LOCAL HOST TERMINAL // v1.20.4-SHELL" },
    { type: "sys", text: "ESTADO DE CONEXIÓN: DESCONECTADO DEL HOST REMOTO (PORT 25565)" },
    { type: "warn", text: "ADVERTENCIA: Hilo de sockets locales ocupado por proceso no identificado." },
    { type: "sys", text: "Escribe 'help' para ver la lista de comandos disponibles." },
    { type: "sys", text: "--------------------------------------------------------" }
  ]);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const rawCmd = inputVal.trim();
      soundFX.playClick();
      if (!rawCmd) return;

      const newHistory = [...history, { type: "user", text: `root@papuscrafsters:~# ${rawCmd}` }];
      const parts = rawCmd.split(" ");
      const cmd = parts[0].toLowerCase();
      const arg = parts.slice(1).join(" ");

      switch (cmd) {
        case "help":
          newHistory.push({
            type: "out",
            text: `COMANDOS DISPONIBLES:
  help              - Muestra esta lista de instrucciones
  status            - Inspecciona el estado de la memoria y sockets
  ls                - Lista los archivos presentes en el directorio raíz
  cat <archivo>     - Muestra el contenido del archivo especificado
  coords            - Consulta los registros de coordenadas satelitales
  unlock <clave>    - Introduce código de acceso de administrador
  entity            - Diagnóstico de la instancia 0xEE-742
  whoami            - Identidad del operador actual
  clear             - Limpia la pantalla
  exit              - Cierra la sesión de consola`
          });
          break;

        case "status":
          newHistory.push({
            type: "out",
            text: `HOST: play.papuscrafsters.net (127.0.0.1)
ESTADO: OFFLINE
TPS: 0.00 / 20.00
MEMORIA ASIGNADA: 8192 MB (99.8% saturada)
CHUNK DESTINO: [-11, 58] // CORRUPTO
ÚLTIMO EVENTO: 03:17:42 UTC - Login no registrado.`
          });
          break;

        case "ls":
        case "dir":
          newHistory.push({
            type: "out",
            text: SERVER_FILES.map(f => `${f.size.padEnd(10)} ${f.date.padEnd(24)} ${f.name}`).join("\n")
          });
          break;

        case "cat":
          if (!arg) {
            newHistory.push({ type: "error", text: "Uso: cat <nombre_archivo>" });
          } else {
            const found = SERVER_FILES.find(f => f.name.toLowerCase() === arg.toLowerCase() || f.id.toLowerCase() === arg.toLowerCase());
            if (found) {
              if (found.access === "PASSWORD_REQUIRED") {
                newHistory.push({ type: "error", text: `ACCESS DENIED: Archivo encriptado. Usa 'unlock <clave>' para descifrar.` });
              } else {
                newHistory.push({ type: "out", text: `--- INICIO DE ${found.name} ---\n${found.content}\n--- FIN DE ARCHIVO ---` });
              }
            } else {
              newHistory.push({ type: "error", text: `cat: ${arg}: No such file or directory` });
            }
          }
          break;

        case "coords":
          newHistory.push({
            type: "out",
            text: `[REGISTROS DE COORDENADAS RELEVANTES]
1. FOSA PRINCIPAL:     X: 184  | Y: 72 | Z: -931  [ANOMALÍA DETECTADA]
2. PUEBLO COMUNITARIO: X: -412 | Y: 64 | Z: 89    [ABANDONADO]
3. MINA PROFUNDA:      X: 1024 | Y: 12 | Z: -1500 [BEDROCK EXPUESTA]
4. SPAWN ORIGINAL:     X: 0    | Y: 70 | Z: 0     [CUBIERTO DE OBSIDIANA]`
          });
          break;

        case "unlock":
          if (!arg) {
            newHistory.push({ type: "error", text: "Uso: unlock <código_de_acceso>" });
          } else if (arg === "031742" || arg.toLowerCase() === "m" || arg.toLowerCase() === "papuscrafsters") {
            soundFX.playGlitch();
            newHistory.push({
              type: "warn",
              text: `[ACCESO DE SUPERUSUARIO AUTORIZADO]
Clave correcta: ${arg}
Documento liberado: /system/admin_override.key
Escribe 'cat admin_override.key' para leer el reporte de M.`
            });
          } else {
            soundFX.playGlitch();
            newHistory.push({ type: "error", text: `ERROR: Clave '${arg}' incorrecta. Registro de intento fallido guardado.` });
          }
          break;

        case "entity":
          soundFX.playGlitch();
          newHistory.push({
            type: "error",
            text: `[REPORTE DE ENTIDAD - 0xEE-742]
"No tiene nombre.
No pertenece a la base de datos de criaturas.
Si te quedas mucho tiempo mirando el mapa, notarás que los chunks van cambiando."`
          });
          break;

        case "whoami":
          newHistory.push({
            type: "out",
            text: `USUARIO: ANÓNIMO / OBSERVADOR
UBICACIÓN: FUERA DEL SERVIDOR
ESTADO: SIENDO OBSERVADO`
          });
          break;

        case "ping":
          newHistory.push({
            type: "out",
            text: `PING play.papuscrafsters.net (0.0.0.0): 56 data bytes
Request timeout for icmp_seq 0
Request timeout for icmp_seq 1
Request timeout for icmp_seq 2
--- play.papuscrafsters.net ping statistics ---
3 packets transmitted, 0 packets received, 100.0% packet loss`
          });
          break;

        case "clear":
          setHistory([]);
          setInputVal("");
          return;

        case "exit":
        case "quit":
          onClose();
          return;

        default:
          newHistory.push({
            type: "error",
            text: `Comando no reconocido: '${cmd}'. Escribe 'help' para ver opciones.`
          });
          break;
      }

      setHistory(newHistory);
      setInputVal("");
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-window" 
        style={{ maxWidth: "800px", height: "540px", backgroundColor: "#060709", border: "1px solid #293040" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "8px", height: "8px", backgroundColor: "var(--alert-red)" }}></span>
            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#c8d0e0" }}>
              CONSOLA DE ADMINISTRACIÓN // LOCAL_SHELL
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>

        <div 
          className="modal-content"
          style={{ 
            fontFamily: "var(--font-mono)", 
            fontSize: "12px", 
            padding: "16px",
            backgroundColor: "#050608",
            color: "#b0b8c8",
            display: "flex",
            flexDirection: "column"
          }}
          onClick={() => inputRef.current && inputRef.current.focus()}
        >
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "6px" }}>
            {history.map((item, idx) => {
              let color = "#a6b0c2";
              if (item.type === "warn") color = "#d9822b";
              if (item.type === "error") color = "var(--alert-red-bright)";
              if (item.type === "user") color = "#ffffff";
              if (item.type === "sys") color = "#5c657a";
              return (
                <div key={idx} style={{ color, whiteSpace: "pre-wrap", lineHeight: "1.5" }}>
                  {item.text}
                </div>
              );
            })}
            <div ref={terminalEndRef} />
          </div>

          <div style={{ display: "flex", alignItems: "center", marginTop: "12px", borderTop: "1px solid #1a202c", paddingTop: "8px" }}>
            <span style={{ color: "var(--alert-red)", fontWeight: "700", marginRight: "8px" }}>
              root@papuscrafsters:~#
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#f0f4fc",
                fontFamily: "var(--font-mono)",
                fontSize: "12px"
              }}
              autoFocus
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
