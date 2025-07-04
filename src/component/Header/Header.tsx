import {
    Group,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    useMantineTheme,
    ActionIcon,
    Flex,

    Text,


    Container,
    Paper,

    Button,
} from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import {




    IconSun,
    IconMoon,
} from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { LoginBtn } from '../Auth/AuthModel';


export function Header() {
    const theme = useMantineTheme();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    // const [userMenuOpened, setUserMenuOpened] = useState(false);
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const pinned = useHeadroom({ fixedAt: 120 });



    return (
        <Paper
            shadow="sm"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
                transition: 'transform 400ms ease',
            }}
        >
            <Container size="xl">
                <Group justify="space-between" h={70} px="md">
                    {/* Logo */}
                    <Group>
                        <Box
                            style={{
                                width: 40,
                                height: 40,
                                background: '#FF8F47',
                                borderRadius: theme.radius.md,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 700,
                                fontSize: 18,
                            }}
                        >
                            M
                        </Box>
                        <Text size="xl" fw={700} c="primary" variant="gradient"
                            gradient={{ from: ' #FF7722', to: 'cyan', deg: 90 }}>
                            श्री गणेशाय नमः॥
                        </Text>
                    </Group>

                    {/* Desktop Navigation */}
                    <Group visibleFrom="md" gap={0}>
                        <Flex
                            mih={50}
                            bg="transparent"
                            gap="md"
                            justify="center"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Link to="/" >
                                <Button variant="light" color=' #FF7722'>Home</Button>
                            </Link>
                            <Link to="/about" >
                                <Button variant="light" color=' #FF7722'>About</Button>
                            </Link>
                            <Link to="/gallery" >
                                <Button variant="light" color=' #FF7722'>Gallery</Button>
                            </Link>


                        </Flex>
                    </Group>

                    {/* Right Section */}
                    <Group gap="sm">
                        {/* Search */}
                        {/* <TextInput
                            placeholder="Search..."
                            leftSection={<IconSearch size={16} stroke={1.5} />}
                            visibleFrom="sm"
                            style={{ width: 200 }}
                            onClick={() => spotlight.open()}
                            readOnly
                            styles={{
                                input: {
                                    cursor: 'pointer',
                                    '&:focus': {
                                        borderColor: theme.colors.primary[6],
                                    },
                                },
                            }}
                        /> */}

                        {/* <ActionIcon
                            variant="subtle"
                            size="lg"
                            hiddenFrom="sm"
                            onClick={() => spotlight.open()}
                        >
                            <IconSearch size={20} stroke={1.5} />
                        </ActionIcon> */}

                        {/* Theme Toggle */}
                        <ActionIcon
                            variant="subtle"
                            color="#FF7722"
                            size="xl"
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {colorScheme === 'dark' ? (
                                <IconSun size={20} stroke={1.5} />
                            ) : (
                                <IconMoon size={20} stroke={1.5} />
                            )}
                        </ActionIcon>

                        {/* Notifications */}
                        {/* <Indicator color="red" size={8} offset={7} disabled={false}>
                            <ActionIcon variant="subtle" size="lg">
                                <IconBell size={20} stroke={1.5} />
                            </ActionIcon>
                       </Indicator> */}
                        {/* signup */}
                        <LoginBtn />
                        {/* User Menu */}
                       

                        {/* Mobile Menu */}
                        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
                    </Group>
                </Group>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="md"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px)" mx="-md">
                    <Box py="md">
                        {/* {mainItems} */}
                    </Box>
                </ScrollArea>
            </Drawer>
        </Paper >
    );
}