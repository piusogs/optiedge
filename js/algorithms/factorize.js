function factorize(n){
    if(n===0){
        return 1;
    }
    return n * factorize(n-1);
}