// 라우팅 연습
// 구조는 크게 루트, /users, /vidoes 로 나뉨. 각각 라우팅 해줄 것
// 파일로 나누어, 라우터를 import하여 사용할것 DEFINE을 이용할 것
import express from 'express'
import usersRouter from './routes/usersRouter'
import videosRouter from './routes/videosRouter'

class App{
	public app : express.Application
	
	constructor(){
		this.app  = express()
		this.setViewEngine()
		this.setMiddleWare()
		this.setStatic()
		this.getRouting()
	}

	setViewEngine(){
		this.app.set('view engine', 'pug')
		this.app.set('views', 'src/views')
	}

	setMiddleWare(){
		this.app.use(express.json())
		this.app.use(express.urlencoded({extended : false}))
	}

	setStatic(){
		this.app.use('/public',express.static('src/public'))
		this.app.use('/uploads',express.static('uploads'))
	}

	getRouting(){
		this.app.get('/', (req,res) => res.render('index'))
		this.app.use('/users', usersRouter)
		this.app.use('/videos', videosRouter)
	}
}

export default new App().app