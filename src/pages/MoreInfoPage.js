import React, { useEffect } from "react";
import { Link, Redirect } from 'wouter';

import {SignupContext} from '../contexts/SignupContext';

export default function MoreInfoPage() {
    const [ isReadyForNext, setIsReadyForNext ] = React.useState(false);
    const { 
        color,
        isAgreed,
        updateState,
        colorOptions,
        fetchColorOptions,
    } = React.useContext(SignupContext);

    const isValid = color !== '' && isAgreed;

    useEffect(() => {
        // we should only need to attempt this fetch if previous page didn't already
        if (colorOptions.length <= 0) {
            fetchColorOptions();
        }
    })

    function onSubmitForm(evt) {
        evt.preventDefault();
        setIsValid(color !== '' && isAgreed)
    }

    // if (isReadyForNext) {
    //     return (
    //         <Redirect to='/more-info' />
    //     )
    // }

    return (
        <div className='main-container'>
            <h2>Additional Info</h2>
            <form
                className='form'
                onSubmit={onSubmitForm}
            >
                <select
                    disabled={colorOptions.length <= 0}
                    value={color}
                    onChange={(e) => {
                        updateState({color: e.target.value});
                    }}
                >
                    { colorOptions.map((color) => (
                        <option key={`${color}-option-key`} value={color}>{color}</option>
                    ))}
                </select>
                
                <div className='checkbox-component'>
                    <input 
                        onChange={(e) => updateState({isAgreed: !isAgreed})}
                        checked={isAgreed}
                        type='checkbox' id='privacy-agreement' />
                    <label htmlFor='privacy-agreement'>I agree to Terms and Conditions</label>
                </div>

                <div className='button-container'>
                    <Link href='/'><button>Back</button></Link>
                    <button disabled={!isValid} onClick={onSubmitForm}>Next</button>
                </div>
            </form>
        </div>
    )
}