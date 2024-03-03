// // 1-masala
// let ism = "aSrorbek";
// console.log(ism[0].toLocaleUpperCase() + ism.slice(1).toLocaleLowerCase());


// // 2-masala
// let text = "text";
// console.log(text[3]+text[2]+text[1]+text[0]);

// // 3-masala

// let surName = "Hamidjonov";
// console.log(surName.length);


// var AsrorWeight = +prompt("Vazningiz kiriting");
// var AsrorHeight = +prompt("Bo'yingiz kiriting");
// var AsrorBmi = AsrorWeight / (AsrorHeight **2);
// console.log(AsrorBmi);


// if(AsrorBmi < 18.5){
//     console.log("Ozg'in");
// }
// else if(18.5 < AsrorBmi && AsrorBmi < 24.9){
//     console.log("Normal");
// }
// else if(25 < AsrorBmi && AsrorBmi < 29.9){
//     console.log("Semizroq");
// }
// else if(30 < AsrorBmi && AsrorBmi < 34.9){
//     console.log("Semiz");
// }
// else if(AsrorBmi > 35){
//     console.log("Juda semiz");
// }

// Alisher masalasi
// let dollar = 11000.34 ;
// let euro = 12354.03;
// let alisher_money = prompt("Alisher sizda qancha pul bor ?");
// let airplane_bilet = Math.round(500*dollar); // 
// let hotel = Math.round(250*dollar); // 
// let museum = Math.round(120*euro); // 
// let total_price = airplane_bilet+hotel+museum;
// // console.log(total_price);
// if (alisher_money-total_price>0){
//     console.log("Oq yo'l Alisher");
// }
// else{
//     console.log("Alisher sabr");
// }

// For
// let i = 0;
// for(i=1; i<10; i += 2){
//     console.log(i);
// }

// While

// let i = 0;
// while (i<10) {
//     console.log(i);
// }


// Do while

// let i = 0;
// do{
//     console.log(i);
//     i += 2;
// } while(false);

// let number = +prompt("Enter a number");
// let i = 0;
// for (let i = 1; i < 11; i++) {
//     console.log(`${number} * ${i} = ${number*i}`);
// }

// Homework


var number1 = +prompt("Birinchi sonni kiriting:");
var number2 = +prompt("Ikkinchi sonni kiriting:");
var action = prompt("Amalni kiriting (+, -, *, /):");

var ruselt;

switch(action) {
    case "+":
        ruselt = number1 + number2;
        break;
    case "-":
        ruselt = number1 - number2;
        break;
    case "*":
        ruselt = number1 * number2;
        break;
    case "/":
        if (number1 !== 0 && number2 !==0 ) {
            ruselt = number1 / number2;
        } else {
            ruselt = "Nolga bo'lib bo'lmaydi";
            break;
        }
        break;
    default:
        ruselt = "Noto'g'ri amal";
    }
console.log("Natija: ", ruselt, " ga teng");