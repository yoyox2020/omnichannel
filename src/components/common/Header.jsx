import React from 'react';
import { Menu } from 'lucide-react';
import { useAdmin } from '../../hooks/useAdmin';

export const Header = () => {
  const { currentPage, sidebarOpen, setSidebarOpen } = useAdmin();

  const getPageTitle = () => {
    return currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between p-4 lg:p-6">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden text-gray-600 hover:text-gray-900"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">{getPageTitle()}</h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 font-semibold flex items-center justify-center">
            A
          </button>
        </div>
      </div>
    </header>
  );
};
