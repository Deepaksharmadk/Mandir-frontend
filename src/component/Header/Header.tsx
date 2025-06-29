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
                        {/* <Menu
                            width={260}
                            position="bottom-start" offset={3} withArrow arrowPosition="center"
                            transitionProps={{ transition: 'pop-top-right' }}
                            onClose={() => setUserMenuOpened(false)}
                            onOpen={() => setUserMenuOpened(true)}
                            withinPortal
                        >
                            <Menu.Target>
                                <UnstyledButton className={classes.user} data-expanded={userMenuOpened || undefined}>
                                    <Group gap="sm">
                                        <Avatar
                                            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
                                            size={36}
                                            radius="xl"
                                        />
                                        <Text fw={500} size="sm" lh={1} mr={3} visibleFrom="sm">
                                            John Doe
                                        </Text>
                                        <IconChevronDown size={12} stroke={1.5} visibleFrom="sm" />
                                    </Group>
                                </UnstyledButton>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item
                                    leftSection={<IconUser size={16} stroke={1.5} />}
                                >
                                    <div>
                                        <Text fw={500}>John Doe</Text>
                                        <Text size="xs" c="dimmed">
                                            john.doe@example.com
                                        </Text>
                                    </div>
                                </Menu.Item>

                                <Menu.Divider />

                                <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                                    Account Settings
                                </Menu.Item>

                                <Menu.Item
                                    leftSection={<IconLogout size={16} stroke={1.5} />}
                                    c="red"
                                >
                                    Logout
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu> */}

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