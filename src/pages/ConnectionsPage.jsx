import React, { useState } from "react";
import { CONNECTIONS_DATA } from "../data/connectionsData";
import { soundFX } from "../utils/audio";

export default function ConnectionsPage() {
  const [filterUser, setFilterUser] = useState("ALL");

  const filteredConnections = CONNECTIONS_DATA.filter((conn) => {
    if (filterUser === "ALL") return true;
    if (filterUser === "ANOMALOUS") return conn.anomalous;
    return conn.player.toLowerCase() === filterUser.toLowerCase();
  });

  return (
    <div className="page-container" style={{ padding: "28px 32px" }}>
      {/* Section Header */}
      <div style={{ marginBottom: "24px", borderBottom: "1px solid var(--border-dim)", paddingBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ color: "var(--alert-red)" }}>■</span>
          <h2 style={{ fontSize: "18px", letterSpacing: "0.12em", fontWeight: "700", color: "var(--text-bright)", textTransform: "uppercase" }}>
            REGISTRO DE CONEXIONES // NETWORK_AUDIT_LOG
          </h2>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "12px" }}>
          Tabla de sockets TCP registrados por el demonio Netty de Minecraft en el puerto 25565. Las direcciones IP pertenecen a subredes internas simuladas.
        </p>
      </div>

      {/* Filter Buttons */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
        {["ALL", "ANOMALOUS", "Strainer747k", "Defri", "Tadic", "Maxoso"].map((cat) => (
          <button
            key={cat}
            className={`sys-btn ${filterUser === cat ? 'active' : ''}`}
            onClick={() => { soundFX.playClick(); setFilterUser(cat); }}
          >
            [{cat}]
          </button>
        ))}
      </div>

      {/* Connection Table Panel */}
      <div className="panel" style={{ padding: 0 }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "12px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0b0c10", borderBottom: "1px solid var(--border-dim)", color: "var(--text-dim)" }}>
                <th style={{ padding: "10px 14px", fontWeight: "700" }}>TIMESTAMP</th>
                <th style={{ padding: "10px 14px", fontWeight: "700" }}>JUGADOR</th>
                <th style={{ padding: "10px 14px", fontWeight: "700" }}>IP ORIGEN (PSEUDO)</th>
                <th style={{ padding: "10px 14px", fontWeight: "700" }}>EVENTO</th>
                <th style={{ padding: "10px 14px", fontWeight: "700" }}>LATENCIA (PING)</th>
                <th style={{ padding: "10px 14px", fontWeight: "700" }}>PÉRDIDA</th>
                <th style={{ padding: "10px 14px", fontWeight: "700" }}>MOTIVO / DETALLE</th>
              </tr>
            </thead>
            <tbody>
              {filteredConnections.map((conn) => {
                const isAnom = conn.anomalous;
                return (
                  <tr 
                    key={conn.id}
                    style={{
                      borderBottom: "1px solid var(--border-dim)",
                      backgroundColor: isAnom ? "rgba(211, 47, 47, 0.05)" : "transparent"
                    }}
                  >
                    <td style={{ padding: "12px 14px", color: isAnom ? "var(--alert-red-bright)" : "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                      {conn.time}
                    </td>
                    <td style={{ padding: "12px 14px", fontWeight: "700", color: isAnom ? "var(--alert-red-bright)" : "var(--text-bright)" }}>
                      {conn.player}
                    </td>
                    <td style={{ padding: "12px 14px", color: isAnom ? "var(--alert-red)" : "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                      {conn.ip}:{conn.port}
                    </td>
                    <td style={{ padding: "12px 14px" }}>
                      <span className={`tag ${conn.action === 'CONNECTED' ? 'tag-info' : conn.action === 'PROBE' ? 'tag-warn' : 'tag-danger'}`}>
                        {conn.action}
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", color: conn.ping.includes("9999") ? "var(--alert-red-bright)" : "var(--text-muted)" }}>
                      {conn.ping}
                    </td>
                    <td style={{ padding: "12px 14px", color: conn.packetLoss.includes("100") ? "var(--alert-red-bright)" : "var(--text-muted)" }}>
                      {conn.packetLoss}
                    </td>
                    <td style={{ padding: "12px 14px", color: isAnom ? "#ffa3a3" : "#8c94a5", fontSize: "11px" }}>
                      {conn.reason}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text-dim)" }}>
        <span>TOTAL ENTRADAS MOSTRADAS: {filteredConnections.length}</span>
        <span>ATENCIÓN: A las 03:17:42 se registró una inyección directa sin resolución DNS.</span>
      </div>
    </div>
  );
}
