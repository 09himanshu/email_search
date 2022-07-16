

const controller = require('../controllers/outbox.controller');
const {verifyJwt} = require('../middleware');

module.exports =(app) => {
    app.post('/api/v1/outbox', [verifyJwt.jwtToken], controller.create); 
}