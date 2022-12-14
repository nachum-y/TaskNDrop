// API/BOARDS
import { connectToDatabase } from "../../util/mongodb"

export default async (req, res) => {

    const { db } = await connectToDatabase()
    const boards = await db
        .collection("boards")
        .find({})
        .limit(3)
        .toArray()
    res.json(boards)
}