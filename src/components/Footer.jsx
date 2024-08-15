import React from 'react'

export default function Footer() {
    const [language] = React.useState(["English", "English (UK)", "Français (France)", "Italiano", "Deutsch", "Русский", "Español", "Bahasa Indonesia", "Türkçe", "Português (Brasil)", "हिन्दी"])
    const [links] = React.useState([
        "Sign Up",
        "Log in",
        "Messenger",
        "Facebook Lite",
        "Video",
        "Places",
        "Games",
        "Marketplace",
        "Meta Pay",
        "Meta Store",
        "Meta Quest",
        "Instagram",
        "Facebook Pay",
        "Oculus",
        "Portal",
        "Instagram",
        "Bulletin",
        "Developers",
        "Careers",
        "Privacy",
        "Cookies",
        "Ad Choices",
        "Terms",
        "Help",
        "Contact",
        "Meta Verified",
        "Contact uploading and non-users Settings"
    ])


    return (
        <footer className='w-100 py-5 px-2'>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <ul className="footerList">
                            {language.map((lang, index) => <li key={index}>{lang}</li>)}
                        </ul>
                    </div>
                    <hr className='w-100' />
                    <div className="col-12 mt-1">
                        <ul className="footerList">
                            {links.map((link, index) => <li key={index}>{link}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
