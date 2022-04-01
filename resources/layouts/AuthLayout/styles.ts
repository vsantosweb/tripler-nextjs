import styled from "@emotion/styled";

export const AuthContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px){
    background-color: ${({ theme }: any) => theme.colors.primary[50]};
    justify-content: center;
  }
`;

export const AuthWrapper = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }: any) => theme.defaultContainer.spacing};
  background-color: #fff;
  border-radius: 10px;

`;

export const AuthHeader = styled.header`
  display: flex;
  /* border-bottom: solid 1px #ddd; */
  padding: ${({ theme }: any) => theme.defaultContainer.spacing};
`;
export const AuthFooter = styled.footer`
  padding: ${({ theme }: any) => theme.defaultContainer.spacing} 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
