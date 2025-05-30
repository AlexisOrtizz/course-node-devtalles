import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {

  if( req.url === '/') {
    const indexHtml = fs.readFileSync('./public/index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtml);
    return;
  }

  if( req.url?.endsWith('.js') ) {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
  } else if( req.url?.endsWith('.css') ) {
    res.writeHead(200, { 'Content-Type': 'text/css' });
  }

  const fileContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
  res.end(fileContent);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});