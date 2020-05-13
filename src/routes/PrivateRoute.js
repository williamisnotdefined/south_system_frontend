import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '@helpers/auth'

import * as toastify from '@services/toastify'

const redirectAlert = prop => {
    toastify.error('Access denied.', 3000)

    return <Redirect to={{ pathname: '/login', state: { from: prop.location } }} />
}

const PrivateRoute = ({ component: Component, ...props }) => (
    <Route
        {...props}
        render={prop => (isAuthenticated() ? <Component {...prop} /> : redirectAlert(prop))}
    />
)

export default PrivateRoute
