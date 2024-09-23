const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/sobremi') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ nombre: 'Esteban Pantoja', edad: '22', pasatiempo: 'Jugar', ocupación: 'En el día trabajo, en la noche estudio' }));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
