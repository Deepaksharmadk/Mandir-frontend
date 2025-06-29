import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import App from './App';
import { theme } from '../theme';

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ColorSchemeScript defaultColorScheme="auto" />
        <MantineProvider theme={theme} defaultColorScheme="auto">
            {/* <Notifications />
            <SpotlightProvider /> */}
            <App />
        </MantineProvider>
    </StrictMode>
);