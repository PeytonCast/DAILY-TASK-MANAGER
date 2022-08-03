// HANDLES THE TIME IN THE HEADER
var m = moment()
var currentTime = $('#cur-time');
var currentDay = $('#cur-day');
//THESE ARE CONECTED TO EACH HOUR BLOCK's LABEL
var nine = $('#9am');
var ten = $('#10am');
var elev = $('#11am');
var twelv = $('#12pm');
var one = $('#1pm');
var two = $('#2pm');
var three = $('#3pm');
var four = $('#4pm');
var five = $('#5pm');

//CONNECTED TO REFRESH BTN
var refresh = $('#refresh')
//a button to update the time
refresh.on('click', function () {
    location.reload();
  });

//CLEAR BTN
var clear = $('#clear')
clear.on('click', function () {
    localStorage.clear()
    location.reload();
  });

//SIMPLIFIES IF STATEMENTS
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
//these var are for the textboxes that will store localy
//ALL TEXTBOXES
var nineText =$('#9am-text')
var tenText =$('#10am-text')
var elevText =$('#11am-text')
var twelvText =$('#12pm-text')
var oneText =$('#1pm-text')
var twoText =$('#2pm-text')
var threeText =$('#3pm-text')
var fourText =$('#4pm-text')
var fiveText =$("#5pm-text")
var refresh = $("#refresh")

//ALL SAVE BTNS
var saveNine = $("#save9")
var saveTen = $("#save10")
var saveElev = $("#save11")
var saveTwelv = $("#save12")
var saveOne = $("#save1")
var saveTwo = $("#save2")
var saveThree = $("#save3")
var saveFour = $("#save4")
var saveFive = $("#save5")

//ALL EVENT P TAGS 
var eventNine = $("#event9")
var eventTen = $("#event10")
var eventEleve = $("#event11")
var eventTwelv = $("#event12")
var eventOne = $("#event1")
var eventTwo = $("#event2")
var eventThree = $("#event3")
var eventFour = $("#event4")
var eventFive = $("#event5")

//these var are for the textboxes that will store localy
var nineText =$('#9am-text')
var tenText =$('#10am-text')
var elevText =$('#11am-text')
var twelvText =$('#12pm-text')
var oneText =$('#1pm-text')
var twoText =$('#2pm-text')
var threeText =$('#3pm-text')
var fourText =$('#4pm-text')
var fiveText =$('#5pm-text')


//HANDLES STORAGE FOR 9AM BLOCK
nineText.on('input', name=>{eventNine.text(name.target.value) })
var save9 = () => {localStorage.setItem('event9', eventNine.text())}
saveNine.on('click', save9)
eventNine.text(localStorage.getItem('event9'))

//HANDLES STORAGE FOR 10AM BLOCK
tenText.on('input', name=>{eventTen.text(name.target.value) })
var save10 = () => {localStorage.setItem('event10', eventTen.text())}
saveTen.on('click', save10)
eventTen.text(localStorage.getItem('event10'))

//HANDLES STORAGE FOR 11AM BLOCK
elevText.on('input', name=>{eventEleve.text(name.target.value)})
var save11 = () => {localStorage.setItem('event11', eventEleve.text())}
saveElev.on('click', save11)
eventEleve.text(localStorage.getItem('event11'))

//HANDLES STORAGE FOR 12PM BLOCK
twelvText.on('input', name=>{eventTwelv.text(name.target.value)})
var save12 = () => {localStorage.setItem('event12', eventTwelv.text())}
saveTwelv.on('click', save12)
eventTwelv.text(localStorage.getItem('event12'))

//HANDLES STORAGE FOR 1PM BLOCK
oneText.on('input', name=>{eventOne.text(name.target.value)})
var save1 = () => {localStorage.setItem('event1', eventOne.text())}
saveOne.on('click', save1)
eventOne.text(localStorage.getItem('event1'))

//HANDLES STORAGE FOR 1PM BLOCK
oneText.on('input', name=>{eventOne.text(name.target.value)})
var save1 = () => {localStorage.setItem('event1', eventOne.text())}
saveOne.on('click', save1)
eventOne.text(localStorage.getItem('event1'))

//HANDLES STORAGE FOR 2PM BLOCK
twoText.on('input', name=>{eventTwo.text(name.target.value)})
var save2 = () => {localStorage.setItem('event2', eventTwo.text())}
saveTwo.on('click', save2)
eventTwo.text(localStorage.getItem('event2'))

//HANDLES STORAGE FOR 3PM BLOCK
threeText.on('input', name=>{eventThree.text(name.target.value)})
var save3 = () => {localStorage.setItem('event3', eventThree.text())}
saveThree.on('click', save3)
eventThree.text(localStorage.getItem('event3'))

//HANDLES STORAGE FOR 4PM BLOCK
fourText.on('input', name=>{eventFour.text(name.target.value)})
var save4 = () => {localStorage.setItem('event4', eventFour.text())}
saveFour.on('click', save4)
eventFour.text(localStorage.getItem('event4'))

//HANDLES STORAGE FOR 5PM BLOCK
fiveText.on('input', name=>{eventFive.text(name.target.value)})
var save5 = () => {localStorage.setItem('event5', eventFive.text())}
saveFive.on('click', save5)
eventFive.text(localStorage.getItem('event5'))




