// Remove Duplicates from an Array

function removeDuplicates(arr) {
    let uniqueArr = [];

    for(let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
};


// console.log(removeDuplicates([1, 2, 3, 1, 4, 5, 2, 8]));