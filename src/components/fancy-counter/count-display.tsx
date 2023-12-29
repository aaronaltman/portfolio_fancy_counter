"use client";

import React, { useState } from "react";

export default function CountDisplay() {
  const [count, setCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  return (
    <section className="text-white text-8xl py-4" onChange={handleChange}>
      {count}
    </section>
  );
}
