//登录
$('#logusername').focus(function(){
	$('.log').css('display','none');
});
$("#loginBut1").click(function(){
	var logusername = $("#logusername").val();
	var logpwd = $("#logpwd").val();
	var passWord = JSON.parse(localStorage.getItem(logusername)).pwd;
	if (passWord!=false&&passWord==logpwd){
		window.location.href = "index.html";
	}else{
		$('.log').css('display','block');
	}
})
$('#logreg').click(function(){
	window.location.href = "register.html";
})

//注册
$("#loginBut2").click(function(){
	var username = $("#username").val();
	var pwdone = $("#pwdone").val();
	var pwdtwo = $("#pwdtwo").val();
	var reg = /^[1-9a-zA-Z]{6,14}$/;
	var pd = true;
	$.each(localStorage, function(a,b) {
		if(a==username){
			pd = false;
			return true;
		}
	});
	if(pd){
		$('.reg-name').css('display','none');
		if(pwdone.match(reg)){
			$('.reg-ts').css('display','none');
			if(pwdone == pwdtwo){
				var data = {};
				data.username = username;
				data.pwd = pwdone;
				var jondata = JSON.stringify(data);
				console.log(JSON.stringify(data))
				console.log(JSON.parse(JSON.stringify(data)))
				$('.reg-pwd').css('display','none');
				if (localStorage.setItem){
					localStorage.setItem(data.username,jondata);
					alert('注册成功,请点击确认');
//					window.location.href = "login.html";
				}else{
					console.log('程序有误，请刷新');
				}
			}else{
				$('.reg-pwd').css('display','block');
			}
		}else{
			console.log(pwdone)
			$('.reg-ts').css('display','block');
		}
	}else{
		$('.reg-name').css('display','block');
		console.log('false')
	}
})
$('#reglog').click(function(){
	window.location.href = "login.html";
})