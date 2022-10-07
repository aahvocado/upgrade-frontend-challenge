import React, { useContext } from "react";
import { Link } from 'wouter';

import { AppContext } from '../contexts/AppContext';

import { ReactComponent as ErrorIcon } from '../icons/error-svgrepo-com.svg';

export default function ErrorPage() {
    const { 
        error,
    } = useContext(AppContext);

    const errorDisplay = (error === '' || error === undefined) ? 'Uh oh, something went wrong. Please try again later.' : error;

    return (
        <div className='main-container'>
            <h2>Error</h2>

            <div className="icon-container">
                <ErrorIcon style={{width: 50, height: 50}} />
                <div>{errorDisplay}</div>
            </div>

            <div className="button-container">                    
                <Link href='/'><button>Restart</button></Link>
            </div>
        </div>
    )
}