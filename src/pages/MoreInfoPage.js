import React from "react";
import {SignupContext} from '../contexts/SignupContext';

export default function MoreInfoPage({
    
}) {
    const { updateState } = React.useContext(SignupContext);

    function onSubmitForm(evt) {
        evt.preventDefault();
    }

    return (
        <div >
            <h2>Additional Info</h2>
            <form
                className='signup-form'
                onSubmit={onSubmitForm}
            >
                <div className='button-container'>
                    <button className="align-end" type='submit'>Next</button>
                </div>
            </form>
        </div>
    )
}