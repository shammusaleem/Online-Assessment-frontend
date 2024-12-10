import React from 'react';
import ExamDetail from '../components/ExamDetail';

const ExamPage = () => {
  const mockExam = {
    title: 'Science Quiz',
    date: '2024-12-15',
    duration: 60,
    description: 'A comprehensive science quiz covering multiple topics.',
  };

  return (
    <div className="container mx-auto p-6">
      <ExamDetail exam={mockExam} />
    </div>
  );
};

export default ExamPage;
