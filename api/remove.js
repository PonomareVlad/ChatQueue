import connectDB, {client as mongo} from "../db";

export default async ({body} = req, res) => {
    await connectDB()
    const status = await mongo.db("chat").collection("queue").deleteOne(body)
    return res.json({status})
}
