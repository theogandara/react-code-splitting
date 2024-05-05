import {
  Routes,
  Route,
  Outlet,
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Store = lazy(() => import("./components/Store"));

function Root() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Route>
    </Routes>
  );
}

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="store">Store</Link>
      </nav>

      <Suspense fallback={<h2>teste</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
}
