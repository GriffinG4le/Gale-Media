import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const options: any = {};

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

const globalAny = global as any;

if (!globalAny._mongoClientPromise) {
  client = new MongoClient(uri, options);
  globalAny._mongoClientPromise = client.connect();
}
clientPromise = globalAny._mongoClientPromise;

export default clientPromise;
