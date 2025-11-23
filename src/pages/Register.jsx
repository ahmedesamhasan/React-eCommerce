import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Registered:', formData);
    alert('Registration Successful! (Check Console)');
  };

  return (
    <div
      className='container d-flex justify-content-center align-items-center'
      style={{ minHeight: '80vh' }}
    >
      <div className='card p-4 shadow-sm' style={{ width: '400px' }}>
        <h2 className='text-center mb-4'>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Email address</label>
            <input
              type='email'
              name='email'
              className='form-control'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input
              type='password'
              name='password'
              className='form-control'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              className='form-control'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn btn-primary w-100'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
