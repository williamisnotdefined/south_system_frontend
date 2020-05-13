import styled from 'styled-components'

export const HamburgerLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.brandGrey100};
    box-sizing: border-box;
    position: relative;

    &:before,
    &:after {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.brandGrey100};
        transition: transform 0.4s ease-out;
    }

    &:before {
        top: 10px;
    }

    &:after {
        bottom: 10px;
    }
`

export const HamburgerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: ${({ theme }) => theme.getSpace(6)};
    height: ${({ theme }) => theme.getSpace(6)};
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.brandGrey100};

    &:hover {
        ${HamburgerLine} {
            &:before {
                transform: translateY(2px);
            }

            &:after {
                transform: translateY(-2px);
            }
        }
    }
`
