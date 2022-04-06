import Type from "../Interfaces/Type";

export default abstract class TypePlante implements Type {

    degats: number;

    calculerDegatsContreFeu(): number {
        return this.degats/2;
    }
    calculerDegatsContreEau(): number {
        return this.degats*2
    }
    calculerDegatsContrePlante(): number {
        return this.degats

    }

    constructor(degats: number){
        this.degats = degats;
    }
}