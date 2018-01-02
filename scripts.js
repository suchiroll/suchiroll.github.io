$(document).ready(function(){

$(".source").hover(function(){
	$(this).find(".src-front").filter(':not(:animated)').animate({
		marginLeft: '100px'
	}, 'slow');
}, 
	function () {
		$(this).find(".src-front").animate({
			marginLeft: '0px'
		}, 'slow');
	}
);

/*	$(".src-front").mouseenter(function(){
		$(this).animate({
			right: '+=100px'
		}, "slow");
	});

	$(".src-front").mouseleave(function(){
		$(this).animate({
			right: '-=100px'
		}, "slow");
	});

*/
/*s
	$(".src-front").hover(function(){
		$(this).animate({
		    	right: '+=100px'
		 }, "slow");
		}, function (){
			$(this).animate({
		    	right: '-=100px'
		 }, "slow");
	});*/
});