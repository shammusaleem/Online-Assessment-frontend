import React from 'react';

const ExamDetail = ({ exam }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">{exam.title}</h2>
      <p>Date: {exam.date}</p>
      <p>Duration: {exam.duration} mins</p>
      <p>Description: {exam.description}</p>
    </div>
  );
};

export default ExamDetail;
