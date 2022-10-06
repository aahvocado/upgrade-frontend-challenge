import React from "react";
import '../styles/loader.css';

// copied from https://loading.io/css/
export default function Loader() {
    return (
        <div className='loader-component'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}