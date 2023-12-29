"use client";

import { use, useEffect } from "react";

export default function CountDisplay({
  handleCountChange,
  count,
  setCount,
}: any) {
  useEffect(() => {
    setCount(count);
  }, [count]);

  return (
    <section className="text-white text-8xl py-4" onChange={handleCountChange}>
      {count}
    </section>
  );
}
