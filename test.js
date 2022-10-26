arr = [2,4,6,8,10];

function max(arr){
    let max = arr[0];

    for (let i = 1;i<5;i++){
        if (max < arr[i]){
            max=arr[i];
        }
    }
    console.log(max);
    // arr.pop();
}
function min(arr){
    let min = arr[0];
    let index;

    for (let i = 1;i<5;i++){
        if (min > arr[i]){
            min=arr[i];
            index = i;
        }
    }
    console.log(min);
    delete arr[index];
}

max(arr);
min(arr);
min(arr);

