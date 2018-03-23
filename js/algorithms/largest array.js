function largest(arr){
    var max=arr[0];
    var n=0;
    while(n<arr.length-1){
        if(arr[n]>arr[n+1]){
            max=arr[n];
        }
        n++;
    }
    return max;
}


function largesOfFour(arr){
   var size=arr.lenght;
   var newarr=[];
   var n=0;
    while(n<size){
        newarr.push(largest(arr[n]))
        n++;
    }
    return newarr;
}