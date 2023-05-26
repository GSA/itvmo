// Add your custom javascript here
// console.log("Hi from Federalist");

/** Event page calendar **/

let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ['janurary', 'february', 'march', 'april', 'may', 'june', 'july','august','september','october','november','december'];


function openModal(date) {
  const eventForDay = [];

  for(var i = 0; i < events.length; i++)
  { 
    if(events[i].date === date)
    {
      eventForDay.push(events[i]);
    }
  }
  //event already exist
  if(eventForDay.length > 0)
  {
    var eventText = ``;
    for(var i = 0; i < eventForDay.length; i++)
    { 
      var audience = "";
      if(i == 0)
        eventText = 
        `
        <div class="animate fadeInDown">
        <h2 id="eventsSummary">Events Summary:</h2>
        <h3>${date}</h3>
        `;
      if(eventForDay[i].color === "GREY")
        audience = " This is a partner event.";
      else if(eventForDay[i].color === "RED")
        audience = " This is open to all.";
      else if(eventForDay[i].color === "BLUE")
        audience = " This is open to .gov/.mil only.";

      eventText += 
        `
        <p><a href="${eventForDay[i].link}" target="_blank" rel="noreferrer noopener"><b>${eventForDay[i].title} </b></a></p>
        <p id="eventDescription">${eventForDay[i].description}<b>${audience}</b></p>
        `;
    }
    eventText += `</div>`
    document.getElementById('eventText').innerHTML = eventText;
  }
  else
  {
    document.getElementById('eventText').innerHTML = 
    `
    <div class="animate fadeInDown">
    <h2 id="eventsSummary">Events Summary:</h2>
    <h3>${date}</h3>
    <p><b>No events planned today.</b></p>
    </div>
    `;
  }
}

async function runCalendar() {
  const dt = new Date();
  if (nav !== 0) {
    dt.setDate(1);
    dt.setMonth(new Date().getMonth() + nav);
  }

  //Retrive the date
  const day = dt.getDate();
  const monthNum = dt.getMonth();
  const year = dt.getFullYear();
  //Since only data that avaliable is currently only 2022 and 2023
  if((year >= 2022)&&(year <= 2023))
  {
      //retrive the month information
      const res = await fetch(`../assets/events/${year}/${month[monthNum]}.json`);
      var thisMonthEvents = await res.json(); //data in this case is array list of items
      thisMonthEvents = thisMonthEvents.events;
     //Check whether the json file already store in the local storage already or not.
      for(let i = 0; i<thisMonthEvents.length; i++)
      {
        if(events.find(e => (e.title === thisMonthEvents[i].title) && (e.date === thisMonthEvents[i].date)) == null)
          saveEvent(thisMonthEvents[i]);
      }
  }
  //Generate calendar
  const firstDayOfMonth = new Date(year, monthNum, 1);
  const daysInMonth = new Date(year, monthNum + 1, 0).getDate();
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day'); 
    const dayString = `${monthNum + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = [];
      //These two variable use to determine the color of the squre on specific date of the calendar.
      var itvmoEvent = false; 
      var otherEvent = false;
      for(var a = 0; a < events.length; a++)
      { 
        if(events[a].date === dayString)
        {
          eventForDay.push(events[a]);
          //!!Change this later use other field to determine
          if(otherEvent == false && events[a].type == "OTHER")
            otherEvent = true;
          //!!Change this later
          if(itvmoEvent == false && events[a].type == "ITVMO")
            itvmoEvent = true;
        }
      }
      daySquare.title = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${i - paddingDays} event count of ${eventForDay.length}`;
      //Display the Events summary for the current day if there is one
      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
        daySquare.tabIndex = 0;
        openModal(dayString);
      }

      if (eventForDay.length > 0) {
          //Only let user traverse on the calendar with tab on only the day that have event(s).
          daySquare.tabIndex = 0;
          const eventDiv = document.createElement('div');
          eventDiv.classList.add('event');
          eventDiv.innerText += eventForDay.length + " EVENTS";
          daySquare.appendChild(eventDiv);

          const eventDivM = document.createElement('div');
          eventDivM.classList.add('eventMobile');
          eventDivM.innerText += eventForDay.length;

          //If ITVMO events only on specific date
          if(otherEvent == false && itvmoEvent == true)
            eventDivM.style.cssText += 'background-color: #d36c6c;';
          //If Other events only on specific date
          else if(otherEvent == true && itvmoEvent == false)
            eventDivM.style.cssText += 'background-color: #1b2b85;';
          //If both ITVMO and other events on specific date
          else if(otherEvent == true && itvmoEvent == true)
            eventDivM.style.cssText += 'background: linear-gradient(135deg, #d36c6c 50%, #1b2b85 50%); ';
          
          itvmoEvent = false;
          otherEvent = false;
          daySquare.appendChild(eventDivM);

      }
      //add event listener on each day for clicking on the day action
      daySquare.addEventListener('click', () => openModal(dayString));
      daySquare.onkeydown = 
      function(key) 
      {
        if((key.keyCode === 32)||(key.keyCode === 13))
          openModal(dayString);
      }
    } 
    else {
      daySquare.classList.add('padding');
    }
    calendar.appendChild(daySquare);    
  }
}
//Save the event 
function saveEvent(currEvent) {

    eventTitleInput.classList.remove('error');
    events.push(currEvent);
    localStorage.setItem('events', JSON.stringify(events));
}
//Go to next month
function initEventButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
      nav++;
      //Insert paraemeter here to intake the data and can display on the calendar
      runCalendar();
    });
  //Go to previous month
    document.getElementById('backButton').addEventListener('click', () => {
      nav--;
      runCalendar();
    });
}

