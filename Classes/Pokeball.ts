import Pokemon from "../Interfaces/Pokemon";
import Dresseur from "./Dresseur";

export default class Pokeball {

    contient!: Pokemon;
    propretaire!: Dresseur;
/**
 * 
 */
    public getContenu(): void {
        if (!this.isEmpty) {
            console.log(`Le contenu de la pokeball est ${this.contient} `);
        }else {
            console.log("La pokeball est vide");
        }
    }
    /**
     * Return vrai si la pokeball est vide et false si nons
     * @returns 
     */
    public isEmpty(): boolean {
        if (this.contient != null || this.contient != undefined) {
            return false;
        }
        return true;
    }

    /**
     * Je n'ai pas compris cette méthode et j'ai l'impression que mon code fonctionne sans
     * @param pokemon 
     */
    public affecterPokemon(pokemon: Pokemon) {
        if (!this.getContenu) {
            //this.
            }
    }

}