import React from 'react';

export const Card = ({ label, value, color = 'teal', icon: Icon }) => {
  const colorClasses = {
    teal: 'bg-teal-50 border-teal-200 text-teal-600',
    blue: 'bg-blue-50 border-blue-200 text-blue-600',
    green: 'bg-green-50 border-green-200 text-green-600',
    purple: 'bg-purple-50 border-purple-200 text-purple-600'
  };

  return (
    <div className={`${colorClasses[color]} rounded-lg p-6 border`}>
      <div className="flex items-center justify-between mb-2">
        <p className={`text-sm font-medium ${colorClasses[color].split(' ')[2]}`}>
          {label}
        </p>
        {Icon && <Icon size={24} />}
      </div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};