/** The Home page Dropdown menu section **/

//This function hide the dropdown.
function hideDropdown(el)
{
    el.classList.remove("display-content");
    el.classList.add("hide-content");
    el.children[0].classList.remove("usa-current");
    //Get all the children that are submenu in the current object.
    var submenu = el.getElementsByClassName("display-content");
    //When dropdown hide all the submenu on the dropdown hide as well.
    for(let i = 0; i < submenu.length; i++)
      hideDropdown(submenu[i]);
}
//This function display the dropdown.
function showDropdown(el)
{
    el.classList.remove("hide-content-start");
    el.classList.remove("hide-content");
    el.classList.add("display-content");
    el.children[0].classList.add("usa-current");
}

//This function determine if the dropdown going to be display or hide.
function showHideDropdown(el, cl, event)
{
  var menuList = document.getElementsByClassName(cl);

  //Prevent the dropdown to hide itself when user use the key to access the submenu inside the dropdown.
  if((event.target == event.currentTarget) || (event.target == event.currentTarget.children[0]) || (event.target == event.currentTarget.children[0].children[0])|| (event.target == event.currentTarget.children[0].children[1]))
  {
    //Fold all other dropdown menus (or side submenu in the same dropdown), before the current target dropdown going to be display.
    for(let i = 0; i < menuList.length; i++)
    {
      if(menuList[i].classList.contains('display-content') && (menuList[i] != el))
        hideDropdown(menuList[i]);
    }

    if(el.classList.contains("display-content"))
      hideDropdown(el);
    else
      showDropdown(el);
  }
}

//This function allow the dropdown menu to be able to access with the keyboard only.
function showHideDropdownKey(el, event, cl)
{
  if(event.keyCode === 13)
  {
    showHideDropdown(el,cl,event);
  }
}

//This function hide all the submenu (dropdown menu and submenu inside the dropdown menu).
function clearSubmenu()
{
  var dropdown = document.getElementsByClassName("dropdown"); //Dropdown menu 
  var sideDropdown = document.getElementsByClassName('side-submenu'); //The submenu inside the dropdown menu
  //Fold all other dropdown menus when the width of the window size change.
  for(let i = 0; i < dropdown.length; i++)
  {
      if(!dropdown[i].classList.contains("hide-content-start"))
       {
          dropdown[i].classList.remove("display-content");
          dropdown[i].children[0].classList.remove("usa-current");
          dropdown[i].classList.add("hide-content-start");
       }
  }
  for(let i = 0; i < sideDropdown.length; i++)
  {
       if(sideDropdown[i].classList.contains('display-content'))
       {
          sideDropdown[i].classList.remove('display-content');
          sideDropdown[i].children[0].classList.remove("usa-current");
          sideDropdown[i].classList.add('hide-content');
       }
  }
}

