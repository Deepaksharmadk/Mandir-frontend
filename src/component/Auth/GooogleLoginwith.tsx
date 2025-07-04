import {
    Anchor,
    Button,
    Checkbox,

    Divider,
    Group,
    Paper,

    PasswordInput,
    Stack,
    Text,
    TextInput,
} from '@mantine/core';
import type { PaperProps } from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { GoogleButton } from './GoogleButton';
import { useRegisterEmailMutation, useLoginEmailMutation } from '../../store/api/userApi';
import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';
import { loginWithGoogle } from '../../axiosInstance/googleapi';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { setUser } from '../../store/api/user/userInitialStateStore';



import { IconCheck, IconChecks } from '@tabler/icons-react';
import { useRef } from 'react';
import type { AuthResponse } from '../../store/api/userApi'
import { notifications } from '@mantine/notifications';

export function AuthenticationForm(props: PaperProps) {
    const googleRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch<AppDispatch>()

    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) =>
                val.length <= 6 ? 'Password should include at least 6 characters' : null,
        },
    });

    const [registerEmail, { isLoading: isRegistering }] = useRegisterEmailMutation();
    const [loginEmail, { isLoading: isLoggingIn }] = useLoginEmailMutation();


    const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
        const idToken = credentialResponse.credential
        if (!idToken) return console.error('No credential returned')
        try {
            const data = await loginWithGoogle(idToken)
            const result = data
            // console.log(`Google login result`, result 
            notifications.show({
                title: result?.massage || 'Login Successfully',
                message: ` Wellcome ${result.user.name}`,
                color: 'green',
                icon: <IconCheck />,
            });
            if (data.error) {
                console.error(data.error)
                return
            }
            dispatch(setUser({
                _id: result.user.id,
                name: result.user.name,
                email: result.user.email,
                picture: result.user.picture || '',
                role: result.user.role || 'User',
            }))
            // navigate('/') or close modal here
            // TODO: navigate to home
        } catch (err) {
            console.error('Google login failed', err)
        }
    }

    const handleSubmit = async (values: typeof form.values) => {
        try {
            let result: AuthResponse
            if (type === 'register') {
                const response = await registerEmail({
                    email: values.email,
                    password: values.password,
                    name: values.name,
                });
                if ('data' in response && response.data) {
                    result = response.data;
                    // console.log(`register result`, result);
                    notifications.show({
                        title: result?.massage || 'Registration Successfully',
                        message: 'You have been registered successfully.',
                        color: 'green',
                        icon: <IconCheck />,
                    });
                } else {
                    const errorData = (response.error && typeof response.error === 'object' && 'data' in response.error)
                        ? (response.error as { data?: { message?: string } }).data
                        : undefined;
                    const errorMessage = errorData?.message || 'Registration failed';
                    console.error('Registration failed:', errorMessage);
                    // handle error case
                    notifications.show({
                        title: errorMessage,
                        message: 'Something went wrong during registration.',
                        color: 'red',
                    });
                    return;
                }

            } else {
                result = await loginEmail({
                    email: values.email,
                    password: values.password,
                }).unwrap()
                dispatch(setUser({
                    _id: result.user.id,
                    name: result.user.name,
                    email: result.user.email,
                    picture: result.user.picture || '',
                    role: result.user.role || 'User',
                }))
                // Show success toast or redirect
                notifications.show({
                    title: result?.massage || 'Login Successfully',
                    message: ` Wellcome ${result.user.name}`,
                    color: 'green',
                    icon: <IconCheck />,
                });

            }
        } catch (loginErr: unknown) {
            // console.error('Auth error:', err);
            let errorMessage = 'Login failed';
            if (loginErr && typeof loginErr === 'object' && 'data' in loginErr && loginErr.data && typeof loginErr.data === 'object' && 'message' in loginErr.data) {
                errorMessage = (loginErr.data as { message?: string }).message || errorMessage;
            }
            console.error('Login failed:', errorMessage);

            notifications.show({
                title: 'Login Failed',
                message: errorMessage,
                color: 'red',
                icon: <IconChecks />,
            });
        }
    };
    const handleClick = () => {
        const button = googleRef.current?.querySelector("div[role='button']");
        if (button) {
            (button as HTMLElement).click();
        }
    };


    return (
        <Paper radius="md" p="lg" withBorder {...props}>
            <Text size="lg" fw={500}>
                Welcome to Login, {type} with
            </Text>

            <Group grow mb="md" mt="md">
                <GoogleButton fullWidth radius="xl" onClick={handleClick}>Google</GoogleButton>


            </Group>
            <div style={{ display: "none", width: "0px" }} ref={googleRef}>
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => console.log("Login Failed")}
                    theme="filled_blue"
                    text="continue_with"
                    useOneTap
                />
            </div>


            <Divider label="Or continue with email" labelPosition="center" my="lg" />

            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack>
                    {type === 'register' && (
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            value={form.values.name}
                            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                            radius="md"
                        />
                    )}

                    <TextInput
                        required
                        label="Email"
                        placeholder="hello@mantine.dev"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password}
                        radius="md"
                    />

                    {type === 'register' && (
                        <Checkbox
                            label="I accept terms and conditions"
                            checked={form.values.terms}
                            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                        />
                    )}
                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                        {type === 'register'
                            ? 'Already have an account? Login'
                            : "Don't have an account? Register"}
                    </Anchor>
                    <Button type="submit" radius="xl" loading={isRegistering || isLoggingIn}>
                        {upperFirst(type)}
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}
