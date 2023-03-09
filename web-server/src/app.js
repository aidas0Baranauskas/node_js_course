import express from 'express'
import path from 'path'

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Godking John'
	})
})d

app.get('/about', (req, res) => {
	res.render('about')
})

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'moody',
		location: 'moodtown'
	})
})
app.listen(3000, () => {
	console.log('Server is up on port 3000')
})