import React from 'react'
import PropTypes from 'prop-types'

import { theme } from '@styles'
import Loader from '@components/Loader'

import { Form as FormStyle, Button as ButtonStyle } from './styles'

const Form = ({ children, ...props }) => {
    return <FormStyle {...props}>{children}</FormStyle>
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

const Button = ({ loading, children }) => (
    <ButtonStyle>
        {children}
        {loading && <Loader size={theme.getSpace(3)} />}
    </ButtonStyle>
)

Button.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node
}

export { Form, Button }
