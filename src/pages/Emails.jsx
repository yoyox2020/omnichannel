import React from 'react';
import { Table } from '../components/common/Table';
import { useAdmin } from '../hooks/useAdmin';

const COLUMNS = [
  { key: 'subject', label: 'Subject' },
  { key: 'recipient', label: 'Recipient' },
  { key: 'status', label: 'Status', render: (status) => (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
      status === 'Sent' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
    }`}>
      {status}
    </span>
  )},
  { key: 'date', label: 'Date' },
  { key: 'opens', label: 'Opens' }
];

export const Emails = () => {
  const { emails } = useAdmin();

  return (
    <div className="p-4 lg:p-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Email Management</h2>
      
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table
          columns={COLUMNS}
          data={emails}
          actions={false}
        />
      </div>
    </div>
  );
};
