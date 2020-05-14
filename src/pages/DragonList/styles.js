import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    max-width: ${({ theme }) => theme.getSpace(100)};
    margin: auto;
`

export const ListWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    margin-top: ${({ theme }) => theme.getSpace(-2)}; /* to fix margin-top in all DragonsCard :) */
`

export const LoaderWrapper = styled.div`
    width: ${({ theme }) => theme.getSpace(4)};
    margin: auto;
`
