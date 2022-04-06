import { LAYOUT_CONFIG } from "@angular/flex-layout";
import Pokemon from "../Interfaces/Pokemon";
import Carapuce from "./Carapuce";
import Pokeball from "./Pokeball";

export default class Dresseur {

    private nom: string;
    pokeballs: Pokeball[] = [];

    /**
     * Ajoute des pokeballs si la limite n'est pas atteinte (6)
     * @param newPokeball 
     */
    public ajouterPokeballs(newPokeball: number): void {
        if (this.pokeballs.length >= 5) {
            console.log("Plus de place pour des pokeballs");
        } else {
            for (let i = 0; i < newPokeball; i++) {
                if (this.pokeballs.length <= 5) {
                    this.pokeballs.push(new Pokeball())
                } else{
                    console.log("Vous ne pouvez pas avoir plus de 6 pokeballs");
                    
                }
            }
        }
    }
    /**
     * Retourne le nb de pokeball
     * @returns 
     */
    public havePokeball() {
        return this.pokeballs.length
    }

    /**
     * Permet de capturer un pokemon
     * @param pokenom 
     */
    public capturer(pokenom: Pokemon) {
        if(pokenom.captif == false){
            console.log(`${this.nom} tente de capturer ${pokenom.nom}`);
        
            if (this.getPokeballs()) {
                this.fillEmptyPokeball(pokenom, this)
            }else{
                console.log("Plus assez de pokeball, veuillez en rajouter");
                
            }
        }
       else{
           console.log(`${pokenom.nom} est déjà capturé et ne peut pas l'être de nouveau`);
           
       }
    }
    /**
     * Remplie une pokeball vide en lui attribuant un pokemon et une pokeball
     * @param cible 
     * @param dresseur 
     */
    private fillEmptyPokeball(cible: Pokemon, dresseur: Dresseur) {
        let i: number = 0;
        for (i; i < this.pokeballs.length; i++) {
            if (this.pokeballs[i].isEmpty()) {
                this.pokeballs[i].contient = cible;
                this.pokeballs[i].propretaire = dresseur;
                cible.captif = true;
                console.log(`${cible.nom} a bien été capturé`);
                
                break;
            }
        }


    }
    /**
     * Affiche le contenu des pokeballs ayant un pokemon dedans
     */
    public getPokemons(): void {
        let i: number = 0;
        for (i; i < this.pokeballs.length; i++) {
            if(!this.pokeballs[i].isEmpty()){
                console.log(`Le contenu de la pokeball ${i} est ` + this.pokeballs[i].contient.nom);
            }
        }
    }

    /**
     * Permet de savoir s'il reste des pokeballs 
     * @returns 
     */
    public getPokeballs(): boolean {
        let i: number = 0;
        if (this.havePokeball() < 5) {
            for (i; i < this.pokeballs.length; i++) {
                if (this.pokeballs[i].isEmpty()) {
                    return true;
                }
            }
        }

        return false;
    }

    constructor(nom: string) {
        this.nom = nom;

    }

    get getNom() {
        return this.nom;
    }
}