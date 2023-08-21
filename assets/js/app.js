// Add your custom javascript here
// console.log("Hi from Federalist");

/** Run functions **/

let baseUrl = window.location.origin;
//If detected that it is the sanbox url, change the base url. Change the baseurl to sanbox directory that able to obtain images.
if(baseUrl.includes("federalist"))
{
  baseUrl = `/preview/gsa/itvmo/ITVMO-redesign`;
}

//Highlights section Variables
let curSlide = 0; 
let slideCount, slides, timer, dots;//Slide count in the highlight
//Run Home page 
if(document.getElementById('dynamic-panel') != null)
{
  populateHighlight();
  initHighlightButtons();
  runHighlight();
  document.addEventListener("DOMContentLoaded", () => 
  {
    positionHighlight();
  });
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
// let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
const eventList = [], pastEventList = [], futureEventList = [];
const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const month = ['janurary', 'february', 'march', 'april', 'may', 'june', 'july','august','september','october','november','december'];
const queryString = window.location.search;
if( document.getElementById('events-page') != null)
{
  retriveEventsData();
  //Retrive the keys and their value from the URL.
  const urlParams = new URLSearchParams(queryString);
  const d = urlParams.get('day'), m = urlParams.get('month')-1, y = urlParams.get('year');
  initEventButtons(d,m,y);
  localStorage.clear();
  runCalendar(d,m,y);
}
//Run Resources page

//Faceted Navigation Variables
let filteredResults, facets, resources, searchInput;
const filterMap = new Map([["p-filter", "Policy"],["acquisition-best-practices", "Acquisition Best Practices"],["small-business", "Small Business"],["market-intelligence", "Market Intelligence"],["technology", "Technology"],["contract-solutions", "Contract Solutions"],["itvmo-general", "ITVMO General"]]);
const filterColorMap = new Map([["p-filter", "#f2938c"],["acquisition-best-practices", "#59b9de"],["small-business", "#abace5"],["market-intelligence", "#3e4ded"],["technology", "#ddaa01"],["contract-solutions", "#5abf95"],["itvmo-general", "#b04abd"]]);
const bOfferingMap = new Map([["govwide-it-category-management", "Govwide IT Category Management"],["contract-data-elements", "Contract Data Elements"],["cyber-category", "Cyber Category"],["governmentwide-strategic-solutions", "Governmentwide Strategic Solutions"],["it-best-in-class-vehicles", "IT Best-in-Class Vehicles"],["it-buyers-community-of-practice", "IT Buyers Community of Practice"],["leading-edge-technologies", "Leading Edge Technologies"],["market-intelligence", "Market Intelligence"],["oem-vendor-initiatives", "OEM Vendor Initiatives"],["small-business-util", "Small Business Utilization/Equity"],["supply-chain-risk-management", "Supply Chain Risk Management"],["technology-life-cycle-framework", "Technology Life Cycle Framework"]]);
const audienceMap = new Map([["for-contracting-officers", "Contracting Officers"],["for-program-managers","Program Managers"],["for-info-security-officials","Information Security Officials"],["for-industry", "Industry"]]);
let clearAllButton, facetNav, resourceOverlay, facetList, facetButton, closeButton;
if(document.getElementById('resources') != null)
{
  //Display all the resource cards right away.
  document.addEventListener("DOMContentLoaded", () => {
    updateResults();
  });
  retriveResourceData();
  initalizeSearch();
  initalizeClearAll();
  initalizeFacets();
  initalizeOverlay();
  initalizeWindow();
}

/** Resources page **/

/** Resource page Faceted Navigation **/

//This function initalize Overlay on the Resources page. 
//While Faceted Navigation displayed (Mobile Version), if user click on the overlay the Faceted Navigation and overlay will be hidden.
function initalizeOverlay()
{
  resourceOverlay = document.getElementById("custom-overlay");
  resourceOverlay.addEventListener("click", closeFacetedNav);
}
//This function add evenlistener to the window.
function initalizeWindow()
{
  // Call the checkScreenWidth function when the window is resized
  window.addEventListener("resize", checkScreenWidth);
  // Call the checkScreenWidth function initially to handle the initial window width
  checkScreenWidth();
}

//This function if the width of the screen is lesser than 1230 (Mobile version of the Faceted Navigation), all the Facets on the Faceted Navigation will be unhide.
function checkScreenWidth() {
  const thresholdWidth = 1230; // Adjust this value as needed

  // Get the current width of the browser window
  const screenWidth = window.innerWidth;
  if (screenWidth < thresholdWidth) 
  {
    hideFacets();
  }
  else
  {
    unhideFacets();
    // const facetList = document.getElementsByClassName("facet-list");
    for(let i=1; i< facetList.length; i++)
    {
      facetList[i].classList.remove("facet-list-active");
      setCheckboxesTabIndex(facetList[i],-1);
    }
  }
}
//This function make all the facets display their dropdown list.
function unhideFacets()
{
  closeButton[0].tabIndex = 0;
  for(let i=0; i< facetButton.length; i++)
  {
    facetButton[i].tabIndex = 0;
  }
  for(let i=0; i< facetList.length; i++)
  {
    if(!facetList[i].classList.contains("facet-list-active"))
    {
      facetList[i].classList.add("facet-list-active");
      setCheckboxesTabIndex(facetList[i],0);
    }
  }
}
//This function make all the facets hide their dropdown list, except the very first facet.
function hideFacets()
{
  closeButton[0].tabIndex = -1;
  for(let i=0; i< facetButton.length; i++)
  {
    facetButton[i].tabIndex = -1;
  }
  for(let i=0; i< facetList.length; i++)
  {
    facetList[i].classList.remove("facet-list-active");
    setCheckboxesTabIndex(facetList[i],-1);
  }
}
//This function unhide the Faceted navigation (mobile version of the page).
function openFacetedNav() 
{
  resourceOverlay.classList.add("overlay-active");
  facetNav.classList.add("faceted-display-mobile");
  unhideFacets();

}
//This function hide tabs and display the tab that press enter or spacebar.
function openFacetedNavKey(e)
{
  if((e.keyCode === 32)||(e.keyCode === 13))
  {
    openFacetedNav();
  }
}
//This function hide the Faceted navigation (mobile version of the page).
function closeFacetedNav() 
{
  resourceOverlay.classList.remove("overlay-active");
  facetNav.classList.remove("faceted-display-mobile");
  hideFacets();
}
//This function will update resource cards according to both search and facets
function updateResultsSearch() 
{
  const selectedFacets = facets.map(facet =>
    Array.from(facet.querySelectorAll("input:checked")).map(input => input.value)
  );
  const filteredResources = getFilteredRecources(selectedFacets); 
  const searchTerm = searchInput.value;
  const searchData = filterBySearch(filteredResources, searchTerm);
  displayResults(searchData);
}

//This function return the filter resources that also match the search input that user inserted.
function filterBySearch(filteredResources, searchTerm) 
{
  if (!searchTerm) 
  {
    return filteredResources;
  }
  searchTerm = searchTerm.toLowerCase();
  return filteredResources.filter(item => { return item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);});
}

