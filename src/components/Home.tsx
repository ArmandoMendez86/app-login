import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className='text-center'>
      <h1 className='text-center text-white bg-slate-600 p-10 text-6xl'>Página Principal</h1>
      <p className='text-center mt-3'>Bienvenido a la página principal</p>
      <button className='bg-black text-white p-3 rounded-lg hover:bg-slate-700 mt-10' onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
