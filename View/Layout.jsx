const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="/stylesheets/normalize.css" /> */}
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous" />

        {/* <link rel="stylesheet" href="/stylesheets/application.css" /> */}

        {/* <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" /> */}
        <script defer src="/js/application.js" />
        <h1>ToDo List</h1>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
