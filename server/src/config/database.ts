import mongoose from 'mongoose';

mongoose.connect(process.env.HOST? process.env.HOST: "")
.then(db=> console.log('Database is connected'))
.catch(err => console.log(err))
