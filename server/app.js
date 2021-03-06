import path from 'path'
import app from './config/express'
import routes from './routes'
// import swagger from './config/swagger'
// import * as errorHandler from './middlewares/errorHandler'
// import joiErrorHandler from './middlewares/joiErrorHandler'

// enable webpack hot module replacement in development mode
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack/webpack.config.dev'

// app.use(require('webpack-dev-middleware')(compiler, {
// noInfo: true,
// publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler, {
// log: console.log,
// path: '/__webpack_hmr',
// heartbeat: 10 * 1000
// }));


if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
}
// TODO Please Delete it when production
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

// Swagger API documentation
// app.get('/swagger.json', (req, res) => {
//    res.json(swagger);
// });

// Landing page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Router
app.use('/api', routes);

// Joi Error Handler
// app.use(joiErrorHandler);

// Error Handler
// app.use(errorHandler.notFoundErrorHandler);
// app.use(errorHandler.errorHandler);

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

export default app