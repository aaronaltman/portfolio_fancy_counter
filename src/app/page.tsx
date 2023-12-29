import CountDisplay from "@/components/fancy-counter/count-display";
import PlusMinusButtons from "@/components/fancy-counter/p-m-buttons";
import { Button } from "@/components/ui/button";
import { Minus, Plus, RotateCcw } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center bg-slate-800 py-10 px-10 rounded-xl">
        <h1 className="text-white text-6xl text-center py-2">Fancy Counter</h1>
        <CountDisplay />
        <button className="text-white py-6">
          <RotateCcw size={40} />
        </button>
        <PlusMinusButtons />
      </div>
    </main>
  );
}
