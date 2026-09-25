import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import FilesPage from "./pages/FilesPage";
import PlayersPage from "./pages/PlayersPage";
import MapsPage from "./pages/MapsPage";
import ConnectionsPage from "./pages/ConnectionsPage";
import LogsPage from "./pages/LogsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import TerminalModal from "./components/TerminalModal";
import FileViewerModal from "./components/FileViewerModal";
import { SERVER_FILES } from "./data/filesData";
import { soundFX } from "./utils/audio";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname || "/");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeFile, setActiveFile] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Sync route on popstate (browser back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Listen for terminal hotkey (`~` or `)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getNormalizedRoute = (rawPath) => {
    let p = rawPath || "/";
    if (p.toLowerCase().startsWith("/argpapus")) {
      p = p.slice("/argpapus".length);
    }
    if (!p.startsWith("/")) {
      p = "/" + p;
    }
    if (p.length > 1 && p.endsWith("/")) {
      p = p.slice(0, -1);
    }
    return p;
  };

  const normalizedRoute = getNormalizedRoute(currentRoute);
  const BASE_PATH = window.location.pathname.toLowerCase().startsWith("/argpapus") ? "/ARGPAPUS" : "";

  // Check if initial URL is a direct file link (e.g., /archivo/player_logs)
  useEffect(() => {
    if (normalizedRoute.startsWith("/archivo/")) {
      const fileId = normalizedRoute.replace("/archivo/", "");
      const found = SERVER_FILES.find((f) => f.id === fileId || f.name === fileId);
      if (found) {
        setActiveFile(found);
      }
    }
  }, [normalizedRoute]);

  const navigateTo = (path) => {
    const fullPath = BASE_PATH + path;
    window.history.pushState({}, "", fullPath);
    setCurrentRoute(fullPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenFile = (file) => {
    setActiveFile(file);
    const fullPath = BASE_PATH + `/archivo/${file.id}`;
    window.history.pushState({}, "", fullPath);
    setCurrentRoute(fullPath);
  };

  const handleCloseFile = () => {
    setActiveFile(null);
    if (normalizedRoute.startsWith("/archivo/")) {
      const fullPath = BASE_PATH + "/archivos";
      window.history.pushState({}, "", fullPath);
      setCurrentRoute(fullPath);
    }
  };

  const toggleAudio = () => {
    const state = soundFX.toggle();
    setAudioEnabled(state);
  };

  // Determine active view
  let PageComponent = NotFoundPage;
  if (normalizedRoute === "/" || normalizedRoute === "/inicio") {
    PageComponent = Home;
  } else if (normalizedRoute === "/archivos" || normalizedRoute.startsWith("/archivo/")) {
    PageComponent = FilesPage;
  } else if (normalizedRoute === "/jugadores") {
    PageComponent = PlayersPage;
  } else if (normalizedRoute === "/mapas") {
    PageComponent = MapsPage;
  } else if (normalizedRoute === "/conexiones") {
    PageComponent = ConnectionsPage;
  } else if (normalizedRoute === "/registros") {
    PageComponent = LogsPage;
  } else if (normalizedRoute === "/acerca") {
    PageComponent = AboutPage;
  }

  return (
    <div className="app-container">
      {/* CRT Scanline & Screen Noise Overlay */}
      <div className="crt-overlay" />

      {/* Top Header */}
      <Header
        onOpenTerminal={() => setTerminalOpen(true)}
        onToggleAudio={toggleAudio}
        audioEnabled={audioEnabled}
      />

      {/* Main Framework with Sidebar and Content View */}
      <div className="main-layout">
        <Sidebar currentRoute={normalizedRoute} onNavigate={navigateTo} />

        <main className="app-content">
          <PageComponent
            onOpenFile={handleOpenFile}
            onNavigate={navigateTo}
            onOpenTerminal={() => setTerminalOpen(true)}
          />
        </main>
      </div>

      {/* File Inspector Modal */}
      {activeFile && (
        <FileViewerModal file={activeFile} onClose={handleCloseFile} />
      )}

      {/* Secret Command Console Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onSelectFile={handleOpenFile}
      />
    </div>
  );
}
