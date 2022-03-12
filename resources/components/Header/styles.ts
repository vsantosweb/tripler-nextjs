import { Input } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column ;
  gap: 14px;
  padding: ${({ theme }:any) => theme.defaultContainer.spacing};
`;

export const HeaderTop = styled.div`
    display:flex;
    justify-content: space-between;
`

export const MenuBar = styled.button`
  border:solid 1px #ddd;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: .2em .4em;
  border-radius: 20px;
`
export const InputSearch = styled(Input)`
box-shadow: rgb(25 31 40 / 15%) 0px 1px 2px 0px;
`
export const HeaderSearchContainer = styled.div`

`