import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { Header } from "./pages/Header";
import { sectionRoutes } from "./data/sectionRoutes";
import { basicsRoutes } from "./data/basicsRoutes";
import { interactionsRoutes } from "./data/interactionsRoutes";
import { hooksRoutes } from "./data/hooksRoutes";
import { contextandStateManagementRoutes } from "./data/contextandStateManagementRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {sectionRoutes.map((route) => (
          <Route
            key={route.path}
            path={`/${route.path}`}
            element={route.element}
          />
        ))}
        {basicsRoutes.map((route) => (
          <Route
            key={route.path}
            path={`/basics/${route.path}`}
            element={route.element}
          />
        ))}
        {interactionsRoutes.map((route) => (
          <Route
            key={route.path}
            path={`/interactions/${route.path}`}
            element={route.element}
          />
        ))}
        {hooksRoutes.map((route) => (
          <Route
            key={route.path}
            path={`/hooks/${route.path}`}
            element={route.element}
          />
        ))}
        {contextandStateManagementRoutes.map((route) => (
          <Route
            key={route.path}
            path={`/contextandStateManagement/${route.path}`}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
