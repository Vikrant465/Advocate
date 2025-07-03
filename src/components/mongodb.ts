// src/components/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Declare global variable for caching in development (to avoid hot-reload reconnections)
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Allow global var in development (for hot reload)
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise!;
} else {
  // In production, no caching (single static client)
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
