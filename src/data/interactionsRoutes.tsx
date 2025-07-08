import { LiftingStateUp } from "../components/2.Interaction/1.LiftingStateUp/LiftingStateUp";
import { CallbackToParent } from "../components/2.Interaction/2.CallbackToParent/CallbackToParent";
import { ControlledInput } from "../components/2.Interaction/3.ControlledInput/ControlledInput";
import { UncontrolledForm } from "../components/2.Interaction/4.UncontrolledForm/UncontrolledForm";
import { ComponentComposition } from "../components/2.Interaction/5.ComponentComposition/ComponentComposition";
import { ReusableComponents } from "../components/2.Interaction/6.ReusableComponents/ReusableComponents";

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
