let allCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "`",
  "0",
];

let pass = "p2`4";
let initial = "a";
while (true) {
  let letters = initial.split("");
  let last = letters.length - 1;

  while (letters[last] == "0") {
    if (last == 0) {
      letters = new Array(letters.length + 1).fill("a");
      // letters[letters.length - 1] = '`'
      last = letters.length - 1;
    } else {
      letters[last] = "a";
      last--;
    }
  }

  console.log(initial, pass);
  if (initial == pass) {
    console.log("done");
    break;
  }
  letters[last] = allCharacters[allCharacters.indexOf(letters[last]) + 1];
  initial = letters.join("");
}
