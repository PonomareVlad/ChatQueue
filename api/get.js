import connectDB, {client as mongo} from "../db";

export default async (req, res) => {
    await connectDB()
    const item = await mongo.db("chat").collection("queue").findOne()
    return res.json({item})
}
