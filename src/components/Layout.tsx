import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

type Props = {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default Layout;


const Wrapper = styled.div`
    background: ${colors.cloud};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-items: center;
`;