import React from "react";

const defaultState = {
    isLoading: false,
    colorOptions: [],
}

export const AppContext = React.createContext(defaultState)

export function AppProvider({
    children,
}) {
    // color options are a separate state 
    //  to avoid causing collisions when the user is updating the state when typing
    const [appState, setAppState] = React.useState(defaultState);
    function updateState(changes) {
        setAppState({
            ...appState,
            ...changes,
        })
    }

    // normally we would separate this into an API file,
    //  but placed here for simplicity
    async function fetchColorOptions() {
        updateState({isLoading: true});
        const resp = await fetch('http://localhost:3001/api/colors');
        const data = await resp.json();
        updateState({colorOptions: data, isLoading: false});
    }

    async function sendSignupData() {
        updateState({isLoading: true});

        try {
            const resp = await fetch('http://localhost:3001/api/submit', {
                method: 'POST',
                body: {
                    name: state.firstname,
                    email: state.email,
                    password: state.password,
                    color: state.password,
                    terms: state.isAgreed,
                },
            });
            const data = await resp.json();
            console.log('send resp', data);
            // if (data.)
        } catch (err) {
            return new Error(err);
        } finally {
            updateState({isLoading: false});
        }
    }

    React.useEffect(() => {
        if (appState.colorOptions.length <= 0 && !appState.isLoading) {
            fetchColorOptions();
        }
    })

    return (
        <AppContext.Provider 
            value={{
                ...appState,
                fetchColorOptions,
                sendSignupData,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;