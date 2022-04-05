import Layout from "./pages/layout";
import { Link } from "react-router-dom";
import MainPage from './pages/main'
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      // {
      //   path: "/main",
      //   element: <Courses />,
      // },
      { path: "*", element: <NoMatch /> },
    ],
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
