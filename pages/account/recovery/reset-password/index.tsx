import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import api from '../../../api'
import { AccountButton } from '../../styles'

export async function getServerSideProps(req, res) {

    const { error, data } = await api.post('/customer/auth/password/validate-recovery-request', { email: req.query.email, token: req.query.token })
        .then(response => response.data)

    return error ? {
        redirect: {
            permanent: false,
            destination: '/account/login'
        }
    } : {
        props: {
            ...data
        }
    }
}

export const Recovery: NextPage = ({ layout, history, ...props }: any) => {

    React.useEffect(() => layout('AuthLayout'), [])

    const router = useRouter();

    const { register, handleSubmit, watch, formState: { isValid, errors } } = useForm({ mode: 'onChange' });

    const handleResetPassword = (formData) => {

        api.post('/customer/auth/password/recovery', { ...formData, ...props })
            .then(response => {
                
                if (response.data.error) throw new Error('Ocorreu um erro ao processar sua solicitação.');

                return router.push({
                    pathname: '/account/recovery/success',
                    query: { recovered: true }
                }, '/account/recovery/success');
            })
    }
    return (
        <form onSubmit={handleSubmit(handleResetPassword)}>
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
                <AccountButton type={'submit'} rightIcon={<i className={'las la-key'}></i>} colorScheme={'primary'}>Redefinir minha senha</AccountButton>
            </Stack>
        </form>
    )
}

export default Recovery;