import { BasicsPage } from "../pages/BasicsPage";
import { HooksPage } from "../pages/HooksPage";
import { IndexPage } from "../pages/IndexPage";
import { InteractionsPage } from "../pages/InteractionPage";

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
