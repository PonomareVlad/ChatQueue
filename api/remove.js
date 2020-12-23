import connectDB, {client as mongo} from "../db";

export default async ({body} = req, res) => {
    if (!body.id) return {status: false}
    await connectDB()
    const status = await mongo.db("chat").collection("queue").deleteOne(body)
    return res.json({status})
}
