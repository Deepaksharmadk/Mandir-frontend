import { AppShell, Container } from '@mantine/core';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { CarouselDemo } from '../Carousel/CarouselComponent';
import { Navbar } from '../../navbar/Navbar';



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
                {/* <CarouselDemo /> */}
                <Container size="xl" py="xl">

                    <Outlet />
                </Container>
            </AppShell.Main>
        </AppShell>
    );
}