import React from 'react'
import PropTypes from 'prop-types'

import { AuthProvider } from './Auth'
import { DragonsProvider } from './Dragons'

export default function ContextContainer({ children }) {
    return (
        <AuthProvider>
            <DragonsProvider>{children}</DragonsProvider>
        </AuthProvider>
    )
}

ContextContainer.propTypes = {
    children: PropTypes.node
}
