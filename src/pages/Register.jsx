import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  // 1. مخزن البيانات
  const [formData, setFormData] = useState({
    name: '',
    username: '', // مطلوب: بدون مسافات
    email: '',
    password: '', // مطلوب: Regex معقد
    confirmPassword: '',
  });

  // 2. مخزن الأخطاء (عشان نعرض رسالة تحت كل حقل)
  const [errors, setErrors] = useState({});

  // دالة التغيير (زي ما هي)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // (اختياري) ممكن نمسح الخطأ أول ما اليوزر يبدأ يكتب صح
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // 3. دالة الفحص (Validation Logic) - هنا الشغل كله!
  const validateForm = () => {
    const newErrors = {};

    // فحص الاسم
    if (!formData.name.trim()) newErrors.name = 'Name is required';

    // فحص اليوزر نيم (ممنوع مسافات)
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (/\s/.test(formData.username)) {
      newErrors.username = 'Username should not contain spaces';
    }

    // فحص الإيميل (Regex بسيط)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // فحص الباسورد (Regex القوي المطلوب في اللاب)
    // (?=.*[a-z]) حرف صغير | (?=.*[A-Z]) حرف كبير | (?=.*\d) رقم | (?=.*[@$!%*?&]) رمز
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 8+ chars, with Upper, Lower, Number & Special char';
    }

    // فحص التطابق
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    // لو مفيش أخطاء (الـ Object فاضي)، يبقى الفورم سليم
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // لو الفحص نجح
    if (validateForm()) {
      console.log('User Registered:', formData);
      alert('Registration Successful! Redirecting...');
      navigate('/'); // توجيه للصفحة الرئيسية
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center py-5'>
      <div className='card p-4 shadow-sm' style={{ width: '500px' }}>
        <h2 className='text-center mb-4'>Create Account (Native)</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
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

          {/* Username */}
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

          {/* Email */}
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

          {/* Password */}
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

          {/* Confirm Password */}
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
