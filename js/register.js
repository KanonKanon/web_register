$(function(){
    var error_name=false;
    var error_pwd=false;
    var error_cpwd=false;
    var error_email=false;
    var error_allow=false;

    $('#re_username').blur(function () { 
        check_username();
    });
    $("#re_username").focus(function () { 
        $(this).next().hide();
    });

    $('#re_pwd').blur(function () { 
        check_pwd();
    });
    $("#re_pwd").focus(function () { 
        $(this).next().hide();
    });

    $('#re_cpwd').blur(function () { 
        check_cpwd();
    });
    $("#re_cpwd").focus(function () { 
        $(this).next().hide();
    });

    $('#re_email').blur(function () { 
        check_email();
    });
    $("#re_email").focus(function () { 
        $(this).next().hide();
    });
    $('#register_check').click(function () { 
        if($(this).prop('checked')==true){
            error_allow=false;
            $('.register_check_box p').hide();

        }
        else{
            error_allow=true;
            $('.register_check_box p').html("请勾选同意！").show();
        }
        
    });


    function check_username(){
        var val=$('#re_username').val();
        var re=/^\w{5,15}$/i;

        if(val==""){
            $("#re_username").next().html("用户名不能为空！");
            $("#re_username").next().show();
            error_name=true;
            return;
        }

        if(re.test(val)){
            error_name=false;
        }
        else{
            error_name=true;
            $("#re_username").next().html("用户名是包含字母、数字、下划线的5到15位字符。");
            $("#re_username").next().show();

        }
    }

    function check_pwd(){
        var val=$('#re_pwd').val();
        var re=/^[a-zA-Z0-9@\?\.\*\#\!]{6,16}$/;

        if(val==""){
            $("#re_pwd").next().html("密码不能为空！");
            $("#re_pwd").next().show();
            error_pwd=true;
            return;
        }

        if(re.test(val)){
            error_pwd=false;
        }
        else{
            error_pwd=true;
            $("#re_pwd").next().html("密码是包含字母、数字(@?.#*!)的6到16位字符。");
            $("#re_pwd").next().show();
        }
    }

    function check_cpwd(){
        var pwd_val=$('#re_pwd').val();
        var val=$('#re_cpwd').val();

        if(val==""){
            $("#re_cpwd").next().html("确认密码不能为空！");
            $("#re_cpwd").next().show();
            error_cpwd=true;
            return;
        }
        else if(val!=pwd_val){
            $("#re_cpwd").next().html("确认密码与密码不相同!");
            $("#re_cpwd").next().show();
        }


       
    }

    function check_email(){
        var val=$('#re_email').val();
        var re=/^[\w\.]+@[\w]+\.[\w]{2,3}$/;

        if(val==""){
            $("#re_email").next().html("邮箱不能为空！");
            $("#re_email").next().show();
            error_email=true;
            return;
        }

        if(re.test(val)){
            error_email=false;
        }
        else{
            error_email=true;
            $("#re_email").next().html("请输入正确的邮箱地址！");
            $("#re_email").next().show();
        }
    }

    $('.re_submit').submit(function () { 
       check_username();
       check_pwd();
       check_cpwd();
       check_email(); 
       if(error_name||error_pwd||error_pwd||error_email||error_allow)
       {
           return false;
       }
    });


});