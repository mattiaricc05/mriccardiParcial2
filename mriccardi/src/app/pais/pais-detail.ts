import { Pais } from "./pais";

export class PaisDetail extends Pais {
    constructor(
        id: number,
        name: string,
        formation_year: number,
        capital: string,
        description: string,
        flag: string
    ) { super(id, name, formation_year, capital, description, flag)}
}