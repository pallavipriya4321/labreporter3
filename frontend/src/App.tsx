import { useEffect, useState } from "react";

import type { Api } from "../../api/app";

import { treaty } from "@elysiajs/eden";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const api = treaty<Api>(window.location.host).api;
    api.doctors.index.get().then((response) => {
      if (response.error) {
        throw response.error;
      }
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
