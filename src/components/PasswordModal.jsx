// src/components/PasswordModal.jsx
import React, { useState } from 'react';

export function PasswordModal({ onClose, onSubmit }) {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (password === 'Sleek@1234') { // Replace 'yourPassword' with the actual password
      onSubmit();
    } else {
      alert('Incorrect password');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}