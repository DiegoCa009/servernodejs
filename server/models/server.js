require('dotenv').config()
require('colors')

const path = require('path')
const express = require('express');
const cors = require('cors');
const { connectDB } = require('../database/connect');

class Server{
    constructor(){
        this.port = 8080;
        this.userPath = '/user';
        this.authPath = '/auth';
        this.app = express();
        this.dataBase();
        this.middelware();
        this.router();
    }

    async dataBase(){
        connectDB()
    }

    middelware(){
        this.app.use('/images', express.static(path.join(__dirname, 'images')))
        this.app.use(express.json());
    }

    router(){
        this.app.use( cors() )
        this.app.use( this.authPath , require('../routes/auth'))
        this.app.use( this.userPath , require('../routes/user'))

    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('listening in 8080'.green)
        })

    }
}


module.exports = Server;
