import React from "react";

const defaultState = {
    firstname: 'supername',
    email: '',
    password: '',
    color: '',
    isAgreed: true,

    colorOptions: [],
}

export const SignupContext = React.createContext(defaultState)

export function SignupProvider({
    children,
}) {
    const [state, setState] = React.useState(defaultState);

    /*
        @param {Object} changes - any obj using 
            example: `{email: 'hello'}`
    */
    function updateState(changes) {
        setState({
            ...state,
            ...changes,
        })
    }

    /*
        normally we would separate this into an API file,
          but placed here for simplicity
    */
    async function fetchColorOptions() {
        const resp = await fetch('http://localhost:3001/api/colors');
        const data = await resp.json();
        updateState({colorOptions: data});
    }

    return (
        <SignupContext.Provider 
            value={{
                ...state,
                updateState,
                fetchColorOptions,
            }}>
            {children}
        </SignupContext.Provider>
    )
}

export default SignupContext;