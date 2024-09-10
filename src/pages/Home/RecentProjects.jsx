// src/pages/Home/RecentProjects.jsx
import React from 'react';

const projects = [
  { title: "Smart City Infrastructure", description: "A project to modernize city infrastructure.", link: "#" },
  { title: "Public Data Integration", description: "Integrating public data for better decision-making.", link: "#" },
  { title: "Water Management System", description: "Improving water usage and management.", link: "#" }
];

const RecentProjects = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-500 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline mt-4 block">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
