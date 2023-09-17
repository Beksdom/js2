var age = prompt("Введите ваш возраст в цифрах:");

if (age > 0 && age <= 18) {
    alert("Вы еще молоды, Вам нужно учиться");
} else if (age > 18 && age <= 50) {
    alert("Вам нужно работать");
} else if (age > 50 && age <= 59) {
    alert("Вам скоро на пенсию");
} else if (age > 59 && age <= 100) {
    alert("Вы пенсионер");
} else {
    alert("Что-то пошло не так");
}

var time = prompt("Введите время в цифрах:");

switch (time) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
        alert(time + " часа ночи");
        break;
    case "7":
    case "8":
    case "9":
    case "10":
        alert(time + " часов утра");
        break;
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
        alert(time + " часов дня");
        break;
    case "16":
    case "17":
        alert(time + " часов дня");
        break;
    case "18":
    case "19":
    case "20":
    case "21":
    case "22":
    case "23":
        alert(time + " часов вечера");
        break;
    default:
        alert("Что-то пошло не так");
}

var num1 = prompt("Введите первое число:");
var num2 = prompt("Введите второе число:");
var num3 = prompt("Введите третье число:");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

var middleNum;

if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    middleNum = num1;
} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    middleNum = num2;
} else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)) {
    middleNum = num3;
}

alert("Среднее число: " + middleNum);