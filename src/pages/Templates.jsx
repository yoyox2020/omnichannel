import React from 'react';
import { Table } from '../components/common/Table';
import { useAdmin } from '../hooks/useAdmin';

const COLUMNS = [
  { key: 'name', label: 'Template Name' },
  { key: 'category', label: 'Category' },
  { key: 'created', label: 'Created Date' },
  { key: 'usage', label: 'Usage Count' }
];

export const Templates = () => {
  const { templates } = useAdmin();

  return (
    <div className="p-4 lg:p-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Templates Library</h2>
      
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table
          columns={COLUMNS}
          data={templates}
          actions={false}
        />
      </div>
    </div>
  );
};
