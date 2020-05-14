import React from 'react'
import PropTypes from 'prop-types'

import { Input as InputComponent } from './styles'

const Input = props => {
    return <InputComponent {...props} autoComplete="off" />
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string
}

Input.defaultProps = {
    type: 'text'
}

export default Input
