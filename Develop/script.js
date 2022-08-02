//start with the list of vars connected to the html elements 
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


//this will highlight the current hour
if (m.format('h') == 9) {nine.addClass('bg-danger')}      
if (m.format('h') == 10) {ten.addClass('bg-danger')}
if (m.format('h') == 11) {elev.addClass('bg-danger')}
if (m.format('h') == 12) {twelv.addClass('bg-danger')}
if (m.format('h') == 1) {one.addClass('bg-danger')}
if (m.format('h') == 2) {two.addClass('bg-danger')}
if (m.format('h') == 3) {three.addClass('bg-danger')}
if (m.format('h') == 4) {elev.addClass('bg-danger')}
if (m.format('h') == 5) {five.addClass('bg-danger')}








//next i will need the current day/date and time to display in the header 
currentTime.text(m.format('LT'))
currentDay.text(m.format('[Today is] LL'))
//i will need the hours divided up into an 9 hour day
//these hour blocks will need to be standard buisness hours
// the current hour will need to be a light blue (cuz it would look nicer than danger red)

//the passed hours will need to be grey
//next the future hours will need to be green
//this means i will need to CREATE HTML ELEM

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

