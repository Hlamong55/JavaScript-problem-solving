// Capitalize First Letter of Each Word

function capitalWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let capital = word[0].toUpperCase() + word.slice(1);
    result.push(capital);
  }
  return result.join(" ");
};


console.log(capitalWords("hello my brother"));