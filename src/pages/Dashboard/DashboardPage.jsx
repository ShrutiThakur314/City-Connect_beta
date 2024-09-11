import React, { useState, useRef, useEffect } from "react";
import SidebarNavigation from "./SidebarNavigation";
import DashboardHeader from "./DashboardHeader";
import CityData from "./CityData";
import ProjectsOverview from "./ProjectsOverview";
import ResourceManagement from "./ResourceManagement";
import SchedulingTool from "./SchedulingTool";
import CapacityBuilding from "./CapacityBuilding";
import DiscussionForum from "./DiscussionForum";
import UserManagement from "./UserManagement";
import ProjectPlanning from "./ProjectPlanning";

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('CityData');
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'CityData':
        return <CityData />;
      case 'ProjectsOverview':
        return <ProjectsOverview />;
      case 'ResourceManagement':
        return <ResourceManagement />;
      case 'SchedulingTool':
        return <SchedulingTool />;
      case 'CapacityBuilding':
        return <CapacityBuilding />;
      case 'DiscussionForum':
        return <DiscussionForum />;
      case 'UserManagement':
        return <UserManagement />;
      case 'ProjectPlanning':
        return <ProjectPlanning />;
      default:
        return <CityData />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <SidebarNavigation
          ref={sidebarRef}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          setActiveComponent={setActiveComponent}
        />
        <main
          className={`flex-1 p-4 sm:p-6 bg-gray-100 overflow-y-auto transition-all duration-300 ${
            isSidebarOpen ? "-z-10" : "z-0"
          }`}
        >
          {renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
