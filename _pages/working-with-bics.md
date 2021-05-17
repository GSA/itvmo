---
title: Working with BICs
layout: page
datafile: working-with-bics
sidenav: false
---

<section class="grid-container clearfix padding-left-0 padding-right-1">
<h1 class="margin-top-0">Working with BICs</h1>
    <div class="grid-row">
    <p>The ITVMO works closely with the IT Best-in-Class (BIC) solution providers and can help identify the BIC or Government-wide Contract Vehicle (GWAC) that bests meets your agency’s needs. Please reach out to the ITVMO inbox at <a href="mailto:itvmo@gsa.gov">itvmo@gsa.gov</a> with any questions or suggestions for additional resources.
    </p>
    </div>
<div class="usa-table-container--scrollable">
<table class="usa-table">
  <caption></caption>
  
  {% assign rows = site.data.working-with-bics %}
  <th class="row-color">Title</th>
  <th class="row-color">Type</th>
  <th class="row-color">Description</th>
    {% for row in rows %}
    <tr>
      <td><a href="{{  row.Link }}">{{  row.Title }}</a></td>
      <td>{{  row.Type }}</td>
      <td>{{  row.Description }}</td>
    </tr>
    {% endfor %}
  </table>
</div>
</section>