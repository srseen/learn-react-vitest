import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { IndexPage } from "./pages/IndexPage";
import { BasicsPage } from "./pages/BasicsPage";
import { FunctionalComponent } from "./components/basics/1.FunctionalComponent/FunctionalComponent";
import { Prop } from "./components/basics/2.PropsAndChildren/PropsAndChildren";
import { ConditionalPlayground } from "./components/basics/3.Conditional Rendering/ConditionalRendering";
import { List } from "./components/basics/4. List Rendering/ListRendering";
import { EventHandling } from "./components/basics/5.Event Handling/EventHandling";
import { UseState } from "./components/basics/6.State (useState)/UseState";
import { InputFormHandling } from "./components/basics/7.Input Form Handling/InputFormHandling";

const basicRoutes = [
  { path: "", element: <BasicsPage /> },
  { path: "functional", element: <FunctionalComponent /> },
  { path: "prop", element: <Prop /> },
  { path: "conditional", element: <ConditionalPlayground /> },
  { path: "list", element: <List /> },
  { path: "event", element: <EventHandling /> },
  { path: "state", element: <UseState /> },
  { path: "input", element: <InputFormHandling /> },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {basicRoutes.map((route) => (
          <Route
            key={route.path}
            path={`/basics/${route.path}`}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
