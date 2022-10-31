---
title: Contract Data Elements Guide
layout: page
sidenav: false
---

<section class="grid-container border-bottom border-gray-30 padding-left-0 padding-right-1">
<h1 class="margin-top-0">{{ page.title }}</h1>

<!-- <h2>Overview</h2> -->

<div class="margin-bottom-2">

<div class="blue-bold">
  <p>
  Currently, <b>contract data does not accurately represent spending on IT products and services</b>. This is in part due to issues with data inputs that do not provide an appropriate representation of the IT products and services that are being purchased, which limits the ability to provide meaningful analytics and reporting.
  </p>
  <p>
  Understanding these fields and the downstream impacts to information that is reported can help stakeholders improve the quality of their inputs to contract writing and purchasing processes. As a result, the <b>proper entry of codes and descriptions</b> provided by users during the acquisitions process will <b>enhance data quality</b>.
  </p>
  <p>
  Stakeholders need the ability to <b>analyze spending based on reliable data</b>, in order to support data driven decisions and manage the complexities of IT spending.
  </p>
  <p>
  This guide was developed to enable consistency and enhance data for agencies as they draft contracts for IT spending.
  </p>
  <p>
  </p>
</div>

<h2>
<u>Purpose</u>
</h2>
<p>
<b>Cost Transparency</b> | Identify components and contributors that enhance cost transparency and management of IT spend.
</p>
<p>
<b>Better Data</b> | Develop guidance to help stakeholders understand the uses of contract data and how to improve the information that can be derived from them.
</p>
<p>
<b>Insights</b> | Provide sample insights into current spending based on updated PSCs and key data points. Supports more informed and focused purchasing decisions.
</p>
<p><b>To view the full content with examples and full list of data fields and tips, please see the link below:</b></p>
<a id="report" href ="https://community.max.gov/display/Egov/ITVMO+Resources" target="_blank" rel="noreferrer noopener" > &nbsp;&nbsp;Contract Data Elements Guidance report&nbsp;&nbsp; </a> 
</div>  
</section>

<section class="grid-container padding-left-0 padding-right-1">
<div class="usa-accordion">
<br>
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="b-a1">
          Data Sources
        </button>
      </h3>
      <div id="b-a1" class="usa-accordion__content" hidden="">
      <div class="grid-row">
            <!-- <div class="tablet:grid-col-8 padding-right-2"> -->
            <a href = "https://www.fpds.gov/downloads/Version_1.4_specs/FPDSNG_DataDictionary_V1.4.pdf">
              <h3>
                  Federal Procurement Data System (FPDS)
              </h3>
            </a>
            <p class="indent">
            FPDS is the primary source and system of record for
            contract data. FPDS is populated with information
            directly from agency contract writing systems. The
            government uses the reported FPDS data to measure
            and assess the impact of federal procurement.
            </p>
            <p class="indent">
            FPDS contains more than 150 data elements. This guide 
            focuses on the data elements that have the most impact
            on downstream analysis of IT obligations. The elements in the sections below are those that are most frequently shown in the Dashboard Analytics section.
            </p>


      <!-- </div> -->
      </div>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="b-a2">
          Data Elements - Cost/PoP
        </button>
      </h3>
      <div id="b-a2" class="usa-accordion__content" hidden="">
      <p>
        This section of the guide provides a list of common fields that are related to cost or period of performance (PoP) during the acquisitions process. It provides specific terms of the contract and how best to complete the fields to enable more detailed analytics, such as benchmarking.
      </p>
      <div class="grid-row">
          <table class="styled-table">
              <thead>
                  <tr>
                      <th>Cost/PoP Related</th>
                      <th>Guidance on Completing</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class = "fname">Period of Performance (PoP) Dates</td>
                      <td>Ensure accurate date is entered and broken out into line items for specific
deliverables to measure and track performance; see example below. 
                          <ul>
                            <li> 
                                <b>Period of Performance Start Date = Effective Date</b>, for entire
                                contract, not per modification.
                            </li> 
                            <li> 
                                <b>Completion Date = Current Completion Date based on the schedule
in the contract</b>, including extended options that have been exercised.
                            </li> 
                            <li> 
                                <b>Est. Ultimate Completion Date = Ultimate Completion Date</b> for the
