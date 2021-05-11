---
title: Category Management
layout: page
datafile: category-mngt
sidenav: false
---

<section class="grid-container clearfix padding-left-0 padding-right-1">
<h1 class="margin-top-0">Category Management</h1>
    <div class="grid-row">
        <p>The resources below pertain to Category Management and are designed to help you implement Category Management best practices at your agency. Many of the resources below were developed by ITVMO partner offices and programs. Please reach out to the ITVMO inbox at <a href="mailto:itvmo@gsa.gov">itvmo@gsa.gov</a> with any questions or suggestions for additional resources.</p>
    </div>
<div class="usa-table-container--scrollable">
<table class="usa-table">
  <caption></caption>
  {% assign rows = site.data.category-mngt %}
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
