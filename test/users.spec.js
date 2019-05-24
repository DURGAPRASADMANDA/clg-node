/* var app = require('../app');
var cfg = require('config');
var chai = require('chai');
var chaiHttp = require('chai-http');
let should = chai.should();
var tcfg = require('../config/test.json');

chai.use(chaiHttp);
describe('To Users Mocha `Testing', () => {
    describe('User Login test', () => {
        it('User Login - Postive', function (done) {
            let obj = {
                "userId": tcfg.userId,
                "password": tcfg.password
            }
            chai.request(app)
                .post('/api/user/login').set('Authorization', tcfg.validToken)
                .send(obj)
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('login_success');
                    res.body.should.have.property('bearer');
                    done();
                });
        });
    });
});
 */
