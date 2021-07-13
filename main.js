// @ts-check
const http = require('http')

const server = http.createServer((req, res) => {
  const POST_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_])+$/
  const regexResult = (req.url && POST_ID_REGEX.exec(req.url)) || undefined

  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('[GET]posts')
  } else if (regexResult) {
    const postId = regexResult[1]
    res.statusCode = 200
    res.end(`[GET]posts/${postId}`)
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('[POST]posts')
  } else {
    res.statusCode = 404
    res.end('Not Found')
  }
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server Running On Port : ${PORT}`)
})
