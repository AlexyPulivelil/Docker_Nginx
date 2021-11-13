const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, your server is working!')
})
app.listen(5000, () => console.log('Server is up and running'));