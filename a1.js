function showTime(){
    var d= new Date();
    var t= d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    console.log(t);
}
setInterval(showTime,1000);
/*terminate with ctrl+c*/