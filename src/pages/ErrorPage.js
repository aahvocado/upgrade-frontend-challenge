import React from "react";
import { Link } from 'wouter';

import {SignupContext} from '../contexts/SignupContext';

export default function SignupPage() {
    const { 
        error,
    } = React.useContext(SignupContext);

    return (
        <div className='main-container'>
            <h2>Error</h2>

            <div className="form">
                X
                <div>Uh oh, something went wrong. Please try again later.</div>
            </div>

            <div className="button-container">                    
                <Link href='/'><button>Restart</button></Link>
            </div>
        </div>
    )
}