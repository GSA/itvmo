// Add your custom javascript here
// console.log("Hi from Federalist");

//Variable
let curSlide = 0; 
let slideCount, slides, timer, dots;//Slide count in the highlight

/** Run functions **/
//Run Home page 
if(document.getElementById('dynamic-panel') != null)
{
  populateHighlight();
  initHighlightButtons();
  runHighlight();
}
//Run Inner page
if(document.getElementById('page-directory') != null) //Other page beside homepage contain page-directory.
{
  populateDirectory();
  initalizeTabIndex();
  initalizePageNav();
}
//Run Events page
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
const queryString = window.location.search;
if( document.getElementById('nextButton') != null)
{
  //Retrive the keys and their value from the URL.
  const urlParams = new URLSearchParams(queryString);
  const d = urlParams.get('day'), m = urlParams.get('month')-1, y = urlParams.get('year');
  initEventButtons(d,m,y);
  localStorage.clear();
  runCalendar(d,m,y);
}
/** Populate Inner page **/
//This function initalize all the page-nav click functionality.
function initalizePageNav()
{
  var pageNavList = document.getElementsByClassName('page-nav');
  for(let i=0; i< pageNavList.length; i++)
  {
    pageNavList[i].addEventListener('click', function()
    {
      removePageActive();
      setPageActive(this)
      navOpenTabContent(this);
    });
  }
}
//This function remove the page-nav-active from page-nav.
function removePageActive()
{
  let pageActive = document.getElementsByClassName("page-nav-active");
  if(pageActive[0] != undefined)
  {
    pageActive[0].classList.remove("page-nav-active");
  }
}
//This function add the page-nav-active to specific page nav (event).
function setPageActive(event)
{
  event.classList.add("page-nav-active");
}
$(function(){    
	$(window).scroll(function(){ 

        if($(this).scrollTop() >= 0 && $(this).scrollTop() < 450 && $(this).scrollTop() < ($('.content-nav').height() - $('.nav-list').height()))
        {            
          $('.nav-list').removeClass('fixed').addClass('absolute').css('top', 0);
        } 
        else if($(this).scrollTop() >= 450 && $(this).scrollTop() < ($('.content-nav').height()))
        {            
          $('.nav-list').removeClass('absolute').addClass('fixed').css('top', 5); //Need to be change accordingly
        } 
        else  {
            $('.nav-list').removeClass('fixed').addClass('absolute').css('top', $('.content-nav').height() - $('.nav-list').height());
        } 
    });
});
//This function hide all accordion content and display the correct one, and then scroll to that specific accordion.
function navOpenTabContent(pageNav)
{
  let aButton;
  if(pageNav.classList.contains("accordion-nav") == true)
  {
    aButton = document.getElementById(pageNav.getAttribute("aria-controls"));
    displayTabContent(aButton);//Hide all accordion content and display the correct one
    setTimeout(function(){ aButton.scrollIntoView({ behavior: "smooth" });}, 500);//Wait until the displayTabContent animation is over before scroll to the section.
  }
}
//This function display accordion content according to accordion Id that accordion button have.
function displayTabContent(aButton)
{
  const ariaControlsValue = aButton.getAttribute("aria-controls");
  let tabArrow = aButton.getElementsByClassName("tab-arrow");
  const currA = document.getElementById(ariaControlsValue);
  //If the Accordion content that retrive from aButton is not open, therefore open the Accordion content.
  if(currA.classList.contains("accordion-content-display") == false)
  {
    let aContent = document.getElementsByClassName("accordion-content-display");
    //Hide all other Accordion content, and also reset tab arrow to default rotation.
    if(aContent[0] !== undefined)
    {
      assignTabIndex(aContent[0], -1);
      let tabArrowActive = document.getElementsByClassName("tab-arrow-active")
      tabArrowActive[0].classList.remove("tab-arrow-active");
      aContent[0].classList.remove("accordion-content-display");
    }
    //Display new Accordion content according to aButton, and also rotate the arrow.
      tabArrow[0].classList.add("tab-arrow-active");
      currA.classList.add("accordion-content-display");
      assignTabIndex(currA, 0);
  }
  //If the Accordion content that retrive from aButton is open, therefore close the content.
  else
  {
    tabArrow[0].classList.remove("tab-arrow-active");
    currA.classList.remove("accordion-content-display");
    assignTabIndex(currA, -1);
  }
}
//This function assign all the Anchor elements that are children of any accordion-content class to tabindex=-1.
function initalizeTabIndex()
{
  const accordionContentList = document.querySelectorAll('.accordion-content');
  accordionContentList.forEach(accordionContent => 
  {
    assignTabIndex(accordionContent, -1);
  });
}
//This function assignTabIndex assign new tabindex value to all Anchor elements that are children of the "e", according to "index".
function assignTabIndex(e, index)
{
  let aList = e.querySelectorAll('a');
  aList.forEach((anchor) => {anchor.setAttribute('tabindex', index);});
}

