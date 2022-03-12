import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'
import api from '../../../api'
import { AccountButton } from '../../styles'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://.../data`)
    const data = await res.json()
    // api.post('/customer/auth/password/validate-recovery-request', { email: history.query.email, token: history.query.token })
    // .then(response => console.log(response))
    // .catch((error) => console.log('DKSAOPASODKASOKSO'))
    // Pass data to the page via props
    return { props: { data } }
  }

export const Recovery: NextPage = ({ layout, history }: any) => {

    React.useEffect(() => layout('AuthLayout'), [])
    React.useEffect(() => {

        console.log({ email: history.query.email, token: history.query.token })
        
    }, [history.query])
    const { register, handleSubmit, watch, formState: { isValid, errors } } = useForm({ mode: 'onChange' });

    return (
        <form>
            <Stack spacing={3}>
                <Heading size={'lg'}>Crie uma nova asenha</Heading>
                <Text>
                    Use senhas fortes, incluindo letras maiúsculas, letras minúsculas e números.
                </Text>
                <FormControl variant={'floating'}>
                    <FormLabel>Senha</FormLabel>
                    <Input variant={'flushed'} type={'password'} placeholder='••••••••••' {...register('password', { required: true, minLength: 8 })} />
                </FormControl>
                <FormControl isInvalid={errors.password_confirmation} variant={'floating'}>
                    <FormLabel>Confirme sua senha</FormLabel>
                    <Input isInvalid={errors.password_confirmation} variant={'flushed'} type={'password'} placeholder='••••••••••'
                        {...register('password_confirmation', {
                            required: true,
                            validate: (value) => value === watch('password') || 'As senhas não conferem'
                        })}
                    />
                    <FormErrorMessage>{errors.password_confirmation?.message}</FormErrorMessage>
                </FormControl>
                <AccountButton rightIcon={<i className={'las la-key'}></i>} colorScheme={'primary'}>Redefinir minha senha</AccountButton>
            </Stack>
        </form>
    )
}

export default Recovery;