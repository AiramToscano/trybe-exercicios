import connection from '../models/connection';
import Plantmodel from '../models/Plantmodel';
import Plants from '../interfaces/Plants';

class PlantService {
    public model: Plantmodel;
    constructor() {
        this.model = new Plantmodel(connection);
    }

    public async getAll(): Promise<Plants[]> {
        const plants = await this.model.getAll();
        return plants;
    }
}

export default PlantService;