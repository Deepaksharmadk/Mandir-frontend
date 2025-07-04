import { AppShell, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Header/Navbar';
import { CarouselDemo } from '../Carousel/CarouselComponent';
import { FooterLinks } from '../footer/Footer';



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
                <Outlet />
                <div style={{ height: 'auto', }}>
                    <CarouselDemo />
                </div>
                <FooterLinks />
                <Container >

                </Container>
            </AppShell.Main>
        </AppShell>
    );
}