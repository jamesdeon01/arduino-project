export class AutomationViewModel {
    id: number;
    automationName: string;

    constructor(p: any) {
        this.id = p.id !== undefined ? p.id : null;
        this.automationName = p.name !== undefined ? p.name : null;
    }
}
