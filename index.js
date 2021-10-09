const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
