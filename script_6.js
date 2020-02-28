let arn ='CCUCGCCGGUACUUCUCG';
// Récupère la chaine arn et la découpe tout les 3 caractères pour l'inséré dabs le tableau cordon :D
var codon = arn.match(/.{3}/g);
// Un tableau qui permettra de récupère la valeurs des codons suite aux décodage des déquences :D
var array = [];
// Une belle fonction anonymes
let bio= (code) => {
  var i = 0;
  let y = code.length
  while (i < y ) {  
    if (code[i] == "UCU"  || code[i] == "UCC" ||  code[i] == "UCA" ||  code[i] == "UCG" ||  code[i] == "AGU" || code[i] == "AGC"){
      //console.log("Serine");
      array.push("Serine")
    } 
    if (code[i] == "CCU"  || code[i] == "CCC" ||  code[i] == "CCA" || code[i] == "CCG" ){
      //console.log("Proline");
      array.push("Proline");
    }
    if (code[i] == "UUA"  || code[i] == "UUG" ){
      //console.log("Leucine");
      array.push("Leucine");
    }
    if (code[i] == "UUU"  || code[i] == "UUC" ){
      //console.log("Phenylalanine");
      array.push("Phenylalanine");
    }
    if (code[i] == "CGU"  || code[i] == "CGC" || code[i] == "CGA" || code[i] == "CGG" || code[i] == "AGA" || code[i] == "AGG" ){
      //console.log("Arginine");
      array.push("Arginine");
    }
    if (code[i] == "UAU"  || code[i] == "UAC" ){
      //console.log("Tyrosine");
      array.push("Tyrosine");
    }
    i = i + 1 ;
  } 
  return array
}

bio(codon)
console.log(array)

// let Serine = "UCU" || "UCC" || "UCA" || "UCG" || "UCG" ||"AGC";
// let Proline = "CCU" ||"CCC" ||"CCA"  || "CCG";
// let Leucine = "UUA" || "UUG";
// let Phenylalanine = "UUU" || "UUC" ;
// let Arginine = "CGU" || "CGC" || "CGA" || "CGG" || "AGA" || "AGG";
// let Tyrosine = "UAU" || "UAC"