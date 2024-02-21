//冒泡排序算法

function bubbleSort(arr) {
    const n = arr.length;

    for(let i = 0; i < n-1; i++)
    {
        for (let j =0; j<n-1-i;j++)
        {
            
            if(arr[j]> arr[j+1])
            {
                const temp = arr[j];
                arr[j] = arr [j+1];
                arr[j+1]= temp;
            }
        }
    }
    return arr;


    
}

const arrBeforeSort = [11, 23, 45, 34, 45, 50, 90, 100];
const arrAfterSort = bubbleSort(arrBeforeSort);
console.log(arrAfterSort);