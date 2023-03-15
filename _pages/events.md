---
title: Upcoming Events
layout: page
sidenav: false
---

<section class="grid-container border-bottom border-gray-30 padding-left-0 padding-right-1">
<h1 class="margin-top-0">{{ page.title }}</h1>

<div class="margin-bottom-2">
        
    <div id="calendarSumContainer" class="animate fade">
    <div id="container">
      <div id="header">
                  <button id="backButton"> &#x2190; </button>
                  <div id="monthDisplay"></div>          
                  <button id="nextButton"> &#x2192; </button>
      </div>

      <div id="weekdays">
        <div>Sun.</div>
        <div>Mon.</div>
        <div>Tue.</div>
        <div>Wed.</div>
        <div>Thu.</div>
        <div>Fri.</div>
        <div>Sat.</div>
      </div>

      <div id="weekdaysDesktop">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>

      <div id="calendar"></div>
      
      <div class="eventExplain" id = "firstEventExplain">
        <div class="eventColor" style="background-color: rgb(211, 108, 108);"></div>
        <div class="eventColorExplain"> - Only ITVMO events.</div>
      </div>
      <div class="eventExplain">
        <div class="eventColor" style="background-color: rgb(27, 43, 133);"></div>
        <div class="eventColorExplain"> - Only non-ITVMO events.</div>
      </div>
      <div class="eventExplain">
        <div class="eventColor" style="background: linear-gradient(135deg, rgb(211, 108, 108) 50%, rgb(27, 43, 133) 50%);"></div>
        <div class="eventColorExplain"> - Both ITVMO and non-ITVMO events.</div>
      </div>
    </div>

    <div id="newEventModal">
      <h2>New Event</h2>

      <input id="eventTitleInput" placeholder="Event Title" />

      <button id="saveButton">Save</button>
      <button id="cancelButton">Cancel</button>
    </div>


    <!-- <script src="./script.js"></script> -->

    <!-- <h2>Events Summary:</h2> -->
    <div id="eventText"></div>

    </div>
    <div class="animate fade">
    <h2>Event Highlights:</h2>
    <p>
       <div class="eventHighlightContainer">
          <a class="no-style anchor-fill" href="" aria-label="youtube link" target="_blank" rel="noreferrer noopener">
          <!-- <a class="no-style anchor-fill" href="https://www.youtube.com/watch?v=2-PL5EUwB1s" aria-label="youtube link" target="_blank" rel="noreferrer noopener"> -->
          <div class="border-top-05 border-accent-warm bg-white padding-2 shadow-5 height-full resources-hover youtube eventHighlight">
            <div class="text-container padding-1 height-full">
              <span class="card-tag">The IT Category: Creating Opportunities for Small Business, Oct 6 Meeting</span>
                  <p class="description-resources">
                    This meeting recording provides an overview of current governmentwide contract opportunities and helps to bring an understanding of resources available for small business acquisitions.
                  </p>
                  <p class="link-type">        
                    <img id="youtubeLogo" alt="Youtube logo" src="../assets/images/logos/youtube.png" alt="Youtube logo">
                  </p>
            </div>
          </div>
          </a>
          <a class="no-style anchor-fill" href="" aria-label="youtube link" target="_blank" rel="noreferrer noopener">
          <!-- <a class="no-style anchor-fill" href="https://www.youtube.com/watch?v=mD4iWvAJnyk" aria-label="youtube link" target="_blank" rel="noreferrer noopener"> -->
          <div class="border-top-05 border-accent-warm bg-white padding-2 shadow-5 height-full resources-hover youtube eventHighlight">
            <div class="text-container padding-1 height-full">
              <span class="card-tag">The ITVMO Industry Day</span>
                  <p class="description-resources">
                    This Industry Day overview is intended for a general audience. It presented  the ITVMO’s vision for improving IT acquisitions in the future. No solution is possible without help and input from the IT vendor community and the Industry Day was the first of many opportunities to gather feedback and learn from industry.
                  </p>
                  <p class="link-type">        
                    <img id="youtubeLogo" alt="Youtube logo" src="../assets/images/logos/youtube.png" alt="Youtube logo">
                  </p>
            </div>
          </div>
          </a>
          <a class="no-style anchor-fill" href="https://community.max.gov/display/Egov/ITVMO+Original+Equipment+Manufacturer+%28OEM%29+Assessments" aria-label="external link to ITVMO Vendor Assessment Webinars" target="_blank" rel="noreferrer noopener">
          <div class="border-top-05 border-accent-warm bg-white padding-2 shadow-5 height-full resources-hover youtube eventHighlight">
            <div class="text-container padding-1 height-full">
              <span class="card-tag">ITVMO Vendor Assessment Webinars</span>
                  <p class="description-resources">
                    Limited to .gov and .mil viewers, these webinars review comprehensive vendor assessments completed on OEMs.
                  </p>
              </div>
            </div>
          </a>
        </div>
      </p>
    </div>
</div>  
</section>

<section class="grid-container padding-left-0 padding-right-1">
<p><strong>Don’t see what you’re looking for?</strong><br>
If your question is not addressed in the above sections, please email us at: <a href="mailto:itvmo@gsa.gov">itvmo@gsa.gov</a> and we will get back to you with an answer.</p>
</section>



