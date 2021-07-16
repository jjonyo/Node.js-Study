import express from 'express'

export const getUser = (req : express.Request, res : express.Response) => {
	const {id} = req.params
	res.send(`get Users ${id}`)
}