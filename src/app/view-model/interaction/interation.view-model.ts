export class InterationViewModel {
    id: number;
    nameInteration: string;
    ambiente:string;
    value:boolean;
    createdAt:Date;
    updatedAt:Date;

    constructor(p: any) {
      this.id = p.id !== undefined ? p.id : null;
      this.nameInteration = p.nameInteration !== undefined ? p.nameInteration : null;
      this.ambiente = p.ambiente !== undefined ? p.ambiente : null;
      this.value = p.value !== undefined ? p.value : null;
      this.createdAt = p.createdAt !== undefined ? p.createdAt : null;
      this.updatedAt = p.updatedAt !== undefined ? p.updatedAt : null;

    }
}
