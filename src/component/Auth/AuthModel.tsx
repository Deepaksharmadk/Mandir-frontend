import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import { IconUsers } from '@tabler/icons-react';
import { AuthenticationForm } from './GooogleLoginwith';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import LogoutwithActionicon from '../Header/LogoutwithActionicon';

export function LoginBtn() {
    const [opened, { open, close }] = useDisclosure(false);
    const isLoggedIn = useSelector((state: RootState) => state.user.user)


    return (
        <>
            <Modal opened={opened} onClose={close} title="Signup Form" centered id='modal'>
                {/* Modal content */}
                <AuthenticationForm />
            </Modal>


            <Group justify="center">
                {isLoggedIn ? <LogoutwithActionicon /> : <Button leftSection={<IconUsers size={14} />} variant="outline" color="#FF7722" onClick={open}>
                    Login
                </Button>}
            </Group>
        </>
    );
}