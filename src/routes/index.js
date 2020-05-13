import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import Loader from '@components/Loader'

import PrivateRoute from './PrivateRoute'

const lazyDefault = page => lazy(() => import('../pages/' + page))

const Routes = () => (
    <Switch>
        <Suspense fallback={<Loader />}>
            <PrivateRoute exact path="/" component={lazyDefault('DragonList')} />
            <PrivateRoute exact path="/dragon/:id" component={lazyDefault('Dragon')} />
            <PrivateRoute exact path="/new" component={lazyDefault('Dragon')} />
            <Route exact path="/login" component={lazyDefault('Login')} />
        </Suspense>
    </Switch>
)

export default Routes
