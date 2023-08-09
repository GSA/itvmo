---
title: Upcoming Events
layout: page
sidenav: false
---
<h1 class="margin-top-0">{{ page.title }}</h1>

<section class="grid-container border-bottom border-gray-30 padding-left-0 padding-right-1">
<div></div>
<div class="margin-bottom-2">
    <div id="calendarSumContainer" class="animate fade">
    <div id="container">
      <div id="calendar-header">
                  <button id="backButton" title="go to previous month"> &#x2190; </button>
                  <div id="monthDisplay"></div>          
                  <button id="nextButton" title="go to next month"> &#x2192; </button>
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
          <a class="no-style anchor-fill" href="https://community.max.gov/display/Egov/ITVMO+Original+Equipment+Manufacturer+%28OEM%29+Assessments" aria-label="youtube link" target="_blank" rel="noreferrer noopener">
          <div class="border-top-05 border-accent-warm bg-white padding-2 shadow-5 height-full resources-hover youtube eventHighlight">
            <div class="text-container padding-1 height-full">
              <span class="card-tag">ITVMO Vendor Assessment Webinars</span>
                  <p class="description-resources">
                    Limited to .gov and .mil viewers, these webinars review comprehensive vendor assessments completed on OEMs.
                  </p>
                  <!-- <p class="link-type">        
                    <img id="youtubeLogo" src="../assets/images/logos/youtube.png" alt="Youtube logo" >
                  </p> -->
              </div>
            </div>
          </a>
          <a class="no-style anchor-fill" href="{{site.baseurl}}/emerge-tech-small-business-event/" aria-label="youtube link" target="_blank" rel="noreferrer noopener">
          <div class="border-top-05 border-accent-warm bg-white padding-2 shadow-5 height-full resources-hover youtube eventHighlight">
            <div class="text-container padding-1 height-full">
              <span class="card-tag">Govwide IT Category and ACT-IAC Host Small Business Alliance Forum</span>
                  <p class="description-resources">
                  On March 7, 2022 the Govwide IT Category and ACT-IAC hosted a forum on Emerging Technology and Innovation Opportunities for Small Businesses. The event included a panel of representatives from five different OSDBUs as well as breakout sessions.
                    <br><br>
                    Read more…
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



