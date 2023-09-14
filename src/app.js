const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for your Angular app's domain
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://daeesmsilk2:8443');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  

// Your route handling code here...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




