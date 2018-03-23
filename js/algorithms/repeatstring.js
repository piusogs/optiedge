function repeat(str,num){
    var newstr="";
    var n=0;
    while(n<num){
        newstr+=" "+str;
        n++;
    }
    return newstr;
}