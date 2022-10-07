import React, { useContext } from "react";
import { Link, Redirect } from 'wouter';

import { AppContext } from '../contexts/AppContext';
import { SignupContext } from '../contexts/SignupContext';

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
    const { 
        error,
        success,
    } = useContext(AppContext);
    const { 
        firstname,
        email,
        password,
        color,
        sendSignupData,
    } = useContext(SignupContext);

    function onSubmitForm(evt) {
        evt.preventDefault();
        sendSignupData();
    }

    if (error) {
        return (
            <Redirect to='/error' />
        )
    }
    if (success) {
        return (
            <Redirect to='/success' />
        )
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

                    {/* For good or for bad, we assume if you've arrived on this page you've agreed */}
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