//This function dropdown the facet list when click on it heading button.
function displayDropdownContent(aButton)
{
  const ariaControlsValue = aButton.getAttribute("aria-controls");
  const aButtonArrow = aButton.children[1];
  const currA = document.getElementById(ariaControlsValue);
  if(currA.classList.contains("facet-list-active") == false)
  { 
    aButtonArrow.classList.add("dropdown-arrow-active");
    currA.classList.add("facet-list-active");
    setCheckboxesTabIndex(currA, 0);
  }
  else 
  {
    aButtonArrow.classList.remove("dropdown-arrow-active");
    currA.classList.remove("facet-list-active");
    setCheckboxesTabIndex(currA, -1);
  }
}
//This function set all the checkboxes inside the facet tabindex according to the parameter that passing through.
function setCheckboxesTabIndex(currFacetList,tabI)
{
  const checkboxList = currFacetList.children[0].children;
  for(let i = 0; i < checkboxList.length; i++)
  {
    checkboxList[i].children[0].tabIndex = tabI;
  }
}
//This function initalize the search on the Resoruces page
function initalizeSearch()
{
  searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", updateResultsSearch);
}
//This function initalize the Clear All button on the page
function initalizeClearAll()
{
  clearAllButton = document.getElementById("clear-all");
  clearAllButton.addEventListener("click", clearAllFacets);
}
//This function initalize all the Facets on the page
function initalizeFacets()
{
  facetList = document.getElementsByClassName("facet-list");
  facetButton = document.getElementsByClassName("facet-dropdown");
  closeButton = document.getElementsByClassName("closebtn");
  filteredResults = document.getElementById("filtered-results");
  facetNav= document.getElementById("faceted-nav");
  facets = [document.getElementById("topic-area"), document.getElementById("audience"), document.getElementById("resource-type"), document.getElementById("resource-source"), document.getElementById("filtered-results")];
  for (const facet of facets) {
    facet.addEventListener("change", updateResults);
  }
}

