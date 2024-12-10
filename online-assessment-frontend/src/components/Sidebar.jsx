import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <ul>
        <li className="mb-2">
          <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/report-management" className="hover:text-blue-300">Reports</Link>
        </li>
        <li className="mb-2">
          <Link to="/exam-management" className="hover:text-blue-300">Exams</Link>
        </li>
        <li className="mb-2">
          <Link to="/user-management" className="hover:text-blue-300">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
