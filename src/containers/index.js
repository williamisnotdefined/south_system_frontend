import React from 'react'
import PropTypes from 'prop-types'

import { AuthProvider } from './Auth'

export default function ContextContainer({ children }) {
    return <AuthProvider>{children}</AuthProvider>
}

ContextContainer.propTypes = {
    children: PropTypes.node
}
