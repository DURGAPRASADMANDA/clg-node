const app = require('../app');
const cfg = require('config');
const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
const tcfg = require('../config/test.json');

chai.use(chaiHttp);
describe('Test for Settings list Mocha `Testing', () => {
    it('Client list - Postive', function (done) {
        let url = '/api/clients?from=1&size=10';
        chai.request(app)
            .get(url)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                //res.body.should.have.property('bearer');
                done();
            });
    });
    it('States list - Postive', function (done) {
        let url = '/api/states?from=1&size=10';
        chai.request(app)
            .get(url)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Success');
                //res.body.should.have.property('bearer');
                done();
            });
    });
});