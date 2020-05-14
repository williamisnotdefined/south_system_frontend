import styled from 'styled-components'

export const Input = styled.input`
    width: 100%;
    border-radius: 2px;
    background-color: transparent;
    font-weight: 600;
    outline: none;
    transition: border 0.4s ease-out, color 0.4s ease-out;
    border: 1px solid ${({ theme }) => theme.colors.brandGrey50};
    font-size: ${({ theme }) => theme.font.normal};
    padding: ${({ theme }) => `${theme.getSpace(2)}`};
    height: ${({ theme }) => `${theme.getSpace(6)}`};
    color: ${({ theme }) => theme.colors.brandGrey80};

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.brandGrey100};
        color: ${({ theme }) => theme.colors.brandGrey100};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.brandGrey50};
    }
`
