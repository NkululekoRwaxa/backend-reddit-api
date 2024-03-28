import express  from "express";
import routes from './routes.js'
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import dotenv from 'dotenv'

// connect to db
dotenv.config()
mongoose.connect(process.env.REDDITAPI_DB_URI)

const app  = express();
app.use(bodyParser.json())
app.use('/api', routes)

export default app