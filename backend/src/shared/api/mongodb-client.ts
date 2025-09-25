import { MongoClient } from 'mongodb';

const DB_URL = `mongodb+srv://carambola:j4G6na0JcmeCTMUb@cluster0.kzhtwhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
export const client = new MongoClient(DB_URL);
