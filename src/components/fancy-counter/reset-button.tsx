import { RotateCcw } from "lucide-react";
import React, { useState } from "react";

export default function ResetButton() {
  const [resetcount, setResetCount] = useState(0);

  const handleResetClick = () => {
    setResetCount(0);
  };

  <button onClick={handleResetClick} className="text-white py-6">
    <RotateCcw size={40} />
  </button>;
}
