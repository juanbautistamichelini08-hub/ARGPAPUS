import React, { useState } from "react";
import { soundFX } from "../utils/audio";

export default function Header({ onOpenTerminal, onToggleAudio, audioEnabled }) {
  const [glitchActive, setGlitchActive] = useState(false);

  const handleWatcherHover = () => {
    setGlitchActive(true);
    soundFX.playGlitch();
    setTimeout(() => setGlitchActive(false), 800);
  };

  return (
    <header className="app-header-container">
      {/* Top Banner Notice */}
      <div className="top-notice-bar">
        <div>
          <span className="top-notice-text">EL SERVIDOR AÚN EXISTE...</span>
          <span className="top-notice-sub">PERO YA NO ES EL MISMO.</span>
        </div>
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>
            PORT 25565 // TCP CLOSED
          </span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="app-header">
        <div className="header-brand">
          {/* Minecraft Cracked Cube Icon */}
          <div className="brand-icon-box" title="PAPUSCRAFSTERS NODE #01">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
              {/* Red anomaly fissure */}
              <path d="M12 12L15 16L13 18L17 21" stroke="#d32f2f" strokeWidth="2" />
            </svg>
          </div>

          <div className="brand-titles">
            <h1 className="brand-main">PAPUSCRAFSTERS</h1>
            <span className="brand-sub">SERVER ARCHIVE // OFFICIAL</span>
          </div>
        </div>

        <div className="header-right">
          {/* Audio FX Toggle */}
          <button
            className={`sys-btn ${audioEnabled ? "active" : ""}`}
            onClick={onToggleAudio}
            title="Activar/Desactivar zumbido de terminal y audio de sistema"
          >
            <span>[FX: {audioEnabled ? "ON" : "OFF"}]</span>
          </button>

          {/* Terminal Shortcut */}
          <button
            className="sys-btn btn-danger"
            onClick={onOpenTerminal}
            title="Abrir consola de comandos del servidor (~)"
          >
            <span>_TERMINAL</span>
          </button>

          {/* Subtle Observer text */}
          <span 
            className={`watcher-text ${glitchActive ? "glitch-active" : ""}`}
            onMouseEnter={handleWatcherHover}
            title="???"
          >
            {glitchActive ? "03:17:42" : "I see you..."}
          </span>
        </div>
      </div>
    </header>
  );
}
