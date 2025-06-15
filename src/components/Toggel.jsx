import { useState } from "react";

export default function Toggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative overflow-hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="mb-6 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        Toggle Panel
      </button>

      {/* Sliding Panel */}
      <div
        className={`
          fixed top-20 right-0 w-64 h-64 bg-green-500 text-white p-6 shadow-lg rounded-l-xl
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        👋 Slide from right to left!
      </div>
    </div>
  );
}
