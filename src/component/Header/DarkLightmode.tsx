import { useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
function DarkLightmode() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();


    return (
        <div>
            <ActionIcon
                variant="subtle"
                color="#FF7722"
                size="xl"
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
            >
                {colorScheme === 'dark' ? (
                    <IconSun size={20} stroke={1.5} />
                ) : (
                    <IconMoon size={20} stroke={1.5} />
                )}
            </ActionIcon>
        </div>
    )
}

export default DarkLightmode
