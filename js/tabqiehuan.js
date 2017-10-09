$(function(){
	var navs = $(".navs");
	var boxs = $(".boxs");
	boxs.eq(0).css("display","block");
	navs.eq(0).css({"background":"#47c5c1","color":"white"});
	
	$(".subnav").on("click","span",function(){
		var n = $(this).index()
		$(boxs[n]).css("display","block").siblings().css("display","none");
		$(this).css({"background":"#47c5c1","color":"white"}).siblings().css({"background":"none","color":"black"});
		
	})
})