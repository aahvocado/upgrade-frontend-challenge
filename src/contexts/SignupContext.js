import React from "react";

const defaultState = {
    firstname: 'supername',
    email: '',
    password: '',
    color: '',
    isAgreed: true,
}

export const SignupContext = React.createContext(defaultState)

export function SignupProvider({
    children,
}) {
    const [state, setState] = React.useState(defaultState);

    function updateState(changes) {
        setState({
            ...state,
            ...changes,
        })
    }

    return (
        <SignupContext.Provider 
            value={{
                ...state,
                updateState,
            }}>
            {children}
        </SignupContext.Provider>
    )
}

export default SignupContext;