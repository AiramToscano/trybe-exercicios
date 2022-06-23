import { Request, Response } from 'express';
import Plantsservices from '../services/Plantsservices';

class PlantController {
    constructor(private plantsservices = new Plantsservices()) { }

    public getAll = async (_req: Request, res: Response): Promise<void> => {
        const plants = await this.plantsservices.getAll();
       res.status(200).json(plants);
    }
}

export default PlantController;