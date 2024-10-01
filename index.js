let m=prompt("enter m:");
let n=prompt("enter n:");
let sum=0;
for(let i=m;i<=n;i++){
    if(m>n){
        console.log("0");
    }
    else{
        sum+=i*i*i;
        if(i==n){
            console.log(sum);
        }
    }
}

