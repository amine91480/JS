let n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

// Super fonction annonyme 
let pyramidMario = (etage) => {
  a = '@';
  b = "#";
  let pyramide = etage
  for (count = 1; count <= etage; count++){
    // le .repeat et une fonction qui permet de repeater une valeur plusieurs fois
    console.log(a.repeat(pyramide),b.repeat(count));
    pyramide --;
  }
}

pyramidMario(n)