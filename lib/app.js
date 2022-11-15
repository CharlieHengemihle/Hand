const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/dwarves', require('./controllers/dwarves'));
app.use('/elves', require('./controllers/elves'));
app.use('/humans', require('./controllers/humans'));
app.use('/cryptids', require('./controllers/cryptids'));
app.use('/goblins', require('./controllers/goblins'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
