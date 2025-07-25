"use client";
import React from 'react';

const CourseInfoModal = () => {
  const handleOpenModal = () => {
    const modal = document.getElementById('course_info_modal');

    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    } else {
      console.error("Modal with ID 'course_info_modal' not found or is not a dialog element.");
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
        onClick={handleOpenModal} 
      >
        View Course Details
      </button>

      {/* Course Information Modal */}
      <dialog id="course_info_modal" className="modal modal-middle sm:modal-middle">
        <div className="modal-box p-6 bg-white rounded-lg shadow-2xl relative">
          {/* Close button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-500 hover:text-gray-800 transition-colors duration-200">
              ✕
            </button>
          </form>

          {/* Modal Header */}
          <h3 className="font-extrabold text-2xl text-gray-800 mb-4 border-b pb-3">
            Mastering React Hooks: A Deep Dive
          </h3>

          {/* Course Details */}
          <div className="text-gray-700 space-y-3">
            <p>
              <strong className="font-semibold text-gray-900">Instructor:</strong> Jane Doe
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Duration:</strong> 10 Weeks (Self-paced)
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Effort:</strong> 5-7 hours/week
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Skill Level:</strong> Intermediate to Advanced
            </p>
            <p className="text-sm text-gray-600 italic mt-4">
              Learn how to leverage React Hooks to write cleaner, more functional, and efficient React components. This course covers everything from basic `useState` and `useEffect` to custom hooks and performance optimization.
            </p>
          </div>

          <div className="modal-action mt-6">
            <button className="btn btn-success text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors duration-200">
              Enroll Now
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CourseInfoModal;