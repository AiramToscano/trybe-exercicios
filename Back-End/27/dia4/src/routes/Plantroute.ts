import { Router } from 'express';
import PlantController from '../controllers/PlantController'

const PlantRoute = Router();

const booksController = new PlantController();

PlantRoute.get('/plant', booksController.getAll);

export default PlantRoute;