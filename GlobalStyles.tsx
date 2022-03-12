import { css } from "@emotion/react";
import styled from "@emotion/styled";

const GlobalStyles = css`
  body,
  html, #__next {
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important;
  }
  *:focus {
    outline: none !important;
  }
  .slideNav {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: none;
    border: solid 1px;
    outline: none;
    box-shadow: none;
    margin-bottom: 0;
    margin-right: 0.4em;
    &:focus {
      outline: none;
    }
  }
`;
export const ViewPort = styled.main`
  max-width: ${({ theme }: any) => theme.defaultContainer.width};
  height: 100%;
`;
export default GlobalStyles;
