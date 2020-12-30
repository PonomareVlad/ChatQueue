import connectDB, {client as mongo} from "../db";

export default async ({query} = req, res) => {
    if (!query.username) return res.json({status: false})
    await connectDB()
    const queue = mongo.db("stream").collection("queue");
    const rooms = mongo.db("stream").collection("rooms");
    const room = await queue.findOne()
    if (room) {
        await queue.deleteOne(room);
        if (await rooms.findOne({id: room.id})) await rooms.updateOne({id: room.id}, {$set: {client: query.username}});
        else await rooms.insertOne({id: room.id, client: query.username});
    }
    return res.json({room})
}
