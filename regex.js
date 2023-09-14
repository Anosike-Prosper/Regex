// car and cat
const regex1 = /ca/gi;
alert(regex1.test(/cat Car/));

const regex2 = /op/i;
alert(regex2.test(/pop prop/));

//ferret, ferry, and ferrari
const regex3 = /^ferr/i;
alert(regex3.test("ferret ferry, ferrari"));
alert("ferret ferry ferrari referral".match(regex3));

//Any word ending in ious
const regex4 = /(ious)+/g;
const arr = ["Religious", "Hilarious", "Serious", "Obvious"];
alert("Religious Hilarious Serious Obvious".match(regex4));


//A whitespace character followed by a period, comma, colon, or semicolon
const regex5 = /[\s.,;:]/;
alert(regex5.test("loose, top-boy"));

//A word longer than six letters
const regex6 = /\b\w{7,}\b/g;
alert("are you available for a date tonight".match(regex6));

//A word without the letter e (or E)
const regex7 = /\b[^eE\s]+\b/g;
console.log("strength cancer, public, vanilla, oath".match(regex7));

//Question 2


const singleQuotes = /'([^']+)'/g;
let sentence = "I asked her what she would like to eat but she did not say a word. 'Did I do anything wrong?'";

alert(sentence.replace(singleQuotes, '$1"'));
