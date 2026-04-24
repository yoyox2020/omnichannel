import React, { createContext, useState, useCallback } from 'react';
import { dataService } from '../services/dataService';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [events, setEvents] = useState(dataService.getEvents());
  const [users, setUsers] = useState(dataService.getUsers());
  const [templates, setTemplates] = useState(dataService.getTemplates());
  const [emails, setEmails] = useState(dataService.getEmails());

  const addEvent = useCallback((eventData) => {
    const newEvent = dataService.addEvent(eventData);
    setEvents([...dataService.getEvents()]);
    return newEvent;
  }, []);

  const deleteEvent = useCallback((id) => {
    dataService.deleteEvent(id);
    setEvents([...dataService.getEvents()]);
  }, []);

  const addUser = useCallback((userData) => {
    const newUser = dataService.addUser(userData);
    setUsers([...dataService.getUsers()]);
    return newUser;
  }, []);

  const deleteUser = useCallback((id) => {
    dataService.deleteUser(id);
    setUsers([...dataService.getUsers()]);
  }, []);

  const value = {
    currentPage,
    setCurrentPage,
    sidebarOpen,
    setSidebarOpen,
    events,
    addEvent,
    deleteEvent,
    users,
    addUser,
    deleteUser,
    templates,
    emails
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
