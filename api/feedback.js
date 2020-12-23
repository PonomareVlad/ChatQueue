import connectDB, {client as mongo} from "../db";

export default async ({body} = req, res) => {
    await connectDB()
    const feedback = mongo.db("chat").collection("feedback");
    const status = await feedback.insertOne(JSON.parse(body))
    return res.json({status})
}
