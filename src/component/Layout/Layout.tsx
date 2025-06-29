import { AppShell, Container } from '@mantine/core';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';



export function Layout() {
    return (
        <AppShell
            header={{ height: 70 }}
            padding={0}
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>




            <AppShell.Main pt={70}>
                <Container size="xl" py="xl">
                    <Outlet />
                </Container>
            </AppShell.Main>
        </AppShell>
    );
}