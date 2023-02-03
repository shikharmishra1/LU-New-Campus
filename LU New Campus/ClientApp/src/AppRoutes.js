import { Material } from "../../../../../../node_modules/three/build/three";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Home  from "./components/Home";
import Study from "./components/Study";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/studymaterials',
    element: <Study />
  }
];

export default AppRoutes;
