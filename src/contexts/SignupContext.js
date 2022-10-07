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
    const [state, setState] = React.useState(defaultState);

    function updateSignup(changes) {
        setState({
            ...state,
            ...changes,
        })
    }

    return (
        <SignupContext.Provider 
            value={{
                ...state,
                updateSignup,
            }}>
            {children}
        </SignupContext.Provider>
    )
}

export default SignupContext;