import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { sectionRoutes, basicsRoutes, interactionsRoutes } from "./data/data";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
