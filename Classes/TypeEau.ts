import Type from "../Interfaces/Type";

export default abstract class TypeEau implements Type {

    degats: number;

    calculerDegatsContreFeu(): number {
        return this.degats*2;
    }
    calculerDegatsContreEau(): number {
        return this.degats;
    }
    calculerDegatsContrePlante(): number {
        return this.degats/2;

    }

    constructor(degats: number){
        this.degats = degats;
    }
}