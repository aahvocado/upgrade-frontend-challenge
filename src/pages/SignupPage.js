import React from "react";
import { Redirect } from 'wouter';

import {SignupContext} from '../contexts/SignupContext';

export default function SignupPage() {
    const [ isReadyForNext, setIsReadyForNext ] = React.useState(false);
    const { 
        firstname,
        email,
        password,
        updateState,
    } = React.useContext(SignupContext);

    const isValid = firstname !== '' && email !== '' && password !== '';

    async function onSubmitForm(evt) {
        evt.preventDefault();
        if (!isValid) {
            return;
        }
        
        setIsReadyForNext(isValid);
    }

    if (isReadyForNext) {
        return (
            <Redirect to='/more-info' />
        )
    }

    return (
        <div className='main-container'>
            <h2>Sign Up</h2>
            <form
                className='form'
                onSubmit={onSubmitForm}
            >
                <label className='inputlabel' htmlFor='firstname'>First Name</label>
                <input
                    onChange={(e) => updateState({firstname: e.target.value})}
                    id='firstname'
                    value={firstname}></input>
                
                <label className='inputlabel' htmlFor='email'>E-Mail</label>
                <input
                    onChange={(e) => updateState({email: e.target.value})}
                    id='email'
                    value={email}></input>

                <label className='inputlabel' htmlFor='password'>Password</label>
                <input
                    onChange={(e) => updateState({password: e.target.value})}
                    id='password'
                    value={password} 
                    type='password'></input>

                <div className='button-container'>
                    <button disabled={!isValid} onClick={onSubmitForm}>Next</button>
                </div>
            </form>
        </div>
    )
}