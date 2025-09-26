import express from 'express';
import cors from 'cors';
import todosRouter from './todos/router.js';
import { client } from './shared/api/mongodb-client.js';

const PORT = process.env.PORT;
const app = express();

const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:8081',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', todosRouter);

async function main() {
  try {
    await client.connect();

    app.listen(PORT, () => console.log('SERVER LISTEN PORT' + PORT));
  } catch (e) {
    await client.close();
    console.log(e);
  }
}

main();
