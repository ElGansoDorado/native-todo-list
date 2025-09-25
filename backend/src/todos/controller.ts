import { Request, Response } from 'express';
import { RequestTodo, Todo } from '../shared/models/todo.js';
import { todoCollection } from '../shared/api/collections.js';
import { ObjectId } from 'mongodb';

class TodoConroller {
  async create(req: Request, res: Response) {
    try {
      const newTodo: RequestTodo = req.body;

      const result = await todoCollection.insertOne({
        ...newTodo,
        dateCreate: new Date(),
      });

      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const result = await todoCollection
        .find()
        .sort({ dateCreate: -1 })
        .toArray();

      res.status(200).json(result);
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

      const objectId = new ObjectId(id);
      const result = await todoCollection.findOne({ _id: objectId });

      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const todo: Todo = req.body;

      if (!todo._id) {
        return res.status(400).json({ message: 'id not specified' });
      }

      const objectId = new ObjectId(todo._id);
      const { _id, ...updateData } = todo;

      const updateTodo = await todoCollection.findOneAndUpdate(
        { _id: objectId },
        { $set: updateData },
        { returnDocument: 'after' }
      );

      if (!updateTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }

      res.status(200).json(updateTodo);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: 'id not specified' });
      }

      const objectId = new ObjectId(id);
      const result = await todoCollection.findOneAndDelete({ _id: objectId });

      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new TodoConroller();
