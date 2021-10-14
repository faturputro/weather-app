const express = require('express');
const serverStatic = require('serve-static');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use('/', serverStatic(path.join(__dirname, '/dist')));

app.use('/.*/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
