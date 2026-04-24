import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { Table } from '../components/common/Table';
import { useAdmin } from '../hooks/useAdmin';

const COLUMNS = [
  { key: 'name', label: 'Event Name' },
  { key: 'status', label: 'Status', render: (status) => (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
      status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
    }`}>
      {status}
    </span>
  )},
  { key: 'recipients', label: 'Recipients' },
  { key: 'created', label: 'Created Date' }
];

export const Events = () => {
  const { events, addEvent, deleteEvent } = useAdmin();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'Draft',
    recipients: 0
  });

  const handleSubmit = () => {
    if (formData.name.trim()) {
      addEvent(formData);
      setFormData({ name: '', description: '', status: 'Draft', recipients: 0 });
      setShowModal(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'recipients' ? parseInt(value) : value
    }));
  };

  return (
    <div className="p-4 lg:p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Events Management</h2>
        <Button onClick={() => setShowModal(true)}>
          <Plus size={18} /> Create Event
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table
          columns={COLUMNS}
          data={events}
          onDelete={deleteEvent}
          actions={true}
        />
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Create New Event"
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Event Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter event name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter description"
              rows="3"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
