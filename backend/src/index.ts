import express, { Request, Response } from 'express';

const PORT = 5000;
const app = express();

const DB_URL = `mongodb+srv://carambola:j4G6na0JcmeCTMUb@cluster0.kzhtwhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const testTodo = {
  id: 1,
  titel: 'first todo',
  description: 'this my first todo!',
  status: 'in procces',
  dateCreate: '12.13.2002',
};

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json(testTodo);
});

async function startApp() {
  try {
    app.listen(PORT, () => console.log('SERVER LISTEN PORT' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
