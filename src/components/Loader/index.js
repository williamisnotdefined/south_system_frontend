import React from 'react'
import PropTypes from 'prop-types'

import { Spinner, Container } from './styles'

const Loader = ({ size }) => (
    <Container>
        <Spinner size={size} />
    </Container>
)

Loader.propTypes = {
    size: PropTypes.string
}

export default Loader
