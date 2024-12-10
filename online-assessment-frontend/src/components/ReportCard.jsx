import React from 'react';

const ReportCard = ({ report }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <h3 className="text-xl font-bold">Exam: {report.examName}</h3>
      <p>Average Score: {report.averageScore}</p>
      <p>Total Participants: {report.totalParticipants}</p>
      <p>Top Performer: {report.topPerformer}</p>
    </div>
  );
};

export default ReportCard;
