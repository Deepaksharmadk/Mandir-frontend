import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import { IconUsers } from '@tabler/icons-react';
import { AuthenticationForm } from './GooogleLoginwith';

export function LoginBtn() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Signup Form" centered id='modal'>
                {/* Modal content */}
                <AuthenticationForm />
            </Modal>


            <Group justify="center">
                <Button leftSection={<IconUsers size={14} />} variant="outline" color="#FF7722" onClick={open}>
                    Signup
                </Button>
            </Group>
        </>
    );
}