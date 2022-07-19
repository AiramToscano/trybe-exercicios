import { Request, Response } from 'express';

interface Plants {
    id?: number;
    breed: string;
    size: number;
    needsSun: boolean;
    origin: string;
}

interface Service {
    getAll(): Promise<Plants[]>;
}

class PlantController {
    constructor(private service : Service) {
        this.service = service;
    }

    public getAll = async (_req: Request, res: Response): Promise<void> => {
        const plants = await this.service.getAll();
       res.status(200).json(plants);
    }
}

export default PlantController;