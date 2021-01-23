Feature('site')

Scenario('test something', ({ I }) => {
  I.amOnPage('/')
  I.see('Vite')
  I.see('count is: 0')
  I.click('button')
  I.see('count is: 1')
})
