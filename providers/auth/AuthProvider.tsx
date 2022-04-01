import React, { useState, createContext, useEffect } from 'react';
import Api from '../../pages/api';
import Cookie from 'js-cookie';
import Axios from 'axios';
import api from '../../pages/api';

type User = {
    name: string,
    email: string,
    avatar: string
}

type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContentType = {
    authenticated: boolean;
    user: User;
    _rendering: boolean;
    signIn: (data: SignInCredentials) => Promise<any>
    signOut: (redirectTo: any) => void
    _watch: () => void
    socialLogin: (credentails: any) => Promise<any>
    signUp: (signUpData: any) => any,
    fastAuth: (token: string) => any
}

export const AuthContext = createContext({} as AuthContentType);


export function AuthProvier({ children }) {

    const [user, setUser] = useState<User | null>(null);
    const [_rendering, setRendering] = React.useState<boolean>(true);
    const authenticated = !!user;
    const [update, setUpdate] = React.useState<number>();

    useEffect(() => {
        (async () => {

            const token = await Cookie.get('token');

            if (!token) setUser(null)

            console.log('CHAMEI LOGOUT')
            if (token) {

                await Axios.get(process.env.NEXT_PUBLIC_APP_API_URL + '/customer/auth/logged', {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                    .then(response => {
                        setUser(response.data.data)
                        setRendering(false);

                    })
                    .catch(error => {
                        setRendering(false)
                        setUser(null)
                    })
            }

            setRendering(false)

        })()
    }, [authenticated, update])

    const _watch = () => setUpdate(Math.random())

    async function signIn({ email, password }: SignInCredentials) {

        const { data } = await Axios.post(process.env.NEXT_PUBLIC_APP_API_URL + '/customer/auth/login', { email, password })
            .then(response => response.data)
            .catch(error => error.response);

        if (data.error) return data

        Cookie.set('token', data);
        return data;

    }

    async function signOut(redirectTo) {

        await api.post('/customer/auth/logout')
            .then(() => {
                Cookie.remove('token');
                _watch()
            })
            .catch(error => error.response);
    }

    async function signUp(signUpData: any) {

        const { data } = await api.post('/customer/auth/register', signUpData)
            .then(response => response.data)
            .catch(error => error.response);

        if (data.error) return data
        Cookie.set('token', data);
        return data;
    }

    async function socialLogin(credentials: any) {

        let signData = {
            email: credentials.email,
            auth_provider: credentials.auth_provider,
            provider_id: credentials.provider_id,
            name: credentials.name,
            avatar: credentials.avatar
        }

        const { data } = await api.post('/customer/auth/social-login', signData)
            .then(response => response.data)
            .catch(error => error.response);

        if (data.error) return data
        Cookie.set('token', data);
        return data;

    }

    const fastAuth = (token: string) => {
        Cookie.set('token', token);
        _watch();
    }

    return <AuthContext.Provider value={{
        authenticated,
        signIn,
        socialLogin,
        signOut,
        user,
        _rendering,
        signUp,
        _watch,
        fastAuth
    }}>
        {children}
    </AuthContext.Provider>
}