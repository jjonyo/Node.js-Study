// 라우팅 연습
// 구조는 크게 루트, /users, /vidoes 로 나뉨. 각각 라우팅 해줄 것
// 파일로 나누어, 라우터를 import하여 사용할것 DEFINE을 이용할 것
import express from 'express'
import usersRouter from './Routes/usersRouter'
import videosRouter from './Routes/videosRouter'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/users', usersRouter)
app.use('/videos', videosRouter)

export default app
