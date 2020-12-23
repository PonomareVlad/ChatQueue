import connectDB, {client as mongo} from "../db";

export default async (req, res) => {
    await connectDB()
    const queue = mongo.db("chat").collection("queue");
    const room = await queue.findOne()
    if (room) await queue.deleteOne(room)
    return res.json({room})
}
