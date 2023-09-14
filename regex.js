// car and cat
const regex1 = /ca/gi
console.log(regex1.test(/cat Car/));

const regex2 = /op/i;
console.log(regex2.test(/pop prop/));

//ferret, ferry, and ferrari
const regex3 = /^ferr/i;
console.log(regex3.test("ferret ferry, ferrari"));

//Any word ending in ious
const regex4 = /(ious)+/g;
const arr = ["Religious", "Hilarious", "Serious", "Obvious"];
console.log("Religious Hilarious Serious Obvious".match(regex4));


//A whitespace character followed by a period, comma, colon, or semicolon
const regex5 = /[\s.,;:]/;
console.log(regex5.test("loose, top-boy"));

//A word longer than six letters
const regex6 = /\b\w{7,}\b/g;
console.log("are you available for a date tonight".match(regex6));

//A word without the letter e (or E)
const regex7 = /\b[^eE\s]+\b/g;
console.log("strength cancer, public, vanilla, oath".match(regex7));

//Question 2 2


const regex8 = /'([^']+)'/g;
let sentence = "I asked her what she would like to eat but she did not say a word. 'Did I do anything wrong?'";

console.log(sentence.replace(regex8, '$1"'));


// Question 3

const isValidNumber = (str) => {
    const regex9 = /^[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?$/;
    return regex9.test(str);
  };
  
  const testStrings = [
    "123",
    "+123",
    "-123",
    "0.5",
    ".5",
    "1.23e4",
    "1E10",
    "-1.23e-4",
    "+1.23E+4",
    ".",
    "1.",
    "e3",
    "1e"
  ];
  
  testStrings.forEach((str) => {
    console.log(`${str} is ${isValidNumber(str) ? "valid" : "invalid"}`);
  });
  
