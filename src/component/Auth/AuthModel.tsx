import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import { SignupForm } from './Signup';
import { IconUsers } from '@tabler/icons-react';

export function LoginBtn() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <div></div>
            <Modal opened={opened} onClose={close} title="Signup Form" centered id='modal'>
                {/* Modal content */}
                <SignupForm />
            </Modal>


            <Group justify="center">
                <Button leftSection={<IconUsers size={14} />} variant="outline" color="#FF7722" onClick={open}>
                    Signup
                </Button>
            </Group>
        </>
    );
}