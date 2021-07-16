// 라우팅 연습
// 구조는 크게 루트, /users, /vidoes 로 나뉨. 각각 라우팅 해줄 것
// 파일로 나누어, 라우터를 import하여 사용할것 DEFINE을 이용할 것
import express from 'express'
import usersRouter from './routes/usersRouter'
import videosRouter from './routes/videosRouter'

const app = express()

app.set('views', 'src/views')
app.set('view engine', 'pug')
app.use('/public',express.static('src/public'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get('/', (req,res) => res.render('index'))
app.use('/users', usersRouter)
app.use('/videos', videosRouter)

export default app