import express from 'express'

interface USER{
	[id : string] : {
		name : string,
		profileImageKey : any
	}
}

const USER_DB : USER = {
	1: {
	  name : 'jonghyuk',
	  profileImageKey: undefined,
	},
	2: {
	  name: 'sohyun',
	  profileImageKey: undefined,
	},
  }
  

export const getUser = (req : express.Request, res : express.Response) => {
	const {id}  = req.params
	res.send(`get Users ${id}`)
}

export const getUserProfile = (req : express.Request, res : express.Response) => {
	const id : string = req.params.id
	const user = USER_DB[id]
	res.render('userProfile',{
		name : user.name,
		userId : id,
		profileImageKey : `/uploads/${user.profileImageKey}`
	})
} 
export const postUserProfile = (req : express.Request, res : express.Response) => {
	const id : string = req.params.id
	if (req.file === undefined)
		res.redirect(`/`)
	else{
	USER_DB[id].profileImageKey = req.file.filename
	res.redirect(`/`)
	}
}