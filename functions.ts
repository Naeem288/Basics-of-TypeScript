// Functions
function msg(name:string){
    console.log("your name is "+ name); 
}
/*Functions with return type, "Note_Rule" defining return type is optional means that 
if you are not going to define the return type transfiler will detect the return type on the base
of return value.*/
function compareNumber(k1: Number,k2 :number):boolean{
    return (k1 == k2);
    }
// Arrow fuction / new way of fucntion defining ,declare with "let" or "Const"
let arrowFun=() => {
    console.log("this is a arrow function");
}

// Arrow fuction with return value, new way of fucntion defining ,declare with "let" or "Const"
let arrowFun1=(n: number) => {
    return n * 3;
    console.log("this is a arrow function with return value");
}

// Functions with return type and with default value, "Note" always define 2nd value as a default 
function multi(k1:number,k2:number = 3){
    return k1 * k2;
    }

// Functions with return type and with default value, "Note" always define 2nd value as a default 
function opionalParams(k1:number,k2:number = 3, k3?:number){
    console.log(`your given values \n${k1}\n${k2}\n ${k3}`);
    }
// Rest Operator in typesript, "Note" rest values must be given at last like optional values.
function sum(...rest: number[]){
    let addition = 0;
    for( let i in rest){
        addition+=rest[i];
    }
    console.log(`Sum = ${addition}`);
}
// Functions Calling Area
msg("Naeem");
let isequal = compareNumber(10,20);
console.log(isequal);
arrowFun();
console.log(arrowFun1(5));
let mulresult = multi(3);
console.log(mulresult);
opionalParams(5,3)
sum(10,20,50);

