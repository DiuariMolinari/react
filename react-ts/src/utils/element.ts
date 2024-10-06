export interface Element {
    name: string;
    countSubElements: number;
    isVisible: boolean;
}

export class Comando implements Element {
    constructor(public name: string, public countSubElements: number, public isVisible: boolean) {}
}
