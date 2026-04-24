import './App.css';
import { AdminProvider } from './context/AdminContext';
import AdminPortal from './Adminportal';

function App() {
  return (
    <AdminProvider>
      <AdminPortal />
    </AdminProvider>
  );
}

export default App;
