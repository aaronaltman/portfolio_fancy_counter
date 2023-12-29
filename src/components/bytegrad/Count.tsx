"use client";

import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <p
      className="text-6xl font-bold text-white"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </p>
  );
}
