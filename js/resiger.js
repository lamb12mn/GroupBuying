

window.onload=function () {  
    var current = {
        phone:'',
        pass:'',
        passrepeat:''
    };
    //节点获取
    var phone =document.getElementsByName("phone");
    var span =document.getElementsByTagName("span");
    var code =document.getElementsByName("code");
    phone[0].onfocus=function () {  
        phone[0].style.border="1px solid #FFD000";
    }
    //判断手机号码
    phone[0].onblur=function () {  
        var phoneValue = phone[0].value;
        //判断手机号是否为空
        if(phoneValue === ''){
            console.log('手机号码不能为空');
            span[0].className = 'display-inline iconfont icon-gantanhao';
            span[0].innerHTML = "手机号码不能为空！";
            span[0].style.cssText='color:#ffb700;margin:0 10px';
        }
        //判断手机号码是否正确
        if(phoneValue!=''){
            //正则匹配
            // console.log(phoneValue);
            var off = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phoneValue);
            // console.log(off);    
            if(off){
                span[0].className = 'display-inline iconfont icon-gou1';
                span[0].innerHTML = '手机号码可以使用！';
                span[0].style.color='#5fcf94';
            }else{
                span[0].className = 'display-inline iconfont icon-cuowu';
                span[0].innerHTML = '请填写正确的手机号码！';
                span[0].style.color='red';
            }
        }
        current.phone=phoneValue;
        console.log(current.phone);
        // phone[0].style.border="1px solid #FFBD00"; 
    }
     //发送验证码
     var button = document.getElementsByTagName("button")[0];

     button.onclick=function(){
         //调用随机  随机函数
         span[1].className = 'display-inline ';
         span[1].innerHTML = randomNum(1000,9999);
     }
     function randomNum(minNum,maxNum){ 
        switch(arguments.length){ 
            case 1: 
                return parseInt(Math.random()*minNum+1,10); 
            break; 
            case 2: 
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
                default: 
                    return 0; 
                break; 
        } 
    }  
     //判定用户输入的内容是不是和code能匹配
     // 先判定是不是空 在判定能不能匹配
//判断手机号码
code[0].onfocus=function () {  
    code[0].style.border="1px solid #FFD000";
}
code[0].onblur=function () {  
    var codeValue = code[0].value;
    //判断手机号是否为空
    if(codeValue === ''){
        console.log('手机号码不能为空');
        span[2].className = 'display-inline iconfont icon-gantanhao';
        span[2].innerHTML = "手机号码不能为空！";
        span[2].style.cssText='color:#ffb700;margin:0 10px';
    }
    //判断手机号码是否正确
    if(codeValue!=''){
        //正则匹配
        // console.log(phoneValue);
     
        if(codeValue ==span[1].innerHTML){
            span[2].className = 'display-inline iconfont icon-gou1';
            span[2].innerHTML = '验证码可以使用！';
            span[2].style.color='#5fcf94';
        }else{
            span[2].className = 'display-inline iconfont icon-cuowu';
            span[2].innerHTML = '请填写正确的验证码！';
            span[2].style.color='red';
        }
    }else{
        span[2].className = 'display-inline iconfont icon-gantanhao';
        span[2].innerHTML = "验证码不能为空！";
        span[2].style.cssText='color:#ffb700;margin:0 10px';
    }
    // console.log(codeValue);
    // phone[0].style.border="1px solid #FFBD00"; 
}
     //判断密码
     var password = document.getElementById("password");
     var passrepeat =document.getElementsByName("passrepeat");
     var tips = document.getElementById("tips");
     var tipsB = tips.getElementsByTagName("b");
     //初始化字符串
     var aStr = ["弱","中","强","安全"];
     //判断用户输入键盘监听
     password.onkeyup=function(){
         // console.log(1);
         var passwordValue = password.value;
         var num = checkStrong(passwordValue);
         // log
         // console.log(num);
         switch(num){
             case 0:
                 tipsB[0].style.background="red";
                 tipsB[0].innerHTML = aStr[0];
             break;
             case 1:
                 tipsB[0].style.background="red";
                 tipsB[0].innerHTML = aStr[0];
             break;
             case 2:
                 tipsB[1].style.background="yellow";
                 tipsB[1].innerHTML = aStr[1];
             break;
             case 3:
                 tipsB[2].style.background="orange";
                 tipsB[2].innerHTML = aStr[2];
             break;
             case 4:
                 tipsB[3].style.background="green";
                 tipsB[3].innerHTML = aStr[3];
             break;
         }
        
         current.pass=password.value;
        var t = current.pass[current.pass.length-1];

      console.log(t);
     }
    
     function checkStrong(val){
         var modes =0;
         if(val.length<8) return 0;
         if(/\d/.test(val)) modes++;
         if(/[a-z]/.test(val)) modes++;
         if(/[A-Z]/.test(val)) modes++;
         if(/\W/.test(val)) modes++;
         if(val.length>20) return 4;
         return modes;
     }
     
     passrepeat[0].onfocus=function () {  
        passrepeat[0].style.border="1px solid #FFD000";
    }
     passrepeat[0].onblur=function () {  
     //判断两个密码是否一致
     if(passrepeat.value!=''){
        if(passrepeat.value ==password.value){
            span[4].className = 'display-inline iconfont icon-gou1';
            span[4].innerHTML = '密码一致！';
            span[4].style.color='#5fcf94';
        }else{
            span[4].className = 'display-inline iconfont icon-cuowu';
            span[4].innerHTML = '请填写正确的密码！';
            span[4].style.color='red';
        }
    }else{
        span[4].className = 'display-inline iconfont icon-gantanhao';
        span[4].innerHTML = "密码不能为空！";
        span[4].style.cssText='color:#ffb700;margin:0 10px';
    }
    current.passrepeat=passrepeat.value;
    console.log(current.passrepeat);
        
}
 //将获取到的注册信息添加到页面中
        //获取registerto节点
        var info =current.phone+"-"+current.pass;
        var registerto = document.getElementById('registerto');
        registerto.onclick=function(){
            //判断addrshow的值是不是空
            if(current.phone==""){ 
                alert('请先注册！');
            }else{  
                window.location.href = "./login.html?phone="+current.phone+"&password="+current.pass;
                // window.location.href = "./index.html?phone="+phone.value+"&name="+password.value;
                // window.location.href =encodeURI(encodeURI("./index.html?city="+addrshow.value));

            }
        }
}



