import express, { Request, Response } from 'express';
import { getProducts } from '../controller/posts.controller'
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send("<html><form method='POST' action='/posts'><input type='text' name='title'><button type='submit'>go</button></form></html>");
});

router.post('/posts', getProducts);

router.get('/single', (req: Request, res: Response) => {
  res.send({message: "Single post page, get request"});
});

export default router;
