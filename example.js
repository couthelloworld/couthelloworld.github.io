var user = prompt("剪刀，石頭，布");
var cpt = Math.random();
if(cpt<=1/3){
    cpt = "剪刀"
}
else if(cpt<=2/3){
    cpt = "石頭"
}
else{
    cpt = "布"
}
compare(user,cpt)
function compare(user,cpt){
    if((user=="剪刀"&&cpt=="布")||(user=="石頭"&&cpt=="剪刀")||(user=="布"&&cpt=="石頭")){
        alert("你贏了")
    }
    else if((user=="剪刀"&&cpt=="剪刀")||(user=="石頭"&&cpt=="石頭")||(user=="布"&&cpt=="布")){
        alert("平手")
    }
    else if((user=="剪刀"&&cpt=="石頭")||(user=="石頭"&&cpt=="布")||(user=="布"&&cpt=="剪刀")){
        alert("你輸了")
    }
    else{
        alert("不要亂")
    }
}