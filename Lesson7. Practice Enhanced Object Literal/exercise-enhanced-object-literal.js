// Thực hành sử dụng Enhanced object literals
// Cập nhật tháng 6 năm 2022

// Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.

// Gợi ý: Sử dụng phương thức reduce


function arrToObj(arr) {
    return arr.reduce((a,b)=>{
    return {...a,[b[0]]:b[1]}
    },{})
    }

// Expected results:
/**
const obj1 = arrToObj([
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
])
console.log(obj1)
Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
   ['name', 'Duc Long'], 
   ['age', 18], 
   ['address', 'Ha Noi']
])
console.log(obj2)
Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
*/
