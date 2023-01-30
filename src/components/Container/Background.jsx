import styled from 'styled-components';
import img from '../../img/back.jpg';

export const Background = styled.div`
  position: relative;
  padding: 40px;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: url(${img});
    background-size: contain;
    opacity: 0.2;
    z-index: -1;
  }
`;
