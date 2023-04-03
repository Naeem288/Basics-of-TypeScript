// if
let s = 5;
if (s>5){
    console.log("value of `s` is greater then 5");
}

// if else
let h = 5;
if (h>5){
    console.log("value of `s` is greater then 5");
}
else{
console.log("value is lesser then 5");

}

// if else if
let k = 'u';
if (k=='a' || k == 'A')
console.log("Vowel");
else if (k=='e' || k == 'E')
console.log("Vowel");
else if (k=='i' || k == 'I')
console.log("Vowel");
else if (k=='o' || k == 'O')
console.log("Vowel");
else if (k=='u' || k == 'U')
console.log("Vowel");
else 
console.log("not vowel");

// Nested if
let country,age2;
country = "England";
age2 = 30;
if (country == "England"){
    if (age2 == 30){
        console.log("Access granted, your fee is 30000");
    }else{
        console.error("Access Denied, Sorry ");
    }
}
else if(country == "Pakistan") {
    if(age2>=18){
        console.log("Access granted, your fee is 0") 
    }else{
        console.error("Access Denied, Sorry ");
    }
} else{
    console.error("Access Denied, Sorry ");
}

