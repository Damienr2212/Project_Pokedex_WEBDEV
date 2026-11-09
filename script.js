console.log("fichier chargé");
import { pokemon } from "./pokemon.js"; // Importation du fichier pokemon.js


//console.log(pokemon);  // Affichage du tableau de Pokémon dans la console

function chercherPokemonParNom(nom) {       // Fonction pour chercher un Pokémon par son nom
    //return pokemon.find((p) => p.Nom.toLowerCase() == nom.toLowerCase());
    
    console.log(pokemon.filter((p) => p.Nom.toLowerCase().includes(nom.trim().toLowerCase())))
}


function chercherUnPokemonParType(type) {  // Fonction pour filtrer les Pokemon par types 
   // return pokemon.filter(p => p.Type1 === type || p.Type2 === type);
    console.log(pokemon.filter((p) => p.Type1 === type || p.Type2 === type));    
}

function chercherPokemonParNumero(numero) {  // Fonction pour chercher un Pokémon par son numéro
    //return pokemon.find((p) => p.Numero === numero);
    console.log(pokemon.filter((p) => p.Numero === numero));
}

window.chercherPokemonParNom = chercherPokemonParNom;
window.chercherUnPokemonParType = chercherUnPokemonParType;
window.chercherPokemonParNumero = chercherPokemonParNumero;