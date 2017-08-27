var scene = {
 	weather: {
		listeners: {
			sunListener: function(){
				$("#sun").click(function(){
					scene.weather.makeItRain();
				});
			},
			cloudsListener: function(){
				$(".cloud").click(function(){
					scene.weather.sunshine();
				})
			}
		},
		clouds: {
			createCloudsMarkup: function(numberOfCloudsRequested){
				var clouds = "";
				var viewportWidth = $(window).width();
				var cowCoordinates = $(".face").offset();
				var faceHeight = typeof cowCoordinates !== 'undefined' ? cowCoordinates.top : 200;

				for (var i = numberOfCloudsRequested; i >= 0; i--) {
					var rightValue = scene.helperFunctions.generateRandomNumber(viewportWidth);
					var topValue = scene.helperFunctions.generateRandomNumber(faceHeight);
					var cloud = "<div class='weather-element cloud hidden' style='right:"+rightValue+";top:"+topValue+"'></div>";
					clouds += cloud;
				};

				return clouds;
			}, 
			hideClouds: function(){
				var clouds = $(".cloud");
				clouds.off();
				clouds.addClass("hidden");
			}, 
			showClouds: function(){
				$(".cloud").removeClass("hidden");
				scene.weather.listeners.cloudsListener();
			},
			makeClouds: function(){
				var clouds = scene.weather.clouds.createCloudsMarkup(8);
				$('.sky').append($(clouds));
			} 
		},
		sun: {
			hideSun: function(){
				var sun = $("#sun");
				sun.off();
				sun.addClass("hidden");
			}
		},
		makeItRain: function(){
			scene.weather.sun.hideSun();

			$("body").addClass("rainy");
			$('.pupil').addClass('startled');
			scene.weather.clouds.showClouds();
		},
		sunshine: function(){
			scene.weather.clouds.hideClouds();

			$('#sun').removeClass("hidden");
			$('body').removeClass("rainy");
			$('.pupil').removeClass('startled');

			scene.weather.listeners.sunListener();
		},
		init: function(){
			scene.weather.clouds.makeClouds();
			scene.weather.listeners.sunListener();
			
		}
	},
	helperFunctions: {
		generateRandomNumber: function(max){
			var number = 1 + Math.floor(Math.random() * max);
			return number;
		}
	},
	cow: {
		listeners: {
			spotListener: function(){
				$('.spot').click(function(){
					scene.cow.actions.stickTongueOut();
				})
			}
		},
		actions: {
			stickTongueOut: function(){
				var tongue = $("#tongue");

				tongue.addClass('out').delay(1000).queue(function(){
				    $(this).removeClass("out").dequeue();
				});
			}, 
			standUp: function(){
				$(".cow").addClass("standing");
			},
			sitDown: function(){
				$(".cow").removeClass("standing");
			}
		},


	},
	init: function(){
		scene.weather.init();
		scene.cow.listeners.spotListener();
	} 
};

scene.init();
