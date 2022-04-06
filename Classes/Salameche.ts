import Pokemon from "../Interfaces/Pokemon";
import Pokeball from "./Pokeball";
import TypeFeu from "./TypeFeu";

export default class Salameche extends TypeFeu implements Pokemon {

    nom!: string;
    pv: number;
    pvMax: number;
    type: string;
    captif: boolean;
    horsJeu: boolean;
    pokeball!: Pokeball;

    attaquer(cible: Pokemon): number {
        if(cible.type == 'Eau'){
            return this.calculerDegatsContreEau()

        }
        if(cible.type == 'Feu'){
            return this.calculerDegatsContreFeu()

        }
        if(cible.type == 'Plante'){
            return this.calculerDegatsContrePlante()

        }
        return 0;
    }

    subirAttaque(degats: number): void {
        if(this.horsJeu == true ) {
            console.log("Le pokemon est déjà mort");
        }else {
            this.pv = this.pv - degats;
            if(this.pv <= 0) {
                console.log(`${this.nom} a été tué, il ne peut plus attaquer`);
                this.horsJeu = true;
            }else {
                console.log(`Ouch -${degats}pv, pv restants : ${this.pv}`);
                
            }
        }
    }

    soigner(): void {
        this.pv = this.pvMax
        console.log(`Le pokemon a été entièrement soigné : ${this.pv}pv`);
        this.horsJeu = false;
    }

    renommer(newName: string): void {
        this.nom = newName;
        console.log(`Nouveau nom : ${this.nom}`);
        
    }
    
    constructor(pvMax : number, degats: number){
        super(degats);
        this.nom = "Salameche";
        this.pv = pvMax;
        this.pvMax = pvMax;
       this.type = "Feu";
       this.captif = false;
       this.horsJeu = false ;    }
}