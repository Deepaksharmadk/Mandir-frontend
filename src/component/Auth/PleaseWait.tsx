import { Loader, Text, Stack, } from '@mantine/core';

export function PleaseWait() {
    return (
        <Stack align="center" gap="md" justify='center'>
            <Loader color="red" type="bars" />
            <Text size="md" fw={500}>
                Please wait...
            </Text>
        </Stack>
    );
}
