const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/old-page') {
        res.writeHead(301, { 'Location': '/new-page' });
        res.end();
      } else if (req.url === '/_github') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Este es mi repositorio: https://github.com/EstP19/Programaci-n_backend/tree/main/clase01');
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Página no encontrada');
      }});
      const port = 3000;
server.listen(port, () => {

    console.log(`El servidor está escuchando en http://localhost:${port}`
    );
});