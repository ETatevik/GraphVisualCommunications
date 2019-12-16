jQuery(document).ready(function($) {

	let countLoading = 0;
	let arrayTetxLoading = ['<img src="img/graphVC.png" alt="">','Технологии 360°','Презентации','Web-дизайн','Иллюстрации','<img src="img/graphVC.png" alt="">'];

	// loading
	{

		if($(window).width() > 991){
			if($('header.start-loading-graph').hasClass('working')){
				$('body').css('overflow','hidden');
				// $('header.start-loading-graph').css({
				// 	position:'fixed',
				// 	zIndex: '1000',
				// 	height: '100vh',
				// 	width: '100vw'
				// });
				let countLoading = 0;
				callProgressBar('#imgGraphLoadingClone', countLoading);

				let interv =  setInterval(()=>{
					countLoading++;
					callProgressBar('#imgGraphLoadingClone', countLoading);
					if(countLoading == 5) clearInterval(interv);
				}, 2500);
			}
		}else{
			$('body').removeAttr('style');

		}

		$(window).resize(function(event) {
			if($(window).width() > 991){
				if($('header.start-loading-graph').hasClass('working')){
					$('body').css('overflow','hidden');
					// $('header.start-loading-graph').css({
					// 	position:'fixed',
					// 	zIndex: '1000',
					// 	height: '100vh',
					// 	width: '100vw'
					// });
				}
			}else{
				$('body').removeAttr('style');

			}
		});	

		$(window).on({
			wheel:function(e){
				if($(this).width() > 991){
					if($('header.start-loading-graph').hasClass('working')){
   						 // if page in loading first time save that in session 
						sessionStorage.setItem('loading', 'ok');
						$('.loading-body-scroll-mouse  .mouse-show').hide(0);
							// $('header.start-loading-graph').removeAttr('style');
							$('.loading-body-scroll-mouse #imgGraphLoadingClone').addClass('move_right_hide')
							setTimeout(()=>{
								$('body').removeAttr('style');
							    $('header.start-loading-graph').removeClass('working');
							}, 500);
					}
				}
			},
			keydown:function(e){
				if(e.which == 40){
					if($(this).width() > 991){
						if($('header.start-loading-graph').hasClass('working')){
    						// if page in loading first time save that in session 
							sessionStorage.setItem('loading', 'ok');
							$('.loading-body-scroll-mouse  .mouse-show').hide(0);
							// $('header.start-loading-graph').removeAttr('style');
							$('.loading-body-scroll-mouse #imgGraphLoadingClone').addClass('move_right_hide')
							setTimeout(()=>{
								$('body').removeAttr('style');
							    $('header.start-loading-graph').removeClass('working');
							}, 500);
						}
					}
				} 
			}
		});	
	}
	
	callProgressBar('#imgGraphLoading', countLoading);

	let interv =  setInterval(()=>{
		countLoading++;
		callProgressBar('#imgGraphLoading', countLoading);
		if(countLoading == 5) clearInterval(interv);
	}, 2500);


	function callProgressBar(parent, i){
		if($(parent).children('svg')){
			$(parent).children('svg').remove();
			$(parent).children('div').remove();
		}
		let bar = new ProgressBar.Circle(parent, {
			  strokeWidth: 1,
			  easing: 'easeInOut',
			  duration: 2500,
			  color: '#00A3FF',
			  trailColor: '#8071D0',
			  trailWidth: .25,
			  svgStyle: null,
			  text: {
		        value: arrayTetxLoading[i],
		        className: 'progressbar__label'
		    	}
			});

		bar.animate(1.0);  // Number from 0.0 to 1.0
	}
});

