import React, { useState } from "react";
import { SERVER_FILES } from "../data/filesData";
import { soundFX } from "../utils/audio";

export default function FilesPage({ onOpenFile }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredFiles = SERVER_FILES.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          file.description.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedCategory === "ALL") return matchesSearch;
    if (selectedCategory === "LOGS") return matchesSearch && file.path.includes("logs");
    if (selectedCategory === "CONFIG") return matchesSearch && file.path.includes("config");
    if (selectedCategory === "ANOMALIES") return matchesSearch && (file.status === "MODIFIED" || file.status === "ANOMALOUS" || file.status === "MYSTERIOUS" || file.status === "RESTRICTED");
    return matchesSearch;
  });

  return (
    <div className="page-container" style={{ padding: "28px 32px" }}>
      {/* Section Header */}
      <div style={{ marginBottom: "24px", borderBottom: "1px solid var(--border-dim)", paddingBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ color: "var(--alert-red)" }}>■</span>
          <h2 style={{ fontSize: "18px", letterSpacing: "0.12em", fontWeight: "700", color: "var(--text-bright)", textTransform: "uppercase" }}>
            ARCHIVOS DEL SERVIDOR // FILESYSTEM_EXPLORER
          </h2>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "12px" }}>
          Explorador de partición de datos de Papuscrafsters. Ciertos sectores presentan inconsistencias o modificaciones no autorizadas en la tabla de asignación.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "20px" }}>
        <input 
          type="text"
          placeholder="Buscar archivo por nombre o descripción..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            minWidth: "260px",
            backgroundColor: "#0d0f14",
            border: "1px solid var(--border-subtle)",
            color: "#fff",
            padding: "8px 14px",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            outline: "none"
          }}
        />

        <div style={{ display: "flex", gap: "6px" }}>
          {["ALL", "LOGS", "CONFIG", "ANOMALIES"].map((cat) => (
            <button
              key={cat}
              className={`sys-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => { soundFX.playClick(); setSelectedCategory(cat); }}
            >
              [{cat}]
            </button>
          ))}
        </div>
      </div>

      {/* File Explorer Table */}
      <div className="panel" style={{ padding: 0 }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "12px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0b0c10", borderBottom: "1px solid var(--border-dim)", color: "var(--text-dim)" }}>
                <th style={{ padding: "10px 16px", fontWeight: "700" }}>NOMBRE DEL ARCHIVO</th>
                <th style={{ padding: "10px 16px", fontWeight: "700" }}>RUTA INTERNA</th>
                <th style={{ padding: "10px 16px", fontWeight: "700" }}>TAMAÑO</th>
                <th style={{ padding: "10px 16px", fontWeight: "700" }}>FECHA / HORA</th>
                <th style={{ padding: "10px 16px", fontWeight: "700" }}>ESTADO DE INTEGRIDAD</th>
                <th style={{ padding: "10px 16px", fontWeight: "700", textAlign: "right" }}>ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              {filteredFiles.map((file) => {
                let statusTagClass = "tag-info";
                if (file.status === "MODIFIED" || file.status === "RESTRICTED") statusTagClass = "tag-fatal";
                if (file.status === "CORRUPTED" || file.status === "FATAL") statusTagClass = "tag-danger";
                if (file.status === "MYSTERIOUS" || file.status === "ANOMALOUS") statusTagClass = "tag-warn";

                return (
                  <tr 
                    key={file.id}
                    style={{
                      borderBottom: "1px solid var(--border-dim)",
                      cursor: "pointer",
                      transition: "background-color 0.1s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#13161f"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    onClick={() => {
                      soundFX.playClick();
                      onOpenFile(file);
                    }}
                  >
                    <td style={{ padding: "12px 16px", color: "var(--text-bright)", fontWeight: "600" }}>
                      <span style={{ marginRight: "8px", color: "var(--text-dim)" }}>
                        {file.path.includes("zip") ? "📦" : file.path.includes("dat") ? "💾" : "📄"}
                      </span>
                      {file.name}
                    </td>
                    <td style={{ padding: "12px 16px", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                      {file.path}
                    </td>
                    <td style={{ padding: "12px 16px", color: "var(--text-muted)" }}>
                      {file.size}
                    </td>
                    <td style={{ padding: "12px 16px", color: "var(--text-muted)" }}>
                      {file.date}
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <span className={`tag ${statusTagClass}`}>
                        {file.statusLabel || file.status}
                      </span>
                    </td>
                    <td style={{ padding: "12px 16px", textAlign: "right" }}>
                      <button 
                        className="sys-btn"
                        style={{ padding: "4px 10px", fontSize: "10px" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          soundFX.playClick();
                          onOpenFile(file);
                        }}
                      >
                        {file.access === "PASSWORD_REQUIRED" ? "DESBLOQUEAR →" : "LEER →"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text-dim)" }}>
        <span>ARCHIVOS MOSTRADOS: {filteredFiles.length} / {SERVER_FILES.length}</span>
        <span>AVISO: Cualquier archivo marcado como 'MODIFIED' a las 03:17:42 contiene discrepancias no registradas en consola.</span>
      </div>
    </div>
  );
}
