// console.log("nhap vao mot phep tinh");

let a = prompt("phep tinh thuc hien boi =, -, *,/");
let b = Number(prompt("nhap so thu nhat"));
let c = Number(prompt("nhap so thu hai"));



let result;
if (a === "+") {
    result = a + b;
    console.log("ket qua phep tinh" + b + "+" + c + "=" + "result");
}else if (a === "-") {
    result = a - b;
    console.log("ket qua phep tinh" + b + "-" + c + "=" + "result");
}else if (a === "*") {
    result = a * b;
    console.log("ket qua phep tinh" + b + "*" + c + "=" + "result");
}else if (a === "/") {
    result = a / b;
    console.log("ket qua phep tinh" + b + "/" + c + "=" + "result");
}

// xác định số nguyên tố


let defaultNumber;
let validNumber = false;
while (!validNumber) { //khi số không hợp lệ
    defaultNumber = Number(prompt("Vui lòng nhập vào 1 số nguyên"));
    validNumber = Number.isInteger(defaultNumber); //is number js
    if (!validNumber) {//khi số không hợp lệ
        alert("Đây không phải là số nguyên");
    }
}

kiemTraSoNguyenTo(defaultNumber);

function kiemTraSoNguyenTo(number) { //hoisting
    let result = true;

    //kết quả biến result
    if (number < 2) {
        result = false;
    } else if (number === 2) {
        result = true;
    } else {
        for (let i = 2; i < number; i++) {
            console.log(i);
            if (number % i === 0) {
                result = false;
                break;
            }
        }
    }

    // log ra kết quả theo biến result 
    if (result) {
        console.log("Đây là số nguyên tố");
    } else {
        console.log("Đây không phải là số nguyên tố");
    }
}
