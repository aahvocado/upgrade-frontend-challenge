import React, { useEffect } from "react";
import { Link, Redirect } from 'wouter';

import {SignupContext} from '../contexts/SignupContext';

export default function MoreInfoPage({
    
}) {
    const [ colorOptions, setColorOptions ] = React.useState([]);
    const [ isValid, setIsValid ] = React.useState(false);
    const { 
        color,
        isAgreed,
     } = React.useContext(SignupContext);

    async function fetchColorOptions() {
        const resp = await fetch('http://localhost:3001/api/colors');
        const data = await resp.json();
        console.log(data)
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
    if (isValid) {
        return (
            <Redirect to='/more-info' />
        )
    }

    return (
        <div>
            <h2>Additional Info</h2>
            <form
                className='signup-form'
                // onSubmit={onSubmitForm}
            >
                <select>
                    { colorOptions.map((color) => (
                        <option key={`${color}-option-key`} value={color}>{color}</option>
                    ))}
                </select>

                <div className='button-container'>
                    <Link href='/'><button>Back</button></Link>
                    <button onClick={onSubmitForm}>Next</button>
                </div>

            </form>
        </div>
    )
}