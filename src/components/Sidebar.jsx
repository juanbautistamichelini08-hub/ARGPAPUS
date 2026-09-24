import React from "react";
import { soundFX } from "../utils/audio";

export default function Sidebar({ currentRoute, onNavigate }) {
  const navItems = [
    { id: "/", label: "INICIO", code: "00", badge: "HOST" },
    { id: "/archivos", label: "ARCHIVOS", code: "01", badge: "12" },
    { id: "/jugadores", label: "JUGADORES", code: "02", badge: "07" },
    { id: "/mapas", label: "MAPAS", code: "03", badge: "X/Z" },
    { id: "/conexiones", label: "CONEXIONES", code: "04", badge: "LOG" },
    { id: "/registros", label: "REGISTROS", code: "05", badge: "DAY07" },
    { id: "/acerca", label: "ACERCA DE", code: "06", badge: "INFO" },
  ];

  const handleItemClick = (path) => {
    soundFX.playClick();
    onNavigate(path);
  };

  return (
    <aside className="app-sidebar">
      <div style={{ padding: "12px 18px 6px", borderBottom: "1px solid var(--border-dim)" }}>
        <span style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
          // NAVEGACIÓN // ARCHIVE_V1.2
        </span>
      </div>

      <nav>
        <ul className="nav-menu">
          {navItems.map((item) => {
            const isActive = currentRoute === item.id || (item.id !== "/" && currentRoute.startsWith(item.id));
            return (
              <li key={item.id}>
                <button
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <span style={{ color: isActive ? "var(--alert-red-bright)" : "var(--text-dim)", fontSize: "10px" }}>
                    &gt;
                  </span>
                  <span>{item.label}</span>
                  <span className="nav-link-badge">{item.badge}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sidebar Footer with Server Quick Status */}
      <div className="sidebar-footer">
        <div className="sidebar-status-pill">
          <span className="status-dot-offline"></span>
          <span>SERVIDOR: OFFLINE</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", color: "var(--text-dim)", fontSize: "10px" }}>
          <div>TPS: <span style={{ color: "var(--alert-red)" }}>0.00</span></div>
          <div>ESTADO: <span style={{ color: "#d48b3b" }}>CORRUPCIÓN CHUNKS</span></div>
          <div>CONSOLA: <span style={{ color: "var(--text-muted)" }}>DESCONECTADA</span></div>
          <div style={{ marginTop: "8px", borderTop: "1px dashed var(--border-dim)", paddingTop: "6px" }}>
            <span style={{ color: "#555f75" }}>[TECLA ~ PARA CONSOLA]</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
