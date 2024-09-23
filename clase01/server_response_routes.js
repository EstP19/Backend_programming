const http = require('http'); //Importar el módulo http

//Crear un servidor
const server = http.createServer((req, res) => {
    // Establecer el código de estado y el tipo de contenido de la respuesta
    // Enviar la respuesta
    if (req.url === '/algox') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hola, recién empiezo a comprender esto, capaz sea tarde pero bueno, con constancia se logra grandes objetivos');
    
    }  else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error 404 página no encontrada');
    }


});

// Asignar un puerto y hacer que el servidor escuche en ese puerto
const port = 3000;
server.listen(port, () => {

    console.log(`El servidor está escuchando en http://localhost:${port}`
    );
});