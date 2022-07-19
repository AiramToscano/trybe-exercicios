// ./index.ts

import express from 'express';
import UsersRoutes from './routes/userroutes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.use(UsersRoutes);


