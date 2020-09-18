var DaysCount = 0;
var PeopleCount = 0;
var DistanceCount = 0;
var FuelConsumptionRate = 0;
var TotalCost = 0;

$(function () {
  var tl = anime.timeline({
    easing: "linear",
    duration: 2000,
    autoplay: false,
  });
  tl.add({
    targets: ".section1",
    translateY: [0, "-100%"],
  });
  tl.add({
    targets: ".slide1",
    translateX: [0, "100%"],
  });
  tl.add(
    {
      targets: ".slide2",
      translateX: ["-100%", 0],
    },
    "-=2000"
  );
  tl.add({
    targets: ".slide2",
    translateY: [0, "-100%"],
  });
  tl.add(
    {
      targets: ".slide3",
      translateY: ["100%", 0],
    },
    "-=2000"
  );
  tl.add({
    targets: ".slide4",
    translateY: ["100%", 0],
    rotateZ: ["180deg", 0],
  });
  tl.add({
    targets: ".section2",
    translateX: [0, "100%"],
  });
  tl.playTo = playTo;

  ///Program steps
  var steps = [0, 20, 40, 60, 80, 100];
  var current = 0;

  $(".section1 h2").on("click", function () {
    current = 1;
    tl.playTo(steps[current]);
  });
  $(".section2 .next").on("click", function () {
    validation();
    if (ValidateCheck == true) {
      current += 1;
      tl.playTo(steps[current]);
    }
  });
});

var lightpick = new Lightpick({
  field: document.querySelector(".traveltime"),
  singleDate: false,
  numberOfMonths: 2,
  minDate: moment(),
  maxDate: moment().add(30, "day"),
  onSelect: function (start, end) {
    if (end != null) {
      DaysCount = end.diff(start, "days");
      document.querySelector(".days").innerHTML = DaysCount + 1 + " days";
    }
  },
});

function validation() {
  var text;
  PeopleCount = document.getElementById("partycount").value;
  DistanceCount = document.getElementById("distancetotal").value;
  if (isNaN(PeopleCount) || PeopleCount < 1 || PeopleCount > 15) {
    text = "Please input a number between 1-15";
    document.querySelector(".slide-text-custom").style.color = "red";
  } else {
    text = "All good!";
    ValidateCheck = true;
    document.querySelector(".slide-text-custom").style.color = "green";
  }
  document.querySelector(".slide-text-custom").innerHTML = text;
}

// VEHICLE CONDITIONS
$(".section2 .next").on("click", function () {
  PeopleCount = document.getElementById("partycount").value;
  if (DaysCount >= 1 && DaysCount < 6 && PeopleCount < 2) {
    $(".item1").addClass("suitable");
  }
  if (DaysCount >= 1 && DaysCount < 11 && PeopleCount < 3) {
    $(".item2").addClass("suitable");
  }
  if (DaysCount >= 3 && DaysCount < 11 && PeopleCount < 5) {
    $(".item3").addClass("suitable");
  }
  if (DaysCount >= 2 && DaysCount < 16 && PeopleCount > 1 && PeopleCount < 7) {
    $(".item4").addClass("suitable");
  }
});

//SELECT ITEMS
$(".item").on("click", function () {
  $(".section-container .item").not(this).removeClass("selected");
  $(this).addClass("selected");
  TotalCost = parseInt($(".item.selected").data("price"), 10);
  SelectedName = $(".item.selected").data("name");
  FuelConsumptionRate = parseFloat($(".item.selected").data("fuel"));
  document.getElementById("name").innerHTML = SelectedName;
  document.getElementById("price").innerHTML = "$"+TotalCost * DaysCount;
  document.getElementById("fuelconsumption").innerHTML = (FuelConsumptionRate * DistanceCount) / 100;
});

$(function () {
  $("button").on("click", function (e) {
    e.preventDefault();
  });
});
