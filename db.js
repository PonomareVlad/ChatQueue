import MongoClient from "mongodb"

export let client;
export default async function connectToDatabase() {
    if (client) return console.log('DB', 'Active') || client;
    console.log('DB', 'Initialized');
    return client = await MongoClient.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}