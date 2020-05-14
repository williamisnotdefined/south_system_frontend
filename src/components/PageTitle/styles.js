import styled from 'styled-components'

export const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.font.xbig};
    color: ${({ theme }) => theme.colors.brandGrey100};
    margin-bottom: ${({ theme }) => theme.getSpace(5)};
`
