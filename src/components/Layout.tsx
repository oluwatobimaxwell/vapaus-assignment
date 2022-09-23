import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

type Props = {
    title: string;
    children: ReactNode;
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <Wrapper>
        <CenterBox>
            <LogoWrapper>
                <Logo src={require("../assets/imgs/Logo.svg").default} alt="Logo"  />
            </LogoWrapper>
            <FormArea>
                <Title>{title}</Title>
                {children}
            </FormArea>
        </CenterBox>
    </Wrapper>
  )
}

export default Layout;

const LogoWrapper = styled.div`
    margin: auto;
    width: max-content;
    margin-bottom: 10px;
`;

const Title = styled.h2`
    text-align: left;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const Logo = styled.img`
    height: 54px;
`;

const Wrapper = styled.div`
    background: ${colors.cloud};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CenterBox = styled.div`
    width: 360px;
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(221, 230, 229, 0.5);
    border-radius: 8px;
    padding: 40.52px 30px 40.52px 30px;
`;

const FormArea = styled.div`
    width: 100%;
`;