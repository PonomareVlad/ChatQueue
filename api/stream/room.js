import connectDB, {client as mongo} from "../../db";

export default async ({query} = req, res) => {
    if (!query.id) return res.json({status: false})
    await connectDB()
    // const queue = mongo.db("stream").collection("queue");
    const rooms = mongo.db("stream").collection("rooms");
    const room = await rooms.findOne({id: query.id})
    return res.json({room})
}
