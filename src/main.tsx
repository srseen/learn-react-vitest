import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { hooksRoutes } from "./data/hooksRoutes";
import { interactionsRoutes } from "./data/interactionsRoutes";
import { basicsRoutes } from "./data/basicsRoutes";
import { sectionRoutes } from "./data/sectionRoutes";
import { Header } from "./pages/Header";

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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
