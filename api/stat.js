import connectDB, {client as mongo} from "../db";

export default async (req, res) => {
    await connectDB()
    const rooms = await mongo.db("chat").collection("rooms").find();
    return res.json({rooms});
}