//This function populate the directory of the current page that trace back to root (homepage).
function populateDirectory()
{
  let currentUrl = window.location.href;
  let urlSplit = currentUrl.replace("http://","")
  urlSplit = urlSplit.split("/")
  urlSplit.pop();
  let newElements = ``;
  for(let i = urlSplit.length-1; i >= 0; i--)
  {
    let currentPage = urlToString(urlSplit[i]);
    currentUrl = currentUrl.replace(`${urlSplit[i+1]}/`,'');

    //If specific page need specific name on the Directory, insert here
    currentPage = currentPage.replace(/oem Initiatives/gi, "OEM Support");
    // currentPage = currentPage.replace(//gi, "");
    

    //This using for the sandbox, delete this later!!
    if(currentUrl == 'https://federalist-ce2ad52a-cc88-456b-a4c1-74c6e5887c73.sites.pages.cloud.gov/preview/gsa/itvmo/ITVMO-redesign/')
    {
      newElements+= `<a href="${currentUrl}">Home</a>`
      break;
    }
    if(i == urlSplit.length-1) //The page that the user currently on, make it not a link.
    {
      newElements+= `<p>${currentPage}</p><img src="${window.location.origin}/assets/images/icons/directory-arrow.svg">`
    }
    else if(i > 0)
    {
      newElements+= `<a href="${currentUrl}">${currentPage}</a><img src="${window.location.origin}/assets/images/icons/directory-arrow.svg">`
    }
    else //"Home" for baseurl
    {
      newElements+= `<a href="${currentUrl}">Home</a>`
    }
  }
  document.getElementById('page-directory').innerHTML = newElements;
}
//This function capitalize first letter and letter after hyphen (-)
function urlToString(str) {
  let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
  capitalizedStr = capitalizedStr.replace(/-(\w)/g, (match, letter) => ' ' + letter.toUpperCase());
  return capitalizedStr;
}

//This function hide all tabs and display the tab that clicked.
function openTab(e, tabId) 
{
  //Reset all the tabs and all the tab contents.
  let tabcontent = document.getElementsByClassName("tabcontent");
  let tabList = document.getElementsByClassName("tab");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabList[i].className = tabList[i].className.replace(" active-tab", "");
  }
  document.getElementById(tabId).style.display = "flex"; //Display the content of the correct tabId.
  e.currentTarget.className += " active-tab"; 
}
//This function hide tabs and display the tab that press enter or spacebar.
function openTabKey(e, tabId)
{
  if((e.keyCode === 32)||(e.keyCode === 13))
  {
    openTab(e, tabId);
  }
}

/** Event page calendar **/

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

