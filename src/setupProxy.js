const { createProxyMiddleware } = require("http-proxy-middleware");
const AES = require("crypto-js/aes");

function genNe1(id) {
  return AES.encrypt("/api/resource?id=" + id, "" + id).toString();
}

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://yyets.dmesg.app",
      changeOrigin: true,
      onProxyReq(proxyReq, req, res) {
        const id = req.query.id;

        proxyReq.setHeader("Referer", "https://yyets.dmesg.app/" + req.url);
        id && proxyReq.setHeader("ne1", genNe1(id));
      },
    })
  );
};