
const n=100;
let sum=0;
let i;
for(i=2;i<=n;i++){
     let isPrime=true;
    for(let y=2;y<i;y++){
       if(i%y == 0){
          isPrime=false;
          break;
       }
    }
     if(isPrime){
        sum =sum+i;
    }
}

console.log("sum==>>",sum);