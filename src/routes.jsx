import Layout from "./pages/layout";
import { Link } from "react-router-dom";
import MainPage from "./pages/main";
import DataPage from "./pages/data";
const routes = [
  {
    path: "/",
    name: "react-app",
    element: <Layout />,
    children: [
      { index: true, name: "main", element: <MainPage /> },
      {
        path: "/data",
        element: <DataPage />,
        // children: [
        //   {index: true, name: 'data', element}
        // ]
        
        
      },
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
