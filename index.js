const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors()); // Allow requests from Angular

// Serve images statically
app.use('/assets', express.static(path.join(__dirname, 'images')));

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
