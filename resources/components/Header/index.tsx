import { Avatar, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react'
import { theme } from '../../../theme';
import Logo from '../../images/logo/tripler-logo.svg';
import * as Styled from './styles';

export default function Header() {
    return (
        <Styled.HeaderContainer>
            <Styled.HeaderTop>
                <Styled.HeaderTop><Logo width={'80px'} /></Styled.HeaderTop>
                <Styled.MenuBar>
                    <Avatar size={'sm'} name='VItor Santos' src='https://bit.ly/broken-link' />
                    <i className={'las la-bars'}></i>
                </Styled.MenuBar>
            </Styled.HeaderTop>
            <Styled.HeaderSearchContainer>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<i style={{ color: theme.colors.primary }} className={'las la-search'}></i>}
                    />
                    <Input py={5} style={{ boxShadow: 'rgb(25 31 40 / 15%) 0px 1px 2px 0px' }} placeholder={'Pesquise excursões'} />
                </InputGroup>
            </Styled.HeaderSearchContainer>
        </Styled.HeaderContainer>
    )
}