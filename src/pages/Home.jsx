import React, { useState } from "react";
import { SERVER_STATUS } from "../data/serverStatusData";
import { RECENT_LOGS } from "../data/logsData";
import { SERVER_FILES } from "../data/filesData";
import { soundFX } from "../utils/audio";
import bannerImg from "../assets/banner.jpg";

export default function Home({ onOpenFile, onNavigate }) {
  const [selectedLog, setSelectedLog] = useState(null);
  const featuredFile = SERVER_FILES.find((f) => f.id === "player_logs") || SERVER_FILES[0];

  const handleLogClick = (log) => {
    soundFX.playClick();
    setSelectedLog(selectedLog?.id === log.id ? null : log);
  };

  return (
    <div className="page-container" style={{ padding: "0 0 40px" }}>
      {/* Hero Banner Section */}
      <div
        className="hero-banner"
        style={{
          position: "relative",
          width: "100%",
          height: "360px",
          backgroundImage: `linear-gradient(to bottom, rgba(9, 10, 13, 0.2), rgba(9, 10, 13, 0.95)), url('${bannerImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "36px",
          borderBottom: "1px solid var(--border-dim)"
        }}
      >
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
          <div style={{ display: "inline-block", marginBottom: "8px" }}>
            <span className="tag tag-fatal">ESTADO: INACCESIBLE</span>
          </div>

          <h2 style={{
            fontSize: "32px",
            fontWeight: "800",
            letterSpacing: "0.15em",
            color: "var(--text-bright)",
            textTransform: "uppercase",
            marginBottom: "6px",
            textShadow: "0 2px 10px rgba(0,0,0,0.8)"
          }}>
            PAPUSCRAFSTERS
          </h2>

          <p style={{
            fontSize: "14px",
            letterSpacing: "0.1em",
            fontWeight: "500",
            color: "#c2c9d6",
            textTransform: "uppercase",
            marginBottom: "6px"
          }}>
            SON TODOS AMIGOS?.
          </p>

          <p style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "var(--alert-red-bright)",
            fontWeight: "700",
            textTransform: "uppercase"
          }}>
            ¿O NO?
          </p>
        </div>

        {/* Small subtle coordinate watermark in bottom right of banner */}
        <div style={{
          position: "absolute",
          bottom: "12px",
          right: "18px",
          fontSize: "10px",
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.1em"
        }}>
          CAM_01 // CHUNK_SEED_LOCK [-84920194820194820]
        </div>
      </div>

      {/* Main Grid Panels */}
      <div style={{ padding: "28px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>

        {/* ESTADO DEL SERVIDOR PANEL */}
        <div className="panel">
          <div className="panel-header">
            <span className="panel-title">
              <span style={{ color: "var(--alert-red-bright)" }}>■</span>
              ESTADO DEL SERVIDOR
            </span>
            <span className="tag tag-fatal">OFFLINE</span>
          </div>
          <div className="panel-body" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-dim)", paddingBottom: "6px" }}>
              <span style={{ color: "var(--text-muted)" }}>SERVIDOR:</span>
              <span style={{ color: "var(--alert-red-bright)", fontWeight: "700", letterSpacing: "0.05em" }} className="glitch-subtle" data-text="OFFLINE">
                OFFLINE
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-dim)", paddingBottom: "6px" }}>
              <span style={{ color: "var(--text-muted)" }}>JUGADORES:</span>
              <span style={{ color: "var(--text-bright)" }}>
                0 / {SERVER_STATUS.maxPlayers}
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-dim)", paddingBottom: "6px" }}>
              <span style={{ color: "var(--text-muted)" }}>MUNDO:</span>
              <span style={{ color: "#d9822b", fontWeight: "700" }}>
                {SERVER_STATUS.worldStatus}
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-dim)", paddingBottom: "6px" }}>
              <span style={{ color: "var(--text-muted)" }}>ÚLTIMA CONEXIÓN:</span>
              <span style={{ color: "var(--text-bright)", fontStyle: "italic", letterSpacing: "0.1em" }}>
                ?? : ?? : ??
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--text-muted)" }}>VERSIÓN:</span>
              <span style={{ color: "#8da0be" }}>
                {SERVER_STATUS.serverVersion}
              </span>
            </div>

            {/* Extra subtle system diagnostics */}
            <div style={{ marginTop: "8px", background: "rgba(0,0,0,0.3)", padding: "10px", border: "1px solid var(--border-dim)", fontSize: "11px", color: "var(--text-dim)" }}>
              <div>MEMORIA: 8192 MB (99.8% IN USE)</div>
              <div>CHUNKS CORRUPTOS: 1,482</div>
              <div>REGION: r.-1.-2.mca [CHECKSUM MISMATCH]</div>
            </div>
          </div>
        </div>

        {/* ARCHIVO DESTACADO PANEL */}
        <div className="panel">
          <div className="panel-header">
            <span className="panel-title">
              <span>■</span>
              ARCHIVO DESTACADO
            </span>
            <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>SYSTEM_AUDIT</span>
          </div>
          <div className="panel-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "180px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "18px", color: "#8da0be" }}>📄</span>
                <div>
                  <h3 style={{ fontSize: "15px", color: "var(--text-bright)", fontWeight: "700" }}>
                    {featuredFile.name}
                  </h3>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                    {featuredFile.size} | {featuredFile.date}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "10px", lineHeight: "1.5" }}>
                {featuredFile.description}
              </p>
            </div>

            <div style={{ marginTop: "18px", display: "flex", justifyContent: "flex-end" }}>
              <button
                className="sys-btn"
                style={{ padding: "8px 16px", fontSize: "11px", fontWeight: "700" }}
                onClick={() => {
                  soundFX.playClick();
                  onOpenFile(featuredFile);
                }}
              >
                VER →
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Full Width Lower Section */}
      <div style={{ padding: "0 32px", display: "flex", flexDirection: "column", gap: "20px" }}>

        {/* ÚLTIMOS REGISTROS PANEL */}
        <div className="panel">
          <div className="panel-header">
            <span className="panel-title">
              <span style={{ color: "var(--alert-red-bright)" }}>■</span>
              ÚLTIMOS REGISTROS
            </span>
            <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>
              HAZ CLIC EN UN REGISTRO PARA DETALLES
            </span>
          </div>
          <div className="panel-body" style={{ padding: 0 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {RECENT_LOGS.map((log) => {
                const isSelected = selectedLog?.id === log.id;
                return (
                  <div
                    key={log.id}
                    style={{
                      borderBottom: "1px solid var(--border-dim)",
                      padding: "10px 16px",
                      cursor: "pointer",
                      backgroundColor: isSelected ? "#151822" : "transparent",
                      transition: "background-color 0.12s ease"
                    }}
                    onClick={() => handleLogClick(log)}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "12px", flexWrap: "wrap" }}>
                      <span style={{ color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                        [{log.timestamp}]
                      </span>
                      <span className={`tag ${log.level === 'FATAL' || log.level === 'ALERT' || log.level === 'ERROR' ? 'tag-fatal' : 'tag-warn'}`}>
                        {log.level}
                      </span>
                      <span style={{ color: isSelected ? "var(--text-bright)" : "#b2baca", flex: 1 }}>
                        {log.message}
                      </span>
                      <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>
                        {isSelected ? "▲ Ocultar" : "▼ Detalles"}
                      </span>
                    </div>

                    {isSelected && (
                      <div style={{ marginTop: "10px", padding: "10px 14px", backgroundColor: "#08090d", border: "1px solid var(--border-dim)", fontSize: "11px", color: "#8da0be", lineHeight: "1.6" }}>
                        <div style={{ color: "var(--text-muted)", marginBottom: "4px" }}>
                          FECHA: {log.date} — TRACE ID: 0x{log.id}_DUMP
                        </div>
                        <div>{log.details}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MENSAJE DE ADVERTENCIA PANEL */}
        <div className="panel" style={{ borderColor: "var(--alert-red-dim)", backgroundColor: "#0e090a" }}>
          <div className="panel-header" style={{ backgroundColor: "#140a0b", borderBottomColor: "var(--alert-red-dim)" }}>
            <span className="panel-title" style={{ color: "var(--alert-red-bright)" }}>
              <span>▲</span>
              AVISO DE EMERGENCIA // AUDITORÍA PRIVADA
            </span>
            <span className="tag tag-fatal">SISTEMA_COMPROMETIDO</span>
          </div>
          <div className="panel-body" style={{ padding: "24px 28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "680px" }}>
              {SERVER_STATUS.warningMessage.quotes.map((quote, idx) => (
                <div
                  key={idx}
                  style={{
                    fontSize: idx === 3 ? "15px" : "13px",
                    fontWeight: idx === 3 ? "700" : "400",
                    color: idx === 3 ? "var(--alert-red-bright)" : "var(--text-bright)",
                    letterSpacing: "0.08em",
                    fontStyle: "italic"
                  }}
                  className="glitch-subtle"
                  data-text={quote}
                >
                  {quote}
                </div>
              ))}
              <div style={{ marginTop: "12px", color: "var(--text-muted)", fontSize: "12px", fontWeight: "700", letterSpacing: "0.15em" }}>
                {SERVER_STATUS.warningMessage.author}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
