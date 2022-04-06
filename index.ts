import Bulbizarre from "./Classes/Bulbizarre";
import Carapuce from "./Classes/Carapuce";
import Dresseur from "./Classes/Dresseur";
import Pokeball from "./Classes/Pokeball";
import Salameche from "./Classes/Salameche";

let carapuce: Carapuce = new Carapuce(50, 12);
let salameche: Salameche = new Salameche(57, 11)
let bulbizarre: Bulbizarre = new Bulbizarre(45, 13)
let carapuce1:  Carapuce = new Carapuce(50, 12);
const degatCarapuce: number = carapuce.attaquer(bulbizarre);

console.log("Pv bulbizarre : " + bulbizarre.pv);
console.log("Attaque de : " + degatCarapuce  + " dégats à venir ");
bulbizarre.subirAttaque(degatCarapuce);
console.log("Pv bulbizarre : " + bulbizarre.pv);
bulbizarre.subirAttaque(degatCarapuce);
console.log("Pv bulbizarre : " + bulbizarre.pv);
bulbizarre.soigner();
console.log("Pv bulbizarre : " + bulbizarre.pv);
bulbizarre.renommer("Victime");
console.log("Bulbizarre a été renommé : " + bulbizarre.nom);

const dresseur: Dresseur = new Dresseur("Sacha");
//const pokeball: Pokeball = new Pokeball(carapuce, dresseur);

console.log(dresseur.getNom);
console.log(dresseur.havePokeball());
dresseur.ajouterPokeballs(2)
console.log(dresseur.havePokeball());
dresseur.capturer(carapuce)
dresseur.capturer(bulbizarre)
dresseur.getPokemons()
dresseur.capturer(salameche)
dresseur.capturer(carapuce1)
dresseur.ajouterPokeballs(1)
dresseur.capturer(carapuce1)
dresseur.getPokemons()

//console.log(dresseur.pokeball[0].contient);
