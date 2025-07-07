import { useDisclosure } from '@mantine/hooks';
import { Modal, Anchor } from '@mantine/core';
import { ForgetPassword } from './forgetPassword';

export function ForgetPasswordModel() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Forget Password" centered>
                {/* Modal content */}
                <ForgetPassword onClose={close} />
            </Modal>

            <Anchor component="button" variant="default" onClick={open}>
                Forget Password
            </Anchor>
        </>
    );
}