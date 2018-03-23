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

function prepare(str){
  return str.toLowerCase(str);
}

function palindrone(str){
    if(prepare(str)===reverse(prepare(str))){
        return true;
    }
    else return false;
}