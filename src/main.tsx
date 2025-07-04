import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import App from './App';

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store/store"

import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';


// app render से पहले
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ColorSchemeScript defaultColorScheme="auto" />
        <MantineProvider defaultColorScheme="auto">
            <Notifications />

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <GoogleOAuthProvider clientId={clientId}>
                        <App />
                    </GoogleOAuthProvider>
                </PersistGate>
            </Provider>
        </MantineProvider>
    </StrictMode>
);