// src/components/formikForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Define the form schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters long'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long'),
  });

  // Initialize useFormik
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form data', values);
      // Mock API call
      alert('Form submitted successfully');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div style={{ color: 'red' }}>{formik.errors.username}</div>
        ) : null}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default FormikForm;
