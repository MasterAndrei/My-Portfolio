
	$(document).ready(function() {


        $.stellar({
            responsive: true
        });

		$('.owl-carousel').owlCarousel({
			loop: true,
			responsive: {
				0: {
					items: 1,
					nav: true
				}
			},
			navText:"",
		});

        $(".popup").magnificPopup({type:"image"});

		$("")
		function wResize() {
			$("header").css("height",$(window).height());
		};
		wResize();
		$(window).resize(function() {
			wResize()
		});

		$(".top_phone .wrapper .tab").click(function(){
	$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

		$(".footer_phone .wrapper .tab").click(function(){
			$(".footer_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".footer_phone .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");


		$(".contacts_top .tab").click(function(){
			$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

		$(".tabs_header .wrapper .tab").click(function(){
			$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		var ths = $(this)
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});
	$(window).load(function(){
		$(".top_header h1").animated("fadeInUp", "fadeInUp");
		$(".top_header h2").animated("fadeInDown", "fadeInDown");
		$(".s_tizers").animated("fadeInDown", "fadeInDown");
		$(".tabs_header").animated("flipInY", "flipInY");
		$(".profy_item").animated("fadeInLeft", "fadeInLeft");
		$(".profi_form").animated("fadeInRight", "fadeInRight");
		$(".s_back h3, a").animated("fadeInRight", "fadeInRight");
		$(".s_contacts").animated("flipInX", "flipInX");
		$("footer").animated("fadeInUp", "fadeInUp");
	});