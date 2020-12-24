import connectDB, {client as mongo} from "../db";

export default async (req, res) => {
    await connectDB()
    const access = await mongo.db("chat").collection("access").findOne();
    return res.json({access});
}
