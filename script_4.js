const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

entrepreneurs.forEach(Seventhy => {
   if (Seventhy['year'] >= 1970 && Seventhy['year'] <= 1979) 
   // Objet des entrepreneurs étant née entre 1970 et 1979 inclus
   console.log(Seventhy), Seventhy['year'];
 });

//  array = []
//  entrepreneurs.forEach( FisrtAndLast => {
//   array.push(`First Name: ${FisrtAndLast.first} Last name: ${FisrtAndLast.last} `)
// })
// console.log(array)

// array = []
// entrepreneurs.forEach( YearsIfHeIsAlive => {
//   array.push(`Name: ${YearsIfHeIsAlive.first} ${YearsIfHeIsAlive.last}, Age if he is Alive : ${2020 - YearsIfHeIsAlive.year} `)
//   })
// console.log(array)

array = []
entrepreneurs.forEach( First => {
  array.push(`Name: ${First.first} `)
  array.sort();
  })
console.log(array)
 