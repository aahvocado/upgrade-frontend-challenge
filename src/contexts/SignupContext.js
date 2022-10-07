import React, { useContext } from "react";

import { AppContext } from '../contexts/AppContext';

const defaultState = {
    firstname: 'supername',
    email: 'asdf',
    password: 'test1',
    color: 'red',
    isAgreed: true,
}

export const SignupContext = React.createContext(defaultState)

export function SignupProvider({
    children,
}) {
    const [state, setState] = React.useState(defaultState);
    const { updateAppState } = useContext(AppContext);

    function updateSignup(changes) {
        setState({
            ...state,
            ...changes,
        })
    }

    async function sendSignupData() {
        updateAppState({ isLoading: true });
        
        try {
            const resp = await fetch('http://localhost:3001/api/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: state.firstname,
                    email: state.email,
                    password: state.password,
                    color: state.color,
                    terms: state.isAgreed,
                })
            })

            if (resp.status !== 200) {
                updateAppState({error: 'Submit error'});
            }

        } catch (err) {
            console.log('error', err)
            updateAppState({error: err});
            return new Error(err);
        } finally {
            updateAppState({ isLoading: false });
        }
    }

    return (
        <SignupContext.Provider 
            value={{
                ...state,
                updateSignup,
                sendSignupData,
            }}>
            {children}
        </SignupContext.Provider>
    )
}

export default SignupContext;