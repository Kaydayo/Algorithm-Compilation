// let cards = ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen']
// let num = cards.filter(elem => typeof elem === 'number').sort((a,b)=> a-b)
// let letters = cards.filter(elem => isNaN(elem) )
// let first = letters[0]
// let second = letters[2]
// let third = letters[1]

// console.log(num)
// console.log(letters)
// let result = [...num, first, second, third]
// console.log(result)

let generics = [ 2, 3, 5, 6, 8, 'Jack', 'Queen', 'King' ] 
let cards = ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen']

cards.sort(function(a, b) {
  return generics.indexOf(a) - generics.indexOf(b);
});

console.log( cards );