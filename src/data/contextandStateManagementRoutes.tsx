import { ThemePage } from "../components/4.ContextandStateManagement/1.ReactContextAPI/ThemePage";
import { UseReducerCounter } from "../components/4.ContextandStateManagement/2.UseReducer/UseReducerCounter";
import { GlobalCounterPage } from "../components/4.ContextandStateManagement/3.GlobalState/GlobalCounterPage";

export const contextandStateManagementRoutes = [
  {
    path: "react-context-api",
    name: "1.React Context API",
    element: <ThemePage />,
  },
  {
    path: "use-reducer",
    name: "2.UseReducer",
    element: <UseReducerCounter />,
  },
  {
    path: "global+state",
    name: "3.Global State with Context + useReducer",
    element: <GlobalCounterPage />,
  },
];