async function runCalendar(d,m,y) {
  const dt = new Date();
  console.log(dt.getMonth());
  //Nav always start with 0, until user press nextButton or backButton to change the nav value.
  if(nav !== 0)
    dt.setDate(1);
  else if(d !== null)
    dt.setDate(d);

  let day, monthNum, year;
  //If there are no url parameters, use the current month to calculate the previous and next month.
  if (m == -1) 
  {
    const currMonth = new Date().getMonth() + nav;
    dt.setMonth(currMonth);
    day = dt.getDate();
    monthNum = dt.getMonth();
    year = dt.getFullYear();
  }
  //If there are url parameters, use "m" variable to calculate theprevious and next month.
  else
  {
    dt.setMonth(m + nav);
    day = dt.getDate()
    monthNum = dt.getMonth();
    year = dt.getFullYear();
  }
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
      if ((i - paddingDays == day && nav === 0)) {
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
function initEventButtons(d,m,y) {
  
    document.getElementById('nextButton').addEventListener('click', () => {
      nav++;
      //Insert parameters here to intake the data and can display on the calendar
      runCalendar(d,m,y);
    });
  //Go to previous month
    document.getElementById('backButton').addEventListener('click', () => {
      nav--;
      runCalendar(d,m,y);
    });
}
/** The Home page Dropdown menu section **/
function hideDropdown(el)
{
  el.classList.remove("display-content");
  el.classList.add("hide-content");
}

function showDropdown(el)
{
  el.classList.remove("hide-content-start");
  el.classList.remove("hide-content");
  el.classList.add("display-content");
}
/** The Home page Latest Update section **/
function populateHighlight()
{
  let slideContainer = document.getElementsByClassName("slideshow-container");
  let highlightArray = []; //Slides after rearrange.
  let dupOrder = []; //Store Slides that duplicate order dectect.
  dots = document.getElementsByClassName("dot");
  slides = document.getElementsByClassName("mySlides");
  slideCount = slides.length - 1;//Slide count in the highlight
  order = document.getElementsByClassName("order"); //Retrieve all the order of each slide
  dots[0].classList.add("active");
  
  //Arrange slides according to their order number, if duplicate order number detect it the duplication will be store in sperate array (dupOrder).
  for (i = 0; i < slides.length; i++)
  {
    if(highlightArray[parseInt(order[i].textContent)-1] == null)
    {
      highlightArray[parseInt(order[i].textContent)-1] = slides[i].cloneNode(true); 
    }
    else
    {
      dupOrder[parseInt(order[i].textContent)-1] = slides[i].cloneNode(true);
    }
  }

  //Empty out the slideshow-container to prepare for the reorder highlights.
  slideContainer[0].innerHTML = ''; 

  highlightArray.concat(dupOrder);
  
  //Add Order slides into the slideshow-container.
  for (i = 0; i <= slideCount; i++)
  {
    if(highlightArray[i] != null)
    {
      slideContainer[0].appendChild(highlightArray[i]);
    }
    //If duplication order founded add them next to each other.
    if(dupOrder[i] != null)
    {
      slideContainer[0].appendChild(dupOrder[i]);
    }
  }

  //Line up all the sildes together horizontally 
  for (i = 0; i <= slideCount; i++)
  {
    slides[i].style.transform = `translateX(${i * 100}%)`;
  }
}

function initHighlightButtons()
{
  var prev = document.getElementsByClassName('prev')[0];
  var next = document.getElementsByClassName('next')[0];

  prev.addEventListener('click', () => prevSlide());
  next.addEventListener('click', () => showSlides());

  // Allow user to use the next and previous button without the need of the mouse.
  prev.onkeydown = function(key){previousSlide(key)};
  next.onkeydown = function(key){nextSlide(key)};

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

function prevSlide() 
{
  if (curSlide === 0) 
  {
    curSlide = slideCount;
  } 
  else 
  {
    curSlide--;
  }
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.transform = `translateX(${100 * (i - curSlide)}%)`;

    var readButton = slides[i].getElementsByClassName("read-more");
    if((100 * (i - curSlide)) !== 0)
    {
      readButton[0].tabIndex = "-1";
    }
    else
    {
      readButton[0].tabIndex = "0";
    }
  }

  updateDots();
  clearTimeout(timer); //Remove the timer that previously active before click on the previous button
  runHighlight(); 
}

function showSlides() {

  if (curSlide === slideCount) 
  {
    curSlide = 0;
  } 
  else 
  {
    curSlide++;
  }
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.transform = `translateX(${100 * (i - curSlide)}%)`;
    var readButton = slides[i].getElementsByClassName("read-more");
    if((100 * (i - curSlide)) !== 0)
    {
      readButton[0].tabIndex = "-1";
    }
    else
    {
      readButton[0].tabIndex = "0";
    }
  }

  updateDots();
  clearTimeout(timer); //Remove the timer that previously active before click on the previous button
  runHighlight();
}
//This function update dot allocation on the highlight page
function updateDots()
{
  for (i = 0; i < slides.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[curSlide].className += " active";
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

/*The Back to top button */
$(document).ready(function (e) {

  // When the user scrolls down 20px from the top of the document, show the button.
  window.onscroll = function() {scrollFunction()};
  var topButton= $("#backtotop");
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.css('display','flex');
    } else {
      topButton.css('display','none');
    }
  }
    // When the user clicks on the button, scroll to the top of the document.
    topButton.click(function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
