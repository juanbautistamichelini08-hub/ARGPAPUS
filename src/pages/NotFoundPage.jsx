import React from "react";
import { soundFX } from "../utils/audio";

export default function NotFoundPage({ onNavigate, onOpenTerminal }) {
  return (
    <div className="page-container" style={{ padding: "60px 32px", textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
      <div style={{ color: "var(--alert-red-bright)", fontSize: "48px", fontWeight: "900", letterSpacing: "0.2em", marginBottom: "8px" }}>
        HTTP 404
      </div>

      <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.15em", color: "var(--text-bright)", textTransform: "uppercase", marginBottom: "16px" }}>
        SECTOR NO ENCONTRADO EN LA PARTICIÓN DEL MUNDO
      </div>

      <div className="terminal-block" style={{ textAlign: "left", marginBottom: "24px", color: "#8da0be", fontSize: "12px", lineHeight: "1.7" }}>
        <div>[03:17:42] [FATAL]: No se pudo resolver la ruta solicitada.</div>
        <div>[03:17:42] [TRACE]: RegionFile.java: Sector físico desvinculado por la entidad.</div>
        <div>[03:17:42] [WARNING]: El vacío ha consumido estos bloques.</div>
        <div style={{ color: "var(--alert-red-bright)", marginTop: "8px" }}>
          COORDENADA MÁS CERCANA: X: 184 | Y: 72 | Z: -931
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
        <button 
          className="sys-btn"
          style={{ padding: "8px 18px", fontSize: "12px" }}
          onClick={() => { soundFX.playClick(); onNavigate("/"); }}
        >
          ← RETORNAR AL INICIO
        </button>

        <button 
          className="sys-btn btn-danger"
          style={{ padding: "8px 18px", fontSize: "12px" }}
          onClick={() => { soundFX.playClick(); onOpenTerminal(); }}
        >
          ABRIR CONSOLA LOCAL
        </button>
      </div>
    </div>
  );
}
