export default interface Type {
    degats: number;

    calculerDegatsContreFeu(): void;
    calculerDegatsContreEau(): void;
    calculerDegatsContrePlante(): void;
}