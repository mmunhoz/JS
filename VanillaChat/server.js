const http = require('http')
const httpPort = 3000

const fs = require('fs')

const httpServer = http.createServer((req, res)=> {
  
  fs.readFile('front/index.html', (error, data)=> {
    if(error) {
      res.writeHead(500, { 'Content-Type': 'app/json' })
      res.write({ error: 'an error ocurred'})
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
    }
    res.end()
  })
  // res.write('hello there')
  // res.end()
})

httpServer.on('listening', ()=> { console.log('Server listening on: ' + httpPort) })

httpServer.on('error', ()=> {
  switch (error.code) {
    case 'EACCES':
      console.error('error: access not authorized')
      process.exit(1)
    case 'EADDRINUSE':
      console.error('error: address in use')
      process.exit(1)
    default:
      throw error
  }
})

httpServer.listen(httpPort)
