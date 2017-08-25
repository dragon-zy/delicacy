$(function(){
	$('#home').click(function(){
		$(this).attr('class','foo-sel');
		$(this).siblings().attr('class','');
		$(this).find("img").attr('src','img/home copy 4@3x.png');
		$('#delic').find("img").attr('src','img/food@3x.png');
		$('#classroom').find("img").attr('src','img/class@3x.png');
		$('#my').find("img").attr('src','img/home@3x.png');
//		$('#home-text').css('display','block');
//		$('#delic-text').css('display','none');
//		$('#classroom-text').css('display','none');
//		$('#my-text').css('display','none');
	});
	$('#delic').click(function(){
		$(this).attr('class','foo-sel');
		$(this).siblings().attr('class','');
		$(this).find("img").attr('src','img/home copy 2@3x.png');
		$('#home').find("img").attr('src','img/me@3x.png');
		$('#classroom').find("img").attr('src','img/class@3x.png');
		$('#my').find("img").attr('src','img/home@3x.png');
//		$('#home-text').css('display','none');
//		$('#delic-text').css('display','block');
//		$('#classroom-text').css('display','none');
//		$('#my-text').css('display','none');
	});
	$('#classroom').click(function(){
		$(this).attr('class','foo-sel');
		$(this).siblings().attr('class','');
		$(this).find("img").attr('src','img/home copy 3@3x.png');
		$('#home').find("img").attr('src','img/me@3x.png');
		$('#delic').find("img").attr('src','img/food@3x.png');
		$('#my').find("img").attr('src','img/home@3x.png');
//		$('#home-text').css('display','none');
//		$('#delic-text').css('display','none');
//		$('#classroom-text').css('display','block');
//		$('#my-text').css('display','none');
	});
	$('#my').click(function(){
		$(this).attr('class','foo-sel');
		$(this).siblings().attr('class','');
		$(this).find("img").attr('src','img/home copy@3x.png');
		$('#home').find("img").attr('src','img/me@3x.png');
		$('#delic').find("img").attr('src','img/food@3x.png');
		$('#classroom').find("img").attr('src','img/class@3x.png');
//		$('#home-text').css('display','none');
//		$('#delic-text').css('display','none');
//		$('#classroom-text').css('display','none');
//		$('#my-text').css('display','block');
	});
	
	$(".cla-center").on("swipeleft",function(){
		$(".cla-center1").animate({'left':'-3.75rem'},100);
		$(".cla-center2").animate({'left':'0'},100);
		$('.cla-head div:first-child').attr('class','');
		$('.cla-head div:last-child').attr('class','cla-head-h');
	});
	$(".cla-center").on("swiperight",function(){
		$(".cla-center1").animate({'left':'0'},100);
		$(".cla-center2").animate({'left':'3.75rem'},100);
		$('.cla-head div:first-child').attr('class','cla-head-h');
		$('.cla-head div:last-child').attr('class','');
	});
	$('.cla-head div:last-child').on("click",function(){
		$(".cla-center1").animate({'left':'-3.75rem'},100);
		$(".cla-center2").animate({'left':'0'},100);
		$('.cla-head div:first-child').attr('class','');
		$('.cla-head div:last-child').attr('class','cla-head-h');
	});
	$('.cla-head div:first-child').on("click",function(){
		$(".cla-center1").animate({'left':'0'},100);
		$(".cla-center2").animate({'left':'3.75rem'},100);
		$('.cla-head div:first-child').attr('class','cla-head-h');
		$('.cla-head div:last-child').attr('class','');
	});
	
	$(".guide-img1").on("swipeleft",function(){
		$(".guide-img1").animate({'left':'-3.75rem'},100);
		$(".guide-img2").animate({'left':'0'},100);
		$(".guide-img3").animate({'left':'3.75rem'},100);
	});
	$(".guide-img2").on("swipeleft",function(){
		$(".guide-img1").animate({'left':'-7.5rem'},100);
		$(".guide-img2").animate({'left':'-3.75rem'},100);
		$(".guide-img3").animate({'left':'0'},100);
	});
	$(".guide-img3").on("swipeleft",function(){
		window.location.href = "login.html";
	});
	$(".guide-img2").on("swiperight",function(){
		$(".guide-img1").animate({'left':'0'},100);
		$(".guide-img2").animate({'left':'3.75rem'},100);
		$(".guide-img3").animate({'left':'7.5rem'},100);
	});
	$(".guide-img3").on("swiperight",function(){
		$(".guide-img1").animate({'left':'-3.75rem'},100);
		$(".guide-img2").animate({'left':'0'},100);
		$(".guide-img3").animate({'left':'3.75rem'},100);
	});
	
	
	$('.sea').click(function(){
		$('.head-search-mag').css('display','none');
		console.log('a')
	});
	$('.sea').blur(function(){
		$('.head-search-mag').css('display','flex');
		console.log('b')
	});
//	var settings = {
//		"async": true,
//		"crossDomain": true,
//		"url": "http://apis.haoservice.com/lifeservice/cook/queryid?id=1001&key=2fde8eb54f0248f6a412e039aae9314f",
//		"method": "GET",
//		"headers": {}
//	}
//	$.ajax(settings).done(function (response) {
//		console.log(response);
//	});
});
