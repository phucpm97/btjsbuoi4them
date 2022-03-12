/** bai 1: ngày tiếp theo: TH1:nếu ngày nhỏ hơn 30 => cộng thêm 1ngày
 * TH2:nếu ngày=30 tháng nhỏ hơn 12  => cộng thêm 1 tháng và ngày =1
 * TH3: nếu ngày=30 tháng=12 => cộng thêm 1 năm và ngày vs tháng =1
 */
document.getElementById('btnKqDMY').onclick = function() {
    var a = document.getElementById('txtDate').value * 1;
    var b = document.getElementById('txtMonth').value * 1;
    var c = document.getElementById('txtYear').value * 1;
    if (a < 30) {
        var ngaytt = a + 1;
        var thangtt = b;
        var namtt = c;
    } else if (a == 30 && b < 12) {
        var thangtt = b + 1;
        var ngaytt = 1;
        var namtt = c
    } else if (a == 30 && b == 12) {
        var namtt = c + 1;
        var thangtt = 1;
        var ngaytt = 1;
    }
    console.log(ngaytt, thangtt, namtt);
    document.getElementById('KqDMY').innerHTML = ("Kết quả ngày tiếp theo là: ngày") + (ngaytt) + ("tháng") + (thangtt) + ("năm") + (namtt);

};

/** bai 1: hôm trước: TH1:nếu ngày nhỏ hơn 30 => trừ lại 1ngày
 * TH2:nếu ngày=1 tháng nhỏ hơn 12  => trừ lại 1 tháng và ngày =30
 * TH3: nếu ngày=1 tháng=1 => trừ lại 1 năm và ngày=30 vs tháng =12
 */
document.getElementById('btnKqDMYtruoc').onclick = function() {
    var a = document.getElementById('txtDate').value * 1;
    var b = document.getElementById('txtMonth').value * 1;
    var c = document.getElementById('txtYear').value * 1;

    if (a > 1) {
        var ngaytr = a - 1;
        var thangtr = b - 1;
        var namtr = c;
    } else if (a == 1 && b > 1) {
        var thangtr = b - 1;
        var ngaytr = 30;
        var namtr = c;
    } else if (a == 1 && b == 1) {
        var namtr = c - 1;
        var ngaytr = 30;
        var thangtr = 12;
    }
    console.log(ngaytr, thangtr, namtr);


    document.getElementById('KqDMYtruoc').innerHTML = ("Kết quả ngày hôm trước là: ngày") + (ngaytr) + ("tháng") + (thangtr) + ("năm") + (namtr);
};

/** bai 2: TH1 tháng có 31 ngày là tháng:(1,3,5,7,9,10,12) ;
 * TH2 tháng có 31 ngày là tháng:(4,6,8,11) ;
 * TH3 tháng 2 năm nhuận(năm chia hết cho 4) 29 ngày, năm ko nhuận 28 ngày
 */

document.getElementById('btnKqDMYb2').onclick = function() {;
    var a = document.getElementById('txtMonthb2').value * 1;
    var b = document.getElementById('txtYearb2').value * 1;
    var d = Math.floor(b / 4);
    if (a == 1 || a == 3 || a == 5 || a == 7 || a == 9 || a == 10 || a == 12) {
        var c = 31;
    } else if (a == 4 || a == 6 || a == 8 || a == 11) {
        var c = 30
    } else if (a == 2) {
        if (d == b / 4) {
            var c = 29;
        } else {
            var c = 28;
        }
    } else {
        var c = ("Tháng không hơp lệ")
    };
    console.log(a, b, c, d);
    document.getElementById('KqDMYb2').innerHTML = ("Số ngày trong tháng là: ") + (c);
};

/** bai 3: nhập số nguyên dương có 3 chữ số
 * b1 :tìm các giá trị của hàng trăm, hàng chục, hàng đơn vị 
 * tìm hàng trăm: sử dụng phép chia hết cho 100 (d)
 * hàng đơn vị: sử dụng phép chia cớ dư cho 10 (b)
 * hàng chục kết hợp 2 phép tính lại (c)
 * sau khi tìm được 3 giá trị thì sử dụng hàm switch gáng giá trị cho case từ 0 đến 10 theo tên chữ việt theo từng hàng
 * cưối cùng xuất giá trị ra
 */
