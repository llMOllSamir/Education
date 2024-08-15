import React from 'react'

export default function LoginForm() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ email, password })
    }

    // 
    // <i class="fa-solid fa-eye-slash"></i>

    return (
        <form onSubmit={handleSubmit} className='py-4 px-3 w-75 rounded-3  mx-auto shadow-lg d-flex flex-column justify-content-center align-items-center gap-3' >
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className='form-control form-control-lg' placeholder='Email Address Or Phone Number' />

            <div className='w-100 position-relative'>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type={
                    showPassword ? 'text' : 'password'
                } className='form-control form-control-lg' placeholder='Password' />
                {
                    password.length > 0 &&
                    <div style={{ cursor: 'pointer' }} className='position-absolute top-50 end-0  me-4 translate-middle-y'>
                        {
                            showPassword ?
                                <i class="fa-solid fa-eye" onClick={() => setShowPassword(!showPassword)}></i>
                                :
                                <i class="fa-solid fa-eye-slash" onClick={() => setShowPassword(!showPassword)}></i>
                        }
                    </div>
                }
            </div>
            <input type="submit" className='btn btn-primary w-100 fs-4 fw-bold' value="Login" />
            <a href="https://en-gb.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0" rel='noreferrer' target='_blank'>
                Forgotten password?
            </a>
            <hr className='w-100' />
            <a href="#https://en-gb.facebook.com/" target='_blank' className='btn btn-success w-50 fs-5 fw-bold'>
                Create new account
            </a>
        </form>
    )
}
