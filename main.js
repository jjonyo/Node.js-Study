// @ts-check
const http = require('http')

const posts = [
  {
    id: '1',
    title: 'first',
    content: 'first content',
  },
  {
    id: '2',
    title: 'second',
    content: 'second content',
  },
  {
    id: '3',
    title: 'third',
    content: 'third content',
  },
]
const server = http.createServer((req, res) => {
  const POST_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_])+$/
  const regexResult = (req.url && POST_ID_REGEX.exec(req.url)) || undefined

  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalLength: posts.length,
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify(result))
  } else if (regexResult && req.method === 'GET') {
    const postId = regexResult[1]
    const post = posts.find((_post) => _post.id === postId)
    if (post) {
      req.statusCode = 200
      res.end(JSON.stringify(post))
    } else {
      res.statusCode = 404
      res.end('Not found')
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8')
    req.on('data', (data) => {
      const reqBody = JSON.parse(data)
      posts.push({
        id: reqBody.title,
        title: reqBody.title,
        content: reqBody.content,
      })
    })
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
