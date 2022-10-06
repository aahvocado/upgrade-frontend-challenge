import React from "react";
import { Link } from 'wouter';

export default function SignupPage() {
    return (
        <div className='main-container'>
            <h2>Success!</h2>

            <div className="form">
                Check!
                <div>You should receive a confirmation email soon.</div>
            </div>

            <div className="button-container">                    
                <Link href='/'><button>Restart</button></Link>
            </div>
        </div>
    )
}