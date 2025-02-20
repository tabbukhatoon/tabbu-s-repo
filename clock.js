let timer=document.querySelector(".timer");
setInterval(output,1000);
function output(){
    let data=new Date();
    let h=data.getHours();
    let m=data.getMinutes();
    let s=data.getSeconds();
h=h<10?'0'+h:h;
m=m<10?'0'+m:m;
s=s<10?'0'+s:s;
timer.innerText=`${h}:${m}:${s}`;

}