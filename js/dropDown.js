var headerNavFirst = document.getElementsByClassName("header-nav-first");
var headerNavFirstList = document.getElementsByClassName("haschild");
// console.log(headerNavFirstList);
//用户还没有触发事件呢 你自己就执行了 资源浪费
//封装函数
for(var i=0;i<headerNavFirstList.length;i++){
   if(i ==1){
       continue;
   }
   headerNavFirstList[i].onmouseover=function(){
         this.classList.add('show');
        //  console.log(1);
     }
    headerNavFirstList[i].onmouseout=function(){
         this.classList.remove('show');
        //  console.log(2);
     }
}
// 分类菜单
var dropRight = document.getElementById("dropright");

var dropRightList = document.getElementsByClassName("nav-li");
// console.log(dropRightList);
for(var i=0;i<dropRightList.length;i++){
    // console.log(1);
    dropRightList[i].onmouseover=function(){
        this.classList.add('show');
    }
    dropRightList[i].onmouseout=function(){
        this.classList.remove('show');
    }
}
