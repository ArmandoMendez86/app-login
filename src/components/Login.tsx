import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  // Simulación de credenciales correctas
  const correctUsername = 'admin';
  const correctPassword = 'admin123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 px-4">
      <div className="w-full max-w-md bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Usuario:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded transition duration-300"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
