import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { IndexPage } from "./pages/IndexPage";
import { BasicsPage } from "./pages/BasicsPage";
import { FunctionalComponent } from "./components/1.basics/1.FunctionalComponent/FunctionalComponent";
import { Prop } from "./components/1.basics/2.PropsAndChildren/PropsAndChildren";
import { ConditionalPlayground } from "./components/1.basics/3.ConditionalRendering/ConditionalRendering";
import { List } from "./components/1.basics/4. ListRendering/ListRendering";
import { EventHandling } from "./components/1.basics/5.EventHandling/EventHandling";
import { UseState } from "./components/1.basics/6.UseState/UseState";
import { InputFormHandling } from "./components/1.basics/7.InputFormHandling/InputFormHandling";

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
