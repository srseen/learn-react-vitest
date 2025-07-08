import { UseEffectBasic } from "../components/3.hooks/1.UseEffectBasic/UseEffectBasic";
import { UseEffectWithInterval } from "../components/3.hooks/2.UseEffectWithInterval/UseEffectWithInterval";
import { UseEffectWithDependency } from "../components/3.hooks/3.UseEffectWithDependency/UseEffectWithDependency";
import { UseEffectConditional } from "../components/3.hooks/4. UseEffectConditional/UseEffectConditional";
import { UseMemoBasic } from "../components/3.hooks/5.UseMemo/UseMemoBasic";
import { UseCallbackBasic } from "../components/3.hooks/6.UseCallback/UseCallbackBasic";
import { UseWindowWidthExample } from "../components/3.hooks/7.CustomHook/UseWindowWidthExample";

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
