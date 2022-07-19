interface Plants {
    id?: number;
    breed: string;
    size: number;
    needsSun: boolean;
    origin: string;
}

interface Model {
    getAll(): Promise<Plants[]>;
}

class PlantService {
    model: Model;
    constructor(model : Model) {
        this.model = model;
    }

    public async getAll():Promise<Plants[]> {
        const plants = await this.model.getAll();
        return plants;
    }
}

export default PlantService;