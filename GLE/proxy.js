
const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
});

module.exports = apiProxy;
