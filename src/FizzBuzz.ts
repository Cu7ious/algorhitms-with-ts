/**
 * Write a program that prints the integers from 1 to 100 (inclusive).
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 */

const log = (data:string) => {
  return console.log(data)
}

for (let i = 1; i <= 100; i++) {
  const fizz = i % 3 === 0 ? 'Fizz' : null
  const buzz = i % 5 === 0 ? 'Buzz' : null

  if (fizz && buzz) {
    log(fizz + buzz)
  } else if (fizz) {
    log(fizz)
  } else if (buzz) {
    log(buzz)
  } else {
    log(String(i))
  }
}
