ar.splice(vị trí, số lượng): xóa
mang3= mang2.concat(mang1): ghép
mang.indexOf("cái muốn tìm")= vị trí của cái muốn tìm

đổi giá trị dùng hàm map
mang2=mang1.map(function(blabla){
    if(blabla.id==1){
        blabla.name="python";
    }
    return blabla;
})

thêm 1 phần tử vào cuối: mang.push("alo")
thêm 1 phần tử vào đầu: mang.unshift("alo")
lấy đi phần tử cuối: let last = mang.pop()
lấy đi phần tử đầu: let last = mang.shift()
sắp xếp mang.sort()
đảo thứ tự: mang.reverse()
in ra độ dài: mang.length