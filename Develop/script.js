//Day and Date in header
//Added time as well because why not
var today = dayjs().format('dddd, MMMM D YYYY, h:mm a');
$('#currentDay').html(today);

//Event listener (Click) for Save button
$('.saveBtn').on('click', function () {
  // Get values of description or text in text box
  var text = $(this).siblings('.description').val();
  //Id attribute of parent div or time
  var time = $(this).parent().attr('id');

  //local storage for text in text box based on time
  localStorage.setItem(time, text);
})

//Local storage retrieving for text based on timeblocks
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
//Function that displays background colours based on past, present and future
function timeColours() {
  // retrieving what time it is
  var currentTime = dayjs().hour();

  // Time block loop to enable CSS colour features
  $('.time-block').each(function () {
    var timeHour = parseInt($(this).attr('id').split("hour-")[1]);

    // If the time hour is before the current time add the class past to it enabling the grey colour
    if (timeHour < currentTime) {
      $(this).addClass('past');
    } // if the time hour is equal to the current time clear past and future classes and add the present class to enable the red colour
    else if (timeHour === currentTime) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } // else the time hour is after the the current time clear past and present classes and add the future class to enable the green colour
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

// Calling the function
timeColours();