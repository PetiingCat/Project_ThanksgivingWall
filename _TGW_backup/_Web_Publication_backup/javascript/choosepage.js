/*當格子被點選後，連結至報名表單頁(注意若更改頁面名稱後，此網址也要更換)*/
function LinkTo_BookingPage(pos) {
    /*此連結使用HTTP GET require傳送參數，請保留?pos='+pos*/
    window.location.href = 'BookingPage.php?pos='+pos;
}

/*依據DB回傳之位置狀態的不同，給予不同的顯示調整*/
function show_state(x, status, pos){
    switch(status){
        case '0':
            x.innerHTML='<center>'+pos+':空位<br></center>';
            break;
        case '1':
            x.innerHTML='<center>'+pos+':已被劃記<br></center>';
            break;
        case '-1':
            x.innerHTML='<center>'+pos+':正被選取<br></center>';
            break;
        default:
            x.innerHTML='<center>'+pos+'<br>Something wrong!</center>';
    }

}

/*當滑鼠離開格子之後，讓顯示恢復原設定*/
function set_origin(x, pos){
    x.innerHTML=pos;
}

// var zone_js = location.search;
// 根據ID插入html
// function insert_div(){
//     var insertDiv = document.getElementById("id");
//     insertDiv.innerHTML = "";
// }
