import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    alert('Welcome Back! ');
  };

  return (
    <div
      className='container d-flex justify-content-center align-items-center'
      style={{ minHeight: '80vh' }}
    >
      <div className='card p-4 shadow-sm' style={{ width: '400px' }}>
        <h2 className='text-center mb-4'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Email address</label>
            <input
              type='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input
              type='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-dark w-100'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
