import React from 'react';
import { ListItem } from './ListItem';

export function Column({ title, companies, onCompanyClick }) {
  return (
    <div className="flex-1 min-w-[200px] p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
      <ul className="space-y-2">
        {companies.map((company) => (
          <ListItem 
            key={company.company_id} 
            company={company}
            onClick={onCompanyClick}
          />
        ))}
      </ul>
    </div>
  );
}