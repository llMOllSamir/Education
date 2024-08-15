import React from 'react'
import LoginForm from './LoginForm'

export default function Main() {
    return (
        <main>
            <section id="login" className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-lg-6">
                        <article>
                            <h1 className='text-primary fw-bold mb-2'>FaceBook</h1>
                            <h3>Facebook helps you connect and share with the people in your life.</h3>
                        </article>
                    </div>
                    <div className="col-12 col-lg-6">
                        <LoginForm />
                        <p className='text-secondary text-center mt-4 '>
                            <a href="https://en-gb.facebook.com/pages/create/?ref_type=registration_form"
                                className='text-decoration-none text-black fw-bold' rel='noreferrer' target='_blank' >
                                Create a Page
                            </a> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
