import { Suspense, lazy, useState } from "react";

const AdminData = lazy(() => import("./AdminData"));

export default function Home() {
  const [state, setState] = useState({
    isAdmin: false,
  });

  return (
    <div>
      <h1>Home</h1>

      <br />
      <br />

      <button
        onClick={() =>
          import("../sum").then((module) => {
            alert(module.sum(2, 2));
          })
        }
      >
        Sum 2+2
      </button>

      <button
        onClick={() =>
          setState({
            isAdmin: !state.isAdmin,
          })
        }
      >
        Toogle Admin
      </button>

      <Suspense fallback={<h2>teste</h2>}>
        {state.isAdmin ? <AdminData /> : <h2>Not an admin</h2>}
      </Suspense>
    </div>
  );
}
