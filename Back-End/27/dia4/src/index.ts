import express from 'express';
import PlantRoute from './routes/Plantroute';

const app = express();

app.use(express.json());
app.use(PlantRoute);
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});