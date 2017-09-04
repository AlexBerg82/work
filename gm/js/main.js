$(document).ready(function(){
	//top nenu
	$('ul.tabs.first_tab li').mouseover(function(){
		$('ul.tabs.first_tab li').removeClass('tab_active');

		var thisClass = this.className.slice(0,2);
		$('div#t1').hide();
		$('div#t2').hide();
		$('div#t3').hide();

		$('div#' + thisClass).show();
		$(this).addClass('tab_active');
	});

	//fix header
	$(window).scroll(function(){
		var tmpScrn = document.body.clientWidth;
		
		if($(this).scrollTop() > 400){
			if(tmpScrn > 962){
				$('.menu_unit_big').css("backgroundColor","#fff").css("position","fixed").css("top","0").css("left","10%").css("zIndex","1000");
				$('.menu_unit_big span').css("backgroundColor","#aaa").css("height","30px").css("marginTop","10px");
			}
			if(tmpScrn < 963){
				$('.menu_unit_big').css("backgroundColor","#fff").css("position","fixed").css("top","0").css("left","0").css("zIndex","1000");
				$('.menu_unit_big span').css("backgroundColor","#aaa").css("height","30px").css("marginTop","5px");
			}
			
			$('.menu_unit_big').addClass("sticky");
		} else {
			$('.menu_unit_big span').css("backgroundColor","#fff");
			$('.menu_unit_big').css("backgroundColor","#F3F3F3").css("position","relative").css("left","0");
		}
	});
	
	//tabs
	$('ul.tabs_front.first_tab_front li').click(function(){
		$('ul.tabs_front.first_tab_front li').removeClass('tab_active_front');

		var thisClass = this.className.slice(0,2);
		$('div#t1').hide();
		$('div#t2').hide();
		$('div#t3').hide();

		$('div#' + thisClass).show();
		$(this).addClass('tab_active_front');
	});

});