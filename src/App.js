import logo from './logo.svg';
import './App.css';

import Relox2 from './components/pure/relox2';
import Reloj from './components/pure/forms/Reloj';
import Contactlist from './components/containers/contactlist';
import Mouse from './components/pure/forms/Mouse';
import TaskListComponent from './components/containers/task_list';
import Loginformik from './components/pure/forms/loginFormik';
import Loginpage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import {BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
  
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/dashboard" element={<TaskListComponent />} />
      </Routes>
    </BrowserRouter>
    
 
  );
}

export default App;
