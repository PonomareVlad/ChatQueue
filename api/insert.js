import connectDB, {client as mongo} from "../db";

export default async ({query} = req, res) => {
    if (!query.id) return {status: false}
    await connectDB()
    const queue = mongo.db("chat").collection("queue");
    const status = await queue.findOne() || await queue.insertOne(query)
    return res.json({status})
}
