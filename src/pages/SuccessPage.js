import React, { useContext } from "react";
import { Link } from 'wouter';

import { AppContext } from '../contexts/AppContext';

import { ReactComponent as SuccessIcon } from '../icons/success-svgrepo-com.svg';

export default function ErrorPage() {
    const { 
        success,
    } = useContext(AppContext);

    return (
        <div className='main-container'>
            <h2>Success!</h2>

            <div className="icon-container">
                <SuccessIcon style={{width: 50, height: 50}} />
                <div>You should receive a confirmation email soon.</div>
            </div>

            <div className="button-container">                    
                <Link href='/'><button>Restart</button></Link>
            </div>
        </div>
    )
}