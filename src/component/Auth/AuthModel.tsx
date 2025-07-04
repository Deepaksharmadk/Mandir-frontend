import { Modal, Button, Group } from '@mantine/core';
import { IconUsers } from '@tabler/icons-react';
import { AuthenticationForm } from './GooogleLoginwith';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import LogoutwithActionicon from '../Header/LogoutwithActionicon';
import { useState } from 'react';


export function LoginBtn() {
    const [authOpen, setAuthOpen] = useState(false);

    // const [opened, { open, close }] = useDisclosure(false);
    const isLoggedIn = useSelector((state: RootState) => state.user.user)


    return (
        <>
            <Modal opened={authOpen}
                onClose={() => setAuthOpen(false)}
                title="Login or Register"
                centered>
                {/* Modal content */}
                <AuthenticationForm onClose={() => setAuthOpen(false)} />
            </Modal>


            <Group justify="center">
                {isLoggedIn ? <LogoutwithActionicon /> : <Button leftSection={<IconUsers size={14} />} variant="outline" color="#FF7722" onClick={() => setAuthOpen(true)}>
                    Login
                </Button>}
            </Group>
        </>
    );
}