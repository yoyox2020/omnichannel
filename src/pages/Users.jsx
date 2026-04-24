import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { Table } from '../components/common/Table';
import { useAdmin } from '../hooks/useAdmin';

const COLUMNS = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status', render: (status) => (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
      status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
    }`}>
      {status}
    </span>
  )},
  { key: 'joined', label: 'Joined Date' }
];

export const Users = () => {
  const { users, addUser, deleteUser } = useAdmin();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    status: 'Active'
  });

  const handleSubmit = () => {
    if (formData.name.trim() && formData.email.trim()) {
      addUser(formData);
      setFormData({ name: '', email: '', role: 'User', status: 'Active' });
      setShowModal(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 lg:p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Users Management</h2>
        <Button onClick={() => setShowModal(true)}>
          <Plus size={18} /> Add User
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table
          columns={COLUMNS}
          data={users}
          onDelete={deleteUser}
          actions={true}
        />
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Add New User"
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              <option value="User">User</option>
              <option value="Manager">Manager</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>
        </div>
      </Modal>
    </div>
  );
};
