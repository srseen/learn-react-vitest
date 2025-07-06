import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import IndexPage from "./pages/IndexPage";
import BasicsPage from "./pages/BasicsPage";
import { FunctionalComponent } from "./components/basics/1.FunctionalComponent/FunctionalComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/* basic routes */}
        <Route path="/basics" element={<BasicsPage />} />
        <Route path="/basics/functional" element={<FunctionalComponent />} />
        {/* basic routes */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
