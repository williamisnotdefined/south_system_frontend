import styled from 'styled-components'

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.brandGrey50};
    padding: ${({ theme }) => theme.getSpace(4)};
`

export const DragonLogo = styled.img`
    width: ${({ theme }) => theme.getSpace(10)};
    height: ${({ theme }) => theme.getSpace(10)};
`

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MenuListItem = styled.li`
    position: relative;
    display: inline;

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

    &:hover {
        &:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }

    & + & {
        margin-left: ${({ theme }) => theme.getSpace(6)};
    }
`
