import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.brandGrey50};
    padding: ${({ theme }) => theme.getSpace(4)};
    margin-bottom: ${({ theme }) => theme.getSpace(6)};
`

export const DragonLogo = styled.img`
    width: ${({ theme }) => theme.getSpace(10)};
    height: ${({ theme }) => theme.getSpace(10)};
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ListItem = styled.li`
    & + & {
        margin-left: ${({ theme }) => theme.getSpace(6)};
    }
`

export const Anchor = styled(NavLink)`
    position: relative;
    display: inline;
    color: ${({ theme }) => theme.colors.brandGrey100};
    font-size: ${({ theme }) => theme.font.normal};
    font-weight: 600;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: -6px;
        left: 0;
        background-color: ${({ theme }) => theme.colors.brandGrey100};
        transform-origin: bottom right;
        transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    }

    &:hover,
    &.active {
        &:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
`
