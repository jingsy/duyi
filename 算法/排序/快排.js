var arr = [8, 3, 4, 1, 5, 1, 7];
var arr2 = [8, 3, 1, 12, 3, 4, 1, 5, 1, 7];
var arr1 = [8, 311, 3, 4, 4, 1, 5, 9, 1, 7];
var arr3 = [8, 3, 1, 12, 123, 3, 4, 1, 5, 1, 7];
var arr4 = [8, 3, 2, 12, 3, 5, 65, 4, 3, 8, 5, 1, 7];


function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort

console.log(quickSort(arr, 0, arr.length - 1)) 
console.log(quickSort(arr1, 0, arr1.length - 1)) 
console.log(quickSort(arr2, 0, arr2.length - 1)) 
console.log(quickSort(arr3, 0, arr3.length - 1)) 




