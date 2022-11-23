export class SensorViewModel {
    id: number;
    sensorName: string;

    constructor(p: any) {
        this.id = p.id !== undefined ? p.id : null;
        this.sensorName = p.name !== undefined ? p.name : null;
    }
}
