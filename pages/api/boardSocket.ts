import { NextApiRequest } from "next"
import { NextApiResponseServerIO } from "../../service/type"

export default (req: NextApiRequest, res: NextApiResponseServerIO) => {
    if (req.method === "POST") {
        // get board
        const board = req.body

        // dispatch to channel "board"
        res?.socket?.server?.io?.emit("board", board)

        // return board
        res.status(201).json(board)
    }
}
