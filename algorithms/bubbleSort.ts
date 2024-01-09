/**
 * Use bubble sort to sort an array of numbers
 */

function bubbleSort(arr: number[], n: number) {
  var i, j, temp;
  var swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) break;
  }
}

function printArray(arr: number[], size: number) {
  var i;
  for (i = 0; i < size; i++) console.log(arr[i] + " ");
}

var arr: number[] = [64, 34, 25, 12, 22, 11, 90];
var n: number = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
printArray(arr, n);
