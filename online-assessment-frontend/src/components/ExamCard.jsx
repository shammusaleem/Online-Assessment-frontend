import React from 'react';

const ExamCard = ({ exam, onEnroll }) => {
  return (
    <div className="border p-4 shadow-md rounded-md mb-4">
      <h2 className="text-xl font-bold">{exam.title}</h2>
      <p className="text-gray-600">Date: {exam.date}</p>
      <p className="text-gray-600">Duration: {exam.duration} mins</p>
      <button
        onClick={() => onEnroll(exam.id)}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        Enroll
      </button>
    </div>
  );
};

export default ExamCard;
