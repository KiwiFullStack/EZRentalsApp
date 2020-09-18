var thedayz = 0
var thepeoplez = 0
var thekilometers = 0
var thefuelrate = 0
var thefuelcost = 0
var ValidateCheck = false
var distanceService;
var theprice = 0

$(function () {

	var tl = anime.timeline({
		easing: 'linear',
		duration: 2000,
		autoplay: false,
	})
	tl.add({
		targets: '.section1',
		translateY: [0, '-100%']
	})
	tl.add({
		targets: '.slide1',
		translateX: [0, '100%']
	})
	tl.add({
		targets: '.slide2',
		translateX: ['-100%', 0]
	}, '-=2000')
	tl.add({
		targets: '.slide2',
		translateY: [0, '-100%']
	})
	tl.add({
		targets: '.slide3',
		translateY: ['100%', 0]
	}, '-=2000')
	tl.add({
		targets: '.slide4',
		translateY: ['100%', 0],
		rotateZ: ['180deg', 0]
	})
	tl.add({
		targets: '.section2',
		translateX: [0, '100%']
	})
	tl.playTo = playTo

	///main program
	var steps = [0, 20, 40, 60, 80, 100]
	var current = 0

	$('.section1 span').on('click', function () {
		current = 1
		tl.playTo(steps[current])
	})
	$('.section2 .next').on('click', function () {
		validation()
		if (ValidateCheck == true) {
			current++
			tl.playTo(steps[current])
		}
	})
})

var lightpick = new Lightpick({
	field: document.querySelector('.traveltime'),
	singleDate: false,
	numberOfMonths: 2,
	minDate: moment(),
	maxDate: moment().add(30, 'day'),
	onSelect: function (start, end) {

		if (end != null) {
			thedayz = end.diff(start, 'days')
			document.querySelector('.days').innerHTML = thedayz + 1 + " days"
		}

	}
})


function validation() {
	var text;
	// Get the value of the input field with id="numb"
	thepeoplez = document.getElementById('partycount').value
	// If x is Not a Number or less than one or greater than 10
	if (isNaN(thepeoplez) || thepeoplez < 1 || thepeoplez > 15) {
		text = "Please input a number between 1-15";
		document.querySelector('.slide-text-custom').style.color = "red"
	} else {
		text = "All good!";
		ValidateCheck = true
		document.querySelector('.slide-text-custom').style.color = "green"
	}
	document.querySelector('.slide-text-custom').innerHTML = text;
}


// VEHICLE CONDITIONS
$('.section2 .next').on('click', function () {
	thepeoplez = document.getElementById('partycount').value
	if (thedayz >= 1 && thedayz < 6 && thepeoplez < 2) {
		$('.item1').addClass('suitable')
	}
	if (thedayz >= 1 && thedayz < 11 && thepeoplez < 3) {
		$('.item2').addClass('suitable')
	}
	if (thedayz >= 3 && thedayz < 11 && thepeoplez < 5) {
		$('.item3').addClass('suitable')
	}
	if (thedayz >= 2 && thedayz < 16 && thepeoplez < 2) {
		$('.item4').addClass('suitable')
	}
})

//SELECT ITEMS
$('.item').on('click', function () {

	theprice = parseInt($('.item.selected').data('price')).value;
	sName = $('.item.selected').data('name');
	thefuelrate = parseFloat($('.item.selected').data('fuel')).value;
	$('.section-container .item').not(this).removeClass('selected')
	$(this).addClass('selected')
})


$('.item').on('click', function () {
	$('.section-container .item').not(this).removeClass('selected')
	$(this).addClass('selected')
	document.getElementById('name').innerHTML = $('.item.selected').data('name');
	document.getElementById('price').innerHTML = parseInt($('.item.selected').data('price'));
	document.getElementById('name').innerHTML = $('.item.selected').data('name');
})

$(function () {

	$('button').on('click', function (e) {
		e.preventDefault()

	})
})


