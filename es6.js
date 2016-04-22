// ES6

const adder = (argOne, argTwo) => argOne + argTwo

const result = adder(1, 5)
console.log(result) // 6

const logger = toLog => console.log(toLog)

const somethingMoreComplex = (a, b) => {
  const add = adder(a, b)
  const divide = add / a
  return divide
}

function () {
  this.test = 'woo'
  function () {
    console.log(this.test) // undefined
  }
}


function () {
  this.test = 'woo'
  () => console.log(this.test) // 'woo'
}