//This function retrive the Resource Data from Resource page to prepare to display.
function retriveResourceData()
{
  resources = document.getElementsByClassName("raw-resource-data");
  let finalResources = [];
  for( resource of resources)
  {
    finalResources.push(
      {
      "title":resource.getAttribute("data-title"),
      "description":resource.getAttribute("data-description"), 
      "link":resource.getAttribute("data-url"),
      "type":resource.getAttribute("data-type"),
      "govOnly":resource.getAttribute("data-gov-only"),
      "isExternal":resource.getAttribute("data-is-external"),
      "filter":resource.getAttribute("data-filter"),
      "brandOffering":resource.getAttribute("data-branded-offerings"),
      "audience":resource.getAttribute("data-audience"),
      "date":resource.getAttribute("data-publication-date"),
      "readTime":resource.getAttribute("data-reading-time"),
      "resourceType":resource.getAttribute("data-resource-type"),
    })
  }
  resources = finalResources;
}

//This function will update the result according to the input on all of the facets
function updateResults() 
{
  //Each facet in facets create a  array of input that checked by the user.
  const selectedFacets = facets.map(facet =>
    Array.from(facet.querySelectorAll("input:checked")).map(input => input.value)
  );
  updateFacetsListChecked(selectedFacets);
  const filteredResources = getFilteredRecources(selectedFacets); 
  displayResults(filteredResources);
}
//This function display checked count on for each facet, 
//if total checked of all facets combine is greater than 0 display clear all button.
function updateFacetsListChecked(selectedFacets)
{
  let checkedCountList = document.getElementsByClassName("checked-count");
  let totalCheckedCount = 0;

  for(let i = 0; i < checkedCountList.length; i++)
  {
    if(selectedFacets[i].length != 0)
    {
      checkedCountList[i].innerHTML = `(${selectedFacets[i].length})`;
      totalCheckedCount++;
    }
    else
    {
      checkedCountList[i].innerHTML = "";
    }
  }
  if(totalCheckedCount > 0)
  {
    clearAllButton.style.display = "block";
  }
  else
  {
    clearAllButton.style.display = "none";
  }
}

//This function retrive resources that match facets requirement.
function getFilteredRecources(selectedFacets) 
{
  const filteredResources = resources.filter(resource => {

    const [selectedTotalArea, selectedAudience, selectedResourceType, selectedSource] = selectedFacets;
    const totalAreaMatch = selectedTotalArea.length === 0 || selectedTotalArea.includes(resource.filter);
    const audienceMatch = selectedAudience.length === 0 || selectedAudience.includes(resource.audience);
    const resourceTypeMatch = selectedResourceType.length === 0 || selectedResourceType.includes(resource.resourceType);
    const sourceMatch = selectedSource.length === 0 || selectedSource.includes(resource.govOnly);
    return totalAreaMatch && audienceMatch && resourceTypeMatch && sourceMatch;
  });

  return filteredResources;
}

//This function reset all the Facets.
function clearAllFacets() 
{
  const checkboxes = document.querySelectorAll(".facet-options input[type='checkbox']");

  for (const checkbox of checkboxes) {
    checkbox.checked = false;
  }

  updateResults();
}

