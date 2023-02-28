import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

const Counter = lazy(() => import("remote/Counter"));

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl px-4">
    <div>Name: host</div>
    <Suspense fallback={"Loading Counter remote"}>
      <Counter />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
