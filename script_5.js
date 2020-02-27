const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// console.log(books.length)
// books.forEach(borrow => {
//   if (borrow['rented'] > 1 ? console.log(true) : console.log(false) );
//   // Doit renvoyer True si il à déjà était emprunter au moins une fois ou false si l'inverse
//   });

// Le livre le plus emprunter
// let maxRented = books[0]
// books.forEach(mostRented => {
//   if (mostRented['rented'] >= maxRented['rented']) {
//     maxRented = mostRented
//   }
// })

// console.log(maxRented)


// Le livre le moins emprunter
// let minRented = books[0]
// books.forEach(mostRented => {
//   if (mostRented['rented'] <= minRented['rented']) {
//     minRented = mostRented
//   }
// })
// console.log(minRented)

// let find = books[0]
// let id = 873495
// books.forEach(findBook => {
//   if (findBook['id'] === id ){
//     find = findBook;
//   }
// })
// console.log(find)

// let find = books[0]
// let id = 133712
// books.forEach(findBook => {
//   if (findBook['id'] === id ){
//     books.splice(books.indexOf(findBook),1)
//   }
// })
// console.log(books)