$(document).ready(function() {
});

$(".saveNotice").hide()
// Pulls the localstorage at page load
var setBoxes = localStorage.getItem("textAreaBox")

// Display today's date & time in jumbotron
$("#date").text("Today is " + (moment().format('dddd, MMMM Do YYYY')));
$("#current-time").text((moment().format('h:mm:ss a')));
var update = setInterval( function(){
    date = moment(new Date());
    $("#current-time").text((moment().format('h:mm:ss a')));
}, 1000)
  setInterval(update, 1000);

//Today's Date:
  $("#currentDay").text(moment().format('MMMM Do YYYY'));

console.log(moment().format('h a'), parseInt(moment().format('h')) + 12)
var taskList = [];

// For loop to create divs boxes and rows 
  for (var hour = 9; hour < 18; hour++) {
    var plannerRow = $("<div>");
    plannerRow.attr("value", [hour]);
    plannerRow.addClass("row");
  
  //Create first column in each row
    var columnOne = $("<div>");
    columnOne.addClass("col-sm-2");
    columnOne.addClass("btn d-flex justify-content-center border border-primary rounded mt-1 mb-1 btn-outline");

    // if else to post time.
    if (hour === 12) {
      columnOne.text([hour] + ":00 PM")
    } else if (hour >= 13) {
      columnOne.text([hour] - 12 + ":00 PM")
    }
    else {
      columnOne.text(hour + ":00 AM")
    }

    // Creates second col
    var columnTwo = $("<textarea>");
    columnTwo.addClass("col-sm-9");
    if (parseInt(moment().format('H')) === hour) {
    columnTwo.addClass("border border-info rounded mt-1 mb-1 bg-success");
  } else if (parseInt(moment().format('H')) > hour) {
    columnTwo.addClass("border border-info rounded mt-1 mb-1 bg-danger");
  } else {
    columnTwo.addClass("border border-info rounded mt-1 mb-1 bg-light");
  }
    columnTwo.attr("value", [hour]);
    columnTwo.addClass("text-area");
    columnTwo.attr("id", "text-area")
    columnTwo.attr("placeholder", "Enter your task here.")
    columnTwo.attr("input", "Enter your task here.")

    // creates button for save and third col
    var columnThree = $("<div>");
    columnThree.addClass("col-sm-1");
    columnThree.addClass("btn btn-primary savedBtn btn-outline-success rounded mt-1 mb-1 text-white text-center far fa-save");
    columnThree.attr("value", [hour]);
    columnThree.attr("role", "button")
    columnThree.text(" Save")
  
    plannerRow.append(columnOne);
    plannerRow.append(columnTwo);
    plannerRow.append(columnThree);
    $(".container").append(plannerRow);
  };

// Initialize the array to save the textarea data with number id's so we can check for string later
var textAreaBox = [{9:[]},{10:[]},{11:[]},{12:[]},{13:[]},{14:[]},{15:[]},{16:[]},{17:[]},{18:[]}];

// Checks if there is any save data, if so it changes the above array to the local storage saved array
if (setBoxes !== null) {
  var parsedSaved = JSON.parse(setBoxes)
  textAreaBox = parsedSaved;
};

// For loop that check if there is a string in the array, if so it posts the correct saved text to the textarea assigned
for (var i = 0; i < textAreaBox.length; i++) {
  console.log(typeof textAreaBox[i])
  if (typeof textAreaBox[i] == "string") {
    $( "textarea[value="+ (i + 9) +"]" ).text(textAreaBox[i])
  }
};

// Button that grabs texts in correct text field and saves it to the local storage
$(".btn").on("click", function(event) {
  event.preventDefault();
  var saveButton = $(this).attr("value")
  var textData = $( "textarea[value="+ saveButton +"]" ).val()
  textAreaBox[saveButton - 9] = textData;
  localData = localStorage.setItem("textAreaBox", JSON.stringify(textAreaBox))
})

