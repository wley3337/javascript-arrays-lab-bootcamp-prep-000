const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
// destructivelyAppendKitten(name) appends a kitten to end of the Array

function destructivelyAppendKitten(name){
  kittens.push(name);
}

//destructivelyPrependKitten(name) beginning of the Array

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

//destructivelyRemoveLastKitten() removes the last kitten from the kittens Array

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

//destructivelyRemoveFirstKitten() removes the first kittens

function destructivelyRemoveFirstKitten(){
  kittens.unshift();
}

//appendKitten(name) apends a kitten to the kitten array, returns new arry, leaves kittens array unchanged

// prependKitten(name) prepends a kitten array returns new array, leaving the kitten array unchanged

// removeLastKitten() removes last kitten in the array, returns new array, levain kittens unchanged

// removeFirstKitten() removes the first kitten from the kittens array and returns a new array
