const db = require('../data/dbConfig');
const request = require('supertest')
const server = require('./server')
const Jokes = require('./jokes/jokes-model')

// Write your tests here
test('sanity', () => {
  expect(true).not.toBe(false)
})

test('[1] login if username exists', () => {
  let result = request(server).post('/login')
  expect(result.status).toBe(200)
})  

test('[2] login if username does not exist', () => {
  let result = request(server).post('/login')
  expect(result.status).toBe(401)
})  




