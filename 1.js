/* bài 3
function tinh_dien_tich() {
    let a = Number(prompt('Mời bạn nhập A'));
    let b = a*4;
    document.getElementById('bai3').innerHTML = 'Diện tích hình vuông là '+ b;
}

tinh_dien_tich();

 */
/*Bài 6
let a = Number(prompt('Mời bạn nhập A'));
let b = Number(prompt('Mời bạn nhập B'));
if(a==0&& b==0){
    alert('Pt vô số nghiệm');
}
else if(a==0){
    alert(' Phương trình vô nghiệm')
}
else if (a>0||a<0){
    let x= -b/a;
    alert(' Phương trình có nghiệm là: '+ x);
}
*/

// Bài 10 Tính tiền điện
/*let so_dien= Number(prompt('Mời bạn nhập số điện'));
let tien;
if(so_dien<=100){
    tien= so_dien *450;
}
else if(101<so_dien<150){
    tien= so_dien *750;
}
else{
    tien=so_dien*950;
}
alert(tien);
 */

//Bài 11 tính thuế thu nhập cá nhân
/*
let tien=Number(prompt('Mời bạn nhập số tiền: '));
let muctien = [5,10,18,32,52,80];
let thue = [0.5,0.1,0.15,0.2,0.25,0.3,0.35];
let thanh_toan;

for(let i =0; i < muctien.length-1; i++ ){
    if (tien <= muctien[0]){
        thanh_toan=tien * thue[0] + tien;
    }
    else if(tien>muctien[0]&& tien<=muctien[1]){
        thanh_toan=tien * thue[1] + tien;
    }
    else if(tien>muctien[1]&& tien<=muctien[2]){
        thanh_toan=tien * thue[2] + tien;
    }
    else if(tien>muctien[2]&& tien<=muctien[3]){
        thanh_toan=tien * thue[3] + tien;
    }
    else if(tien>muctien[3]&& tien<=muctien[4]){
        thanh_toan=tien * thue[4] + tien;
    }
    else if(tien>muctien.length-1){
        thanh_toan=tien * thue[5] + tien;
    }
}
alert('Tiền cần thanh toán là:' + thanh_toan);
 */

//Bài 12
let tien = Number(prompt("Số tiền mà bạn muốn gửi: "));
let so_thang = parseInt(prompt("Số tháng mà bạn muốn gửi: "));
let thang = [1, 2, 3, 6, 9, 12, 24, 36, 48, 60];
let phan_tram = [0.3, 0.4, 0.5, 0.75, 0.85,];
let tong_tien;

for (let i = 0; i < thang.length - 1; i++) if (so_thang <= thang[1]) {
    tong_tien = tien * phan_tram[0] + tien;
} else if (thang[2] <= so_thang < thang[3]) {
    tong_tien = tien * phan_tram[1] + tien;
} else if (thang[3] <= so_thang < thang[4]) {
    tong_tien = tien * phan_tram[2] + tien;
} else if (thang[5] <= so_thang < thang[6]) {
    tong_tien = tien * phan_tram[3] + tien;
} else {
    tong_tien = tien * phan_tram[4] + tien;
}
;
alert(' Tiền sau khi lãi mẹ đẻ lãi con là: ' + tong_tien);
