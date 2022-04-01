import {
    Avatar, Button, Input, InputGroup, InputLeftElement, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'
import { theme } from '../../../theme';
import Logo from '../../images/logo/tripler-logo.svg';
import * as Styled from './styles';
import { AuthContext } from '../../../providers/auth/AuthProvider';
import useAuth from '../../../providers/auth/useAuth';
import api from '../../../pages/api';

function Header() {

    const router = useRouter();

    const { user, signOut } = React.useContext(AuthContext);

    return (
        <Styled.HeaderContainer>
            <Styled.HeaderTop>
                <Styled.HeaderTop><Logo width={'80px'} /></Styled.HeaderTop>
                <Styled.HeaderRightContent>
                    {user ? <Menu>
                        <Styled.MenuBar>
                            <Avatar size={'sm'} name={user.name} src='https://bit.ly/broken-link' />
                            <i className={'las la-bars'}></i>
                        </Styled.MenuBar>
                        <MenuList>
                            <MenuGroup title='Profile'>
                                <MenuItem>Minha conta</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title='Help'>
                                <MenuItem onClick={() =>signOut(router.pathname)}>Sair</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu> :
                        <>
                            <Button onClick={() => router.push('/account/login')}>Fazer login</Button>
                            <Button onClick={() => router.push('/account/register')} colorScheme={'primary'}>Cadastre-se</Button>
                        </>
                    }
                </Styled.HeaderRightContent>




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

export default Header