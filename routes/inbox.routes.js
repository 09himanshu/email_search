
const controller = require('../controllers/inbox.controller');
const {verifyJwt} = require('../middleware');

module.exports =(app) => {
    app.post('/api/v1/mail', [verifyJwt.jwtToken], controller.create);


}