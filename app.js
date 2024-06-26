import http from 'http';

const PORT = 8080;
const server = http.createServer((req, res) => { 
  res.end('Hello world!');
});

 server.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`)
  })
 