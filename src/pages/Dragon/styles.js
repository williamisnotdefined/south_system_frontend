import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    max-width: ${({ theme }) => theme.getSpace(100)};
    margin: auto;
`

export const LoaderWrapper = styled.div`
    width: ${({ theme }) => theme.getSpace(4)};
    margin: auto;
`
