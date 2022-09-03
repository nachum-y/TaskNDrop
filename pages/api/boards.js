// API/BOARDS
import { connectToDatabase } from "../../util/mongodb"


// async function handler(req, res) {
//     if (req.method === 'POST') {
//         const data = req.body

//         // const { title, image, address, desctiption } = data not needed!
//         const client = await MongoClient.connect('mongodb+srv://nachum:WE8Sqx80yc2QuInj@cluster0.imbs3gk.mongodb.net/board_db?retryWrites=true&w=majority')
//         const db = client.db()

//         const meetupsCollection = db.collection('boards')

//         const result = await meetupsCollection.insertOne(data)
//         console.log('result:', result)

//         client.close()

//         res.status(201).json({ message: 'Board inserted!' })
//     }
// }


// export default handler



export default async (req, res) => {
    const { db } = await connectToDatabase()
    const boards = await db
        .collection("boards")
        .find({})
        .limit(1)
        .toArray()
    res.json(boards)
}