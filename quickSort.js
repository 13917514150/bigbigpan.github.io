//快速排序数组

function fastSort(arr) {

    if (arr.length <2) {
        return arr;
    }

    const provit = arr[0];
    const left = [];
    const right = [];

    for(i =1; i < arr.length; i++)
    {
    if (arr[i]<provit) {
        left.push(arr[i]);
    } else {
        right.push(arr[i]);
    }
    }
    
    return fastSort(left).concat(provit,fastSort(right));
}

const sortToArry = [10, 230, 23, 20, 60, 7, 120, 90];
const sortAfterArry = fastSort(sortToArry);
console.log(sortAfterArry);