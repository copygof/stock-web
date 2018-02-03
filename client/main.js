import './config/axios'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import {blueGrey} from 'material-ui/colors'
import {AppContainer} from 'react-hot-loader'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Spinner from 'react-spinkit'
// Import custom components
import './main.css'
import { store, persistor }  from './store/store'
import MainRouter from './routers/routes'

const mountNode = document.getElementById('root')

const theme = createMuiTheme({
    palette: {
        primary: blueGrey
    }
})

const renderApp = () => {
    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={<Spinner name='double-bounce' />} persistor={persistor}>
                    <MainRouter />
                </PersistGate>
            </Provider>
        </MuiThemeProvider>,
        mountNode
    );
};

renderApp()

// Hot Module Replacement of react components
if (module.hot) {
    module.hot.accept('./routers/routes', () => {
        const HotMainRouter = require('./routers/routes').default
        ReactDOM.render(
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <PersistGate loading={<Spinner name='double-bounce' />} persistor={persistor}>
                        <HotMainRouter />
                    </PersistGate>
                </Provider>
            </MuiThemeProvider>,
            mountNode
        );
    })
}