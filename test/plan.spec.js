/* var app = require('../app');
var cfg = require('config');
var chai = require('chai');
var chaiHttp = require('chai-http');
let should = chai.should();
var tcfg = require('../config/test.json');

chai.use(chaiHttp);
describe('Test for unplanned orders Mocha `Testing', () => {
    describe('Unplanned orders list test', () => {
        it('Unplanned orders list - Postive', function (done) {
            chai.request(app)
                .get('/api/plan/orders?from=1&size=10')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Success');
                    //res.body.should.have.property('bearer');
                    done();
                });
        });
    });
});
 */