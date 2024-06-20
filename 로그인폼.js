$(function(){
    let userId = $('#userid'),
        userPw = $('#userpw'),
        loginBtn = $('#login-btn');

    loginBtn.click(function(){
        if(userId.val() == ''){
            userId.next('span').addClass('warning');
            setTimeout(function(){
                userId.next('span').removeClass('warning');
            }, 1500);
        }else if(userPw.val() == ''){
            userPw.next('span').addClass('warning');
            setTimeout(function(){
                userId.next('span').removeClass('warning');
            }, 1500);
        }
    })
    
})