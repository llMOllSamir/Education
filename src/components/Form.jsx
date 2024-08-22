import React, { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null
    })


    const handleChange = e => {
        if (e.target.value.length === 0) {
            setErrors(prev => ({ ...prev, [e.target.name]: 'Field is required' }))
        } else {
            setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
            setErrors(prev => ({ ...prev, [e.target.name]: null }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!errors.firstName && !errors.lastName && !errors.email && !errors.password) {
            if (formData.firstName.length !== 0 && formData.lastName.length !== 0 && formData.email.length !== 0 && formData.password.length !== 0) {
                const users = JSON.parse(localStorage.getItem("users")) || []
                users.push(formData)
                localStorage.setItem("users", JSON.stringify(users))
            } else {
                setErrors(prev => ({ ...prev, firstName: 'Field is required', lastName: 'Field is required', email: 'Field is required', password: 'Field is required' }))
            }
        } else {
            console.log(errors)
        }
    }

    return (
        <section id='register' className='bg-dark text-light vh-100 d-flex justify-content-center align-items-center flex-column'>
            <h1>Register Form</h1>
            <form
                onSubmit={handleSubmit}
                style={{ maxWidth: '400px' }}
                className='w-100 d-flex flex-column gap-2'>
                <input
                    onChange={handleChange}
                    value={formData.firstName}
                    onBlur={handleChange}
                    type="text"
                    placeholder='First Name'
                    name='firstName'
                    className='form-control form-control-lg' />
                {errors.firstName && <p className='text-danger  my-0'>{errors.firstName}</p>}


                <input
                    onChange={handleChange}
                    value={formData.lastName}
                    onBlur={handleChange}
                    type="text"
                    placeholder='Last Name'
                    name='lastName'
                    className='form-control form-control-lg' />
                {errors.lastName && <p className='text-danger  my-0'>{errors.lastName}</p>}


                <input
                    onChange={handleChange}
                    value={formData.email}
                    onBlur={handleChange}
                    type="email"
                    placeholder='Email' name='email'
                    className='form-control form-control-lg' />
                {errors.email && <p className='text-danger  my-0'>{errors.email}</p>}


                <input
                    onChange={handleChange}
                    value={formData.password}
                    onBlur={handleChange}
                    type="password"
                    placeholder='Password'
                    name='password'
                    className='form-control form-control-lg' />
                {errors.password && <p className='text-danger  my-0'>{errors.password}</p>}
                <button type='submit' className='btn btn-danger'>Register</button>
            </form>
        </section>
    )
}
