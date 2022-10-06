import React from "react";

const defaultState = {
    firstname: 'supername',
    email: '',
    password: 'test1',
    color: '',
    isAgreed: true,
}

export const SignupContext = React.createContext(defaultState)

export function SignupProvider({
    children,
}) {
    // color options are a separate state 
    //  to avoid causing collisions when the user is updating the state when typing
    const [colorOptions, setColorOptions] = React.useState([]);
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

    // normally we would separate this into an API file,
    //  but placed here for simplicity
    async function fetchColorOptions() {
        const resp = await fetch('http://localhost:3001/api/colors');
        const data = await resp.json();
        setColorOptions(data);
    }

    React.useEffect(() => {
        if (colorOptions.length <= 0) {
            fetchColorOptions();
        }
    })

    return (
        <SignupContext.Provider 
            value={{
                ...state,
                colorOptions,
                updateState,
                fetchColorOptions,
            }}>
            {children}
        </SignupContext.Provider>
    )
}

export default SignupContext;