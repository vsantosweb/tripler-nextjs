import React from 'react'
import { AuthContext } from './AuthProvider';

export default function useAuth(Component: React.ElementType) {

    const PrivateComponent = (props: any) => {

        const { authenticated, user, _rendering } = React.useContext(AuthContext);

        if (_rendering) return '';

        if (!authenticated && window.location.pathname !== '/account/login') {
            window.location.href = '/account/login';
            return false;
        }

        if (authenticated && window.location.pathname === '/account/register') {
            window.location.href = '/';
            return false;
        }

        if (authenticated && window.location.pathname === '/account/login') {
            window.location.href = '/panel'
            return false;
        }

        return <Component {...props} user={user} />
    }

    return PrivateComponent
}