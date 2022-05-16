import * as React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./scss/index.scss";

const App: React.FC = () => {
  let element = useRoutes(routes);
  return <div>{element}</div>;
}
export default App;
