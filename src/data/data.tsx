import { FunctionalComponent } from "../components/1.basics/1.FunctionalComponent/FunctionalComponent";
import { Prop } from "../components/1.basics/2.PropsAndChildren/PropsAndChildren";
import { ConditionalPlayground } from "../components/1.basics/3.ConditionalRendering/ConditionalRendering";
import { List } from "../components/1.basics/4. ListRendering/ListRendering";
import { EventHandling } from "../components/1.basics/5.EventHandling/EventHandling";
import { UseState } from "../components/1.basics/6.UseState/UseState";
import { InputFormHandling } from "../components/1.basics/7.InputFormHandling/InputFormHandling";
import { LiftingStateUp } from "../components/2.Interaction/1.LiftingStateUp/LiftingStateUp";
import { IndexPage } from "../pages/IndexPage";
import { BasicsPage } from "../pages/BasicsPage";
import { InteractionsPage } from "../pages/InteractionPage";
import { CallbackToParent } from "../components/2.Interaction/2.CallbackToParent/CallbackToParent";
import { ControlledInput } from "../components/2.Interaction/3.ControlledInput/ControlledInput";
import { UncontrolledForm } from "../components/2.Interaction/4.UncontrolledForm/UncontrolledForm";
import { ComponentComposition } from "../components/2.Interaction/5.ComponentComposition/ComponentComposition";
import { ReusableComponents } from "../components/2.Interaction/6.ReusableComponents/ReusableComponents";
import { UseEffectBasic } from "../components/3.hooks/1.UseEffectBasic/UseEffectBasic";
import { HooksPage } from "../pages/HooksPage";
import { UseEffectWithInterval } from "../components/3.hooks/2.UseEffectWithInterval/UseEffectWithInterval";
import { UseEffectWithDependency } from "../components/3.hooks/3.UseEffectWithDependency/UseEffectWithDependency";
import { UseEffectConditional } from "../components/3.hooks/4. UseEffectConditional/UseEffectConditional";
import { UseMemoBasic } from "../components/3.hooks/5.UseMemo/UseMemoBasic";
import { UseCallbackBasic } from "../components/3.hooks/6.UseCallback/UseCallbackBasic";
import { UseWindowWidthExample } from "../components/3.hooks/7.CustomHook/UseWindowWidthExample";

// หัวข้อต่างๆ
export const sectionRoutes = [
  { path: "", name: "", element: <IndexPage /> },
  { path: "basics", name: "1.Basic", element: <BasicsPage /> },
  {
    path: "interactions",
    name: "2.Interactions",
    element: <InteractionsPage />,
  },
  {
    path: "hooks",
    name: "3.Hooks",
    element: <HooksPage />,
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
  {
    path: "props-callback",
    name: "2.Props Callback",
    element: <CallbackToParent />,
  },
  {
    path: "controlled-input",
    name: "3.Controlled Input",
    element: <ControlledInput />,
  },
  {
    path: "uncontrolled-form",
    name: "4.Uncontrolled Component",
    element: <UncontrolledForm />,
  },
  {
    path: "component-composition",
    name: "5.Component Composition",
    element: <ComponentComposition />,
  },
  {
    path: "reusable-components",
    name: "6.Reusable Components",
    element: <ReusableComponents />,
  },
];

export const hooksRoutes = [
  {
    path: "useEffect-basic",
    name: "1.UseEffect Basic",
    element: <UseEffectBasic />,
  },
  {
    path: "useEffect-with-interval",
    name: "2.UseEffect with Interval",
    element: <UseEffectWithInterval />,
  },
  {
    path: "useEffect-with-dependency",
    name: "3.UseEffect with Dependency",
    element: <UseEffectWithDependency />,
  },
  {
    path: "useEffect-conditional",
    name: "4.UseEffect Conditional",
    element: <UseEffectConditional />,
  },
  {
    path: "useMemo-basic",
    name: "5.UseMemo Basic",
    element: <UseMemoBasic />,
  },
  {
    path: "useCallback-basic",
    name: "6.UseCallback Basic",
    element: <UseCallbackBasic />,
  },
  {
    path: "custom-hook",
    name: "7.Custom Hook",
    element: <UseWindowWidthExample />,
  },
];
