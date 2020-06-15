import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

import postsRoutes from './routes/posts';

app.use(postsRoutes);

app.use((req,res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(port, () => console.log(`App listens to port ${port}`));

