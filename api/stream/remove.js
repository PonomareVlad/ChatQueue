import connectDB, {client as mongo} from "../db";

export default async ({query} = req, res) => {
    if (!query.id && !query.username) return res.json({status: false})
    await connectDB()
    const rooms = mongo.db("stream").collection("rooms");
    const status = await mongo.db("stream").collection("queue").deleteOne(query);
    if (await rooms.findOne({id: query.id})) await rooms.updateOne({id: query.id}, {$set: {client: query.username}});
    else await rooms.insertOne({id: query.id, client: query.username});
    return res.json({status})
}
