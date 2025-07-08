import { Modal } from '@mantine/core';
import { ForgetPassword } from './ForgetPassword';

export function ForgetPasswordModel({
    opened,
    onClose,
}: {
    opened: boolean;
    onClose: () => void;
}) {
    return (
        <Modal opened={opened} onClose={onClose} title="Forget Password" centered>
            <ForgetPassword onClose={onClose} />
        </Modal>
    );
}
