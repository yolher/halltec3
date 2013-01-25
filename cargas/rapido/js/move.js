
	$(document).ready(function(){
		//var ventana_ancho = $(window).width();
	    var ventana_alto = $(window).height();

	    	$('a.control').click(function(){
				$('#ariba').delay(100).fadeIn (800);
			});



			$('a[href=#subir]').click(function(e){
				e.preventDefault();
				$('html,body').animate({scrollTop:0}, 500);
				return false;
			});


			$('a[href=#servicios]').click(function(e){
				e.preventDefault();
				$('html,body').animate({scrollTop:2500}, 1000);
				return false;
			});

			$('a[href=#planes]').click(function(e){
				e.preventDefault();
				$('html,body').animate({scrollTop:190}, 500);
				return false;
			});	  	
		





	});

