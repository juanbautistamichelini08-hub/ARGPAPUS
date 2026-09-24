import React, { useState } from "react";
import { soundFX } from "../utils/audio";

export default function FileViewerModal({ file, onClose }) {
  const [tab, setTab] = useState("content");
  const [enteredPass, setEnteredPass] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [passError, setPassError] = useState(false);

  if (!file) return null;

  const handleUnlock = (e) => {
    e.preventDefault();
    if (enteredPass.trim() === file.passcode || enteredPass.trim() === "031742" || enteredPass.trim().toLowerCase() === "m") {
      setUnlocked(true);
      setPassError(false);
      soundFX.playGlitch();
    } else {
      setPassError(true);
      soundFX.playGlitch();
    }
  };

  // Generate synthetic hex representation of content
  const generateHex = (str) => {
    const lines = [];
    const bytes = new TextEncoder().encode(str.slice(0, 400));
    for (let i = 0; i < bytes.length; i += 16) {
      const slice = bytes.slice(i, i + 16);
      const hex = Array.from(slice).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' ');
      const ascii = Array.from(slice).map(b => (b >= 32 && b <= 126) ? String.fromCharCode(b) : '.').join('');
      const offset = i.toString(16).padStart(8, '0').toUpperCase();
      lines.push(`${offset}  ${hex.padEnd(48, ' ')}  |${ascii}|`);
    }
    return lines.join('\n');
  };

  const isLocked = file.access === "PASSWORD_REQUIRED" && !unlocked;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-window" 
        style={{ maxWidth: "860px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className={`tag ${file.status === 'FATAL' || file.status === 'CORRUPTED' ? 'tag-fatal' : 'tag-info'}`}>
              {file.statusLabel || file.status}
            </span>
            <span style={{ fontSize: "12px", fontWeight: "700", color: "var(--text-bright)", letterSpacing: "0.05em" }}>
              {file.name}
            </span>
            <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>
              ({file.size} — {file.date})
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>

        {/* Modal Tab Bar */}
        <div style={{ display: "flex", gap: "1px", background: "var(--border-dim)", borderBottom: "1px solid var(--border-dim)" }}>
          <button 
            className={`sys-btn ${tab === 'content' ? 'active' : ''}`}
            style={{ borderRadius: 0, border: "none", padding: "8px 16px" }}
            onClick={() => { soundFX.playClick(); setTab('content'); }}
          >
            [VISTA_DOCUMENTO]
          </button>
          <button 
            className={`sys-btn ${tab === 'hex' ? 'active' : ''}`}
            style={{ borderRadius: 0, border: "none", padding: "8px 16px" }}
            onClick={() => { soundFX.playClick(); setTab('hex'); }}
          >
            [HEX_DUMP]
          </button>
          <button 
            className={`sys-btn ${tab === 'meta' ? 'active' : ''}`}
            style={{ borderRadius: 0, border: "none", padding: "8px 16px" }}
            onClick={() => { soundFX.playClick(); setTab('meta'); }}
          >
            [METADATOS_I/O]
          </button>
        </div>

        <div className="modal-content" style={{ maxHeight: "65vh" }}>
          {isLocked ? (
            <div style={{ padding: "30px 20px", textAlign: "center" }}>
              <div style={{ color: "var(--alert-red-bright)", fontSize: "14px", fontWeight: "700", marginBottom: "12px", letterSpacing: "0.1em" }}>
                [!] ACCESO RESTRINGIDO // PERMISOS INSUFICIENTES
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "12px", marginBottom: "20px", maxWidth: "460px", margin: "0 auto 20px" }}>
                Este archivo requiere una clave de autorización del operador 'M' o código de sincronización del incidente de las 03:17:42.
              </p>
              
              <form onSubmit={handleUnlock} style={{ display: "inline-flex", gap: "8px" }}>
                <input 
                  type="password"
                  value={enteredPass}
                  onChange={(e) => setEnteredPass(e.target.value)}
                  placeholder="INTRODUCIR CLAVE..."
                  style={{
                    backgroundColor: "#07090c",
                    border: passError ? "1px solid var(--alert-red-bright)" : "1px solid var(--border-subtle)",
                    color: "#fff",
                    padding: "6px 12px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    outline: "none",
                    width: "220px"
                  }}
                  autoFocus
                />
                <button type="submit" className="sys-btn btn-danger">
                  DESBLOQUEAR
                </button>
              </form>

              {passError && (
                <div style={{ color: "var(--alert-red-bright)", fontSize: "11px", marginTop: "12px" }}>
                  CLAVE RECHAZADA. Pista: Busca en los registros de tiempo o comentarios del sistema.
                </div>
              )}
            </div>
          ) : tab === "content" ? (
            <div className="terminal-block" style={{ minHeight: "260px" }}>
              <pre style={{ whiteSpace: "pre-wrap", fontFamily: "var(--font-mono)", fontSize: "12px", lineHeight: "1.6" }}>
                {file.content}
              </pre>
            </div>
          ) : tab === "hex" ? (
            <div className="terminal-block" style={{ minHeight: "260px" }}>
              <pre style={{ whiteSpace: "pre", fontFamily: "var(--font-mono)", fontSize: "11px", color: "#8b949e" }}>
                {generateHex(file.content)}
              </pre>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px", color: "var(--text-muted)" }}>
              <div><strong>Ruta en el Servidor:</strong> <span style={{ color: "#fff" }}>{file.path}</span></div>
              <div><strong>Tamaño en Disco:</strong> <span style={{ color: "#fff" }}>{file.size}</span></div>
              <div><strong>Fecha de Última Escritura:</strong> <span style={{ color: "#fff" }}>{file.date}</span></div>
              <div><strong>Estado de Integridad:</strong> <span style={{ color: "var(--alert-red)" }}>{file.statusLabel || file.status}</span></div>
              <div><strong>Permisos UNIX:</strong> <span style={{ color: "#fff" }}>-rw-r--r-- (root:minecraft)</span></div>
              <div><strong>Descripción del Archivo:</strong> {file.description}</div>
              <div><strong>SHA-256 Checksum:</strong> <span style={{ color: "#616e85", fontSize: "11px" }}>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span></div>
            </div>
          )}
        </div>

        <div style={{ padding: "10px 18px", background: "#090b0e", borderTop: "1px solid var(--border-dim)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>
            SECTOR: PAPUSCRAFSTERS_STORAGE // READ_ONLY
          </span>
          <button 
            className="sys-btn"
            onClick={() => {
              soundFX.playGlitch();
              alert("FALLO DE I/O: El host rechazó la descarga. El socket cerró la conexión remota.");
            }}
          >
            DESCARGAR COPIA BRUTA
          </button>
        </div>
      </div>
    </div>
  );
}
