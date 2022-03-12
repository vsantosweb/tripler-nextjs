import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { AccountButton } from '../styles';
import { useForm } from 'react-hook-form';
import api from '../../api';

export const Recovery: NextPage = ({ layout, history }: any) => {

    const [buttonState, setButtonState] = React.useState(null);

    React.useEffect(() => layout('AuthLayout'), []);
    const { register, handleSubmit, formState: { isValid, errors } } = useForm({ mode: 'onChange' });

    const handleSubmitRecoveryRequest = (formData) => {

        setButtonState({ isLoading: true, disabled: true });

        api.post('/customer/auth/password/recovery-request', formData)
            .then(() => history.push({ pathname: 'recovery/confirmation', query: 'souzavito@hotmail.com' }, '/account/recovery'))
            .catch(error => console.log(error.response))

    }
    console.log(errors)
    return (
        <form onSubmit={handleSubmit(handleSubmitRecoveryRequest)}>
            <Stack spacing={3}>
                <Heading size={'lg'}>Esqueceu a senha?</Heading>
                <Text>
                    Vamos te enviar um link para redefinir sua senha.
                    Por favor, insira o e-mail.
                </Text>
                <FormControl isInvalid={!isValid}>
                    <FormLabel>Seu endereço de e-mail</FormLabel>
                    <Input
                        autoComplete={'off'}
                        isInvalid={!isValid}
                        {...register('email', { required: 'Por favor, insira seu e-mail' })}
                        placeholder={'exemplo@exemplo.com'}
                        variant={'flushed'}
                        type={'email'}
                    />
                    <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>
                <AccountButton
                    {...buttonState}
                    type={'submit'}
                    rightIcon={<i className={'las la-paper-plane'}></i>}
                    colorScheme={'primary'}>Enviar link de redefinição de senha</AccountButton>
            </Stack>
        </form>
    )
}

export default Recovery;