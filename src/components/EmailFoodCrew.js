import React from 'react'
import envelopeLogo from '../assets/images/envelope.png';

const EmailFoodCrew = () => {
    return (
        <a href = "mailto: dallinromney@gmail.com" className="email-button">
            <img src={envelopeLogo} alt="" />
            <div>
                <h3>Have a request?</h3>
                <p>Email us suggestions</p>
            </div>
        </a>
    )
}

export default EmailFoodCrew
