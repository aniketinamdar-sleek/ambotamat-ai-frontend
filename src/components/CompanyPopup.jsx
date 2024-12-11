import React from 'react';

export function CompanyPopup({ company, onClose }) {
  if (!company) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Company Details</h3>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="space-y-3">
          <p><span className="font-medium">Company Name:</span> {company.company_name}</p>
          <p><span className="font-medium">Priority:</span> {company.priority}</p>
        </div>
      </div>
    </div>
  );
}