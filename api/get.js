import connectDB, {client as mongo} from "../db";

export default async (req, res) => {
    await connectDB()
    const room = await mongo.db("chat").collection("queue").findOne()
    if (room) await mongo.db("chat").collection("queue").deleteOne(room)
    return res.json({room})
}
