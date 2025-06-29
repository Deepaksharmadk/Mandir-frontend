import { useForm } from '@mantine/form';
import { TextInput, Button, PasswordInput, } from '@mantine/core';


export function SignupForm() {
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            confirmPassword: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
        },
    });

    return (
        <form onSubmit={form.onSubmit(console.log)}>
            <TextInput
                withAsterisk
                label="Name"
                placeholder="Enter your name"
                key={form.key('name')}
                {...form.getInputProps('name')}
                styles={{
                    input: {
                        color: '#000', // input text

                    },
                }}
            />
            <TextInput
                withAsterisk
                mt="sm"
                label="Email"
                placeholder="Enter your email"
                key={form.key('email')}
                {...form.getInputProps('email')}
            />

            <PasswordInput
                withAsterisk
                mt="sm"
                label="Password"
                placeholder="Enter your password"
                key={form.key('password')}
                {...form.getInputProps('password')}
            />

            <PasswordInput
                withAsterisk
                mt="sm"
                label="Confirm password"
                placeholder=" Enter your Confirm password"
                key={form.key('confirmPassword')}
                {...form.getInputProps('confirmPassword')}
            />
            <Button type="submit" mt="sm" fullWidth color="#ff7722">
                Submit
            </Button>
        </form>
    );
}