import React from 'react';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { Button } from './Button';

export const Table = ({
  columns,
  data,
  onEdit,
  onDelete,
  onView,
  actions = true
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
              >
                {col.label}
              </th>
            ))}
            {actions && (
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-6 py-4 text-sm text-gray-900"
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : row[col.key]}
                </td>
              ))}
              {actions && (
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    {onView && (
                      <button
                        onClick={() => onView(row)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye size={16} />
                      </button>
                    )}
                    {onEdit && (
                      <button
                        onClick={() => onEdit(row)}
                        className="text-teal-600 hover:text-teal-900"
                      >
                        <Edit2 size={16} />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(row.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
