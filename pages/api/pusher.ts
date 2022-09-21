import { NextApiRequest } from "next"
import { NextApiResponseServerIO } from "../../service/type"
import { Server as ServerIO } from "socket.io"
import { Server as NetServer } from "http"
import Pusher from "pusher"


export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10240kb',
        },
    },
}


function triggerChunked(pusher: Pusher, channel: string | Array<string>, event: string, data: any) {
    const chunkSize = 5000  // artificially small! Set it to more like 9000
    const str = JSON.stringify(data)
    const msgId = Math.random() + ''
    for (var i = 0; i * chunkSize < str.length; i++) {
        // TODO: use pusher.triggerBatch for better performance
        pusher.trigger(channel, "chunked-" + event, {
            id: msgId,
            index: i,
            chunk: str.substr(i * chunkSize, chunkSize),
            final: chunkSize * (i + 1) >= str.length
        })
    }
}

const pusherHandler = (req: NextApiRequest, res: any) => {

    if (req.method === 'POST') {



        const pusher = new Pusher({
            appId: "1480473",
            key: "98c0bf36299d507ec439",
            secret: "3dd33c22aa4eaee70d4f",
            cluster: "eu",
            useTLS: true
        })

        triggerChunked(pusher, "boardUpdated", "board", {
            "board": req.body
        })
        // pusher.trigger("groupUpdated", "group", {
        //     group: req.body
        // })

        res.end()
    }
}


export default pusherHandler

