jQuery(document).ready(function($) {
	
	let countLoading = 0;
		let arrayTetxLoading = ['<img src="img/graphVC.png" alt="">','Технологии 360°','Презентации','Web-дизайн','Иллюстрации','<img src="img/graphVC.png" alt="">'];
		let bar = new ProgressBar.Circle(imgGraphLoading, {
			  strokeWidth: 1,
			  easing: 'easeInOut',
			  duration: 2000,
			  color: '#00A3FF',
			  trailColor: '#8071D0',
			  trailWidth: .25,
			  svgStyle: null,
			  text: {
		        value: arrayTetxLoading[countLoading],
		        className: 'progressbar__label'
		    	}
			});

		bar.animate(1.0);  // Number from 0.0 to 1.0

		let interv =  setInterval(()=>{
			if($('#imgGraphLoading').children('svg')){
				$('#imgGraphLoading svg').remove();
				$('#imgGraphLoading div').remove();
			}
			countLoading++;

			let bar = new ProgressBar.Circle(imgGraphLoading, {
			  strokeWidth: 1,
			  easing: 'easeInOut',
			  duration: 2000,
			  color: '#00A3FF',
			  trailColor: '#8071D0',
			  trailWidth: .25,
			  svgStyle: null,
			  text: {
		        value: arrayTetxLoading[countLoading],
		        className: 'progressbar__label'
		    	}
			});

			bar.animate(1.0);  // Number from 0.0 to 1.0
			if(countLoading == 5) clearInterval(interv);
		}, 2000)
});