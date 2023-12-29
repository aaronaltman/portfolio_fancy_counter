"use client";

import React, { useState } from "react";
import CountDisplay from "./count-display";
import ResetButton from "./reset-button";
import PlusMinusButtons from "./p-m-buttons";

export default function CombinedComponents() {
  const [resetcount, setResetCount] = useState(0);
  const [count, setCount] = useState(0);
  const [newcount, setNewCount] = useState(0);

  const handleMinusClick = () => {
    setNewCount(newcount - 1);
  };
  const handlePlusClick = () => {
    setNewCount(newcount + 1);
  };

  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  const handleResetClick = () => {
    setResetCount(0);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-800 py-10 px-10 rounded-xl">
      <h1 className="text-white text-6xl text-center py-2">Fancy Counter</h1>
      <CountDisplay
        count={count}
        setCount={setCount}
        handleCountChange={handleCountChange}
      />
      <ResetButton
        resetcount={resetcount}
        handleResetClick={handleResetClick}
      />
      <PlusMinusButtons
        handlePlusClick={handlePlusClick}
        handleMinusClick={handleMinusClick}
      />
    </div>
  );
}