import React from 'react'
import PropTypes from 'prop-types'

import { theme } from '@styles'
import Loader from '@components/Loader'

import { Form as FormStyle, Submit as SubmitStyle } from './styles'

const Form = ({ children, ...props }) => {
    return <FormStyle {...props}>{children}</FormStyle>
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
        .isRequired
}

const Submit = ({ loading, children }) => (
    <SubmitStyle>
        {children}
        {loading && <Loader size={theme.getSpace(3)} />}
    </SubmitStyle>
)

Submit.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node
}

export { Form, Submit }
