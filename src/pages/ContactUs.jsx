import React from 'react';
// 1. استيراد المكتبات
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ContactUs() {
  // 2. تعريف شروط الفحص (Validation Schema) باستخدام Yup
  // بص السهولة: بنكتب الشروط كأننا بنحكي
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string(), // اختياري فمش هنكتب required
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message must not exceed 500 characters')
      .required('Message is required'),
  });

  // 3. تشغيل Formik
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema, // ربطنا الشروط بالفورم
    onSubmit: (values, { resetForm }) => {
      // الكود ده هيتنفذ بس لو مفيش أخطاء
      console.log('Form Data:', values);
      alert('Success! We will get back to you soon. 🚀');
      resetForm(); // فضي الفورم بعد الإرسال
    },
  });

  return (
    <div className='container py-5 d-flex justify-content-center'>
      <div className='card p-4 shadow-sm' style={{ width: '600px' }}>
        <h2 className='text-center mb-4'>Send Us a Message 📩</h2>

        <form onSubmit={formik.handleSubmit}>
          {/* الصف الأول: الاسم الأول والأخير */}
          <div className='row mb-3'>
            <div className='col-md-6'>
              <label className='form-label'>First Name</label>
              <input
                type='text'
                name='firstName'
                className={`form-control ${
                  formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''
                }`}
                // السطر السحري اللي بيربط الحقل بـ Formik
                {...formik.getFieldProps('firstName')}
              />
              {/* عرض الخطأ */}
              {formik.touched.firstName && formik.errors.firstName && (
                <div className='text-danger small'>{formik.errors.firstName}</div>
              )}
            </div>

            <div className='col-md-6'>
              <label className='form-label'>Last Name</label>
              <input
                type='text'
                name='lastName'
                className={`form-control ${
                  formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''
                }`}
                {...formik.getFieldProps('lastName')}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className='text-danger small'>{formik.errors.lastName}</div>
              )}
            </div>
          </div>

          {/* الصف الثاني: الإيميل والموبايل */}
          <div className='row mb-3'>
            <div className='col-md-6'>
              <label className='form-label'>Email Address</label>
              <input
                type='email'
                name='email'
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                }`}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='text-danger small'>{formik.errors.email}</div>
              )}
            </div>

            <div className='col-md-6'>
              <label className='form-label'>
                Phone Number <span className='text-muted'>(Optional)</span>
              </label>
              <input
                type='text'
                name='phone'
                className='form-control'
                {...formik.getFieldProps('phone')}
              />
            </div>
          </div>

          {/* الرسالة */}
          <div className='mb-3'>
            <label className='form-label'>Message</label>
            <textarea
              name='message'
              rows='4'
              className={`form-control ${
                formik.touched.message && formik.errors.message ? 'is-invalid' : ''
              }`}
              {...formik.getFieldProps('message')}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <div className='text-danger small'>{formik.errors.message}</div>
            )}
          </div>

          <button type='submit' className='btn btn-primary w-100'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
