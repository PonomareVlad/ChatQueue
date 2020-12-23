import connectDB, {client as mongo} from "../db";

export default async ({query} = req, res) => {
    if (!query.id) return {status: false}
    await connectDB()
    const status = await mongo.db("chat").collection("queue").deleteOne(query)
    return res.json({status})
}
