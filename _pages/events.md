---
title: Upcoming Events
layout: page
sidenav: false
---

<section class="grid-container border-bottom border-gray-30 padding-left-0 padding-right-1">
<h1 class="margin-top-0">{{ page.title }}</h1>

<!-- <h2>Overview</h2> -->

<div class="margin-bottom-2">

    <p>
      Events in Blue are for Government employees only. Events in red are open to everyone.
    </p>
        
    <div id="container">
      <div id="header">
        <div id="monthDisplay"></div>
        <div>
          <button id="backButton"> < </button>
          <button id="nextButton"> > </button>
        </div>
      </div>

      <div id="weekdays">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>

      <div id="calendar"></div>
    </div>

    <div id="newEventModal">
      <h2>New Event</h2>

      <input id="eventTitleInput" placeholder="Event Title" />

      <button id="saveButton">Save</button>
      <button id="cancelButton">Cancel</button>
    </div>

    <div id="deleteEventModal">
      <h2>Event</h2>

      <p id="eventText"></p>

      <button id="deleteButton">Delete</button>
      <button id="closeButton">Close</button>
    </div>

    <div id="modalBackDrop"></div>

    <script src="./script.js"></script>

    <h2>Events Summary:</h2>
    <p>
        Explain in general terms the types/categories of events and who may attend.
    </p>
    <h2>Events Highlights:</h2>
    <p>
        Blogs, video clips, or participant reviews of past events.
    </p>
</div>  
</section>

<section class="grid-container padding-left-0 padding-right-1">
<p><strong>Don’t see what you’re looking for?</strong><br>
If your question is not addressed in the above sections, please email us at: <a href="mailto:itvmo@gsa.gov">itvmo@gsa.gov</a> and we will get back to you with an answer.</p>
</section>