//This function change convert dropdown and submenu attribute when user change the version of the site.
$(window).resize(function() 
{
  var dropdown = document.getElementsByClassName("dropdown"); //Dropdown menu 
  var sideDropdown = document.getElementsByClassName('side-submenu'); //The submenu inside the dropdown menu

  clearSubmenu();
  
  // console.log($(window).width());
  if ($(window).width() < 1024) 
  {
    for(let i = 0; i < dropdown.length; i++)
    {
      removeAttributeHover(dropdown[i]);
      setAttributeClick(dropdown[i],"dropdown");

    }
    for(let i = 0; i < sideDropdown.length; i++)
    {
      removeAttributeHover(sideDropdown[i]);
      setAttributeClick(sideDropdown[i],"side-submenu");
    }
  }
  else 
  {
      for(let i = 0; i < dropdown.length; i++)
      {
        removeAttibuteClick(dropdown[i]);
        setAttributeHover(dropdown[i],"dropdown");
      }
      for(let i = 0; i < sideDropdown.length; i++)
      {
        removeAttibuteClick(sideDropdown[i]);
        setAttributeHover(sideDropdown[i],"side-submenu");
      }
  }
});
//This function set attribute for the dropdown of desktop version.
function setAttributeHover(el, cl)
{
  el.setAttribute("onmouseenter",`showHideDropdown(this, "${cl}", event)`);
  el.setAttribute("onmouseleave",`showHideDropdown(this, "${cl}", event)`);
  el.setAttribute("onkeydown",`showHideDropdownKey(this, event, "${cl}")`);
}
//This function remove attributes from the dropdown.
function removeAttributeHover(el)
{
  el.removeAttribute("onmouseenter");
  el.removeAttribute("onmouseleave");
  el.removeAttribute("onkeydown");
}
//This function set attribute for dropdown elements of mobile version.
function setAttributeClick(el, cl)
{
  el.setAttribute("onclick", `showHideDropdown(this, "${cl}", event)`);
}
//This function remove a click attribute form dropdown.
function removeAttibuteClick(el)
{
  el.removeAttribute("onclick");
}
//This function initialize all the dropdown menu on the dropdown bar.
function initializeMenu()
{
  var width = window.innerWidth;
  var dropdown = document.getElementsByClassName("dropdown");
  var sideDropdown = document.getElementsByClassName('side-submenu') //Menu inside the submenu
  document.getElementsByClassName('usa-menu-btn')[0].setAttribute("onclick", "clearSubmenu()"); //On mobile version, hide all the dropdown menu and the submenu before user access the navigation menu.
  
  if(width > 1023)
  {
    for(let i = 0; i < dropdown.length; i++)
    {
      setAttributeHover(dropdown[i],"dropdown");
    }
    for(let i = 0; i < sideDropdown.length; i++)
    {
      setAttributeHover(sideDropdown[i],"side-submenu");
    }
  }
  else
  {
    for(let i = 0; i < dropdown.length; i++)
    {
      setAttributeClick(dropdown[i],"dropdown");    
    }
    for(let i = 0; i < sideDropdown.length; i++)
    {
      setAttributeClick(sideDropdown[i],"side-submenu");
    }
  }
}



/** The Home page Latest Update section **/
var timer; //Store the Timeout for the slide
var slideIndex = 1;//The next latest update instead of the first one

function initHighlightButtons()
{
  var prev = document.getElementsByClassName('prev')[0];
  var next = document.getElementsByClassName('next')[0];
  var prevMobile = document.getElementsByClassName('prev-mobile')[0];
  var nextMobile = document.getElementsByClassName('next-mobile')[0];

  prev.addEventListener('click', () => prevSlide());
  next.addEventListener('click', () => showSlides());
  prevMobile.addEventListener('click', () => prevSlide());
  nextMobile.addEventListener('click', () => showSlides());

  // Allow user to use the next and previous button without the need of the mouse.
  prev.onkeydown = function(key){previousSlide(key)};
  next.onkeydown = function(key){nextSlide(key)};
  prevMobile.onkeydown = function(key){previousSlide(key)};
  nextMobile.onkeydown = function(key){nextSlide(key)};

  function nextSlide(key)
  {
    if((key.keyCode === 32)||(key.keyCode === 13))
      showSlides();
  }
  function previousSlide(key)
  {
    if((key.keyCode === 32)||(key.keyCode === 13))
    prevSlide();
  }
}
function runHighlight() {

    timer = setTimeout("showSlides()", 8000);
}

function prevSlide() {

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");


  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex--;

  if (slideIndex > slides.length) {
      slideIndex = 1
  }
  if (slideIndex == 0) {
      slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  clearTimeout(timer); //Remove the timer that previously active before click on the previous button
  runHighlight(); 
}
function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > slides.length) {
      slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
  clearTimeout(timer);
  runHighlight();
}

//This function run when the user hover the mouse on the highlight card
function stopSlide()
{
  clearTimeout(timer);
}
//This function trigger only after user mouse left the highlight card
function runSlide()
{
  timer = setTimeout("showSlides()", 1700);
}

/** Run functions **/

//Since all of the page have the menubar it need to be initialize.
initializeMenu();
//Run Home page 
if(document.getElementById('homepage-highlight') != null)
{
  initHighlightButtons();
  runHighlight();
}
//Run Events page
if( document.getElementById('nextButton') != null)
{
  initEventButtons();
  localStorage.clear();
  runCalendar();
}