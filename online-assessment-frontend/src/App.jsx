import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ReportManagement from './pages/ReportManagement';
import ExamPage from './pages/ExamPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          {/* Use Routes and element prop for route rendering */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report-management" element={<ReportManagement />} />
            <Route path="/exam/:id" element={<ExamPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
