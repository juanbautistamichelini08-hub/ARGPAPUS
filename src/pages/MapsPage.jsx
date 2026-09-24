import React, { useState } from "react";
import { MAP_LOCATIONS } from "../data/mapsData";
import { soundFX } from "../utils/audio";

export default function MapsPage() {
  const [selectedLocation, setSelectedLocation] = useState(MAP_LOCATIONS[0]);
  const [cursorCoords, setCursorCoords] = useState({ x: 184, z: -931 });
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    const yRatio = (e.clientY - rect.top) / rect.height;
    
    // Map bounding box simulation (-2000 to +2000)
    const simulatedX = Math.round(-1000 + xRatio * 2000);
    const simulatedZ = Math.round(-2000 + yRatio * 2000);
    setCursorCoords({ x: simulatedX, z: simulatedZ });
  };

  const handleSelectLocation = (loc) => {
    soundFX.playClick();
    setSelectedLocation(loc);
  };

  const handleCopy = (coordsStr) => {
    soundFX.playBeep(900, 0.04);
    navigator.clipboard.writeText(coordsStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-container" style={{ padding: "28px 32px" }}>
      {/* Section Header */}
      <div style={{ marginBottom: "24px", borderBottom: "1px solid var(--border-dim)", paddingBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ color: "var(--alert-red)" }}>■</span>
          <h2 style={{ fontSize: "18px", letterSpacing: "0.12em", fontWeight: "700", color: "var(--text-bright)", textTransform: "uppercase" }}>
            CARTOGRAFÍA DEL MUNDO // REGION_MAP_VIEWER
          </h2>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "12px" }}>
          Topografía del mapa extraída de los archivos de región .MCA. Los sectores oscurecidos representan chunks faltantes o borrados de la memoria del servidor.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "24px", alignItems: "start" }}>
        
        {/* Map Display & Canvas */}
        <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
          <div className="panel-header" style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="panel-title">
              <span>■</span>
              SECTOR ACTIVO // OVERWORLD_CHUNKS
            </span>
            <span style={{ fontSize: "11px", color: "var(--alert-red-bright)", fontFamily: "var(--font-mono)" }}>
              CURSOR: X: {cursorCoords.x} | Z: {cursorCoords.z}
            </span>
          </div>

          <div 
            style={{ 
              position: "relative", 
              backgroundColor: "#050608",
              cursor: "crosshair",
              borderBottom: "1px solid var(--border-dim)"
            }}
            onMouseMove={handleMouseMove}
          >
            {/* World Map Image */}
            <img 
              src="/images/world_map.jpg" 
              alt="Minecraft World Map Cartography" 
              style={{ width: "100%", height: "auto", display: "block", filter: "contrast(1.1) brightness(0.9)" }}
            />

            {/* Visual Overlays & Coordinates Markers on Map */}
            {MAP_LOCATIONS.map((loc) => {
              const isSelected = selectedLocation?.id === loc.id;
              // Synthetic positioning relative to image
              let topPct = "50%";
              let leftPct = "50%";
              if (loc.id === "crater_anomaly") { topPct = "62%"; leftPct = "72%"; }
              if (loc.id === "old_village") { topPct = "38%"; leftPct = "26%"; }
              if (loc.id === "community_mine") { topPct = "22%"; leftPct = "68%"; }
              if (loc.id === "original_spawn") { topPct = "48%"; leftPct = "45%"; }
              if (loc.id === "tadic_shelter") { topPct = "42%"; leftPct = "52%"; }
              if (loc.id === "void_rift") { topPct = "78%"; leftPct = "70%"; }

              return (
                <div
                  key={loc.id}
                  onClick={() => handleSelectLocation(loc)}
                  style={{
                    position: "absolute",
                    top: topPct,
                    left: leftPct,
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    zIndex: 10
                  }}
                  title={loc.name}
                >
                  <div style={{
                    width: loc.important ? "16px" : "12px",
                    height: loc.important ? "16px" : "12px",
                    backgroundColor: loc.important ? "var(--alert-red)" : isSelected ? "#ffffff" : "#455065",
                    border: "2px solid #000",
                    borderRadius: "50%",
                    boxShadow: loc.important ? "0 0 10px rgba(211, 47, 47, 0.8)" : "none",
                    animation: loc.important ? "pulseOffline 1.5s infinite" : "none"
                  }} />
                  <span style={{
                    fontSize: "9px",
                    fontFamily: "var(--font-mono)",
                    backgroundColor: "rgba(0,0,0,0.85)",
                    color: loc.important ? "var(--alert-red-bright)" : "#d0d6e2",
                    padding: "1px 4px",
                    border: "1px solid var(--border-dim)",
                    marginTop: "2px",
                    whiteSpace: "nowrap"
                  }}>
                    {loc.coordString}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ padding: "12px 18px", backgroundColor: "#0b0c10", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text-dim)" }}>
            <span>RENDERIZADO DE CHUNKS: MINUTOR_PROV_V4</span>
            <span>CAPA: Y=64 (NIVEL DEL MAR)</span>
          </div>
        </div>

        {/* Selected Coordinate Details Panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          <div className="panel" style={{ borderColor: selectedLocation.important ? "var(--alert-red-dim)" : "var(--border-dim)" }}>
            <div className="panel-header" style={{ backgroundColor: selectedLocation.important ? "#140a0b" : "#0b0d11" }}>
              <span className="panel-title" style={{ color: selectedLocation.important ? "var(--alert-red-bright)" : "var(--text-muted)" }}>
                <span>■</span>
                PUNTO DE INTERÉS
              </span>
              <span className={`tag ${selectedLocation.important ? 'tag-fatal' : 'tag-info'}`}>
                {selectedLocation.type}
              </span>
            </div>

            <div className="panel-body" style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "12px" }}>
              <div>
                <h3 style={{ fontSize: "14px", fontWeight: "700", color: "var(--text-bright)", marginBottom: "4px" }}>
                  {selectedLocation.name}
                </h3>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  background: "#08090d",
                  padding: "8px 12px",
                  border: "1px solid var(--border-dim)",
                  marginTop: "8px"
                }}>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: selectedLocation.important ? "var(--alert-red-bright)" : "var(--text-bright)" }}>
                    {selectedLocation.coordString}
                  </span>
                  <button 
                    className="sys-btn"
                    style={{ padding: "3px 8px", fontSize: "10px" }}
                    onClick={() => handleCopy(selectedLocation.coordString)}
                  >
                    {copied ? "COPIADO" : "COPIAR"}
                  </button>
                </div>
              </div>

              <div style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: "1.6" }}>
                <strong>DESCRIPCIÓN DEL SITIO:</strong><br />
                {selectedLocation.description}
              </div>

              <div style={{ 
                padding: "10px", 
                backgroundColor: selectedLocation.important ? "rgba(211, 47, 47, 0.08)" : "#090b0e", 
                border: "1px solid", 
                borderColor: selectedLocation.important ? "var(--alert-red-dim)" : "var(--border-dim)",
                fontSize: "11px",
                color: selectedLocation.important ? "#ff9999" : "var(--text-dim)",
                lineHeight: "1.5"
              }}>
                <strong>NOTAS DE INVESTIGACIÓN:</strong><br />
                {selectedLocation.notes}
              </div>
            </div>
          </div>

          {/* Quick List of All Coordinates */}
          <div className="panel">
            <div className="panel-header">
              <span className="panel-title">COORDENADAS REGISTRADAS</span>
            </div>
            <div className="panel-body" style={{ padding: 0 }}>
              {MAP_LOCATIONS.map((loc) => {
                const isSelected = selectedLocation?.id === loc.id;
                return (
                  <div
                    key={loc.id}
                    onClick={() => handleSelectLocation(loc)}
                    style={{
                      padding: "10px 14px",
                      borderBottom: "1px solid var(--border-dim)",
                      cursor: "pointer",
                      backgroundColor: isSelected ? "#141722" : "transparent",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "12px", color: isSelected ? "var(--text-bright)" : "var(--text-muted)", fontWeight: "600" }}>
                        {loc.name}
                      </div>
                      <div style={{ fontSize: "11px", color: loc.important ? "var(--alert-red-bright)" : "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                        {loc.coordString}
                      </div>
                    </div>
                    {loc.important && (
                      <span className="tag tag-fatal">CLAVE</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
