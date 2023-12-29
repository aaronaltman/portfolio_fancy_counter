import { RotateCcw } from "lucide-react";
import { Button } from "../ui/button";

export default function ResetButton({ handleResetClick }: any) {
  return (
    <div className="bg-slate-800">
      <Button
        variant={null}
        onClick={handleResetClick}
        className="text-white py-10"
      >
        <RotateCcw size={30} />
      </Button>
    </div>
  );
}
