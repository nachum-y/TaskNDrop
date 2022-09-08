// API/BOARDS
import { MongoClient, ObjectId } from "mongodb"
import { connectToDatabase } from "../../../util/mongodb"
export default async (req, res) => {
    const boardId = req.query.boardId
    const { db } = await connectToDatabase()
    const boardCollection = db.collection('boards')


    if (req.method === 'POST') {
        try {
            const updatedBoard = req.body
            const id = ObjectId(updatedBoard._id)
            delete updatedBoard._id
            await boardCollection.updateOne({ _id: id }, { $set: { ...updatedBoard } })
            res.status(200).json({
                message: "board updated successfully",
            })
            return
        } catch (err) {
            console.log(`cannot update board ${updatedBoard._id}`, err)
            throw err
        }
    }



    if (boardId) {
        try {
            const board = boardCollection.findOne({ _id: ObjectId(boardId) })
            res.json(board)
        } catch (err) {
            console.error('while finding board , err/')
            throw err
        }
    }


}