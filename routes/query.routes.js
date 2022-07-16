

const controller = require('../controllers/query.controller');
const {verifyJwt} = require('../middleware');

module.exports =(app) => {
    app.get('/api/v1/mail/search', [verifyJwt.jwtToken], controller.search);

    app.delete('/api/v1/delete/:id', [verifyJwt.jwtToken], controller.delete);
}