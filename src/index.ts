import 'express-async-errors'
import express from 'express'
import { AppDataSource } from './data-source'
import { errorMiddleware } from './middlewares/error'
import routes from './routes'
import cors from 'cors';

AppDataSource.initialize().then(() => {
	const app = express()

	app.use(express.json())
	
	app.use(cors({
		methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
		origin: '*',		
		credentials: true,
		allowedHeaders: '*'
	}))

	app.use(routes)

	app.use(errorMiddleware)
	return app.listen(process.env.PORT)
})
