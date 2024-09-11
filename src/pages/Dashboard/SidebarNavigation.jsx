import React, { forwardRef } from "react";
import { X } from "lucide-react";

const SidebarNavigation = forwardRef(({ isOpen, toggleSidebar, setActiveComponent }, ref) => (
  <nav
    ref={ref}
    className={`bg-gray-800 text-white w-64 h-screen fixed left-0 top-0 transform transition-transform duration-300 ease-in-out z-50 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } sm:translate-x-0 sm:static`}
  >
    <div className="flex justify-between items-center p-4 sm:hidden">
      <h2 className="font-bold">Menu</h2>
      <button onClick={toggleSidebar}>
        <X size={24} />
      </button>
    </div>
    <ul className="p-4">
      <li
        className="mb-4 cursor-pointer"
        onClick={() => setActiveComponent("CityData")}
      >
        City Data
      </li>
      <li
        className="mb-4 cursor-pointer"
        onClick={() => setActiveComponent("ProjectsOverview")}
      >
        Projects Overview
      </li>
      <li
        className="mb-4 cursor-pointer"
        onClick={() => setActiveComponent("ResourceManagement")}
      >
        Resource Management
      </li>
      <li
        className="mb-4 cursor-pointer"
        onClick={() => setActiveComponent("SchedulingTool")}
      >
        Scheduling Tool
      </li>
      <li
        className="mb-4 cursor-pointer"
        onClick={() => setActiveComponent("CapacityBuilding")}
      >
        Capacity Building
      </li>
      <li
        className="mb-4 cursor-pointer"
        onClick={() => setActiveComponent("DiscussionForum")}
      >
        Discussion Forum
      </li>
      <li
        className="mb-4 cursor-pointer"
        onClick={() => setActiveComponent("UserManagement")}
      >
        User Management
      </li>
      <li
        className="mb-4 cursor-pointer"
        onClick={() => setActiveComponent("ProjectPlanning")}
      >
        Project Planning
      </li>
    </ul>
  </nav>
));

export default SidebarNavigation;
