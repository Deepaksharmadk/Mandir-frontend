import { useState } from 'react';
import {
    Menu,
    UnstyledButton,
    Group,
    Avatar,
    Text,
} from '@mantine/core';
import {
    IconChevronDown,
    IconUser,
    IconSettings,
    IconLogout,
    IconCheck,
} from '@tabler/icons-react';
import type { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutUserMutation } from '../../store/api/userApi';
import { clearUserData } from '../../store/api/user/userInitialStateStore';
import { notifications } from '@mantine/notifications';

function LogoutwithActionicon() {
    const [logoutUser,] = useLogoutUserMutation();
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state: RootState) => state.user.user)
    const name = isLoggedIn?.name ?? '';
    const email = isLoggedIn?.email ?? '';
    const picture = isLoggedIn?.picture;
    console.log(`loged data`, picture)
    // console.log(`loged data after login`, isLoggedIn)
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const handleLogout = async () => {
        try {
            logoutUser()
            // Clear localStorage or Redux state if needed
            // localStorage.removeItem('user');
            dispatch(clearUserData());
            notifications.show({
                title: 'Logout Successfully',
                message: ` your account is logout ${name}`,
                color: 'green',
                icon: <IconCheck />,
            });
        } catch (err) {
            console.error('Logout error:', err);
        }
    };
    return (
        <Menu
            width={260}
            position="bottom-start"
            offset={3}
            withArrow
            arrowPosition="center"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton
                    className="user"
                    data-expanded={userMenuOpened || undefined}
                >
                    <Group gap="sm">
                        <Avatar
                            src={picture || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'}
                            size={36}
                            radius="xl"
                        />
                        <Text fw={500} size="sm" lh={1} mr={3} visibleFrom="sm">
                            {isLoggedIn ? name : 'Guest User'}
                        </Text>
                        <IconChevronDown size={12} stroke={1.5} />
                    </Group>
                </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item leftSection={<IconUser size={16} stroke={1.5} />}>
                    <div>
                        <Text fw={500}>{isLoggedIn ? name : 'Guest User'}</Text>
                        <Text size="xs" c="dimmed">
                            {isLoggedIn ? email : 'example@me.com'}
                        </Text>
                    </div>
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                    Account Settings
                </Menu.Item>

                <Menu.Item onClick={handleLogout}
                    leftSection={<IconLogout size={16} stroke={1.5} />}
                    c="red"
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default LogoutwithActionicon;
