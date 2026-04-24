import React from 'react';
import { X } from 'lucide-react';
import { useAdmin } from '../../hooks/useAdmin';

const MENU_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'users', label: 'Users', icon: '👥' },
  { id: 'events', label: 'Events', icon: '📅' },
  { id: 'templates', label: 'Templates', icon: '📋' },
  { id: 'emails', label: 'Emails', icon: '✉️' }
];

export const Sidebar = () => {
  const { currentPage, setCurrentPage, sidebarOpen, setSidebarOpen } = useAdmin();

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 p-6 transition-all duration-300 z-50 ${
        !sidebarOpen && '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="text-teal-600 font-bold text-lg">PTL</div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="space-y-2">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setCurrentPage(item.id);
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
              currentPage === item.id
                ? 'bg-teal-50 text-teal-600 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-200">
        <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium">
          Settings
        </button>
      </div>
    </div>
  );
};
