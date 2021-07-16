import express from 'express'
import { getVideo } from '../controller/videoController';

const videosRouter = express.Router()

videosRouter.get('/:id',getVideo)
export default videosRouter;