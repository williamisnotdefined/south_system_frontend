import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    max-width: ${({ theme }) => theme.getSpace(100)};
    margin: auto;
`
