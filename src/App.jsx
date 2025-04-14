import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage' 

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const { userData : employees, admin } = useContext(AuthContext);

  useEffect(() => {
    if (!employees) return;
  
    setLocalStorage();
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data || null);
    }
  }, [employees]);
  

  const handleLogin = (email, password) => {
    console.log("Login attempt:", email);
    console.log("Employees data:", employees);
    
    if (admin && admin[0]?.email === email && admin[0]?.password === password) {
      console.log("Admin login successful");
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (employees) {
      const matchedEmployee = employees.find(
        e => e.email === email && e.password === password
      );
      
      console.log("Matched employee:", matchedEmployee);
    
      if (matchedEmployee) {
        setUser('employee');
        setLoggedInUserData(matchedEmployee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: matchedEmployee })
        );
      } else {
        alert('Invalid Credentials');
      }
    } else {
      console.log("No employees data available");
    }
  };  

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && loggedInUserData && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
  
}
export default App
