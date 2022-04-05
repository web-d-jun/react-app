import Layout from "./pages/layout";
import { Link } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <Layout />,
  },
  { path: "*", element: <NoMatch /> },
];

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default routes;
