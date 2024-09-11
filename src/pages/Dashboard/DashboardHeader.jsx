// DashboardHeader.jsx
import React from "react";
import { Menu } from "lucide-react";

const DashboardHeader = ({ toggleSidebar }) => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl sm:text-2xl font-bold">City Management</h1>
    <button onClick={toggleSidebar} className="sm:hidden">
      <Menu size={24} />
    </button>
  </header>
);

export default DashboardHeader;
