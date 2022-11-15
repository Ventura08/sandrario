import express, { Express } from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import dotenv from 'dotenv'
import cors from 'cors'
import ProfessorRoutes from './routes/ProfessorRoutes'
import DisciplinaRoutes from './routes/DisciplinaRoutes'
import TurmaRoutes from './routes/TurmaRoutes'
import AgendamentoRoutes from './routes/AgendamentoRoutes'

dotenv.config()

const PORT = process.env.PORT ?? 3000
const app: Express = express()

app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

ProfessorRoutes(app)
DisciplinaRoutes(app)
TurmaRoutes(app)
AgendamentoRoutes(app)

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`))
