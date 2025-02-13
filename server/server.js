const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const App = require('../src/App').default;

const app = express();

app.use(express.static('dist'));

app.get('/*', (req, res) => {
  const entryPoint = ['/main.js'];

  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <title>My Hotel App</title>
              <link rel="stylesheet" href="/index.css">
            </head>
            <body>
              <div id="root">`);
        pipe(res);
        res.write(`</div>
              <script src="/index.js"></script>
            </body>
          </html>
        `);
      },
      onShellError(err) {
        res.statusCode = 500;
        res.send('<!doctype html><p>Loading...</p>');
        console.error(err);
      },
    }
  );
});

app.listen(3002, () => {
  console.log('App is running on http://localhost:3002');
});
