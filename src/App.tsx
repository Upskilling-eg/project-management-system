import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AuthLayout from './Shared/AuthLayout/AuthLayout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RequestReset from './Components/RequestReset/RequestReset';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import VerifyUser from './Components/VerifyUser/VerifyUser';
import Notfound from './Shared/NotFound/Notfound';
import MasterLayout from './Shared/MasterLayout/MasterLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import Projects from './Components/Projects/Projects';
import Users from './Components/Users/Users';
import Tasks from './Components/Tasks/Tasks';
import ProtectedRoute from './Shared/ProtectedRoute/ProtectedRoute';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {
  const { adminData, saveAdminData } = useContext(AuthContext)

  const routes = createBrowserRouter([{
    path: '/',
    element: <AuthLayout />,
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Login saveAdminData={saveAdminData} /> },
      { path: 'login', element: <Login saveAdminData={saveAdminData} /> },
      { path: 'register', element: <Register /> },
      { path: 'request-reset', element: <RequestReset /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'verify-user', element: <VerifyUser /> },
    ]
  }, {
    path: 'dashboard',

    element:
      <ProtectedRoute adminData={adminData}>
        <MasterLayout adminData={adminData} />
      </ProtectedRoute>
    ,
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'projects', element: <Projects /> },
      { path: 'users', element: <Users /> },
      { path: 'tasks', element: <Tasks /> },
    ]
  }]);

  return (
    <RouterProvider router={routes} />
  )
}

export default App