entire contract, to include all options of other modifications.
                            </li> 
                          </ul>
                      </td>
                  </tr>
                  
                  <tr>
                      <td class = "fname">Referenced IDV</td>
                      <td>
                        <b>Do not omit</b> if contract is a <b>derivative</b>.
                      </td>
                  </tr>

                  <tr>
                      <td class = "fname">Total Obligated Amount</td>
                      <td>System generated total that identifies the amount of the contract that has
been <b>ordered or received, but which has not been disbursed</b>.
                          <ul>
                            <li> 
                              Sum of all amounts entered in “Action Obligation” field for particular PIID and Agency. Ensure accurate amounts are entered.
                            </li> 
                          </ul>
                      </td>
                  </tr>



                  <tr>
                      <td class = "fname">Unit Price and Quantity</td>
                      <td>Choose a quantity and unit of measure to describe each deliverable that
corresponds to <b>how you will measure and track performance</b>.
                          <ul>
                            <li> 
                              Consider how supplies will be packaged and shipped
                            </li> 
                            <li> 
                              Consider how often services will be accepted and paid for
                            </li> 
                            <li> 
                                <b>Unit</b> - A precisely specified quantity that allows the magnitudes of other
quantities of the same kind to be stated (Ex - an apple)
                            </li> 
                            <li> 
                                <b>Unit of Measure</b> - Any division of quantity accepted as a standard of
measurement or exchange
                                <ul>
                                    <li>
                                    Suggested format for Unit of Measure: <em>[Count of Quantity]:[Each/Lot/Hour/Unit/Package]</em>
                                    </li> 
                                    <li> 
                                        Example: <em>100 units of network switches</em>
                                    </li> 
                                </ul>
                              </li> 
                              <li> 
                                  <b>Unit Price</b>  - The cost or price of an item of supply based on the unit of
  issue (Ex - each switch costs $2,000); avoid using $1 for unit price.
                                <ul>
                                    <li>
                                      Suggested format for Unit Price: <em>[$Awarded price per unit]:</em>
                                    </li> 
                                </ul>
                            </li> 
                          </ul>
                      </td>
                  </tr>

              </tbody>
          </table>
      </div>
      </div>
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="b-a3">
          Data Elements - Entity/Contract Type
        </button>
      </h3>
      <div id="b-a3" class="usa-accordion__content" hidden="">
      <div class="grid-row">
      <p>
      This section of the guide provides a list of common fields that describe the type of contract. This includes any type of special designations like small business or socio-economic. It also provides insight into localities and other vendor information and guidance on how best to complete these fields. This data is used to analyze agency small and socio-economic business utilization performance.
      </p>
          <table class="styled-table">
              <thead>
                  <tr>
                      <th>Entity/Contract Type </th>
                      <th>Guidance on Completing</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class = "fname">Place of Manufacture</td>
                      <td>
                        Identifies if products are <b>manufactured inside/outside the US</b>.
Used to determine adherence to “Buy American Act" (See FAR 25.1).
                      </td>
                  </tr>
                  <tr>
                      <td class = "fname">Principal Place of Performance</td>
                      <td>
                          <p>For Services, the <b>predominant place of performance</b> at the time of
                          award or <b>where subscription/software licenses are used</b>.</p>
                          <p>For Goods/Supplies, use manufacture site or location item was taken
                          from inventory.</p>
                      </td>
                  </tr>
                  <tr>
                      <td class = "fname">Small Business Designations</td>
                      <td>
                        Don’t forget “<b>CO Size Determination</b>” even if not a small business (select “Other than Small”).
                      </td>
                  </tr>
                  <tr>
                      <td class = "fname">Socio-economic Designations</td>
                      <td>
                          Flags vendors by <b>special interest groups and type of small business.
                          Select all applicable</b> small business fields.
                      </td>
                  </tr>
                  <tr>
                      <td class = "fname">State of Incorporation</td>
                      <td>
                        Identify the state the business is <b>registered</b> in.
                      </td>
                  </tr>
                  <tr>
                      <td class = "fname">Vendor Information</td>
                      <td>Ensure <b>consistent input of Vendor Name</b> for proper analytics; can
