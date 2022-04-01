import React from "react";
import type { NextPage } from "next";
import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import GoogleLogin from "react-google-login";
import { AuthContext } from "../../../providers/auth/AuthProvider";
import useAuth from "../../../providers/auth/useAuth";
import { useRouter } from "next/router";
import * as Styled from '../styles';
import Link from "next/link";
import AuthLayout from "../../../resources/layouts/AuthLayout";

const Login: NextPage = ({ layout }: any) => {

  const { handleSubmit, register, formState: { isValid, errors } } = useForm({ mode: 'onChange' });
  const { signIn, socialLogin, _watch } = React.useContext(AuthContext);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [buttonState, setButonState] = React.useState<any>({ disabled: !isValid, isLoading: false })
  const route = useRouter();


  React.useEffect(() => setButonState({ disabled: !isValid }), [isValid])

  const submitCredentials = (credentials) => {

    setButonState({ disabled: true, isLoading: true });

    signIn(credentials).then((response: any) => {

      if (response.error) {
        setButonState({ disabled: false, isLoading: false });
        return setErrorMessage(response.message)
      }
      _watch();

    })

  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(submitCredentials)}>
        <Stack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input variant={'flushed'} placeholder={'Edereço de email'} autoComplete={'off'} {...register('email', { required: true })} />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input variant={'flushed'} placeholder='••••••••••' type={'password'} {...register('password', { required: true })} />
          </FormControl>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href={'/account/recovery'}>Esqueci minha senha</Link>
          </div>

          <Styled.AccountButton type={'submit'}
            colorScheme={'primary'} {...buttonState} rightIcon={<i className={'las la-arrow-right'}></i>}>Entrar</Styled.AccountButton>
          <p style={{ color: 'red' }}>{errorMessage}</p>

          <p>Não tem uma conta na Tripler?</p>
          <Styled.AccountButton
            style={{ width: '100%' }}
            colorScheme={"secondary"}
            onClick={() => route.push('/account/register')}
            rightIcon={<i className={'las la-arrow-right'}></i>}>Registre-se</Styled.AccountButton>

          <GoogleLogin
            className={'google-button'}
            clientId="645551867105-2j5hgd2nqi052pjud5lnpv3nhi3c6eot.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            // onSuccess={(response) => sigInWithGoogle(response)}
            // onFailure={'responseGoogle'}
            cookiePolicy={'single_host_origin'}
          />
        </Stack>

      </form>
    </AuthLayout>
  );
};

export default useAuth(Login);
