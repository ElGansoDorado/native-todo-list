import { client } from './mongodb-client.js';

const database = client.db('todos-db');
export const todoCollection = database.collection('todos');
