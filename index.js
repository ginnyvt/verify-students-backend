const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello');
});

app.get('/access_token', async (req, res) => {
	const code = req.query.code;
	try {
		const { data } = await axios({
			method: 'POST',
			headers: {
				accept: 'application/json',
			},
			url: `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`,
		});

		if (data.hasOwnProperty('access_token')) {
			res.status(200).json({
				message: 'OK',
				token: data.access_token,
			});
		} else {
			res.status(400).json({
				message: data.error_description,
			});
		}
	} catch (error) {
		res.status(500).send('Something goes wrong!');
	}
});

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
