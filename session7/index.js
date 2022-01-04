// bai 1

// let firstname = prompt("Vui long nhap ho cua ban")
// let lastname = prompt("Vui long nhap ten cua ban")
// let fullname = firstname + " " + lastname
// alert("Xin chao " + fullname)


//bai 2

// let a = Number(prompt("Nhập số tự nhiên thứ nhất")) //ép kiểu từ String sang Number
// let b = Number(prompt("Nhập số tự nhiên thứ hai"))
// let c = Number(prompt("Nhập số tự nhiên thứ ba"))
// let sum = a + b + c
// alert(sum)

// bài 3
// let a = Number(prompt("Nhập số tự nhiên là cạnh góc vuông 1"))
// let b = Number(prompt("Nhập số tự nhiên là cạnh góc vuông 2"))
// let c = Math.sqrt(a*a + b*b) //phép căn
// console.log("Chieu dai canh huyen la: " + c)


// bài 5
let year = Number(prompt("Nhập vào năm"))

//câu điều kiện
if(year % 4 == 0 && year % 100 != 0){
    alert("Đây là năm nhuận")
}else{
    alert("Đây không phải là năm nhuận")
}