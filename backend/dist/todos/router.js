import { Router } from 'express';
import TodoConroller from './controller.js';
const todosRouter = Router();
const BASE_ROUTE = '/todos';
todosRouter.post(BASE_ROUTE, TodoConroller.create);
todosRouter.get(BASE_ROUTE, TodoConroller.getAll);
todosRouter.get(`${BASE_ROUTE}/:id`, TodoConroller.getOne);
todosRouter.put(BASE_ROUTE, TodoConroller.update);
todosRouter.delete(`${BASE_ROUTE}/:id`, TodoConroller.delete);
export default todosRouter;
//# sourceMappingURL=router.js.map