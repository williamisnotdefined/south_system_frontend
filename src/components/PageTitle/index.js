import React from 'react'
import PropTypes from 'prop-types'

import { PageTitle as Title } from './styles'

const PageTitle = ({ children }) => <Title>{children}</Title>

PageTitle.propTypes = {
    children: PropTypes.node
}

export default PageTitle
