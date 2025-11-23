import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (/\s/.test(formData.username)) {
      newErrors.username = 'Username should not contain spaces';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 8+ chars, with Upper, Lower, Number & Special char';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Registration Successful! Redirecting...');
      navigate('/');
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center py-5'>
      <div className='card p-4 shadow-sm' style={{ width: '500px' }}>
        <h2 className='text-center mb-4'>Create Account (Native)</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input
              type='text'
              name='name'
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className='text-danger small'>{errors.name}</div>}
          </div>
          <div className='mb-3'>
            <label className='form-label'>Username</label>
            <input
              type='text'
              name='username'
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <div className='text-danger small'>{errors.username}</div>}
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email address</label>
            <input
              type='email'
              name='email'
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className='text-danger small'>{errors.email}</div>}
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input
              type='password'
              name='password'
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className='text-danger small'>{errors.password}</div>}
            <div className='form-text text-muted small'>
              Mix of Upper, Lower, Numbers & Symbols (@$!%*?&)
            </div>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <div className='text-danger small'>{errors.confirmPassword}</div>
            )}
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
