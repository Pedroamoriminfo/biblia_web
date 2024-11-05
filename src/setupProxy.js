const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/biblia',
        createProxyMiddleware({
            target: 'https://eutenho.com.br',
            changeOrigin: true,
        })
    );
};