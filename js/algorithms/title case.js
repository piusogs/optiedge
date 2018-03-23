function titlecase(str){
    var arr=str.split(" ");
 arr= arr.map(function(st){
 return st.replace(st[0],st[0].toUpperCase());
    })
    return arr.toString().replace(","," ");
}

