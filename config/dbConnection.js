const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.connect(process.env.MONGOD_CONNECT_URI)
        .then(res => console.log('database connected successfully'))
        .catch(err => console.log(err))
}

module.exports = dbConnection;