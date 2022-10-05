import React from "react";

const defaultState = {
    firstname: 'supername',
    email: '',
    password: '',
    color: '',
    isAgreed: false,
}

export const SignupContext = React.createContext(defaultState)

export function SignupProvider({
    children,
}) {
    const [state, setState] = React.useState(defaultState);

    return (
        <SignupContext.Provider value={state}>
            {children}
        </SignupContext.Provider>
    )
}

export default SignupContext;