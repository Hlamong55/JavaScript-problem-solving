// Find Even Numbers in an Array

function evenNumber(arr) {
    let evens = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
};

// console.log(evenNumber([1,2,3,4,5,6,7,8]));