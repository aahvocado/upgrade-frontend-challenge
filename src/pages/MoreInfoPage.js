import React, { useEffect } from "react";
import { Link, Redirect } from 'wouter';

import {SignupContext} from '../contexts/SignupContext';

export default function MoreInfoPage() {
    const [ colorOptions, setColorOptions ] = React.useState([]);
    const [ isValid, setIsValid ] = React.useState(false);
    const { 
        color,
        isAgreed,
        updateState,
     } = React.useContext(SignupContext);

    async function fetchColorOptions() {
        const resp = await fetch('http://localhost:3001/api/colors');
        const data = await resp.json();
        setColorOptions(data);
    }

    useEffect(() => {
        if (colorOptions.length <= 0) {
            fetchColorOptions();
        }
    })

    function onSubmitForm(evt) {
        evt.preventDefault();
        setIsValid(color !== '' && isAgreed)
    }

    // `isValid` should only update after the form is submitted
    // if (isValid) {
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
                    value={color}
                    onChange={(e) => updateState({color: e.target.value})}
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
                    <button onClick={onSubmitForm}>Next</button>
                </div>

            </form>
        </div>
    )
}