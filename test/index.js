const chai = require('chai')
const chaiHttp = require('chai-http')
const {after, before, describe, it} = require('mocha')

const server = require('../build/main').default

chai.use(chaiHttp)
chai.should()

describe('Testing unit 1', () => {
  before(done => {
    // Do something here before test
    done()
  })

  describe('GET /', () => {
    it('it should have message OK', done => {
      chai
        .request(server)
        .get('/')
        .end((e, res) => {
          res.should.have.status(200)
          res.body.should.have.property('message').eql('OK')
          done()
        })
    })
  })

  after(done => {
    // Do something here after test
    done()
  })
})
