import express from 'express';
import todosRouter from './todos/router.js';
import { client } from './shared/api/mongodb-client.js';

const PORT = 5000;
const app = express();

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
