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
  
