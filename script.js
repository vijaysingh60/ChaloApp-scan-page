let scan = document.getElementById("scan1");
change();
function change(){
    var date = new Date();
    var time = date.getHours()*60*60 + date.getMinutes()*60 + date.getSeconds();

    scan.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+"wKLJPV6UwiD4v1q0NRHzuw==Z1684853342"+time;
    setTimeout(change,1000);
}
