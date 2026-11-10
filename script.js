import { pokemon } from "./pokemon.js"; // Importation du fichier pokemon.js


//console.log(pokemon);  // Affichage du tableau de Pokémon dans la console

function chercherPokemonParNom(nom) {       // Fonction pour chercher un Pokémon par son nom
    //return pokemon.find((p) => p.Nom.toLowerCase() == nom.toLowerCase());
    console.log(pokemon.filter((p) => p.Nom.toLowerCase().includes(nom.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))))
}


function chercherPokemonParType(type) {  // Fonction pour filtrer les Pokemon par types 
    // return pokemon.filter(p => p.Type1 === type || p.Type2 === type);
    console.log(pokemon.filter((p) => p.Type1.toLowerCase() === type.toLowerCase() || p.Type2.toLowerCase() === type.toLowerCase())); 
  };  


function chercherPokemonParNumero(numero) {  // Fonction pour chercher un Pokémon par son numéro
    //return pokemon.find((p) => p.Numero === numero);
    console.log(pokemon.filter((p) => p.Numero === numero));
}


function encadrementCaracteristique(min, max, caracteristique) {    // Affiche les pokemons avec la caracteristique aui respecte les bornes
    // return pokemon.filter((p) => p[caracteristique] >= min && p[caracteristique] <= max).sort((a, b) => a[caracteristique] - b[caracteristique]);
    console.log(pokemon.filter((p) => p[caracteristique] >= min && p[caracteristique] <= max).sort((a, b) => a[caracteristique] - b[caracteristique]));
}


function trieCroissantDecroissant(caracteristique, ordre = "asc") {     // trie de maniere croissante ou decroissante en fonction des caracteristique choisie
    let sens = 1;

    if (ordre === "asc") {
        sens = 1;
    }
    if (ordre === "desc") {
        sens = -1;
    }

    const tab = [...pokemon].sort((a, b) => (a[caracteristique] - b[caracteristique]) * sens);
    //return tab;
    console.log(tab);
}


window.chercherPokemonParNom = chercherPokemonParNom;
window.chercherPokemonParType = chercherPokemonParType;
window.chercherPokemonParNumero = chercherPokemonParNumero;
window.encadrementCaracteristique = encadrementCaracteristique;
window.trieCroissantDecroissant = trieCroissantDecroissant;


