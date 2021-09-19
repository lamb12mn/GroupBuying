        //节点获取
        var sliderContent = document.getElementsByClassName("slider-content");
        var image = document.getElementById("image");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var link = document.getElementById("links");
        var numberList = document.getElementById("number").getElementsByTagName("li");
        //初始化准备
        var add =0;
        image.src="./img/bg1.jpg";
        // numberList[0].style.background="#fff";
        numberList[0].style.opacity=1;
        var arr = ["http://www.baidu.com","http://www.jd.com","http://www.taobao.com","http://www.tianmao.com","http://www.meituan.com"]
        link.href="http://www.baidu.com";
        function dot(){
            image.src = "./img/bg"+add+".jpg";
            var x =add-1;
                for(var j=0;j<numberList.length;j++){
                    numberList[j].style.background="#fff";
                    numberList[j].style.opacity=0.5;
                    if(x==j){
                        numberList[j].style.opacity=1;
                    }
                }
        }
        //轮播效果
        function lunbo(){
            //函数内的局部变量  不用var声明就是全局变量
            lun = setInterval(function(){
                add+=1;
                if(add>5){
                    add=1;
                }
                //绑定网址
                link.href=arr[add-1];
                //封装成函数调用
                // var x =add-1;
                // for(var j=0;j<numberList.length;j++){
                //     numberList[j].style.background="#fff";
                //     numberList[j].style.opacity=0.5;
                //     if(x==j){
                //         numberList[j].style.opacity=1;
                //     }
                // }
                dot();
            },2000)
        }
        //移动到轮播区域停止调用
        sliderContent.onmouseover=function(){
            clearInterval(lun);
        }
        sliderContent.onmouseout=function(){
            lunbo();
        }
        //点击左右箭头切换图片
        left.onclick=function(){
            add-=1;
                if(add<1){
                    add=5;
                }
                dot();
        }
        right.onclick=function(){
            add+=1;
                if(add>5){
                    add=1;
                }
                dot();
        }
        //移动到对应的li上面切换图片
        // numberList[0].onmouseover=function(){
        //     image.src = "./images/ad0"+1+".jpg";
        // }
        for(var i=0;i<numberList.length;i++){
            numberList[i].onmouseover=function(){
                add = this.innerHTML;
                dot();
                clearInterval(lun);
              
            }
            numberList[i].onmouseout=function () {  
                //调用轮播函数
                lunbo();
            }   
        }   
        lunbo();
       