import styled from "@emotion/styled";

export const AuthContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }: any) => theme.defaultContainer.spacing};
`;

export const AuthContent = styled.div`
  width: 380px;

`
export const AuthHeader = styled.header`
  display: flex;
  border-bottom: solid 1px #ddd;
  padding: ${({ theme }: any) => theme.defaultContainer.spacing};
`;
export const AuthFooter = styled.footer`
  padding: ${({ theme }: any) => theme.defaultContainer.spacing} 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