//This function will display each resources into resource cards according to the filterResources that pass through, 
//This function also update the Resoruce cards count on the page.
function displayResults(filterResources) 
{
  filteredResults.innerHTML = "";

  if (filterResources.length === 0) {
    filteredResults.innerHTML = "No results found.";
  } 
  else 
  {
    let resourceCardList = ``;
    let resourcesCount = 0;
    for (const resource of filterResources) 
    {
      let viewCount = 30; //!!Query and insert the view counts here
      let resourceF = filterMap.get(resource.filter);
      let resourceBO = bOfferingMap.get(resource.brandOffering);
      let resourceA = audienceMap.get(resource.audience);
      let resourceColor = filterColorMap.get(resource.filter);
      let resultItem = 
      `
        <div class="resource-card" style="border-color: ${resourceColor};">
          <a href="${resource.link}">
              <div class="resource-content">
                <div aria-label="Filter: ${resourceF}" class="resource-filter"><span>${resourceF}</span></div>
                <div aria-label="Title: ${resource.title}" class="resource-name"><p class="two-line-max">${resource.title}</p>
                `
                if(resource.isExternal == 'true')
                {resultItem +=`<img alt="External icon" src="${baseUrl}/assets/images/icons/external.svg">`;}
                
                resultItem +=`</div>
                <div aria-label="Description: ${resource.description}" class="resource-description" aria-details="description"><p class="">${resource.description}</p></div>
                <div class="resource-detail">
                  <div class="file-type">
                    <p>${resource.type}</p>
                  </div>`;

                  if(resource.govOnly == 'true')
                  {
                    resultItem +=`<div class="govmil">
                      <img alt="Lock icon" src="${baseUrl}/assets/images/icons/lock.svg">
                    </div>`
                  }
                  
                  resultItem +=`<div class="audience">
                    <p>${resourceA}</p>
                  </div>
                  <div class="branded-offerings">
                    <p>${resourceBO}</p>
                  </div>
                </div>
              </div>

            <div class="resource-line"></div>

            <div class="resource-info">
              <div class="resource-date">
                <img alt="Calendar icon" src="${baseUrl}/assets/images/icons/calendar.svg">
                <div class="resource-logo"><span>${resource.date}</span></div>
              </div>
              <div class="resource-rtime">
                <img alt="Stop watch icon" src="${baseUrl}/assets/images/icons/stop-watch.svg">
                <div class="resource-logo"><span>${resource.readTime} minute read</span></div>
              </div>
              <div class="resource-view">
                <img alt="Eye icon" src="${baseUrl}/assets/images/icons/eye.svg">
                <div class="resource-logo"><span>${viewCount} View</span></div>
              </div>
            </div>
          </a>
        </div>
      `;
      resourceCardList += resultItem;
      resourcesCount++;
    }
    filteredResults.innerHTML = `<p id="resources-count">${resourcesCount} Items </p>` + resourceCardList;
  }
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

        if($(this).scrollTop() >= 0 && $(this).scrollTop() < 550 && $(this).scrollTop() < ($('.content-nav').height() - $('.nav-list').height()))
        {            
          $('.nav-list').removeClass('fixed').addClass('absolute').css('top', 0);
        } 
        else if($(this).scrollTop() >= 550 && $(this).scrollTop() < ($('.content-nav').height()))
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
  //If there is accordion-active class exist remove it.
  let aActive = document.getElementsByClassName("accordion-active");
  if(aActive[0] !== undefined)
  {
    aActive[0].classList.remove("accordion-active");
  }

  const ariaControlsValue = aButton.getAttribute("aria-controls");
  let tabArrow = aButton.getElementsByClassName("tab-arrow");
  const currA = document.getElementById(ariaControlsValue);
  //If the Accordion content that retrive from aButton is not open, therefore open the Accordion content.
  if(currA.classList.contains("accordion-content-display") == false)
  {
    //Add accordion-active style to the Accordion that clicked (aButton)
    aButton.classList.add("accordion-active"); 
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
    currentPage = currentPage.replace(/oem/gi, "OEM Support");
    // currentPage = currentPage.replace(//gi, "");
    

    //This using for the sandbox, delete this later!!
    if(currentUrl == "https://federalist-ce2ad52a-cc88-456b-a4c1-74c6e5887c73.sites.pages.cloud.gov/preview/gsa/itvmo/main-itvmo-redesign-up-to-date/")
    {
      newElements+= `<a href="${currentUrl}">Home</a>`
      break;
    }
    if(i == urlSplit.length-1) //The page that the user currently on, make it not a link.
    {
      newElements+= `<p>${currentPage}</p><img src="${baseUrl}/assets/images/icons/directory-arrow.svg">`
    }
    else if(i > 0)
    {
      newElements+= `<a href="${currentUrl}">${currentPage}</a><img src="${baseUrl}/assets/images/icons/directory-arrow.svg">`
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

  //Update the dropdown value for the mobile version of the inner tabs well.
  document.getElementById('tabs-mobile').value = e.currentTarget.id;
}
//This function hide tabs and display the tab that press enter or spacebar.
function openTabKey(e, tabId)
{
  if((e.keyCode === 32)||(e.keyCode === 13))
  {
    openTab(e, tabId);
  }
}
function openTabDropdown()
{
  document.getElementById(document.getElementById('tabs-mobile').value).click();
}

/** Events page**/

//This function retrive all events data from Events page to prepare to display.
function retriveEventsData()
{
  const rawEventList = document.getElementsByClassName("raw-event-data");
  const currentDate = new Date(); //use to determine if events will be store in pastEventList or futureEventList
  currentDate.setHours(0, 0, 0, 0); //So all the event that the same date as current date but the time is lesser than the current date will be count as futureEventList as well.
  for( ev of rawEventList)
  {
    const startTime = new Date(ev.getAttribute("data-st"));
    const endTime = new Date(ev.getAttribute("data-et"));
    const eventTime = `${getDateTime(startTime)} - ${getDateTime(endTime)} EST`;
    const currEvent =       
    {
      "organizer":ev.getAttribute("data-organizer"),
      "title":ev.getAttribute("data-title"),
      "description":ev.getAttribute("data-description"), 
      "link":ev.getAttribute("data-url"),
      "date":startTime,
      "day":weekdaysShort[startTime.getDay()],
      "dateNumber":startTime.getDate(),
      "month":startTime.getMonth(),
      "fromTo":eventTime,
      "eventType":ev.getAttribute("data-event-type"),
      "govOnly":ev.getAttribute("data-gov-only"),
      "isExternal":ev.getAttribute("data-is-external"),
    }
     eventList.push(currEvent);
     if(startTime < currentDate)
     {
      pastEventList.push(currEvent);
     }
     else
     {
      futureEventList.push(currEvent)
     }

  }
}

//This function extract the time from the date, and assign AM or PM depend on the time.
function getDateTime(date) 
{
  const hours = date.getUTCHours(); //Eventhough it UTC but we will treat it as EST.
  const minutes = date.getUTCMinutes();
 
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = String(minutes).padStart(2, "0");

  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  return formattedTime;
}

/** Event page calendar **/

function openModal(eventForDay, dayString) {
  if(eventForDay.length > 0)
  {
    // var eventText =
    // `
    // <h3 id="calendar-date-display">${dayString}</h3>
    // <div class="animate fadeInDown">
    // `;
    var eventText =
    `
    <h3 id="calendar-date-display">${dayString}</h3>
    <div>
    `;
    for(var i = 0; i < eventForDay.length; i++)
    { 
      let colorLine = "#d36c6c;"
      let inEx = "ITVMO Event"
      //If the event is external the line under the title change to blue
      if(eventForDay[i].isExternal == "true")
      {
        
        colorLine = "#1b2b85";
        inEx = "Non-ITVMO Event"
      }
      eventText += 
        `
        <div class="event">
          <h3 class="event-org">${eventForDay[i].organizer}</h3>
          <h2 class="event-title">${eventForDay[i].title}</h2>
          <div class="event-color" style="background-color:${colorLine}"></div>
          <p class="event-description">${eventForDay[i].description}</p>
          <div class="event-info-link">
            <div class="event-info">
              <p><img src="${baseUrl}/assets/images/icons/clock-icon-grey.svg">${eventForDay[i].fromTo}</p>
              <p><img src="${baseUrl}/assets/images/icons/location-icon-grey.svg">${eventForDay[i].eventType}</p>
              <p><img src="${baseUrl}/assets/images/icons/compass-icon-grey.svg">${inEx}</p>
            </div>
            <a aria-label="Event link of Organization:${eventForDay[i].organizer}, Title:${eventForDay[i].title}" class="event-link" href="${eventForDay[i].link}" target="_blank" rel="noreferrer noopener"><b><img src="${baseUrl}/assets/images/icons/external-white.svg">View Event</b></a>
          </div>
        </div>
        `;
    }
    eventText += `</div>`
    document.getElementById('current-day-events').innerHTML = eventText;
  }
  else
  {
    // document.getElementById('current-day-events').innerHTML = 
    // `
    // <h3 id="calendar-date-display">${dayString}</h3>
    // <div class="animate fadeInDown">
    // <p><b>No events planned today.</b></p>
    // </div>
    // `;
    document.getElementById('current-day-events').innerHTML = 
    `
    <h3 id="calendar-date-display">${dayString}</h3>
    <div>
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
      //This function get the specific month from the calendar.
  const getCurrMonthEvents = () => 
  {
    const currMonthEvents = [];
    for(ev of eventList)
    {
      if((monthNum == ev.date.getMonth()) && (year == ev.date.getFullYear()))
      {
        currMonthEvents.push(ev);
      }
    }
    return currMonthEvents;
  }
      var thisMonthEvents = getCurrMonthEvents();
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
  const monthString = dt.toLocaleDateString('en-us', { month: 'long' })
  document.getElementById('monthDisplay').innerText = 
    `${monthString} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) 
  {
    let itvmoEventCount = 0;
    const daySquare = document.createElement('div');
    daySquare.classList.add('day'); 
    const dayString = `${monthString} ${i - paddingDays}, ${year}`;

    //Round the corner of the specific date to make the calendar corner look round.
    if(i == 1)
    {
      daySquare.classList.add('day-corner-top-left'); 
    }
    else if(i == 7)
    {
      daySquare.classList.add('day-corner-top-right'); 
    }
    else if(((i == 29)&&((daysInMonth + paddingDays) <= 35)) || (i == 36))
    {
      daySquare.classList.add('day-corner-bottom-left'); 
    }
    else if((i == (paddingDays + daysInMonth))&&(((paddingDays + daysInMonth)%7)==0))
    {
      daySquare.classList.add('day-corner-bottom-right'); 
    }

    if (i > paddingDays) 
    {
      daySquare.innerHTML = `<p>${i - paddingDays}</p>`;
      const eventForDay = [];
      for(var a = 0; a < thisMonthEvents.length; a++)
      { 
        if((thisMonthEvents[a].date.getMonth() == monthNum)&&(thisMonthEvents[a].date.getDate() == (i - paddingDays))&&(thisMonthEvents[a].date.getFullYear()==year))
        {
          eventForDay.push(thisMonthEvents[a]);
          if(thisMonthEvents[a].isExternal == "false")
          {
            itvmoEventCount++;
          }
        }
      }
      let nonItvmoCount = eventForDay.length - itvmoEventCount;
      daySquare.title = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${i - paddingDays} event count of ${eventForDay.length}`;
      //Display the Events summary for the current day if there is one
      if ((i - paddingDays == day && nav === 0)) {
        daySquare.id = 'currentDay';
        daySquare.classList.add('active-day');
        daySquare.tabIndex = 0;
        openModal(eventForDay, dayString);
      }
      if (eventForDay.length > 0) 
      {
          //Only let user traverse on the calendar with tab on only the day that have event(s).
          daySquare.tabIndex = 0;
          const eventCountSection = document.createElement('div');
          eventCountSection.classList.add('event-count-section');
          
          if(itvmoEventCount > 0)
          {
            const eventDivM = document.createElement('div');
            eventDivM.classList.add('event-count');
            eventDivM.innerText += itvmoEventCount;
            eventDivM.style.cssText += 'background-color: #d36c6c;';
            eventCountSection.appendChild(eventDivM);
          }
          if(nonItvmoCount > 0)
          {
            const eventDivM = document.createElement('div');
            eventDivM.classList.add('event-count');
            eventDivM.innerText += nonItvmoCount;
            eventDivM.style.cssText += 'background-color: #1b2b85;';
            eventCountSection.appendChild(eventDivM);
          }
          daySquare.appendChild(eventCountSection);
      }
      //add event listener on each day for clicking on the day action
      daySquare.addEventListener('click', () => 
      {
        setActiveDay(daySquare);
        openModal(eventForDay, dayString)
      });
      daySquare.onkeydown = 
      function(key) 
      {
        if((key.keyCode === 32)||(key.keyCode === 13))
        {
          setActiveDay(daySquare);
          openModal(eventForDay, dayString);
        }
      }
    } 
    else 
    {
      daySquare.classList.add('padding');
    }
    calendar.appendChild(daySquare);    
  }
}
//This function change the background of the day when user click on the day.
function setActiveDay(daySquare)
{
  const activeDay = document.getElementsByClassName('active-day');
  if(activeDay.length > 0)
    {
      activeDay[0].classList.remove('active-day');
    }
  daySquare.classList.add('active-day');
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
  positionHighlight();
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
  positionHighlight();
  updateDots();
  clearTimeout(timer); //Remove the timer that previously active before click on the previous button
  runHighlight();
}

//This function position hightlights and assign tabindex accordingly.
function positionHighlight()
{
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
