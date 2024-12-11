import React from 'react';

export function LoadingState() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-pulse space-y-4 w-full">
        {[...Array(5)].map((_, colIndex) => (
          <div key={colIndex} className="bg-gray-200 h-12 rounded-md w-full"/>
        ))}
      </div>
    </div>
  );
}