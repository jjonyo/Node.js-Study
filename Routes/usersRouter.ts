import express from 'express'
import { execPath } from 'process'
import {getUser} from '../Controller/userContoller'

const usersRouter = express.Router()

usersRouter.post('/:id',getUser)

export default usersRouter