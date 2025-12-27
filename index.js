function factorial (factor) {
    let result = 1;

    for (let i = 1; i <= factor; i++ ) {
        result *= i;
    }

    return result;
}

console.log((factorial(5)));

function longWordLength (str){
    let words = str.split(' ');
    let count = 1;

    for (let i = 0; i < words.length; i++){
        if (words[i].length > words[count].length){
            count = i;
        }
    }

    return words[count].length;
}

console.log((longWordLength("ленин груша амфитеатр электроузел")));

function masOfMaxNumber (mas) {
    let result = [];
    let count = 0;

    for (let i = 0; i < mas.length; i++){
        for (let j = 0; j < mas[i].length; j++){
            if (mas[i][j] > count) count = mas[i][j];
        }
        result.push(count);
        count = 0;
    }

    return result;
}

let test = [
    [2,9,0],
    [1,2,4],
    [1,7,3]
]

console.log(masOfMaxNumber( test ))

function sliceString(str, int) {
    return str.slice(0, int) + "...";
}

console.log(sliceString("Неопределенность", 5));

function firstCharUpper (str) {
    str = str.split(" ");
    for( let i = 0; i < str.length; i++ ){
        str[i] = str[i].split("");
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join('')
    }
    str = str.join(" ");
    return str;
}

console.log(firstCharUpper("как же хочется порой, вечером придя домой"));

function newElemByIndex (arr1, arr2, ind) {
    for(let i = 0; i < arr1.length; i++){
        arr2.splice(ind+i, 0, arr1[i]);
    }
    return arr2;
}

console.log(newElemByIndex([6, 7, 11, 86, 12, 55], [4, 5, 1, 8, 9, 34, 666], 0))

function deleteFalsy (arr) {
    const newArr = [];

    for(let elem in arr){
        if(Boolean(arr[elem])){
            newArr.push(arr[elem]);
        }
    }

    return newArr;
}

console.log(deleteFalsy([1, -0, undefined, false, 4, null, 8, NaN, 5, 0, 0n, '']));

function twoString (str) {
    const arr = str;

    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    arr[0] = arr[0].split('');
    arr[1] = arr[1].split('');


    for(let i = 0; i < arr[1].length; i++){
        if(!arr[0].includes(arr[1][i])){
            return false;
        }
    }

    return true;
}

console.log(twoString(["кот", "кто"]));

function sliceMas (mas, size) {
    const arr = [[],[]];

    for(let i = 0; i < size; i++){
        arr[0].push(mas[i]);
    }
    for(let j = size; j < size*2; j++){
        arr[1].push(mas[j]);
    }

    return arr;
}

console.log(sliceMas([1, 2, 3, 4, 5, 6, 7, 8], 5));

function recursionMas (mas, n) {
    mas.push(n);
    n -= 1;

    if(n > 0) {
        recursionMas(mas, n);
    }

    return mas;
}

console.log(recursionMas([], 5));