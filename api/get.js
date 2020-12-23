import connectDB, {client as mongo} from "../db";

export default async (req, res) => await connectDB() && res.json({room: await mongo.db("chat").collection("queue").findOne()})
