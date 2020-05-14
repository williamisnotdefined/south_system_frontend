import styled from 'styled-components'

export const DragonCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    transition: border 0.4s ease-out;
    position: relative;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.brandBlue20};
    border: 1px solid ${({ theme }) => theme.colors.brandBlue50};
    padding: ${({ theme }) => theme.getSpace(2)};
    margin-top: ${({ theme }) => theme.getSpace(2)};

    @media (max-width: 900px) {
        width: 45%;
    }

    @media (max-width: 720px) {
        width: 100%;
    }

    :hover {
        border: 1px solid ${({ theme }) => theme.colors.brandBlue80};
    }
`

export const DragonImage = styled.img`
    width: ${({ theme }) => theme.getSpace(10)};
    height: ${({ theme }) => theme.getSpace(10)};
    margin: auto;
    margin-bottom: ${({ theme }) => theme.getSpace(2)};
`

export const Name = styled.p`
    font-size: ${({ theme }) => theme.font.normal};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.getSpace(1)};
`

export const Type = styled.p`
    font-size: ${({ theme }) => theme.font.small};
`

export const DeleteButton = styled.button`
    background-color: transparent;
    font-weight: 600;
    position: absolute;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.colors.brandGrey100};
    padding: ${({ theme }) => theme.getSpace(1)};
    top: ${({ theme }) => theme.getSpace(1)};
    right: ${({ theme }) => theme.getSpace(1)};

    :hover {
        background-color: transparent;
        transform: scale(1.2);
    }
`
