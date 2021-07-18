import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
dotenv.config()

const uri = `mongodb+srv://jonyo:${process.env.MONGO_PASSWORD}@cluster0.1kuyq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const client: MongoClient = new MongoClient(uri)

const run = async () => {
  await client.connect()
  const users = client.db('jonyo').collection('user')
  const contacts = client.db('jonyo').collection('phone')

  await users.deleteMany({})
  await contacts.deleteMany({})

  await users.insertMany([
    {
      name: 'jo',
      age: 26,
      createdAt: new Date(),
    },
    {
      name: 'so',
      age: 24,
      createdAt: new Date(),
    },
  ])
  await contacts.insertMany([
    {
      name: 'jo',
      phone: '01000000000',
    },
    {
      name: 'so',
      phonoe: '01045345',
    },
  ])
  const cursor = await users.aggregate([
    {
      $lookup: {
        from: 'phone',
        localField: 'name',
        foreignField: 'name',
        as: 'phoneNumber',
      },
    },
  ])
  await cursor.forEach(console.log)
  await client.close()
}

run().catch(console.log)
