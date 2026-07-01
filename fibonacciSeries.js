function fibonacciSeries(n){
    let a= 0 ;
    let b=1;
    let fib=[]
    for(let i=0; i<n; i++){
        fib[i]=a;
        let c =a+b;
        a=b;
        b=c;
    }
    return fib;

}
console.log(fibonacciSeries(10))

