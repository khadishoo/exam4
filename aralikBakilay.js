// 1 task
let mon = parseInt(prompt("1-12 san jaz:"));

if (mon == 3 || mon == 4 || mon == 5) {
    alert("коктем");
} else if (mon == 6 || mon == 7 || mon == 8) {
    alert("жаз");
} else if (mon == 9 || mon == 10 || mon == 11) {
    alert("куз");
} else if (mon == 12 || mon == 1 || mon == 2) {
    alert("кыс");
} else {
    alert("qate jazdin. 1-12 arasinda bolu kerek");
}


// 2 task
let san1 = +prompt("birinshy san")
let san2 = +prompt("ekinshy san")

if (san1 > san2) {
    alert("birinshy san ulken")
}
else if (san1 < san2){
    alert("ekinshy san ulken")
}
else{
    alert("eki san ten")
}

let OrtMan = (san1 + san2) / 2;
alert("birinshy san men ekinshy sannin ortasha mani:" + OrtMan);


//3 task
let num1 = +prompt("birinshy san:")
let num2 = +prompt("ekinshy san:")
let num3 = +prompt("ushinshy san:")

let EnUlkenSan = 0
let EnKishkentaiSan = 0

switch (true) {
    case (num1 >= num2 && num1 >= num3):
        EnUlkenSan = num1
        break;
    case (num2 >= num1 && num2 >= num3):
        EnUlkenSan = num2
        break;
    case (num3 >= num1 && num3 >= num2):
        EnUlkenSan = num3  
        break; 
    default:
        alert("qate")
        break;
}

switch (true) {
    case (num1 <= num2 && num1 <= num3):
        EnKishkentaiSan = num1
        break;
    case (num2 <= num1 && num2 <= num3):
        EnKishkentaiSan = num2
        break;
    case (num3 <= num1 && num3 <= num2):
        EnKishkentaiSan = num3
        break;
    default:
        alert("qate")
        break;
}

alert("en ulken san:" + EnUlkenSan + '\n' + "en kishkenyay san:" + EnKishkentaiSan + '\n' + "airmasy:" + (EnUlkenSan - EnKishkentaiSan))












