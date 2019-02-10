var lunbo_ul=document.getElementById("lunbo_ul");
var head=document.getElementById("head");
var page=document.getElementsByClassName("page_dian");
var a=0;
var timer=null;
autoplay();

head.onmouseover=function(){
    clearInterval(timer)
}
head.onmouseout=function(){
    autoplay()
}

function autoplay(){
    timer=setInterval(function () {
    a++;
    if(a>=7) {
        lunbo_ul.style.left = "0px";
        a=1; 
    }
        move(lunbo_ul,"left",-3.20*a);
        pageCSS()
    }, 3000)
}

function pageCSS(){
    for(var b=0;b<page.length;b++){
        page[b].style.background="none";
    }
    page[a===6?0:a].style.background="#fff";
}



function move(ele, dir, end) {
    clearInterval(ele.timer)
    if(dir==="left") {
        ele.timer=setInterval(function(){
            ele.style.left=ele.offsetLeft-0.30+"rem";
            if(ele.offsetLeft<=end){
                clearInterval(ele.timer);
                ele.style.left=end+"rem";
            }
        },20)
    }else{
        ele.timer=setInterval(function(){
            ele.style.left=ele.offsetLeft+0.30+"rem";
            if(ele.offsetLeft>=end){
                clearInterval(ele.timer);
                ele.style.left=end+"rem";
            }
        },20);
    }
}