import React, { useEffect } from "react";
import { Link, Redirect } from 'wouter';

import {SignupContext} from '../contexts/SignupContext';

function InfoListItem({
    label,
    value,
}) {
    return (
        <li className='info-li'>
            <span className='info-label'>{label}</span>
            <span className='info-value'>{value}</span>
        </li>
    )
}

export default function ConfirmationPage() {
    const [ isReadyForNext, setIsReadyForNext ] = React.useState(false);
    const { 
        firstname,
        email,
        password,
        color,
        isAgreed,
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

    return (
        <div className='main-container'>
            <h2>Confirmation</h2>
            <form
                onSubmit={onSubmitForm}
            >
                <ul className='info-ul'>
                    <InfoListItem
                        label='First Name'
                        value={firstname} />
                    <InfoListItem
                        label='E-Mail'
                        value={email} />
                    <InfoListItem
                        label='Password'
                        value={password.replace(/./g, '*')} />
                    <InfoListItem
                        label='Color'
                        value={color} />
                    <InfoListItem
                        label='Terms and Conditions'
                        value={'Agreed'} />
                </ul>

                <div className='button-container'>
                    <Link href='/more-info'><button>Back</button></Link>
                    <button onClick={onSubmitForm}>Submit</button>
                </div>
            </form>
        </div>
    )
}