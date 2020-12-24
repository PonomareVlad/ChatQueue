import connectDB, {client as mongo} from "../db";

export default async (req, res) => {
    await connectDB()
    const data = await mongo.db("chat").collection("rooms").find({});
    let rooms = [];
    await data.forEach(row => rooms.push(row))
    return res.json({rooms});
}
