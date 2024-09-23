import React, { useState } from "react";
import {
  Briefcase,
  Search,
  Filter,
  PlusCircle,
  Calendar,
  Users,
  MapPin,
} from "lucide-react";

const ProjectCard = ({
  title,
  description,
  startDate,
  endDate,
  departments,
  location,
  phase,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            phase === "Planning"
              ? "bg-yellow-100 text-yellow-800"
              : phase === "Execution"
              ? "bg-blue-100 text-blue-800"
              : phase === "Completed"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {phase}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Calendar size={16} className="mr-1" />
        <span className="mr-4">
          {startDate} - {endDate}
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Users size={16} className="mr-1" />
        <span className="mr-4">Departments: {departments.join(", ")}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <MapPin size={16} className="mr-1" />
        <span>{location}</span>
      </div>
    </div>
  );
};

const ProjectPlanning = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Smart City Infrastructure Upgrade",
      description:
        "Implementing IoT sensors and 5G network across the city for improved data collection and connectivity.",
      startDate: "2024-09-01",
      endDate: "2025-08-31",
      departments: ["IT", "Urban Planning", "Public Works"],
      location: "City-wide",
      phase: "Planning",
    },
    {
      title: "Green Energy Initiative",
      description:
        "Installing solar panels on government buildings and creating community solar farms.",
      startDate: "2024-10-15",
      endDate: "2025-04-30",
      departments: ["Environment", "Energy", "Urban Planning"],
      location: "Multiple locations",
      phase: "Execution",
    },
    {
      title: "Public Transportation Revamp",
      description:
        "Introducing electric buses and optimizing routes based on AI-driven demand prediction.",
      startDate: "2024-11-01",
      endDate: "2025-10-31",
      departments: ["Transport", "Environment", "IT"],
      location: "City-wide",
      phase: "Planning",
    },
    {
      title: "Urban Greenspace Expansion",
      description:
        "Creating new parks and green corridors to improve air quality and provide recreational spaces.",
      startDate: "2024-08-01",
      endDate: "2025-07-31",
      departments: ["Urban Planning", "Environment", "Parks & Recreation"],
      location: "Various city districts",
      phase: "Execution",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      (filter === "All" || project.phase === filter) &&
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.departments
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Briefcase size={24} className="mr-2" />
        Project Planning
      </h2>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <div className="relative flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search projects..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
        <div className="relative flex-1 max-w-xs">
          <select
            className="pl-10 pr-4 py-2 border rounded-lg appearance-none w-full"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Planning</option>
            <option>Execution</option>
            <option>Completed</option>
          </select>
          <Filter
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 transition-colors">
          <PlusCircle size={16} className="mr-2" />
          Create New Project
        </button>
      </div>
    </div>
  );
};

export default ProjectPlanning;
