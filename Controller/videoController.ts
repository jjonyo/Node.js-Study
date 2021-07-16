import express from 'express'

export const getVideo = (req : express.Request, res : express.Response) => {
	const {id} = req.params
	res.send(`GET VIDEO ${id}`)
}