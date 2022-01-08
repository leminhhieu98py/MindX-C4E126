//index
let name = prompt("nhap ten")

const fruits = [
    "Banana",
    "Orange",
    "Apple",
    "Mango",
    ["Dau da lat", "Dau tam", "Dau tay"],
];

//array
//CRUD  Create - Read - Update - Delete - Find

let danh_sach_dau = fruits[4]; //day la 1 array

//Create
fruits.push(["Dua hau", "Dua leo", "Dua"]);

//Update
fruits[0] = "Chuoi tay";
fruits[4][1] = "Dau tam tim";

//Delete
delete fruits[0]
console.log(fruits.length)
fruits.splice(0, 1);
console.log(fruits.length)


//Read
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
