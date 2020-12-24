import connectDB, {client as mongo} from "../db";

export default async ({body} = req, res) => {
    const data = JSON.parse(body);
    await connectDB()
    const access = mongo.db("chat").collection("access");
    await access.deleteMany({});
    const result = await access.insertOne(data);
    return res.json({result});
}
