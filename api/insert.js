import connectDB, {client as mongo} from "../db";

export default async ({body} = req, res) => {
    await connectDB()
    const queue = mongo.db("chat").collection("queue");
    const status = await queue.findOne(body) || await queue.insertOne(body)
    return res.json({status})
}
