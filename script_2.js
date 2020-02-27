var n = prompt("De quel nombre veux-tu calculer la factorielle ?")

// Fonction ES6
function factorielle(nombre) {
    return nombre == 0 ? 1 :  nombre * factorielle (nombre - 1);
  }
  
// Fonction Anonymes
let factorielleAnonymes = (nombre) => {
  return nombre == 0 ? 1 :  nombre * factorielle (nombre - 1);
}

console.log(factorielle(n));
console.log(factorielleAnonymes(n));

