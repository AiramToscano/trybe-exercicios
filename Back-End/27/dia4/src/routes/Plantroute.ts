import { Router } from 'express';
import PlantController from '../controllers/PlantController';
import Plantservice from '../services/Plantsservices';
import Plantmodel from '../models/Plantmodel';
import connections from '../models/connection';

const PlantRoute = Router();

const booksController = new PlantController(new Plantservice(new Plantmodel(connections)));

PlantRoute.get('/plant', booksController.getAll);

export default PlantRoute;