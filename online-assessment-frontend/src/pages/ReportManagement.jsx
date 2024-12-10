import React from 'react';
import ReportCard from '../components/ReportCard';

const ReportManagement = () => {
  const reports = [
    {
      examName: 'Math Test',
      averageScore: 85,
      totalParticipants: 25,
      topPerformer: 'John Doe',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Report Management</h2>
      {reports.map((report, index) => (
        <ReportCard key={index} report={report} />
      ))}
    </div>
  );
};

export default ReportManagement;
