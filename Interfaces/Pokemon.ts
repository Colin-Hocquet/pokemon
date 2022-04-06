import internal from "stream"
import Pokeball from "../Classes/Pokeball";

export default interface Pokemon {

    nom: string
    pv: number;
    pvMax: number;
    type: string;
    captif: boolean;
    horsJeu: boolean;
    pokeball: Pokeball;

    attaquer(cible: Pokemon): void;
    subirAttaque(degats: number): void;
    soigner(): void;
    renommer(nom: string): void;
}