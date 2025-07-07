import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export function ForgetPassword({ onClose }: { onClose: () => void }) {
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
    const handleSubmit = (values: { email: string }) => {
        console.log('Submitted email:', values.email);
        onClose();
    };
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