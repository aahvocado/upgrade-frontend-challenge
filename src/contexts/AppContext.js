import React, { useState, useEffect } from "react";

const defaultState = {
    isLoading: false,
    colorOptions: [],
    error: undefined,
    success: undefined,
}

export const AppContext = React.createContext(defaultState)

export function AppProvider({
    children,
}) {
    // color options are a separate state 
    //  to avoid causing collisions when the user is updating the state when typing
    const [appState, setAppState] = useState(defaultState);
    function updateAppState(changes) {
        setAppState({
            ...appState,
            ...changes,
        })
    }

    // the silent flag is to try to provide a seamless experience
    //  for the user when the first arrive on the page
    //  by fetching the color options before are on the page that uses it
    async function fetchColorOptions(options = {}) {
        if (appState.isLoading) {
            return;
        }

        const {silent = false} = options;
        if (!silent) {
            updateAppState({isLoading: true});
        }
        const resp = await fetch('http://localhost:3001/api/colors');
        const data = await resp.json();
        updateAppState({colorOptions: data, isLoading: false});
    }

    useEffect(() => {
        if (appState.colorOptions.length <= 0 && !appState.isLoading) {
            fetchColorOptions({silent: true});
        }
    })

    return (
        <AppContext.Provider 
            value={{
                ...appState,
                fetchColorOptions,
                updateAppState,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;