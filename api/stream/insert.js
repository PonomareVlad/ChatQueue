import connectDB, {client as mongo} from "../../db";

export default async ({query} = req, res) => {
    if (!query.id && !query.username) return res.json({status: false})
    await connectDB()
    const queue = mongo.db("stream").collection("queue");
    const rooms = mongo.db("stream").collection("rooms");
    let status = await queue.findOne();
    if (!status) {
        status = await queue.insertOne(query);
        if (await rooms.findOne({id: query.id})) await rooms.updateOne({id: query.id}, {$set: {host: query.username}});
        else await rooms.insertOne({id: query.id, host: query.username});
    }
    return res.json({status})
}
