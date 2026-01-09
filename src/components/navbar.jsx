import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Ryze</h1>

        <ul className={`md:flex gap-8 text-gray-700 ${open ? "flex flex-col absolute top-16 left-0 w-full bg-white p-4 md:static md:flex-row" : "hidden md:flex"}`}>
          <li className="hover:text-blue-600 cursor-pointer py-2 md:py-0">Home</li>
          <li className="hover:text-blue-600 cursor-pointer py-2 md:py-0">Features</li>
          <li className="hover:text-blue-600 cursor-pointer py-2 md:py-0">Pricing</li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 hidden md:block">
            Book a Demo
          </button>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}
