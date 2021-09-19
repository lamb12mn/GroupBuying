// window.onload=function () {  
    var current = {
        phone:'',
        pass:''
    };
    //节点获取
    var phone =document.getElementsByName("phone");
    var span1 =document.getElementById("span1");
    phone[0].onfocus=function () {  
        phone[0].style.border="1px solid #FFD000";
    }
    //判断手机号码
    phone[0].onblur=function () {  
        var phoneValue = phone[0].value;
        //判断手机号是否为空
        if(phoneValue === ''){
            // console.log('手机号码不能为空');
            span1.className = 'display-inline iconfont icon-gantanhao';
            span1.innerHTML = "手机号码不能为空！";
            span1.style.cssText='color:#ffb700;margin:0 10px';
        }
        //判断手机号码是否正确
        if(phoneValue!=''){
            //正则匹配
            // console.log(phoneValue);
            var off = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phoneValue);
            // console.log(off);    
            if(off){
                span1.className = 'display-inline iconfont icon-gou1';
                span1.innerHTML = '手机号码可以使用！';
                span1.style.color='#5fcf94';
            }else{
                span1.className = 'display-inline iconfont icon-cuowu';
                span1.innerHTML = '请填写正确的手机号码！';
                span1.style.color='red';
            }
        }
        current.phone=phoneValue;
        // console.log(current.phone);
    }
    //节点获取
    var password =document.getElementsByName("password");
    var span2 =document.getElementById("span2");
    
    password[0].onkeyup=function(){
        password[0].onfocus=function () {  
            password[0].style.border="1px solid #FFD000";
        }
    password[0].onblur=function () {  
        var passwordValue = password[0].value;
        //判断密码是否为空
        if(passwordValue === ''){
            console.log('密码不能为空');
            span2.className = 'display-inline iconfont icon-gantanhao';
            span2.innerHTML = "密码不能为空！";
            span2.style.cssText='color:#ffb700;margin:0 10px';
        }
        //判断密码是否正确
        if(passwordValue!=''){
            span2.className = 'display-inline iconfont icon-gou1';
            span2.innerHTML = '密码可以使用！';
            span2.style.color='#5fcf94';
        }else{
            span2.className = 'display-inline iconfont icon-cuowu';
            span2.innerHTML = '请填写正确的密码！';
            span2.style.color='red';
        }
        current.pass=passwordValue;
        // console.log(current.pass);
        }
       
    }

    //判断密码
    // var password = document.getElementsByName("password");
    // //判断用户输入键盘监听
    // password.onkeyup=function(){
    //     var passwordValue = password.value;
    //     current.pass=password.value;
    //     var t = current.pass[current.pass.length-1];

    //     console.log(t);
    // }
    var loginto = document.getElementById("loginto")
    loginto.onclick=function(){
        // console.log(111)
        window.location.href = "./index.html?info="+current.phone+"-"+current.pass;
    }  
    // 获取城市信息


// }
   



    