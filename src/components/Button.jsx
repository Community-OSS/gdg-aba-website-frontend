import React from 'react';

export default function Button({ children }) {
  return (
    <button className="bg-custom-blue text-white rounded-[10px] px-5 py-[10px]">
      {children}
    </button>
  );
}