reference Unique Entity Identifier (UEI #), but for large businesses, there can still be multiple options.
                          <ul>
                            <li> 
                              Vendor is the entity from which the product or service is being purchased.
                            </li> 
                            <li> 
                              <b>Differentiated from Original Equipment Manufacturer (OEM)</b>
                              who performs the primary activities to manufacture the goods or
                              derives at least 40% of its revenues from the services provided.
                            </li> 
                          </ul>
                      </td>
                  </tr>

              </tbody>
          </table>
      </div>
      </div>
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="b-a4">
          Data Elements - Technology Categorization
        </button>
      </h3>
      <div id="b-a4" class="usa-accordion__content" hidden="">
      <div class="grid-row">
      <p>
      This section of the guide provides a list of key Technology Categorization fields that require very specific and important information. They identify the types of technology being purchased and how. Completing these data fields accurately and thoroughly will improve data quality and enable enhanced analytics, which will aid in informed decision making. The table below lists the fields and guidance on how best to complete them.
      </p>
          <table class="styled-table">
              <thead>
                  <tr>
                      <th>Technology Categorization</th>
                      <th>Guidance on Completing</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class = "fname">Principal NAICS Code</td>
                      <td>
                        NAICS Codes <b>designate the major sectors of the economies</b> of Mexico,
                        Canada and the US for a given business entity. It is used for <b>statistical analysis, to certify businesses by industry type,</b> and to determine <b>eligibility for specific government contracts</b>. Update Product Service Code (PSC) slightly:  " <b>Select the most accurate PSC</b> to reflect the scope of contract. See resources:
                        <ul>
                            <li>Select code used in the solicitation.</li>
                            <li>Identify primary business activity.</li>
                            <li>The <a href = "https://navigator.gsa.gov/app/#/home">IT Solutions</a> Navigator provides guidance to customers on selecting
                              the best solutions from GSA’s IT offerings; suggests solutions based on
                              PSC, NAICS and key words and will provide mappings between PSCs
                              and NAICS codes.</li>
                        </ul>
                      </td>
                  </tr>

                  <tr>
                      <td class = "fname">Product Service Code(PSC)</td>
                      <td><b>Select the most accurate PSC</b> to reflect the scope of contract. Resources to help with proper selection: 
                          <ul>
                            <li> 
                              <a href = "https://psctool.us/mappings">PSC Selection Tool</a>
                            </li> 
                            <li> 
                              <a href = "https://dau.csod.com/phnx/driver.aspx?routename=Learning/Curriculum/CurriculumPlayer&TargetUser=980420&curriculumLoId=9bf476bc-e1fe-4de9-8328-8c28c7c1dbe0&isCompletionRedirect=true&loStatus=32&regnum=1">PSC Training</a>
                            </li> 
                            <li> 
                              <a href = "https://www.federalregister.gov/documents/2017/01/13/2016-31495/federal-acquisition-regulation-uniform-use-of-line-items">FAR Rule</a>
                            </li> 
                          </ul>
                      </td>
                  </tr>
                  <tr>
                      <td class = "fname">Description of Requirement</td>
                      <td>
                          Description of Requirement field should be <b>detailed and
                          consist of keywords that describe what is being purchased</b>.
                          Used for various filtering, sorting, and categorization of spend.
                          <br><br>
                          Add details describing the following:
                          <ul>
                            <li><b>Who</b> - Clearly identify the party providing services/products, including OEMs, vendors, and resellers.</li>
                            <li><b>What</b> - Clearly identify what is to be delivered or service
                            performed; use sublines to differentiate components and list each
                             deliverable product or service separately (i.e. - hardware vs. software vs. service).</li>
                            <li>For modifications, add the details of <b>what is being adjusted/appended to original description</b>.</li>
                          </ul>
                      </td>
                  </tr>
              </tbody>
          </table>
          <div>
          <h3>Suggested Format for 'Description of Requirement' Input Field:</h3>
          <p><b><a style="color:#F4BB2F;">MFG/OEM</a> : <a style="color:#84B161;">Vendor/Reseller</a> : <a style="color:#0C44A5 ;">Product Name/SKU/Part #</a> : <a style="color:#805C96;">Unit of Measure</a> : <a style="color:#D73209;">Description</a></b></p>
          </div>
          <div>
              <h3>Service Examples:</h3>
              <ol type = "1">
                <li><a style="color:#F4BB2F;">ServiceNow</a>: <a style="color:#84B161;">CarahSoft</a>: <a style="color:#0C44A5 ;">Implementation</a>: <a style="color:#805C96;">Hour</a>: <a style="color:#D73209;">Contracting for a block of 500 hours for the phase I implementation of ServiceNow.</a></li>
                <li>N/A: HP Enterprise Services: Hosting: Rack: Data center service associated with hosting and operation of the open payments program system. </li>
                <li>N/A: Example Technologies: Help Desk Support Services: Hour: IT and Telecom - End User: Help Desk Tier 1-2, Workspace, Print, Productivity Tool.</li>
              </ol>
              <h3>Product Examples:</h3>
              <ol type = "1">
                <li><a style="color:#F4BB2F;">Microsoft</a>: <a style="color:#84B161;">Dell Marketing L.P.</a>: <a style="color:#0C44A5 ;">O365 License</a>: <a style="color:#805C96;">Per User</a>: <a style="color:#D73209;">Enterprise agreement for 92,000 user subscriptions of Microsoft Office 365, Windows 10 Enterprise </a></li>
                <li>ServiceNow: CarahSoft: IT Service Management License: Per User: ServiceNow service desk 1000 user licenses.</li>
                <li>Cisco: XYZ Technologies, LLC: Switches and routers #LG-54401: Each: Cisco infrastructure switches and routers.</li>
              </ol>
          </div>
      </div>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="b-a5">
          Dashboard Analytics
        </button>
      </h3>
      <div id="b-a5" class="usa-accordion__content" hidden="">
      <div class="grid-row">
            <div class=" padding-right-2">
              <h3>
                    Agency Profile Report (APR) 2.0
              </h3>
                <p class="indent">
                  By using 
                  <a href = "https://login.max.gov/cas/login?service=https%3A//d2d.gsa.gov/cas%3Fdestination%3Dnode/9585&securityLevel=securePlus2&renew=true"> 
                  Agency Profile Report (2.0)
                  </a>, agencies are able to: <br>
                  <ul>
                    <li> 
                      View spend by Vendor, Contract Type, or Cost Category.
                    </li> 
                    <li> 
                      Compare Total Obligations YoY and Spend Under Management.
                    </li> 
                    <li> 
                      Understand the overall quality of the data for compliance and accuracy.
                    </li> 
                  </ul>
                </p>
                <p class="indent">
               It provides an overall summary of acquisitions by Department and enables peer to peer or Government-wide comparisons.
              </p>
              <a href = "https://d2d.gsa.gov/report/government-wide-category-management-contract-management-and-operational-reporting-tools">
              <h3>
                  Category Management Dashboards (Data 2 Decisions - D2D)
              </h3>
            </a>
            <p class="indent">
                Category Management Dashboards use Tableau on the
                D2D platform to create rich visualizations. The data is
                sourced from the Federal Acquisition Service (FAS)
                Procurement Tables, based primarily from the FPDS
                data source, but also enriched with contract and
                categorization data.
                These dashboards are available to all stakeholders.
                They provide a multitude of perspectives and filtering
                capabilities that empower stakeholders to perform
                traditional and advanced analytics, ranging from agency
                specific to government-wide.
            </p>
            <!-- <div class="tablet:grid-col-8 padding-right-2"> -->

                <h3>
                    Small Business & Common/Defense-Centric Spend
                </h3>
              <p class="indent">
                The
                <a href = "https://d2d.gsa.gov/report/small-business-dashboard"> 
                Small Business Dashboard
                </a> provides small business
                designations as well as
                vendor-attribute designations based
                on the vendor information and
                socio-economic flags.
              </p>
              <p><b>For additional guidance on navigating the D2D Dashboard analytics, please visit the <a href= "https://itvmo.gsa.gov/technology-lifecycle-report/">Technology Lifecycle Report page</a> for detailed user stories.</b></p>

            </div>


      </div>
      </div>
</div>
<br>
</section>


