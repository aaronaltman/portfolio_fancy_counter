"use client";

import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

const handleMinusClick = () => {
  console.log("Minus clicked");
};

const handlePlusClick = () => {
  console.log("Plus clicked");
};

export default function PlusMinusButtons() {
  return (
    <section className="flex gap-1 py-4 px-4 max-w-md">
      <Button onClick={handleMinusClick} className="bg-slate-700 py-20 px-20">
        <Minus size={40} />
      </Button>
      <Button onClick={handlePlusClick} className="bg-slate-700 py-20 px-20">
        <Plus size={40} />
      </Button>
    </section>
  );
}
