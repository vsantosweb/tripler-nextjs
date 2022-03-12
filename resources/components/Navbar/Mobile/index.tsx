import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react'
import menu from '../menu.json';
import * as Styled from '../styles';

const navData = [
    'Home',
    'Sobre a PlayTennis',
    'Academias',
    'Produtos',
    'Eventos e Torneios',
    'Newsletter',
    'Contato',
]


const Mobile: React.FC<{}> = () => {
    return (
        <Styled.Navigation>
            <Styled.Header>
                <Styled.Logo>Logo</Styled.Logo>
                x
            </Styled.Header>
            <Styled.Navbar>
                <Accordion display={'flex'} flexDirection={'column'} gap={'12px'} allowToggle >
                    {menu.map((item, index) => (
                        item.hasChildren ? (
                            <Styled.NavbarDropdown key={index} style={{ border: 'none' }}>
                                <Styled.NavbarItemDropdownButton level={'parent'}>
                                    <i className={`las la-${item.icon}`}></i> {item.name} 
                                </Styled.NavbarItemDropdownButton>
                                <AccordionPanel  p={0}>
                                    {item.children.map((child, index) => (
                                        <Accordion style={{borderLeft:'solid 1px'}} display={'flex'} flexDirection={'column'} gap={'12px'} key={index} allowToggle >
                                            <Styled.NavbarDropdown >
                                                <Styled.NavbarItemDropdownButton level={'children'}>
                                                <span style={{width: '15px', height: '1px', background: '#fff'}}></span>{child.name}
                                                </Styled.NavbarItemDropdownButton>
                                                <AccordionPanel style={{padding: '1em'}}>
                                                    {child.children.map(item => <Styled.NavbarItem>{item.name}</Styled.NavbarItem>)}
                                                </AccordionPanel>
                                            </Styled.NavbarDropdown>
                                        </Accordion>
                                    ))}
                                </AccordionPanel>
                            </Styled.NavbarDropdown>
                        ) : (<Styled.NavbarItem><i className={`las la-${item.icon}`}></i> {item.name}</Styled.NavbarItem>)
                    ))}


                </Accordion>
            </Styled.Navbar>
        </Styled.Navigation>
    )
}

export default Mobile;