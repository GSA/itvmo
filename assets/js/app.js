// Add your custom javascript here
// console.log("Hi from Federalist");
let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openModal(date) {
  // console.log(events.length);
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
      if(i == 0)
        eventText = 
        `
        <div class="animate fadeInDown">
        <h2 id="eventsSummary">Events Summary:</h2>
        <h3 id="header">${date}</h3>
        `;

      eventText += 
        `
        <p><a href="${eventForDay[i].link}" target="_blank" rel="noreferrer noopener"><b>${eventForDay[i].title} </b></a></p>
        <p>${eventForDay[i].description}</p>
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
    <h3 id="header">${date}</h3>
    <p><b>There are no upcoming events.</b></p>
    </div>
    `;
  }
}

async function load() {
  const dt = new Date();
  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  //Retrive the date
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  if(year === 2022)
  {
      //This variable use to point at the specific json file that will be use to retrive this month events.
      var thisMonthEvent;
      
      //Janurary is 0 to December is 11
      if(month === 0) thisMonthEvent = '../assets/events/2022/janurary.json';
      else if(month === 1) thisMonthEvent = '../assets/events/2022/february.json';
      else if(month === 2) thisMonthEvent = '../assets/events/2022/march.json';
      else if(month === 3) thisMonthEvent = '../assets/events/2022/april.json';
      else if(month === 4) thisMonthEvent = '../assets/events/2022/may.json';
      else if(month === 5) thisMonthEvent = '../assets/events/2022/june.json';
      else if(month === 6) thisMonthEvent = '../assets/events/2022/july.json';
      else if(month === 7) thisMonthEvent = '../assets/events/2022/august.json';
      else if(month === 8) thisMonthEvent = '../assets/events/2022/september.json';
      else if(month === 9) thisMonthEvent = '../assets/events/2022/october.json';
      else if(month === 10) thisMonthEvent = '../assets/events/2022/november.json'
      else if(month === 11) thisMonthEvent = '../assets/events/2022/december.json'
      //retrive the month information
      const res = await fetch(thisMonthEvent);
      var thisMonthEvents = await res.json(); //data in this case is array list of items
      thisMonthEvents = thisMonthEvents.events;
     //Check whether the json file already store in the local storage already or not.
      // if(events.find(e => e.date === thisMonthEvents[thisMonthEvents.length-1].date) == null)
      for(let i = 0; i<thisMonthEvents.length; i++)
      {
        if(events.find(e => (e.title === thisMonthEvents[i].title) && (e.date === thisMonthEvents[i].date)) == null)
          saveEvent(thisMonthEvents[i]);
      }
  } 

  //Generate calendar
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
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

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      // const eventForDay = events.find(e => e.date === dayString);

      const eventForDay = [];
      for(var a = 0; a < events.length; a++)
      { 
        if(events[a].date === dayString)
        {
          eventForDay.push(events[a]);
        }
      }
      //Display the Events summary for the current day if there is one
      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
        openModal(dayString);
      }

      if (eventForDay.length > 0) {

          const eventDiv = document.createElement('div');
          eventDiv.classList.add('event');
          eventDiv.innerText += eventForDay.length + " EVENTS";
          daySquare.appendChild(eventDiv);

          const eventDivM = document.createElement('div');
          eventDivM.classList.add('eventMobile');
          eventDivM.innerText += eventForDay.length;
          daySquare.appendChild(eventDivM);

      }
      
      //add event listener on each day for clicking on the day action
      daySquare.addEventListener('click', () => openModal(dayString));
    } 
    else {
      daySquare.classList.add('padding');
    }
    calendar.appendChild(daySquare);    
  }
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  // load();
}
//Save the event 
function saveEvent(currEvent) {

    eventTitleInput.classList.remove('error');
    events.push(currEvent);
    localStorage.setItem('events', JSON.stringify(events));
}
//Go to next month
function initButtons() {

  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    //Insert paraemeter here to intake the data and can display on the calendar
    load();
  });
//Go to previous month
  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });
}

initButtons();
localStorage.clear();
load();