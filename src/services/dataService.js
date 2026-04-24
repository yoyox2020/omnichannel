// Service layer for managing data operations
// Follows Clean Architecture principle of separation of concerns

export const dataService = {
  // Mock data - can be replaced with API calls
  events: [
    { id: 1, name: 'Summer Campaign 2024', status: 'Active', created: '2024-01-15', recipients: 150, description: 'Email campaign for summer sales' },
    { id: 2, name: 'Spring Event', status: 'Draft', created: '2024-01-10', recipients: 0, description: 'Planning spring promotional event' },
    { id: 3, name: 'Holiday Newsletter', status: 'Active', created: '2024-01-05', recipients: 320, description: 'Monthly holiday updates' }
  ],

  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Administrator', status: 'Active', joined: '2024-01-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Active', joined: '2024-01-05' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', joined: '2024-01-10' }
  ],

  templates: [
    { id: 1, name: 'Welcome Email', category: 'Welcome', created: '2024-01-01', usage: 45 },
    { id: 2, name: 'Newsletter', category: 'Newsletter', created: '2024-01-05', usage: 230 },
    { id: 3, name: 'Promotion Banner', category: 'Promotion', created: '2024-01-10', usage: 78 }
  ],

  emails: [
    { id: 1, subject: 'Welcome to PTL', recipient: 'john@example.com', status: 'Sent', date: '2024-01-15', opens: 45 },
    { id: 2, subject: 'Monthly Update', recipient: 'jane@example.com', status: 'Sent', date: '2024-01-14', opens: 78 },
    { id: 3, subject: 'Special Offer', recipient: 'bob@example.com', status: 'Failed', date: '2024-01-13', opens: 0 }
  ],

  // CRUD operations
  getEvents: () => dataService.events,
  addEvent: (event) => {
    const newEvent = {
      id: Math.max(...dataService.events.map(e => e.id)) + 1,
      ...event,
      created: new Date().toISOString().split('T')[0]
    };
    dataService.events.push(newEvent);
    return newEvent;
  },
  deleteEvent: (id) => {
    dataService.events = dataService.events.filter(e => e.id !== id);
  },

  getUsers: () => dataService.users,
  addUser: (user) => {
    const newUser = {
      id: Math.max(...dataService.users.map(u => u.id)) + 1,
      ...user,
      joined: new Date().toISOString().split('T')[0]
    };
    dataService.users.push(newUser);
    return newUser;
  },
  deleteUser: (id) => {
    dataService.users = dataService.users.filter(u => u.id !== id);
  },

  getTemplates: () => dataService.templates,
  getEmails: () => dataService.emails
};
