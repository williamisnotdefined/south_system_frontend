import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 2px solid black;
    background: transparent;
    width: ${({ theme }) => `${theme.getSpace(4)}`};
    height: ${({ theme }) => `${theme.getSpace(4)}`};
    border-radius: 50%;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
`
