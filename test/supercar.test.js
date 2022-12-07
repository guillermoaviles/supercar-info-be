const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest(require('../index'))

describe('GET /model/:model/description', () => {
    it('should return a 200 response', done => {
        api
            .get('/model/c63/description')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(response.body).to.include({
                    model: "c63",
                    make: "Mercedes",
                    year: 2020,
                    mileage: 42444,
                    price: 75000
                })
            done()
            })
    })
})

describe('GET /mileage/:mileage', () => {
    it('should return a 200 response', done => {
        api
            .get('/mileage/42444')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(response.body).to.include({
                    model: "c63",
                    make: "Mercedes",
                    year: 2020,
                    mileage: 42444,
                    price: 75000
                })
            done()
            })
    })
})

describe('GET /price/:price', () => {
    it('should return a 200 response', done => {
        api
            .get('/price/75000')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(response.body).to.include({
                    model: "c63",
                    make: "Mercedes",
                    year: 2020,
                    mileage: 42444,
                    price: 75000
                })
            done()
            })
    })
})
