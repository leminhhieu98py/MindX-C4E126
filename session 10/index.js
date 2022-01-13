const user = {
    ten: 'tung',
    tuoi: 20,
    banBe: ['vy', 'tung', 'tuan'],
    diaChi: {
        tinh: 'HCM',
        quan: 'Q1'
    },
};

// a, in ra array bạn bè
// b, người bạn cuối cùng tên là gì
// c, in ra địa chỉ của user
// d, user ở quận nào, tỉnh nào
// e, hãy thêm đường = 'nguyễn tuân' vào địa chỉ của user
// f, hãy thêm 'thái' vào danh sách bạn của user


// for (let i = 0; i < user.banBe.length; i++) {
//     console.log(user.banBe[i])
// }

// let lastIndex = user.banBe.length - 1
// console.log(user.banBe[lastIndex])


// for (const key in user.diaChi) {
//     console.log(user.diaChi[key])
// }

// console.log("Quan " + user.diaChi.quan + " - Tp " + user.diaChi.tinh);

// user.diaChi.duong = "Nguyen Tuan"

user.banBe.push("Thai")
console.log(user)