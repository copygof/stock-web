import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import store from '../store/store'

const isAuthenticated = () => {
   return store.getState().auth.isAuthenticated
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isAuthenticated() ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: {from: props.location}
                }}/>
            )
        )}/>
    )
}

export default AuthenticatedRoute