import { Button } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import type { ComponentPropsWithoutRef } from 'react'
import { IconBrandTwitter } from '@tabler/icons-react'

type Props = ButtonProps & ComponentPropsWithoutRef<'button'>

export function TwitterButton(props: Props) {
    return (
        <Button
            leftSection={<IconBrandTwitter size={16} color="#00ACEE" />}
            variant="default"
            {...props}
        />
    )
}