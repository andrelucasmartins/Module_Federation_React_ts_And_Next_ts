import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count = {count}</div>
      <button
        className="rounded text-white text:white bg-black px-6"
        onClick={() => setCount(count + 1)}
      >
        + 1
      </button>
    </div>
  );
}
