//DONE start with the list of vars connected to the html elements 
//note i will be using jQueary for this project 
var m = moment()
var currentTime = $('#cur-time');
var currentDay = $('#cur-day');
var nine = $('#9am');
var ten = $('#10am');
var elev = $('#11am');
var twelv = $('#12pm');
var one = $('#1pm');
var two = $('#2pm');
var three = $('#3pm');
var four = $('#4pm');
var five = $('#5pm');
var currentHour = m.format('h')
//DONE next i will need the current day/date and time to display in the header 
currentTime.text(m.format('LT'))
currentDay.text(m.format('[Today is] LL'))

//adds classes to colorcode the hour-blocks 
//changes 9am to red to highlight current hour
if (currentHour == 9) {
five.addClass('bg-success')
four.addClass('bg-success')
three.addClass('bg-success')
two.addClass('bg-success')
one.addClass('bg-success')
twelv.addClass('bg-success')
elev.addClass('bg-success')
ten.addClass('bg-success');
nine.addClass('bg-info')} 

//changes 10am to red to highlight current hour
if (currentHour == 10) {
five.addClass('bg-success')
four.addClass('bg-success')
three.addClass('bg-success')
two.addClass('bg-success')
one.addClass('bg-success')
twelv.addClass('bg-success')
elev.addClass('bg-success')
ten.addClass('bg-info');
nine.addClass('bg-dark')};

//changes 11am to red to highlight current hour
if (currentHour == 11) {
five.addClass('bg-success')
four.addClass('bg-success')
three.addClass('bg-success')
two.addClass('bg-success')
one.addClass('bg-success')
twelv.addClass('bg-success')
elev.addClass('bg-info')
ten.addClass('bg-dark');
nine.addClass('bg-dark')}

//changes 12pm to red to highlight current hour
if (currentHour == 12) {
five.addClass('bg-success')
four.addClass('bg-success')   
three.addClass('bg-success')
two.addClass('bg-success')
one.addClass('bg-success')
twelv.addClass('bg-danger')
elev.addClass('bg-dark')
ten.addClass('bg-dark')
nine.addClass('bg-dark')}

//changes 1pm to red to highlight current hour
if (currentHour == 1) {
five.addClass('bg-success')
four.addClass('bg-success')
three.addClass('bg-success')
two.addClass('bg-success')
one.addClass('bg-danger')
twelv.addClass('bg-dark')
elev.addClass('bg-dark')
ten.addClass('bg-dark')
nine.addClass('bg-dark')}

//changes 2pm to red to highlight current hour
if (currentHour == 2) {
five.addClass('bg-success')
four.addClass('bg-success')
three.addClass('bg-success')
two.addClass('bg-danger')
one.addClass('bg-dark')
twelv.addClass('bg-dark')
elev.addClass('bg-dark')
ten.addClass('bg-dark')
nine.addClass('bg-dark')}

//changes 3pm to red to highlight current hour
if (currentHour == 3) {
five.addClass('bg-success')
four.addClass('bg-success')
three.addClass('bg-danger')
two.addClass('bg-dark')
one.addClass('bg-dark')
twelv.addClass('bg-dark')
elev.addClass('bg-dark')
ten.addClass('bg-dark')
nine.addClass('bg-dark')}

//changes 4pm to red to highlight current hour
if (currentHour == 4) {
five.addClass('bg-success')
four.addClass('bg-danger')
three.addClass('bg-dark')
two.addClass('bg-dark')
one.addClass('bg-dark')
twelv.addClass('bg-dark')
elev.addClass('bg-dark')
ten.addClass('bg-dark')
nine.addClass('bg-dark')}

//changes 5pm to red to highlight current hour
if (currentHour == 5) {
five.addClass('bg-danger')
four.addClass('bg-dark')
three.addClass('bg-dark')
two.addClass('bg-dark')
one.addClass('bg-dark')
twelv.addClass('bg-dark')
elev.addClass('bg-dark')
ten.addClass('bg-dark')
nine.addClass('bg-dark')}


//THIS IS WHERE THE LOCAL STORAGE CODE WILL BE






//the passed hours will need to be grey
//next the future hours will need to be green


//IF i input an appointment/event into an hour block,
//THEN that input will stay there via local storage 
//and add a message in green saying save was sucsessfull 
//this means i will need a save button on each hour block 

//meaning the HTML elements created will need to have the including 
//a label with a var of time 
//an imput field that doubles as a display text field with a class
//and last but not least the save button
//it looks like in the gif they are using a photo on the btn so look into that
//if that doesnt workout than just use words

