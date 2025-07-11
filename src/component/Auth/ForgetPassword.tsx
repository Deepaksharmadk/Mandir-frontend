import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useForgotPasswordMutation } from '../../store/api/userApi';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconChecks } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { PleaseWait } from './PleaseWait';

export function ForgetPassword({ onClose }: { onClose: () => void }) {
    const navigate = useNavigate();
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation()

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    const handleSubmit = async (values: { email: string }) => {
        try {
            console.log('Submitted email:', values.email);
            const response = await forgotPassword({ email: values.email }).unwrap();
            console.log('Response:', response.message);
            form.reset();
            navigate('/change-password', {
                state: { email: values.email },
            });
            onClose();

            notifications.show({
                // title: response?.message || 'Login Successfully',
                message: response.message,
                color: 'green',
                icon: <IconCheck />,
            });
        } catch (error) {
            const err = error as { data?: { errors?: string[] } };
            notifications.show({
                message: err?.data?.errors?.[0] || 'Pllease enter valid email',
                color: 'red',
                icon: <IconChecks />,
            });
            console.error('Error submitting form:', error);
        }
    };
    if (isLoading) {
        return <PleaseWait />;
    }
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                withAsterisk
                label="Email"
                placeholder="Enter your email"
                key={form.key('email')}
                {...form.getInputProps('email')}
            />



            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    );
}