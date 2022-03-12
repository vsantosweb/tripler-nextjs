import styled from "@emotion/styled";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Link from "next/link";

export const Navigation = styled.div`
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.primary};
  position: fixed;
  width: 100%;
  color: #fff;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.span``;

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 60px;
  padding: ${({ theme }: any) => theme.defaultContainer.spacing};
`;

export const Navbar = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 10px;
  padding: ${({ theme }: any) => theme.defaultContainer.spacing};
`;
export const NavbarItem = styled.li`
  font-size: 1.2em;
  display: flex;
  gap: 12px;
  align-items: center;
  
`;

export const NavbarItemLink = styled(Link)`
  font-size: 1.2em;
`;

export const NavbarDropdown = styled(AccordionItem)`
  border: none;
  display: flex;
  flex-direction: column;

`;

export const NavbarItemDropdownButton = styled(AccordionButton)`
  padding: 0;
  font-size: 1.2em;
  display: flex;
  gap: 12px;
  outline: none !important;
  box-shadow: none !important;

  ${({ level }) =>
    level === "children"
      ? `text-transform: uppercase;
        font-size: .9em;
        color: #dddddd88;
  }
       `
      : "text-transform: normal"}
`;
