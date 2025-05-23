import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Route to fetch quiz data from the S3 bucket
app.get('/quiz', async (req, res) => {
	try {
		const response = await axios.get(
			'https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json'
		)
		res.json(response.data)
	} catch (error) {
		console.error('Error fetching quiz data:', error)
		res.status(500).json({ error: 'Failed to fetch quiz data' })
	}
})

// Root route for API health check
app.get('/', (req, res) => {
	res.json({ message: 'Quiz API is running!' })
})

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
