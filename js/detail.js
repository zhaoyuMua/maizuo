var synop=document.getElementById("synopsis");
var xiala=document.getElementById("xiala");
var syflag=true;
xiala.onclick=function(){
    if(syflag){
        synop.style.height="1.38rem";
        xiala.style.top="2.93rem";
        syflag=false;
    }else{
        synop.style.height="0.38rem";
        xiala.style.top="1.43rem";
        syflag=true;
    }
};




