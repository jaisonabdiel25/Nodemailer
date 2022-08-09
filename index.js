require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

//CORS
app.use(cors());

//Parseo y lectura del body
app.use(express.json());

app.use('/api/mail', require('./routes/mail'));

app.listen(process.env.PORT, () => {
	console.log('Server on port ', process.env.PORT);
});
