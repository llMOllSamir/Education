//  Sign Up Form With Formik And YUP Validation

import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

export default function FormUseFormik() {

    const registerSchema = Yup.object({
        firstName: Yup.string().min(3, 'Must be 3 characters or more').required("First Name Required"),
        lastName: Yup.string().min(3, 'Must be 3 characters or more').required("Last Name Required"),
        email: Yup.string().required("Email Required").email(),
        password: Yup.string().required("Password Required").min(5)
    })

    const handleSubmit = (values) => {
        const users = JSON.parse(localStorage.getItem("users")) || []
        users.push(values)
        localStorage.setItem("users", JSON.stringify(users))
        console.log(values)
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: registerSchema,
        onSubmit: handleSubmit
    })


    return (
        <section id='register' className='bg-dark text-light vh-100 d-flex justify-content-center align-items-center flex-column'>
            <h1>Register Form</h1>
            <form
                onSubmit={formik.handleSubmit}
                style={{ maxWidth: '400px' }}
                className='w-100 d-flex flex-column gap-2'>

                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    type="text"
                    placeholder='First Name'
                    name='firstName'
                    className='form-control form-control-lg' />
                {formik.errors.firstName && formik.touched.firstName && <p className='text-danger my-0 fw-bold '>{formik.errors.firstName}</p>}

                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    type="text"
                    placeholder='Last Name'
                    name='lastName'
                    className='form-control form-control-lg' />
                {formik.errors.lastName && formik.touched.lastName && <p className='text-danger my-0 fw-bold '>{formik.errors.lastName}</p>}


                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    type="email"
                    placeholder='Email' name='email'
                    className='form-control form-control-lg' />
                {formik.errors.email && formik.touched.email && <p className='text-danger my-0 fw-bold '>{formik.errors.email}</p>}


                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    type="password"
                    placeholder='Password'
                    name='password'
                    className='form-control form-control-lg' />
                {formik.errors.password && formik.touched.password && <p className='text-danger my-0 fw-bold '>{formik.errors.password}</p>}

                <button type='submit' className='btn btn-danger'>Register</button>
            </form>
        </section>
    )
}
