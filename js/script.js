$(document).ready(function() {
	// hover
	
	$('.link1 span').each(function(){
		color = $(this).parent().css('color');
		$(this).css({background:color})
	})
	
	$('.link1').hover(function(){
		$(this).find('span').css({left:'0', right:'auto'}).stop().animate({width:'100%'},500,'easeOutCirc')				   
	}, function(){
		$(this).find('span').css({right:'0', left:'auto'}).stop().animate({width:0},500,'easeOutCirc')				   
	})
	
	$('.button1 strong').css({opacity:0})
	
	$('.button1').hover(function(){
		$(this).find('strong').stop().animate({opacity:1})						 
	}, function(){
		$(this).find('strong').stop().animate({opacity:0})						 
	})
	
	$('.close').css({opacity:0.4})
	
	$('.close').hover(function(){
		$(this).stop().animate({opacity:1})						 
	}, function(){
		$(this).stop().animate({opacity:0.4})						 
	})
	
	$('.catalogue a').hover(function(){
		$(this).find('img').stop().animate({opacity:0.8})
	}, function(){
		$(this).find('img').stop().animate({opacity:1})
	})
	
	$('#icons a').hover(function(){
		$(this).find('img').stop().animate({width:34, height:34, top:5, left:5}, function(){$(this).animate({top:0, left:0, width:44, height:44})})
	}, function(){})
	
	
	$('ul#menu').superfish({
      delay:       400,
      animation:   {height:'show'},
      speed:       500,
      autoArrows:  false,
      dropShadows: false
    });
	
	
		
 });
 
 

$(window).load(function() {	


///// bg slideshow navigation
$('#pagination a').each(function(e){
		$(this).data({num:e})							 
	})
	
	$('#pagination a').click(function(){
		num=$(this).data('num');
		if (!$(this).parent().hasClass('active')) {
			$('#caption .active').stop().removeClass('active');
		}
	})
	
	$('#bgStretch').bgStretch({
			align:'leftTop',
			navigs:$('#pagination').navigs()
		})
		.sImg({
			spinner:$('<div class="spinner"></div>').css({opacity:.6}).hide()
	})
	
	$('#pagination li').eq(0).addClass('active');
	$('#caption li').eq(0).addClass('active').stop().animate({left:0, height:'100%', width:'100%'},600)
	
///// end bg slideshow navigation






	//start content switch
	var content=$('#content'),
		nav=$('.menu');
	nav.navs({
		useHash:true,
		hoverIn:function(li){
			$('> span',li).stop().animate({width:'100%'})
		},
		hoverOut:function(li){
			if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('> span',li).stop().animate({width:0})
			}
		}				
	})	
	nav.navs(function(n, _){
		content.cont_sw(n);
	})
	content.cont_sw({
		showFu:function(){
			var _=this			

			$.when(_.li).then(function(){	
				_.next.css({display:'block', top:-700},700,'easeOutBack').stop().animate({top:0},900, 'easeOutExpo')
				$('#caption').stop().animate({bottom:-210})
			});
			$('#content').stop().animate({minHeight:719})
			
		},
		hideFu:function(){
			var _=this
			_.li.stop().animate({top:-700},700, 'easeInBack', function(){
				_.li.css({display:'none'})
				$('#caption').stop().animate({bottom:142})
			});
			$('#content').stop().animate({minHeight:306})
			
		},
		preFu:function(){
			var _=this
			_.li.css({position:'absolute', display:'none'});
		}
	})
	//end content switch
		
})