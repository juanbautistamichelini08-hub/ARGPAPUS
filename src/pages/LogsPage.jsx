import React, { useState } from "react";
import { CHRONOLOGICAL_LOGS } from "../data/logsData";
import { soundFX } from "../utils/audio";

export default function LogsPage() {
  const [expandedDay, setExpandedDay] = useState("DAY 07");

  const toggleDay = (day) => {
    soundFX.playClick();
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="page-container" style={{ padding: "28px 32px" }}>
      {/* Section Header */}
      <div style={{ marginBottom: "24px", borderBottom: "1px solid var(--border-dim)", paddingBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ color: "var(--alert-red)" }}>■</span>
          <h2 style={{ fontSize: "18px", letterSpacing: "0.12em", fontWeight: "700", color: "var(--text-bright)", textTransform: "uppercase" }}>
            REGISTROS CRONOLÓGICOS // SERVER_INCIDENT_TIMELINE
          </h2>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "12px" }}>
          Reconstrucción cronológica de los 7 días de operación del servidor Papuscrafsters y los registros huérfanos posteriores. Analiza la progresión de los eventos para descifrar el origen de la entidad.
        </p>
      </div>

      {/* Timeline Accordion */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {CHRONOLOGICAL_LOGS.map((log) => {
          const isExpanded = expandedDay === log.day;
          const isFatal = log.severity === "FATAL" || log.severity === "UNKNOWN";

          return (
            <div 
              key={log.day}
              className="panel"
              style={{
                borderColor: isFatal ? "var(--alert-red-dim)" : isExpanded ? "var(--border-active)" : "var(--border-dim)",
                backgroundColor: isFatal ? "#0e090b" : "var(--bg-panel)",
                marginBottom: 0
              }}
            >
              <div 
                className="panel-header" 
                style={{ 
                  cursor: "pointer", 
                  backgroundColor: isFatal ? "#140a0e" : isExpanded ? "#11141c" : "#0b0d11",
                  userSelect: "none"
                }}
                onClick={() => toggleDay(log.day)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontWeight: "800", 
                    fontSize: "13px", 
                    color: isFatal ? "var(--alert-red-bright)" : "var(--text-bright)" 
                  }}>
                    [{log.day}]
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--text-dim)" }}>
                    {log.date}
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--text-bright)", fontWeight: "600" }}>
                    — {log.summary}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className={`tag ${isFatal ? 'tag-fatal' : log.severity === 'WARN' ? 'tag-warn' : 'tag-info'}`}>
                    {log.severity}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--text-dim)" }}>
                    {isExpanded ? "▲ Plegar" : "▼ Desplegar"}
                  </span>
                </div>
              </div>

              {isExpanded && (
                <div className="panel-body" style={{ display: "flex", flexDirection: "column", gap: "14px", backgroundColor: "#06070a" }}>
                  <div>
                    <h4 style={{ fontSize: "12px", color: "var(--text-bright)", textTransform: "uppercase", marginBottom: "8px", letterSpacing: "0.05em" }}>
                      VOLCADO DE CONSOLA DEL SERVIDOR:
                    </h4>
                    <div className="terminal-block" style={{ fontSize: "12px", lineHeight: "1.6" }}>
                      {log.entries.map((entry, idx) => (
                        <div 
                          key={idx} 
                          style={{ 
                            color: entry.includes("FATAL") || entry.includes("ERROR") 
                              ? "var(--alert-red-bright)" 
                              : entry.includes("WARN") 
                              ? "#e5b342" 
                              : entry.includes("ALERT") 
                              ? "#ff7070" 
                              : "#9db0cb" 
                          }}
                        >
                          {entry}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ 
                    padding: "12px 14px", 
                    backgroundColor: isFatal ? "rgba(211, 47, 47, 0.08)" : "#0c0e14", 
                    border: "1px solid", 
                    borderColor: isFatal ? "var(--alert-red-dim)" : "var(--border-dim)",
                    fontSize: "12px",
                    color: isFatal ? "#ffa8a8" : "var(--text-muted)"
                  }}>
                    <strong>NOTA DE RECONSTRUCCIÓN:</strong><br />
                    {log.notes}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
