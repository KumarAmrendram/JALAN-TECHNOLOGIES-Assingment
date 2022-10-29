function AltArrange(arr, size) {
    // temporary array to hold modified array
    let temp = new Array(size);
  
    let low = 0,
      high = size - 1; //setting indexes of lowest and highest number
  
    let flag = true;
  
    // Store result in temp[]
    for (let i = 0; i < size; i++) {
      if (flag) {
        temp[i] = arr[high];
        high--;
      } else temp[i] = arr[low++];
  
      flag = !flag;
    }
  
    // Copy temp[] to arr[]
    for (let i = 0; i < size; i++) {
      arr[i] = temp[i];
    }
  }
  
  // Driver code
  let arr = [2, 4, 6, 8, 10];
  let size = arr.length;
  
  console.log("Initial Array");
  var str = arr.join(" ");
  console.log(str);
  
  AltArrange(arr, size);
  
  console.log("Modified Array");
  for (let i = 0; i < size; i++) {
    console.log(arr[i] + " ");
  }
  