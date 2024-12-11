import React from 'react';

export function ListItem({ company, onClick }) {
  return (
    <li 
      onClick={() => onClick(company)}
      className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors cursor-pointer group"
    >
      <div className="flex items-center justify-between">
        <span className="text-gray-700 group-hover:text-gray-900">
          {company.company_name}
        </span>
        <span className="text-xs text-gray-400 group-hover:text-gray-600">
          Priority {company.priority}
        </span>
      </div>
    </li>
  );
}