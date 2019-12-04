import {Server} from './server/server'
import {usersRouter} from './users/users.router'
import {restaurantsRouter} from './restaurants/restaurants.router'
import {pedidosRouter} from './pedidos/pedidos.router'

const server = new Server()
server.bootstrap([
    usersRouter, 
    restaurantsRouter,
    pedidosRouter
]).then(server=>{
    console.log('Server is listening on:', server.application.address())
}).catch(error=>{
    console.log('Sever failed to start')
    console.log(error)
    process.exit(1)
})

