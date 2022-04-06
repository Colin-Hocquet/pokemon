import Type from "../Interfaces/Type";

export default abstract class TypeFeu implements Type {

    degats: number;

    calculerDegatsContreFeu(): number {
        return this.degats;
    }
    calculerDegatsContreEau(): number {
        return this.degats/2;
    }
    calculerDegatsContrePlante(): number {
        return this.degats*2;

    }
    
    constructor(degats: number){
        this.degats = degats;
    }
}