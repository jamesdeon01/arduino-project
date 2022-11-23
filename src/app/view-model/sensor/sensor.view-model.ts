export class SensorViewModel {
    id: number;
    nameSensor: string;
    ambient: string;
    value: string;
    createdAt: Date;
    updatedAt: Date;


    constructor(p: any) {
        this.id = p.id !== undefined ? p.id : null;
        this.nameSensor = p.nameSensor !== undefined ? p.nameSensor : null;
        this.ambient = p.ambient !== undefined ? p.ambient : null;
        this.value = p.value !== undefined ? p.value : null;
        this.createdAt = p.createdAt !== undefined ? p.createdAt : null;
        this.updatedAt = p.updatedAt !== undefined ? p.updatedAt : null;
    }
}
