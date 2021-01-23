const { createServer } = require('vite')

const PORT = 3001
let server

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: `http://localhost:${PORT}`,
      show: false, // flip to true and you get to see the browser
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  async bootstrap() {
    server = await createServer({
      server: {
        port: PORT,
      },
    })
    await server.listen()
  },
  async teardown() {
    await server.close()
  },
  name: 'vite-project',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
