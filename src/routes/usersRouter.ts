import express from 'express'
import {getUserProfile, postUserProfile} from '../controller/userContoller'
import {uploadProfileImage} from '../../middleware'

const usersRouter = express.Router()

usersRouter.get('/profile/:id', getUserProfile)
usersRouter.post('/profile/:id', uploadProfileImage, postUserProfile)

export default usersRouter 