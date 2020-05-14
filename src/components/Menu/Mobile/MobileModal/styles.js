import styled from 'styled-components'
import { List, ListItem } from '@components/Menu/styles'

export const Header = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.brandGrey50};
    margin-bottom: ${({ theme }) => theme.getSpace(4)};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.brandGrey50};
    font-size: ${({ theme }) => theme.font.big};
`

export const CloseAnchor = styled.a`
    color: ${({ theme }) => theme.colors.brandGrey50};
    font-size: ${({ theme }) => theme.font.normal};
    font-weight: 600;
    height: 14px;
    transition: color 0.4s ease-out;

    &:hover {
        color: ${({ theme }) => theme.colors.brandGrey100};
    }
`

export const ModalList = styled(List)`
    flex-direction: column;
    align-items: flex-start;
`

export const ModalListItem = styled(ListItem)`
    & + & {
        margin-left: 0px;
        margin-top: ${({ theme }) => theme.getSpace(2)};
    }
`
