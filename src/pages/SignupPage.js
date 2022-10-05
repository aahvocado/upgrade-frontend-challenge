import React from "react";
import {SignupContext} from '../contexts/SignupContext';

export default function SignupPage({
    
}) {
    return (
        <SignupContext.Consumer>
            {({
                firstname,
                email,
                password,
            }) => (
                <div>
                    <input value={firstname} placeholder='first name'></input>
                    <input value={email} placeholder='e-mail'></input>
                    <input value={password} placeholder='password'></input>
                </div>
            )}
        </SignupContext.Consumer>
    )
}