import React from 'react';

export default function Button({ children }) {
  return (
    <button className="bg-blue text-white rounded-[10px] px-5 py-2">
      {children}
    </button>
  );
}
