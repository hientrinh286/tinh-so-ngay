function date (){
    let month = +prompt('Nhập tháng bạn muốn hiển thị ngày: ');
    if (month>=1 && month<=12){
        if (month == 1 || month == 3 || month == 5 || month == 7 || month ==8 || month == 10 || month ==12) {
            document.getElementById('result').innerHTML='Ngày trong tháng ' + month + ' là: 31';
        }
        else if (month ==2){
            document.getElementById('result').innerHTML='Ngày trong tháng ' + month + ' là: 28';
        }
        else {
            document.getElementById('result').innerHTML='Ngày trong tháng ' + month + ' là: 30';
        }
    }
    else {
            alert('Bạn vui lòng nhập lại tháng');
    }
}