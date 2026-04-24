import React from 'react';
import { Card } from '../components/common/Card';
import { useAdmin } from '../hooks/useAdmin';

const STATS = [
  { label: 'Total Events', value: '24', color: 'teal' },
  { label: 'Active Events', value: '8', color: 'blue' },
  { label: 'Total Users', value: '1,250', color: 'green' },
  { label: 'Messages Sent', value: '45,320', color: 'purple' }
];

export const Dashboard = () => {
  const { events, users } = useAdmin();

  return (
    <div className="p-4 lg:p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STATS.map((stat, i) => (
          <Card key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Events */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Events</h3>
          <div className="space-y-3">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{event.name}</p>
                  <p className="text-sm text-gray-500">{event.recipients} recipients</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* User Statistics */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">User Overview</h3>
          <div className="space-y-3">
            {users.slice(0, 3).map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  user.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
