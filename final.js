// 1.Reverse a string

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}




// 2.Count Vowels in a String

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}



//  3.Check for Palindrome

function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
};



// 4.Find the Maximum Number

function maxNum(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    };
  }
  return max;
}



// 5.Remove Duplicates from an Array

function removeDuplicates(arr) {
    let uniqueArr = [];

    for(let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
};



// 6.Sum of All Numbers in an Array

function sumNumber(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};



// 7.Find Even Numbers in an Array

function evenNumber(arr) {
    let evens = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
};



// 8.Capitalize First Letter of Each Word

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



// 9.Find the Factorial of a Number

function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
};




// 10.PingPong Challenge

function pingPong () {
    for (let i = 1; i <= 20; i++) {

        if(i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        }
        else if (i % 3 === 0) {
            console.log("Ping");
        }
        else if (i % 5 === 0) {
            console.log("Pong");
        }
        else {console.log(i);}
    }
};
