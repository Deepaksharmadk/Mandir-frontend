import { useForm } from '@mantine/form';
import { TextInput, Button, PasswordInput, Loader, } from '@mantine/core';
import { useCreateUserMutation } from '../../store/api/userApi';


export function SignupForm() {
    const [createUser, { isLoading }] = useCreateUserMutation();
    console.log(`is1`, isLoading);
    if (isLoading) {
        // <p>kkkkkkkkkkkkk</p>
        < Loader color="red" size="xl" type="bars" />;
    }


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
            password: (value) => (value.length < 6 ? 'Password must have at least 6 letters' : null),
            confirmPassword: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
        },
    });

    const handleSumbit = async (values: typeof form.values) => {
        console.log(`gggggg`, values);
        const { name, email, password } = values;
        const data = {
            name,
            email,
            password
        }
        const response = createUser(data)
        console.log(response);

    };


    return (
        <form onSubmit={form.onSubmit(handleSumbit)}>
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