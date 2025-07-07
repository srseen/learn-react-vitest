import { FunctionalComponent } from "../components/1.basics/1.FunctionalComponent/FunctionalComponent";
import { Prop } from "../components/1.basics/2.PropsAndChildren/PropsAndChildren";
import { ConditionalPlayground } from "../components/1.basics/3.ConditionalRendering/ConditionalRendering";
import { List } from "../components/1.basics/4. ListRendering/ListRendering";
import { EventHandling } from "../components/1.basics/5.EventHandling/EventHandling";
import { UseState } from "../components/1.basics/6.UseState/UseState";
import { InputFormHandling } from "../components/1.basics/7.InputFormHandling/InputFormHandling";
import { LiftingStateUp } from "../components/2.Interaction/LiftingStateUp";
import { IndexPage } from "../pages/IndexPage";
import { BasicsPage } from "../pages/BasicsPage";
import { InteractionsPage } from "../pages/InteractionPage";

// หัวข้อต่างๆ
export const sectionRoutes = [
  { path: "", name: "", element: <IndexPage /> },
  { path: "basics", name: "1.Basic", element: <BasicsPage /> },
  {
    path: "interactions",
    name: "2.Interactions",
    element: <InteractionsPage />,
  },
];

// หัวข้อย่อย basics
export const basicsRoutes = [
  {
    path: "functional",
    name: "1.Functional Component",
    element: <FunctionalComponent />,
  },
  { path: "prop", name: "2.Props", element: <Prop /> },
  {
    path: "conditional",
    name: "3.Conditional Rendering",
    element: <ConditionalPlayground />,
  },
  {
    path: "list",
    name: "4.List Rendering",
    element: <List />,
  },
  { path: "event", name: "5.Event Handling", element: <EventHandling /> },
  { path: "state", name: "6.useState", element: <UseState /> },
  {
    path: "input",
    name: "7.Input Form Handling",
    element: <InputFormHandling />,
  },
];

// หัวข้อย่อย interactions
export const interactionsRoutes = [
  {
    path: "lifting-state-up",
    name: "1.Lifting State Up",
    element: <LiftingStateUp />,
  },
];
