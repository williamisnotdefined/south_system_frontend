import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { removeUser } from '@helpers/auth'
import Loader from '@components/Loader'

import PrivateRoute from './PrivateRoute'

const lazyDefault = page => lazy(() => import(`@pages/${page}/index`))

const Routes = () => (
    <Switch>
        <Suspense fallback={<Loader />}>
            <PrivateRoute exact path="/" component={lazyDefault('DragonList')} />
            <PrivateRoute exact path="/dragon/:id" component={lazyDefault('Dragon')} />
            <PrivateRoute exact path="/new" component={lazyDefault('Dragon')} />
            <Route exact path="/login" component={lazyDefault('Login')} />
            <Route
                exact
                path="/logout"
                component={() => {
                    removeUser()
                    return <Redirect to="/login" />
                }}
            />
        </Suspense>
    </Switch>
)

export default Routes
