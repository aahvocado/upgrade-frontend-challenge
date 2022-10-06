import React from "react";
import { Redirect } from 'wouter';

import {SignupContext} from '../contexts/SignupContext';

export default function SignupPage() {
    const [ isValid, setIsValid ] = React.useState(false);
    const { 
        firstname,
        email,
        password,
        updateState,
     } = React.useContext(SignupContext);

    function onSubmitForm(evt) {
        evt.preventDefault();
        setIsValid(firstname !== '' && email !== '' && password !== '')
    }

    // `isValid` should only update after the form is submitted
    if (isValid) {
        return (
            <Redirect to='/more-info' />
        )
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form
                className='signup-form'
                onSubmit={onSubmitForm}
            >
                <input
                    onChange={(e) => updateState({firstname: e.target.value})}
                    value={firstname} 
                    placeholder='first name'></input>
                <input
                    onChange={(e) => updateState({email: e.target.value})}
                    value={email} 
                    placeholder='e-mail'></input>
                <input
                    onChange={(e) => updateState({password: e.target.value})}
                    value={password} 
                    type='password'
                    placeholder='password'></input>

                <div className='button-container'>
                    <button onClick={onSubmitForm}>Next</button>
                </div>
            </form>
        </div>
    )
}