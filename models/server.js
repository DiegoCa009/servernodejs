const path = require('path')
const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.router();
        this.port = 8080;
        
    }
    middelware(){
        this.app.use('/images', express.static(path.join(__dirname, 'images')))
        this.app.use(express.json());
    }

    router(){
        this.app.use( cors() )
        this.app.use( '/api' , require('../routes/user'))

    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('listening in 8080')
        })

    }
}


module.exports = Server;
