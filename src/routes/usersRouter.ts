import express from 'express'
import {getUser} from '../controller/userContoller'

const usersRouter = express.Router()

usersRouter.get('/:id',getUser)

export default usersRouter