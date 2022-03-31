import React from 'react'
import * as Styled from './styles';
import Logo from '../../images/logo/tripler-logo.svg';
import { Link } from '@chakra-ui/react';

export default function AuthLayout({ children }) {
    return (
        <React.Fragment>
            <Styled.AuthContainer>
                <Styled.AuthHeader><Logo width={"80px"} /></Styled.AuthHeader>
                <Styled.AuthWrapper>
                    {children}
                    <Styled.AuthFooter>
                        <small>
                            Ao fazer login ou registrar uma conta na tripler.com.br, confirmo que li e concordei com
                            <Link color={'primary.50'} href="https://pages.trip.com/service-guideline/terms-pt-br.html" target="_blank"> Termos e condições</Link> e
                            <Link color={'primary.50'} href="https://pages.trip.com/service-guideline/privacy-policy-pt-br.html" target="_blank"> Declaração de Privacidade </Link>
                            da tripler.com.br
                        </small>
                        <hr />
                        <small>
                            Todos os direitos reservados.
                            Direitos autorais {new Date().getFullYear()} - Tripler.com.br®
                        </small>
                    </Styled.AuthFooter>
                </Styled.AuthWrapper>
            </Styled.AuthContainer>
        </React.Fragment>
    )
}