function initSun() {
	$("#sun").click(function(){
		makeItRain();
	});
	makeClouds();
}
function hideSun() {
	var sun = $("#sun");
	sun.off();
	sun.addClass("hidden");
}
function makeItSun() {
	hideClouds();

	$('#sun').removeClass("hidden");
	$('body').removeClass("rainy");
	$('.pupil').removeClass('startled');

	initSun();
}

function makeItRain(){
	hideSun();

	$("body").addClass("rainy");
	$('.pupil').addClass('startled');

	showClouds();
}
function initClouds() {
	$(".cloud").click(function(){
		makeItSun();
	})
}
function showClouds() {
	$(".cloud").removeClass("hidden");
	initClouds();
}
function hideClouds() {
	var clouds = $(".cloud");
	clouds.off();
	clouds.addClass("hidden");
	setTimeout(function() {
		clouds.remove();
	}, 1000);
}
function makeClouds() {
	var clouds = createCloudsMarkup(6);
	$('.sky').append($(clouds));
}
function createCloudsMarkup(numberOfCloudsRequested) {
	var clouds = "";
	// var viewportWidth = $(window).width();
	var cowCoordinates = $(".face").offset();
	console.log('Coordinates', cowCoordinates);
	var faceHeight = typeof cowCoordinates !== 'undefined' ? cowCoordinates.top : 200;

	for (var i = numberOfCloudsRequested; i >= 0; i--) {
		var rightValue = generateRandomNumber(100);
		var topValue = generateRandomNumber(faceHeight);
		var cloud = "<div class='weather-element cloud hidden' style='right:calc("+rightValue+"vw - 7.5vw);top:calc("+topValue+"px - 4vw)'></div>";
		clouds += cloud;
	};

	return clouds;
}

function generateRandomNumber(max) {
	var number = 1 + Math.floor(Math.random() * max);
	return number;
}


function initTongue() {
	$('.spot').click(function(){
		$("#tongue").addClass('out').delay(1000).queue(function(){
			$(this).removeClass("out").dequeue();
		});
	})
}

function init(){
	initSun();
	initTongue();
}

init();
