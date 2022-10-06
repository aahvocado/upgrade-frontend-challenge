import React, { useEffect } from "react";
import {SignupContext} from '../contexts/SignupContext';

export default function MoreInfoPage({
    
}) {
    const [ colorOptions, setColorOptions ] = React.useState([]);

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
            </form>
        </div>
    )
}