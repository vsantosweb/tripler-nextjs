import { NextPage } from 'next'
import React from 'react'
import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export async function getServerSideProps(req) {

    if (req.query.recovered) {
        return {
            props: { data: null }
        }
    }
    return {

        redirect: {
            permanent: false,
            destination: '/account/login'
        }
    }

}

export const RecoverySuccess: NextPage = ({ layout, history }: any) => {

    const router = useRouter();
    console.log(router)
    React.useEffect(() => layout('AuthLayout'), [])
    return (
        <Stack spacing={3}>
            <Heading size={'md'}>Senha redefinida com sucesso</Heading>
            <Text>
                Agora você pode acessar sua conta com sua nova senha e continuar navegando na tripler.
            </Text>
            <Button variant={'outline'} onClick={() => history.push('/account/login')} colorScheme={'primary'}>Voltar para o login</Button>
        </Stack>
    )
}
export default RecoverySuccess;