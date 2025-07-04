import {
    IconBook,
    IconChartPie3,
    IconChevronDown,
    IconCode,
    IconCoin,
    IconFingerprint,
    IconNotification,
    IconOm,
} from '@tabler/icons-react';
import {
    // Anchor,
    Box,
    Burger,
    Button,
    Center,
    Collapse,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMegaMenu.module.css';
import { Link } from 'react-router-dom';
import DarkLightmode from './DarkLightmode';
import { LoginBtn } from '../Auth/AuthModel';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
const mockdata = [
    {
        icon: IconCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];

export function Navbar() {
    const isLoggedIn = useSelector((state: RootState) => state.user.user)
    console.log(isLoggedIn, `isLoggedIn`)
    // const pinned = useHeadroom({ fixedAt: 120 });


    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={22} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

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
                            to="/dee"
                            size="sm"
                            variant="light"
                            color="#FF7722"
                        >
                            Home
                        </Button>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box style={{ color: '#FF7722', }} component="span" mr={5}>
                                            Features
                                        </Box>
                                        <IconChevronDown size={16} color={theme.colors.blue[6]} />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                <Group justify="space-between" px="md">
                                    <Text color=' #FF7722' fw={500}>Features</Text>

                                </Group>

                                <Divider my="sm" />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>

                                <div className={classes.dropdownFooter}>
                                    {/* <Group justify="space-between">
                                        <div>
                                            <Text color=' #FF7722' fw={500} fz="sm">
                                                Get started
                                            </Text>
                                            <Text color=' #FF7722' size="xs" c="dimmed">
                                                Their food sources have decreased, and their numbers
                                            </Text>
                                        </div>
                                        <Button variant="default">Get started</Button>
                                    </Group> */}
                                </div>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <Button
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
                </Group>
            </header>

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

                    <Button
                        component={Link}
                        to="/"
                        size="sm"
                        variant="light"
                        color="#FF7722"
                        w={'100%'}
                    >
                        Home
                    </Button>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" color=' #FF7722' mr={5}>
                                Features
                            </Box>
                            <IconChevronDown size={16} color=' #FF7722' />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        {/* <Button>Sign up</Button> */}
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}