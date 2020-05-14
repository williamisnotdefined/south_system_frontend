import styled from 'styled-components'
import PropTypes from 'prop-types'

import { absoluteFill } from '@styles/mixins'

import { Input } from '@components/Input/styles'
import { Container as LoaderContainer, Spinner as LoaderSpiner } from '@components/Loader/styles'

export const Form = styled.form`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: ${({ theme }) => theme.getSpace(80)};

    ${Input} {
        margin-bottom: ${({ theme }) => theme.getSpace(2)};
    }
`

export const Button = styled.button.attrs(props => ({
    type: props.type
}))`
    width: auto;
    border: 0;
    transition: background-color 0.4s ease-out;
    position: relative;
    outline: none;
    padding: ${({ theme }) => theme.getSpace(1)} ${({ theme }) => theme.getSpace(2)};
    background-color: ${({ theme }) => theme.colors.brandGrey80};
    color: ${({ theme }) => theme.colors.white};
    cursor: ${({ loading }) => (loading ? 'auto' : 'pointer')};
    pointer-events: ${({ loading }) => (loading ? 'none' : 'auto')};

    &:hover {
        background-color: ${({ theme }) => theme.colors.brandGrey100};
    }

    ${LoaderContainer} {
        ${absoluteFill};
        display: flex;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.5);

        ${LoaderSpiner} {
            margin: auto;
        }
    }
`

Button.propTypes = {
    loading: PropTypes.bool
}

Button.defaultProps = {
    type: 'submit'
}
