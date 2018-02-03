import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
// Route with Authentication
import AuthenticatedRoute from './AuthenticatedRoute'
// Wrapper Layout
import DashboardLayout from '../components/common/layout/DashboardLayout'
import NotFound from '../components/error/NotFound'

import LoginForm from '../containers/auth/LoginContainer'
import Dashboard from '../containers/dashboard/DashboardContainer'
import Customer from '../containers/customer/CustomerContainer'
import Product from '../containers/product/ProductContainer'

export const history = createHistory()

const Router = () => (
	<ConnectedRouter history={history}>
		<Switch>
			<Route exact path="/" component={LoginForm}/>
			<DashboardLayout>
				<Switch>
					<AuthenticatedRoute path="/dashboard" component={Dashboard}/>
					<AuthenticatedRoute path="/customer" component={Customer}/>
					<AuthenticatedRoute path="/product" component={Product}/>
				</Switch>
			</DashboardLayout>
			<Route component={NotFound}/>
		</Switch>
	</ConnectedRouter>
)

export default Router
