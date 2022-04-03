import * as React from "react";
import {  useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  let element = useRoutes(routes);
  return (
    <div>
      <h1>???.....@.</h1>
      {element}
    </div>
  );
}
export default App;
