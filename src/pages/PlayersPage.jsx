import React, { useState } from "react";
import { PLAYERS_DATA } from "../data/playersData";
import { soundFX } from "../utils/audio";

export default function PlayersPage() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    soundFX.playClick();
    setSelectedPlayer(selectedPlayer?.id === player.id ? null : player);
  };

  return (
    <div className="page-container" style={{ padding: "28px 32px" }}>
      {/* Section Header */}
      <div style={{ marginBottom: "24px", borderBottom: "1px solid var(--border-dim)", paddingBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ color: "var(--alert-red)" }}>■</span>
          <h2 style={{ fontSize: "18px", letterSpacing: "0.12em", fontWeight: "700", color: "var(--text-bright)", textTransform: "uppercase" }}>
            REGISTRO DE JUGADORES // USER_DOSSIER
          </h2>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "12px" }}>
          Perfiles recuperados de los archivos de autenticación del servidor. Las cuentas listadas con estado anómalo no figuran en la base de datos oficial de Mojang.
        </p>
      </div>

      {/* Players Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "18px" }}>
        {PLAYERS_DATA.map((player) => {
          const isSelected = selectedPlayer?.id === player.id;
          const isAnomalous = player.anomalous;

          return (
            <div 
              key={player.id} 
              className="panel"
              style={{ 
                borderColor: isAnomalous ? "var(--alert-red-dim)" : isSelected ? "var(--border-active)" : "var(--border-dim)",
                backgroundColor: isAnomalous ? "#0e090b" : "var(--bg-panel)",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
              onClick={() => handlePlayerClick(player)}
            >
              <div className="panel-header" style={{ backgroundColor: isAnomalous ? "#140a0d" : "#0b0d11" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ 
                    display: "inline-block", 
                    width: "8px", 
                    height: "8px", 
                    backgroundColor: isAnomalous ? "var(--alert-red)" : "#4f596d" 
                  }} />
                  <span style={{ fontWeight: "700", fontSize: "13px", color: isAnomalous ? "var(--alert-red-bright)" : "var(--text-bright)", letterSpacing: "0.05em" }}>
                    {player.name}
                  </span>
                </div>
                <span className={`tag ${isAnomalous ? 'tag-fatal' : 'tag-info'}`}>
                  {player.status}
                </span>
              </div>

              <div className="panel-body" style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-dim)", paddingBottom: "4px" }}>
                  <span style={{ color: "var(--text-dim)" }}>ROL / PERMISOS:</span>
                  <span style={{ color: "var(--text-muted)" }}>{player.role}</span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-dim)", paddingBottom: "4px" }}>
                  <span style={{ color: "var(--text-dim)" }}>PRIMERA CONEXIÓN:</span>
                  <span style={{ color: isAnomalous ? "var(--alert-red)" : "var(--text-main)", fontWeight: isAnomalous ? "700" : "400" }}>
                    {player.firstConnection}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-dim)", paddingBottom: "4px" }}>
                  <span style={{ color: "var(--text-dim)" }}>ÚLTIMA CONEXIÓN:</span>
                  <span style={{ color: isAnomalous ? "var(--alert-red-bright)" : "var(--text-main)", fontWeight: isAnomalous ? "700" : "400" }}>
                    {player.lastConnection}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-dim)", paddingBottom: "4px" }}>
                  <span style={{ color: "var(--text-dim)" }}>TOTAL SESIONES:</span>
                  <span style={{ color: "var(--text-muted)" }}>{player.connectionCount}</span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-dim)" }}>ÚLTIMAS COORDENADAS:</span>
                  <span style={{ color: isAnomalous ? "var(--alert-red-bright)" : "#9bb0d0", fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                    {player.lastCoordinates}
                  </span>
                </div>

                {/* Expanded dossier info */}
                {isSelected && (
                  <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid var(--border-dim)", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: "1.5" }}>
                      <strong>NOTAS DE ARCHIVO:</strong><br />
                      {player.notes}
                    </div>

                    <div style={{ marginTop: "6px" }}>
                      <span style={{ fontSize: "10px", color: "var(--text-dim)", textTransform: "uppercase" }}>
                        ÚLTIMO INVENTARIO REGISTRADO:
                      </span>
                      <ul style={{ listStyle: "none", paddingLeft: "4px", marginTop: "4px", fontSize: "11px", color: "#8b95a8" }}>
                        {player.inventoryPreview.map((item, idx) => (
                          <li key={idx} style={{ marginBottom: "2px" }}>
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ fontSize: "10px", color: "#545e72", marginTop: "6px" }}>
                      UUID: {player.uuid}
                    </div>
                  </div>
                )}

                <div style={{ marginTop: "6px", textAlign: "right" }}>
                  <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>
                    {isSelected ? "[CLICK PARA COLAPSAR]" : "[CLICK PARA INSPECCIONAR]"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
