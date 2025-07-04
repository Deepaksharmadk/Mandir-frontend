import { AppShell, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Header/Navbar';
import { CarouselDemo } from '../Auth/CarouselComponent';



export function Layout() {
    return (
        <AppShell
            header={{ height: 70 }}
            padding={0}
        >
            <AppShell.Header>
                {/* <Header /> */}
                <Navbar />
            </AppShell.Header>





            <AppShell.Main pt={70}>
                <CarouselDemo />
                <Container size="xl" py="xl">

                    <Outlet />
                </Container>
            </AppShell.Main>
        </AppShell>
    );
}