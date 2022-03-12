import React from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../providers/auth/AuthProvider'
import GoogleLogin from 'react-google-login';
import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import * as Styled from '../styles';
import api from '../../api';
import { useRouter } from 'next/router';

function Register({ layout, history }) {

    const { handleSubmit, register, watch, formState: { isValid, errors } } = useForm({ mode: 'onChange' });
    const { signIn, socialLogin, _watch, signUp, fastAuth } = React.useContext(AuthContext);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [buttonState, setButonState] = React.useState<object>({ disabled: !isValid, isLoading: false })

    React.useEffect(() => layout('AuthLayout'));
    React.useEffect(() => setButonState({ disabled: !isValid }), [isValid])
    const router = useRouter();

    const handleSubmitRegister = data => {
        api.post('/customer/auth/register', data)
            .then(({ data }) => [fastAuth(data.data), router.push('/')])
            .catch(error => setErrorMessage(error.response.data.message))
    }

    const sigInWithGoogle = async ({ profileObj }) => {

        await socialLogin({
            auth_provider: 'google',
            provider_id: profileObj.googleId,
            email: profileObj.email,
            name: profileObj.name,
            avatar: profileObj.imageUrl
        });
        _watch();

    }
    console.log(errors)
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(handleSubmitRegister)}>
                <Stack>
                    <FormControl variant={'floating'}>
                        <FormLabel>Nome</FormLabel>
                        <Input autoComplete={'off'} variant={'flushed'} placeholder='Seu nome completo' {...register('name', { required: true, minLength: 4 })} />
                    </FormControl>
                    <FormControl variant={'floating'}>
                        <FormLabel>Endereço de email</FormLabel>
                        <Input autoComplete={'off'} type={'email'} variant={'flushed'} placeholder='Seu melhor email'{...register('email', { required: true, minLength: 4 })} />
                    </FormControl>
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
                    <Styled.AccountButton {...buttonState} type={'submit'} colorScheme={'secondary'}>Registrar-se <i className={'las la-arrow-right'}></i></Styled.AccountButton>
                    {errorMessage && <Alert status='error'>
                        <AlertIcon />
                        <AlertDescription fontSize={14}>{errorMessage}</AlertDescription>
                    </Alert>}
                    <Styled.AccountButton onClick={() => history.push('/account/login')} colorScheme={'primary'}>Já possuo uma conta<i className={'las la-arrow-right'}></i></Styled.AccountButton>

                </Stack>
            </form>
            <Styled.PanelSocial>
                <Styled.PanelSocialDivider>
                    <Styled.PanelSocialDividerLine />
                    <Styled.PanelSocialDividerText>ou use uma das seguintes opções</Styled.PanelSocialDividerText>
                    <Styled.PanelSocialDividerLine />
                </Styled.PanelSocialDivider>
                <GoogleLogin
                    clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                    buttonText="Sign in with Google"
                    // onSuccess={(response) => sigInWithGoogle(response)}
                    onFailure={(response) => console.log(response)}
                    cookiePolicy={'single_host_origin'}
                />
            </Styled.PanelSocial>

            <hr />

        </React.Fragment>

    )
}

export default Register