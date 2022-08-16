import dotenv from 'dotenv';

const cors = require ('cors');

dotenv.config();

import app from './app';

import './config/database';

const corsOptions ={
   exposedHeaders: 'auth-token'
}

app.use(cors(corsOptions))

const main =()=>{
    app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();

