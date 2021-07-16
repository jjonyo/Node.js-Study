import express, { Request } from 'express'

export const getUser = (req : express.Request, res : express.Response) => {
	const {id}  = req.params
	res.send(`get Users ${id}`)
}