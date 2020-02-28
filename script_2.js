var n = prompt("De quel nombre veux-tu calculer la factorielle ?")

// Fonction ES6 et récurssif
function factorielle(nombre) {
    return nombre == 0 ? 1 :  nombre * factorielle (nombre - 1);
  }
  
// Fonction Anonymes et récurssif
let factorielleAnonymes = (nombre) => {
  return nombre == 0 ? 1 :  nombre * factorielle (nombre - 1);
}

console.log(factorielle(n));
console.log(factorielleAnonymes(n));

