function solution(n) {
    var nr = 1;
    if(n==1) return 1;
    else{
        for(let i=1;i<=n;i++){
            nr = nr+i*4-4;
        }
        return nr;
    }
}