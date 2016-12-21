/*MAIN JS*/

/*FUNCTIONS*/
function CheckPageSize() {
	$(window).resize(function() {
		try{
			var headerHeight = $('header').outerHeight(),
				footerHeight = $('footer').outerHeight();
			$('.content-wrap').css('padding-top', headerHeight + 'px');	
			$('footer').css('margin-top', '-' + footerHeight + 'px');
			$('.all-wrap').css('margin-bottom', '-' + footerHeight + 'px');
			$('.content-wrap').css('padding-bottom', footerHeight + 25 + 'px');
			
			if($('.slide-content')){
				var scHeight = $('.slide-content').outerHeight();
				$('.slide-content').css('margin-top', '-' + scHeight/2 + 'px');
			}
		}
		catch(e){}
	});
}

/*Ready*/
$(document).ready(function(){
	CheckPageSize();
	setTimeout(function() {$(window).resize();}, 100);
	
	/*slick*/
	$('.main-slider').slick({
 		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: true,
		arrows: true,
		dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
	});
	
	/*filter*/
	$(".field-toggle").click(function() {
		var clickitem = $(this),
			icon = clickitem.find('i');
			
		if(icon.hasClass("collapsed")) {
			icon.removeClass("collapsed");
		} else {
			icon.addClass("collapsed");
		} 		
		clickitem.parents('.field').find(".field-body").slideToggle();
	});	
});

/*Events*/
$(window).scroll(function(){
	
});

$(window).resize(function(){

});