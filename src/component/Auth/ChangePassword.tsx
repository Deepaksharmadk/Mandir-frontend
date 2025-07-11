/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Group,
    Stack,
    Text,
} from '@mantine/core';
import type { PaperProps } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useResetPasswordMutation } from '../../store/api/userApi';

export interface ChangePasswordFormProps extends PaperProps {
    onSuccess?: () => void;
}

export function ChangePasswordForm({ onSuccess, ...props }: ChangePasswordFormProps) {
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const form = useForm({
        initialValues: { email: '', otp: '', password: '' },
        validate: {
            email: (value) =>
                value.trim().length === 0
                    ? 'Email is required'
                    : /^\S+@\S+\.\S+$/.test(value)
                        ? null
                        : 'Invalid email address',
            otp: (value) =>
                value.trim().length === 0
                    ? 'OTP is required'
                    : value.trim().length !== 4
                        ? 'OTP must be exactly 4digits'
                        : null,
            password: (value) =>
                value.trim().length === 0
                    ? 'Password is required'
                    : value.length < 6
                        ? 'Password must be at least 6 characters'
                        : null,
        },
    });

    const handleSubmit = async (values: typeof form.values) => {
        try {
            const response = await resetPassword(values).unwrap();

            notifications.show({
                title: response.message || 'Success',
                message: 'Your password has been changed successfully.',
                color: 'green',
                icon: <IconCheck />,
            });

            form.reset();
            onSuccess?.();
        } catch (err: any) {
            const errorMsg =
                err?.data?.message || 'Failed to change password. Please try again.';
            notifications.show({
                title: 'Error',
                message: errorMsg,
                color: 'red',
                icon: <IconX />,
            });
        }
    };

    return (
        <Paper radius="md" p="lg" withBorder {...props}>
            <Text size="lg" fw={500} mb="md">
                Reset Password
            </Text>

            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack>
                    <TextInput
                        label="Email"
                        placeholder="you@example.com"
                        {...form.getInputProps('email')}
                    />

                    <TextInput
                        label="OTP"
                        placeholder="123456"
                        {...form.getInputProps('otp')}
                    />

                    <PasswordInput
                        label="New Password"
                        placeholder="••••••••"
                        {...form.getInputProps('password')}
                    />
                </Stack>

                <Group justify="end" mt="xl">
                    <Button type="submit" loading={isLoading}>
                        Change Password
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}
