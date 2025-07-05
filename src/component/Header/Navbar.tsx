import {
    IconOm,
} from '@tabler/icons-react';
import {
    // Anchor,
    Box,
    Burger,
    Button,
    Divider,
    Drawer,
    Group,
    ScrollArea,
    Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMegaMenu.module.css';
import { Link } from 'react-router-dom';
import DarkLightmode from './DarkLightmode';
import { LoginBtn } from '../Auth/AuthModel';
// import { useSelector } from 'react-redux';
// import type { RootState } from '../../store/store';


export function Navbar() {
    // console.log(isLoggedIn, `isLoggedIn`)
    // const pinned = useHeadroom({ fixedAt: 120 });


    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);



    return (
        <Box style={{

            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'transform 400ms ease',
        }}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Group gap="xs" align="center">
                        <IconOm size={30} color='#FF7722' />
                        <Text
                            size="md"

                            c="primary"
                            variant="gradient"
                            gradient={{ from: '#FF7722', to: 'cyan', deg: 90 }}
                        >
                            श्री गणेशाय नमः॥
                        </Text>
                    </Group>

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <Button
                            component={Link}
                            to="/"
                            size="sm"
                            variant="light"
                            color="#FF7722"
                        >
                            Home
                        </Button>

                        <Button ml={7}
                            component={Link}
                            to="/dee"
                            size="sm"
                            variant="light"
                            color="#FF7722"
                            mr={7}
                        >
                            About
                        </Button>
                        <Button
                            component={Link}
                            to="/dee"
                            size="sm"
                            variant="light"
                            color="#FF7722"
                        >
                            Gallery
                        </Button>

                    </Group>


                    <Group gap={10} align="center" >
                        <DarkLightmode />
                        <LoginBtn />
                        {/* <Button>Sign up</Button> */}
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group >
            </header >

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px" mx="-md">
                    <Divider my="sm" />

                    <Group justify="center" grow pb="sm" px="md">
                        <Button onClick={closeDrawer}
                            component={Link}
                            to="/"
                            size="sm"
                            variant="light"
                            color="#FF7722"
                        >
                            Home
                        </Button>
                    </Group>
                    <Group justify="center" grow pb="sm" px="md">
                        <Button onClick={closeDrawer}
                            component={Link}
                            to="/dee"
                            size="sm"
                            variant="light"
                            color="#FF7722"
                        >
                            About
                        </Button>
                    </Group>
                    <Group justify="center" grow pb="sm" px="md">
                        <Button onClick={closeDrawer}
                            component={Link}
                            to="/dee"
                            size="sm"
                            variant="light"
                            color="#FF7722"
                        >
                            Gallery
                        </Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box >
    );
}