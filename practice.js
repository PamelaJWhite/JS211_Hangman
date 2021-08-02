console.log(`I'm working`)
string = 'p'
let testForAlpha = string.match(/[a-z]/)

console.log(testForAlpha)
if (testForAlpha) {
    console.log(`Yes, that's a letter`)
}

if (!testForAlpha) {
    console.log(`That's not a letter`)
}

if(string.match(/[a-z]/)) {
    console.log(`Yes, that's a letter`)
}

if (!string.match(/[a-z]/)){
    console.log(`That's not a letter`)
}

string2 = "asdf"
console.log(string2.length)

array = ["a", "b", "c"]
letter = "a"
console.log(array.includes("a"))
if(array.includes(letter)){
    console.log(`you've already guessed that letter`)
}

