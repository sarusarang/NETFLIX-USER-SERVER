// importing JSON SERVER
const JsonServer = require ('json-server')

// creating json server using create method
const TEACHserver = JsonServer.create()

// connecting data resoures to server
const router = JsonServer.router('db.json')

// setting middleware
const middleware = JsonServer.defaults()

// setting port number
const PORT = 3000 | process.env.PORT


// using middleware to server
TEACHserver.use(middleware)


// using  resourse to server
TEACHserver.use(router)

// run command for server
TEACHserver.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT ${PORT}`);
})

