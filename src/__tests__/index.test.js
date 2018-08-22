const getRandomExcuse = require('../')

test('should get a random excuse', () => {
  expect(getRandomExcuse).toBeDefined()
  expect(typeof getRandomExcuse()).toBe('string')
})

test('should have custom lead', () => {
  expect(getRandomExcuse).toBeDefined()
  expect(getRandomExcuse({leads: "I'm working remotely today"})).toContain("I'm working remotely today")
})