document.getElementById('btnNumberb3').onclick = function() {;
    var a = document.getElementById('txtNumberb3').value * 1;
    var b = a % 10;
    var c = Math.floor(a / 10) % 10;
    var d = Math.floor(a / 100);
    switch (b) {
        case 0:
            { var dv = ("không"); break; }
        case 1:
            { var dv = ("một"); break; }
        case 2:
            { var dv = ("hai"); break; }
        case 3:
            { var dv = ("ba"); break; }
        case 4:
            { var dv = ("bốn"); break; }
        case 5:
            { var dv = ("lăm"); break; }
        case 6:
            { var dv = ("sáu"); break; }
        case 7:
            { var dv = ("bảy"); break; }
        case 8:
            { var dv = ("tám"); break; }
        case 9:
            { var dv = ("chín"); break; }
        default:
            { var dv = ("day la ko bit"); }
    };
    switch (c) {
        case 0:
            { var ch = ("lẻ"); break; }
        case 1:
            { var ch = ("mười"); break; }
        case 2:
            { var ch = ("hai mươi"); break; }
        case 3:
            { var ch = ("ba mươi"); break; }
        case 4:
            { var ch = ("bốn mươi"); break; }
        case 5:
            { var ch = ("năm mươi"); break; }
        case 6:
            { var ch = ("sáu mươi"); break; }
        case 7:
            { var ch = ("bảy mươi"); break; }
        case 8:
            { var ch = ("tám mươi"); break; }
        case 9:
            { var ch = ("chín mươi"); break; }
        default:
            { var ch = ("day la ko bit"); }
    };
    switch (d) {
        case 0:
            { var tr = ("không trăm"); break; }
        case 1:
            { var tr = ("một trăm"); break; }
        case 2:
            { var tr = ("hai trăm"); break; }
        case 3:
            { var tr = ("ba trăm"); break; }
        case 4:
            { var tr = ("bốn trăm"); break; }
        case 5:
            { var tr = ("năm trăm"); break; }
        case 6:
            { var tr = ("sáu trăm"); break; }
        case 7:
            { var tr = ("bảy trăm"); break; }
        case 8:
            { var tr = ("tám trăm"); break; }
        case 9:
            { var tr = ("chín trăm"); break; }
        default:
            { var tr = ("day la ko bit"); }
    }
    console.log(a, b, a, c, );
    document.getElementById('KqNumberb3').innerHTML = (tr) + (" ") + (ch) + (" ") + (dv);
};

/** bai 4: 
 * Nhập tên 3 học sinh theo thứ tự a,b,c
 * sau đó nhập tọa độ vị trí x,y theo thứ tụ học sinh a,b,c và tọa độ trường học
 * khoảng cách vị trí học sinh đến trường học được tính bằng công thức:căn bậc 2 của giá trị:(tọa độ x(học sinh) - tọa độ x(trường học)bình phương +(tọa độ y(học sinh) - tọa độ y(trường học)bình phương)
 * sau khi tính xong sẽ ra 3 giá trị tọa độ của 3 học sinh đến trường,dùng hàm tìm giá trị lớn nhất :Math.max sau đó đặt tên biến t đó
 * sử dụng hàm switch so sánh biến t so sánh giá trị của a,b,c giá trị nào lớn nhất tức là học sinh đó ở xa nhất
 * cưối cùng xuất giá trị ra
 */
document.getElementById('btnTdtrg').onclick = function() {
    var studentA = document.getElementById('txtName_A').value;
    var studentB = document.getElementById('txtName_B').value;
    var studentC = document.getElementById('txtName_C').value;
    var ax = document.getElementById('txtTdaX').value * 1;
    var ay = document.getElementById('txtTdaY').value * 1;
    var bx = document.getElementById('txtTdbX').value * 1;
    var by = document.getElementById('txtTdbY').value * 1;
    var cx = document.getElementById('txtTdcX').value * 1;
    var cy = document.getElementById('txtTdcY').value * 1;
    var cx = document.getElementById('txtTdcX').value * 1;
    var cy = document.getElementById('txtTdcY').value * 1;
    var dx = document.getElementById('txtTdtrgX').value * 1;
    var dy = document.getElementById('txtTdtrgY').value * 1;

    a = Math.sqrt((ax - dx) * (ax - dx) + (ay - dy) * (ay - dy));
    b = Math.sqrt((bx - dx) * (bx - dx) + (by - dy) * (by - dy));
    c = Math.sqrt((cx - dx) * (cx - dx) + (cy - dy) * (cy - dy));
    f = Math.max(a, b, c);
    switch (f) {
        case a:
            { var kq = ('học sinh xa trường nhất là: ') + (studentA); break; }
        case b:
            { var kq = ('học sinh xa trường nhất là: ') + (studentB); break; }
        case c:
            { var kq = ('học sinh xa trường nhất là: ') + (studentC); break; }
    }
    console.log(a, b, c, f);
    document.getElementById('KqTdtrg').innerHTML = (kq);
};