import { Request, Response } from 'express';
import { mocksTodos, RequestTodo } from '../shared/models/todo.js';
import { todoCollection } from '../shared/api/collections.js';

class TodoConroller {
  async create(req: Request, res: Response) {
    try {
      const newTodo: RequestTodo = req.body;
      
      const result = await todoCollection.insertOne({...newTodo, dateCreate: new Date()});
      
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      res.status(200).json(mocksTodos);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: 'id not specified' });
      }

      res.status(200).json(mocksTodos[+id]);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const todo = req.body;

      if (!todo._id) {
        res.status(400).json({ message: 'id not specified' });
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new TodoConroller();
