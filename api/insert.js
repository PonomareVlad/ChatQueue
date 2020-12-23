import connectDB, {client as mongo} from "../db";

export default async ({body} = req, res) => {
    if (!body.id) return {status: false}
    await connectDB()
    const queue = mongo.db("chat").collection("queue");
    const status = await queue.findOne(body) || await queue.insertOne(body)
    return res.json({status})
}
