const express = require('express')
const cors = require('cors')
class Server {

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.userspath='/api/users';

        // Middlewares
        this.middleWares();
        // Routes
        this.routes();
    }

    middleWares(){
        // Public directory
        this.app.use(express.static('public'))
        // CORS
        this.app.use(cors())

        // Parse and read body
        this.app.use(express.json())
    }

    routes(){
        
      this.app.use(this.userspath,require ('../routes/user'))

    }
    listen(){
    
        this.app.listen(this.port, () => {
            console.log('Example app listening on port '+this.port)
          })
    }
}
module.exports = Server