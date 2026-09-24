import React, { useState, useEffect } from "react";
import { soundFX } from "../utils/audio";

export default function AboutPage() {
  const [revealedSecret, setRevealedSecret] = useState(false);
  const [timerSecret, setTimerSecret] = useState(false);

  useEffect(() => {
    // Secret text appears after staying 15 seconds on the page
    const timer = setTimeout(() => {
      setTimerSecret(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleRevealClick = () => {
    soundFX.playGlitch();
    setRevealedSecret(!revealedSecret);
  };

  return (
    <div className="page-container" style={{ padding: "28px 32px" }}>
      {/* Section Header */}
      <div style={{ marginBottom: "24px", borderBottom: "1px solid var(--border-dim)", paddingBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ color: "var(--alert-red)" }}>■</span>
          <h2 style={{ fontSize: "18px", letterSpacing: "0.12em", fontWeight: "700", color: "var(--text-bright)", textTransform: "uppercase" }}>
            ACERCA DEL ARCHIVO // SERVER_DOCUMENTATION
          </h2>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "12px" }}>
          Ficha técnica y memoria histórica del servidor Papuscrafsters. Documento administrativo redactado previo al cese de actividades.
        </p>
      </div>

      <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "20px" }}>
        
        {/* Core Description Panel */}
        <div className="panel">
          <div className="panel-header">
            <span className="panel-title">MEMORIA INSTITUCIONAL</span>
            <span className="tag tag-info">ORIGINAL_SPEC</span>
          </div>
          <div className="panel-body" style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px", lineHeight: "1.7", color: "var(--text-muted)" }}>
            <p>
              <strong style={{ color: "var(--text-bright)" }}>PAPUSCRAFSTERS</strong> fue fundado a inicios de 2024 como un proyecto cooperativo de supervivencia en Minecraft (Vanilla / Paper 1.20.4). Diseñado exclusivamente para un grupo reducido de creadores y amigos con el objetivo de construir una civilización comunitaria sin reinicios de mapa.
            </p>

            <p>
              Servidor privado de Minecraft. Creado por la comunidad para la comunidad. Durante sus primeros ciclos de juego, se implementaron sistemas de economía básica, granjas automatizadas y un sistema de respaldo diario.
            </p>

            <div style={{ 
              background: "#080a0f", 
              padding: "14px", 
              border: "1px solid var(--border-dim)",
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: "8px",
              fontSize: "12px"
            }}>
              <span style={{ color: "var(--text-dim)" }}>ORGANIZACIÓN:</span>
              <span style={{ color: "var(--text-bright)" }}>Comunidad Papuscrafsters</span>

              <span style={{ color: "var(--text-dim)" }}>TIPO DE SERVICIO:</span>
              <span style={{ color: "var(--text-bright)" }}>Dedicated Host (8GB RAM / 4 vCPUs)</span>

              <span style={{ color: "var(--text-dim)" }}>FECHA DE CREACIÓN:</span>
              <span style={{ color: "var(--text-bright)" }}>08 de Marzo de 2024</span>

              {/* Date discrepancy clue: shows 2026 or an impossible future timestamp */}
              <span style={{ color: "var(--text-dim)" }}>FECHA DE ARCHIVADO:</span>
              <span style={{ color: "var(--alert-red-bright)", fontWeight: "700" }}>
                14 de Marzo de 2029 [DISCREPANCIA TEMPORAL]
              </span>

              <span style={{ color: "var(--text-dim)" }}>ESTADO ACTUAL:</span>
              <span style={{ color: "#d9822b", fontWeight: "700" }}>INDETERMINADO.</span>
            </div>

            <p>
              Pasa el cursor sobre los textos censurados por el sistema para revelar datos omitidos:{" "}
              <span className="redacted" title="Pasa el mouse para revelar">
                LA ENTIDAD NO PROVIENE DE NINGÚN MOD
              </span>
              . La base de datos registró que el archivo <span className="redacted" title="Pasa el mouse">level.dat</span> fue reescrito desde adentro del mundo.
            </p>

            {/* Secret clickable trigger on "— M." */}
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span 
                style={{ cursor: "pointer", color: revealedSecret ? "var(--alert-red-bright)" : "var(--text-dim)", textDecoration: "underline", fontSize: "12px" }}
                onClick={handleRevealClick}
                title="Hacer clic para verificar firma"
              >
                Firmado: — M. (Click para autenticar firma criptográfica)
              </span>
              <span style={{ fontSize: "11px", color: "var(--text-dim)" }}>
                ID: 0x4D_SIGNATURE
              </span>
            </div>

            {revealedSecret && (
              <div style={{ 
                marginTop: "10px", 
                padding: "12px", 
                backgroundColor: "rgba(211, 47, 47, 0.08)", 
                border: "1px solid var(--alert-red-dim)",
                fontSize: "12px",
                color: "#ff9c9c",
                lineHeight: "1.6"
              }}>
                <strong>[FIRMA AUTENTICADA DE M.]:</strong><br />
                "Si estás leyendo esto, significa que lograste abrir el portal de respaldo. La clave de administración para acceder a los archivos del sistema bloqueados es: <code style={{ color: "#fff", background: "#000", padding: "2px 6px" }}>031742</code>. Úsala en el archivo <strong style={{ color: "#fff" }}>admin_override.key</strong> o en la consola con el comando <code style={{ color: "#fff", background: "#000", padding: "2px 6px" }}>unlock 031742</code>."
              </div>
            )}
          </div>
        </div>

        {/* Time Delayed Secret Banner */}
        {timerSecret && (
          <div className="panel" style={{ borderColor: "var(--alert-red-dim)", backgroundColor: "#0c0809" }}>
            <div className="panel-body" style={{ color: "var(--alert-red-bright)", fontSize: "12px", fontStyle: "italic", textAlign: "center" }}>
              "Llevas demasiado tiempo en este portal. La entidad ya sabe que estás aquí."
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
