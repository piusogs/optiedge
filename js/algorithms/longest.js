function longest(arr){
    var max=arr[0];
    var n=0;
    while(n<arr.length-1){
        if(arr[n].length>arr[n+1].length){
            max=arr[n];
        }
        n++;
    }
    return max;
}



function longeststring(str){
    return longest(str.split(" "));
}