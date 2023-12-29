"use client";

import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

export default function PlusMinusButtons({
  handlePlusClick,
  handleMinusClick,
}: any) {
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
