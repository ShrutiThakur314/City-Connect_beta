import React, { useState } from "react";
import { Users, Search, Filter, UserPlus, Edit, Trash2 } from "lucide-react";

const UserCard = ({ name, department, role, email }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            role === "Admin"
              ? "bg-red-100 text-red-800"
              : role === "Manager"
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {role}
        </span>
      </div>
      <div className="text-sm text-gray-600 mb-2">
        <p>Department: {department}</p>
        <p>Email: {email}</p>
      </div>
      <div className="flex justify-end space-x-2">
        <button className="text-blue-500 hover:text-blue-700">
          <Edit size={16} />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const users = [
    {
      name: "John Doe",
      department: "IT",
      role: "Admin",
      email: "john.doe@citygovt.com",
    },
    {
      name: "Jane Smith",
      department: "Urban Planning",
      role: "Manager",
      email: "jane.smith@citygovt.com",
    },
    {
      name: "Mike Johnson",
      department: "Transport",
      role: "Employee",
      email: "mike.johnson@citygovt.com",
    },
    {
      name: "Sarah Lee",
      department: "Environment",
      role: "Manager",
      email: "sarah.lee@citygovt.com",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      (filter === "All" || user.role === filter) &&
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Users size={24} className="mr-2" />
        User Management
      </h2>
      <div className="mb-4 flex flex-wrap items-center">
        <div className="relative mr-4 mb-2">
          <input
            type="text"
            placeholder="Search users..."
            className="pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
        <div className="relative mb-2">
          <select
            className="pl-10 pr-4 py-2 border rounded-lg appearance-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Employee</option>
          </select>
          <Filter
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 transition-colors">
          <UserPlus size={16} className="mr-2" />
          Add New User
        </button>
      </div>
    </div>
  );
};

export default UserManagement;
