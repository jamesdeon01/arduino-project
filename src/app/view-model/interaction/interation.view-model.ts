export class InterationViewModel {
    id: number;
    interationName: string;

    constructor(p: any) {
        this.id = p.id !== undefined ? p.id : null;
        this.interationName = p.name !== undefined ? p.name : null;
    }
}
