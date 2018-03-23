function reverse(str){
    var newstr="";
    if(str.length===0){
        return "";
    }
    else{
        for(var n=str.length-1;n>=0;--n){
            newstr+=str[n];
        }
        return newstr;
    }
}