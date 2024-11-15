// server.js
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
