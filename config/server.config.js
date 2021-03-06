
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    port: process.env.port,
    db: process.env.mongo_url,
    secret: process.env.secret
}