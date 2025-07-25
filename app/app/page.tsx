"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const DynamicCourseInfoModal = dynamic(() => import('./components/CourseInfoModal'), {
  ssr: false,
  loading: () => <p className="text-gray-600">Loading course details...</p>,
});

const CourseDetailsPage = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="hero-content text-center">
        <div className="card w-full max-w-md bg-white shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
          <div className="card-body p-0">
            <h2 className="card-title text-3xl font-extrabold text-gray-800 mb-4 justify-center">
              Discover Your Next Skill
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Click below to explore our comprehensive course details and begin your learning journey.
            </p>
            <div className="card-actions justify-center">
              <DynamicCourseInfoModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;