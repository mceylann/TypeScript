/**
 * Given an array of integers
 * Find the pair of adjacent elements that has the "largest product"
 * Return product
 */

function adjacentElementsProduct(arr: number[]): number{

    let max = arr[0] * arr[1];
    
    for (let i = 0; i < arr.length-1; i++) { // length-1 to avoid NullPointerException
        let multi = arr[i] * arr [i+1];
        if (multi > max)
            max = multi;
    }

    return max;
}

const testArr = [-3,1,8,5,-5,-9,7];

console.log(adjacentElementsProduct(testArr)); // 45

