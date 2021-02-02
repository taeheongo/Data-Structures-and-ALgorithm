// fibonacci[i] = fibonacci[i-1] +  fibonacci[i-2]; (i 0~19)

let fibonacci=[0, 1];
for (let i = 2; i<20; i++){
    fibonacci[i]=fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci);

let fibonacci2=[0, 1];
for (let i = 0; i<18; i++){
    fibonacci2[i+2]=fibonacci2[i+1] + fibonacci2[i];
}
console.log(fibonacci2);