let n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

let pyramidMario = (etage) => {
  a = '@';
  b = "#";
  let pyramide = etage
  for (count = 1; count <= etage; count++){
    console.log(a.repeat(pyramide),b.repeat(count));
    pyramide --;
  }
}

pyramidMario(n)