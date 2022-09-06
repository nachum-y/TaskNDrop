// API/BOARDS
import { MongoClient, ObjectId } from "mongodb"
import Router from "next/router"
import { connectToDatabase } from "../../../util/mongodb"

export default async (req, res) => {
    const { db } = await connectToDatabase()

    if (req.method === 'POST') {
        try {
            const updatedBoard = req.body
            const id = ObjectId(updatedBoard._id)
            delete updatedBoard._id
            const boardCollection = db.collection('boards')
            await boardCollection.updateOne({ _id: id }, { $set: { ...updatedBoard } })
            res.status(200).json({
                message: "board updated successfully",
            })
            return
        } catch (err) {
            logger.error(`cannot update board ${board._id}`, err)
            throw err
        }
    }

    const boards = await db
        .collection("boards")
        .find({})
        .limit(1)
        .toArray()
    res.json(boards)
}