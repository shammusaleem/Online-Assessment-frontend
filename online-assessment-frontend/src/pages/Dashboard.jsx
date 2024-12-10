import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <p>Welcome to the admin panel. Manage exams, users, and reports here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
