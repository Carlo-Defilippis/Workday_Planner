$(document).ready(function() {
});


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


// console.log(moment().format('h a'))
var taskList = [];
// var obj = {"test","test2"}

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
    columnTwo.addClass("border border-info rounded mt-1 mb-1");
    columnTwo.attr("value", [hour]);
    columnTwo.addClass("text-area");
    columnTwo.attr("id", "text-area")
    columnTwo.attr("placeholder", "Enter your task here.")
    columnTwo.attr("input", "Enter your task here.")
    // creates button for save and third col
    
    var columnThree = $("<div>");
    columnThree.addClass("col-sm-1");
    columnThree.addClass("btn btn-primary savedBtn btn-outline-success rounded mt-1 mb-1 text-white text-center");
    columnThree.attr("value", [hour]);
    columnThree.attr("role", "button")
    columnThree.text("Save Button")
  
    plannerRow.append(columnOne);
    plannerRow.append(columnTwo);
    plannerRow.append(columnThree);
    $(".container").append(plannerRow);
  
    // plannerRow.text("Test Me");
    // plannerRow.text("Test Me");
    // plannerRow.text("Test Me");
  }

//Create 9 rows

var textAreaBox = [];

$(".btn").on("click", function(event) {
  event.preventDefault();
  var saveButton = $(this).attr("value")
  var textData = $( "textarea[value="+ saveButton +"]" ).val()


  // getText()
  console.log("This is the textarea data ",textData)
//   var comment = $.trim($("#text-area").val(saveButton));
//             if(comment != ""){
//                 // Show alert dialog if value is not blank
//                 alert(comment);
//             }
//   console.log(textData)
//   console.log("Text area Value: ",textArea)
//   console.log("Save Button Value: ",saveButton)
//   console.log(typeof parseInt(textAreaBox), typeof parseInt(saveButton), typeof textArea)
//   if (parseInt(saveButton) === parseInt(textAreaBox) && textArea.length !== 0) {
//   textAreaBox = [];
// }
})

function getText(comp) {
  var textInfo = $("#text-area").val()
  // arr.map(function(o,i) { Object.assign(o,{id:i+1})})
  // console.log(obj)
  // console.log("This is the info pulled for the text box: ",textInfo)

}
