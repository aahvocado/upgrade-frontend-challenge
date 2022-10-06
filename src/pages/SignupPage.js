import React from "react";
import {SignupContext} from '../contexts/SignupContext';

export default function SignupPage({
    
}) {
    const { updateState } = React.useContext(SignupContext);

    function onSubmitForm(evt) {
        evt.preventDefault();
        console.log('submitttt')
    }

    return (
        <SignupContext.Consumer>
            {({
                firstname,
                email,
                password,
            }) => (
                <div >
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
                            <button className="align-end" type='submit'>Next</button>
                        </div>
                    </form>
                </div>
            )}
        </SignupContext.Consumer>
    )
}