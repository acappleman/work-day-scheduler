// Get the current date and time from moment
var now = moment();

// Set the current day at the top of the page
$('#currentDay').append(now.format("dddd, MMMM D, YYYY"));

// Get the current hour from moment
var currentHour = now.hour();

// Toggle the classes for the present hour
$('#' + currentHour).toggleClass('past present');

// Start with the next hour and toggle the classes for each future time box respectively
for (var i = currentHour + 1; i < 18; i++) {
    $('#' + i).toggleClass('past future');
}

// Create click event for the Save Button for 9am and then store the values in localStorage
$('#saveBtn9').on('click', function() {
    var textareaValue = $('#9').val();
    localStorage.setItem('9', textareaValue);
});

$('#saveBtn10').on('click', function() {
    var textareaValue = $('#10').val();
    localStorage.setItem('10', textareaValue);
});

$('#saveBtn11').on('click', function() {
    var textareaValue = $('#11').val();
    localStorage.setItem('11', textareaValue);
});

$('#saveBtn12').on('click', function() {
    var textareaValue = $('#12').val();
    localStorage.setItem('12', textareaValue);
});

$('#saveBtn13').on('click', function() {
    var textareaValue = $('#13').val();
    localStorage.setItem('13', textareaValue);
});

$('#saveBtn14').on('click', function() {
    var textareaValue = $('#14').val();
    localStorage.setItem('14', textareaValue);
});

$('#saveBtn15').on('click', function() {
    var textareaValue = $('#15').val();
    localStorage.setItem('15', textareaValue);
});

$('#saveBtn16').on('click', function() {
    var textareaValue = $('#16').val();
    localStorage.setItem('16', textareaValue);
});

$('#saveBtn17').on('click', function() {
    var textareaValue = $('#17').val();
    localStorage.setItem('17', textareaValue);
});

// Get items from localStorage and enter them into the respective time box
for (var i = 9; i < 18; i++) {
    var textareaValue = localStorage.getItem(i);
    $('#' + i).val(textareaValue);
}