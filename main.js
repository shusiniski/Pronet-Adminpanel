$(document).ready(function(){
	$(".down_list_li li").on("click",function(){
		$(".down_list_li li").removeClass("active");
		$(this).addClass("active")
	})
})