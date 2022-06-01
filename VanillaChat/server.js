const http = require('http')
const httpPort = 3000

const httpServer = http.createServer((req, res)=> {
  res.write('hello there')
  res.end()
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
