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
  <form action="../assets/files/Contract-Data-Elements-Guidance_TBM_Final.pdf">
      <input id="pdfDownload" type="submit" value="Contract Data Elements Guidance report" />
  </form>
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
                  Federal Procurement Data Ststem (FPDS)
              </h3>
            </a>
            <p>
            FPDS is the primary source and system of record for
            contract data. FPDS is populated with information
            directly from agency contract writing system. The
            government uses the reported FPDS data to measure
            and assess the impact of federal procurement.
            </p>

              <a href = "https://d2d.gsa.gov/report/government-wide-category-management-contract-management-and-operational-reporting-tools">
              <h3>
                  Category Management Dashboards (Data 2 Decisions - D2D)
              </h3>
            </a>
            <p>
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


      <!-- </div> -->
      </div>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="b-a2">
          Data Elements Reference Guide
        </button>
      </h3>
      <div id="b-a2" class="usa-accordion__content" hidden="">
      <div class="grid-row">
      <!-- first table -->
          <table class="styled-table">
              <thead>
                  <tr>
                      <th>Cost/PoP Related</th>
                      <th>Guidance on Completing</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Total Obligated Amount</td>
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
                      <td>Period of Performance (PoP) Dates</td>
                      <td>Ensure accurate date is entered and broken out into line items for specific
deliverables to measure and track performance; see example below. 
                          <ul>
                            <li> 
                                <b>Period of Performance Start Date = Effective Date </b>, for entire
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
                      <td>Unit Price and Quantity</td>
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
                                  Suggested format for Unit of Measure: [Count of Quantity]:[Each/Lot/Hour/Unit/Package]
                                  </li> 
                                  <li> 
                                      Example: 100 units of network switches
                                  </li> 
                              </ul>
                            </li> 
                            <li> 
                                <b>Unit Price</b>  - The cost or price of an item of supply based on the unit of
issue (Ex - each switch costs $2,000); avoid using $1 for unit price.
                              <ul>
                                  <li>
                                  Suggested format for Unit Price: [$Awarded price per unit]:
                                  </li> 
                              </ul>
                            </li> 
                          </ul>
                      </td>
                  </tr>

                  <tr>
                      <td>Referenced IDV</td>
                      <td>
                        <b>Do not omit</b> if contract is a <b>derivative</b>.
                      </td>
                  </tr>

              </tbody>
          </table>
          <!-- second table -->
          <table class="styled-table">
              <thead>
                  <tr>
                      <th>Entity/Contract Type </th>
                      <th>Guidance on Completing</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Socio-economic Designations</td>
                      <td>
                          Flags vendors by <b>special interest groups and type of small business.
                          Select all applicable</b> small business fields.
                      </td>
                  </tr>

                  <tr>
                      <td>Small Business Designations</td>
                      <td>
                        Don’t forget “<b>CO Size Determination</b>” even if not a small business (select “Other than Small”)
                      </td>
                  </tr>

                  <tr>
                      <td>Vendor Information</td>
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

                  <tr>
                      <td>Place of Manufacture</td>
                      <td>
                        Identifies if products are <b>manufactured inside/outside the US</b>.
Used to determine adherence to “Buy American Act (See FAR 25.1).
                      </td>
                  </tr>
                  <tr>
                      <td>Principal Place of Performance</td>
                      <td>
                          <p>For Services, the <b>predominant place of performance</b> at the time of
                          award or <b>where subscription/software licenses are used</b>.</p>
                          <p>For Goods/Supplies, use manufacture site or location item was taken
                          from inventory.</p>
                      </td>
                  </tr>
                  <tr>
                      <td>State of Incorporation</td>
                      <td>
                        Identify the state the business is <b>registered</b> in.
                      </td>
                  </tr>

              </tbody>
          </table>
      </div>
      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="b-a3">
          Dashboard Analytics
        </button>
      </h3>
      <div id="b-a3" class="usa-accordion__content" hidden="">
      <div class="grid-row">
            <div class="tablet:grid-col-8 padding-right-2">
            <!-- <div class="tablet:grid-col-8 padding-right-2"> -->

                <h3>
                    Small Business & Common/Defense-Centric Spend
                </h3>
              <p>
                The
                <a href = "https://d2d.gsa.gov/report/small-business-dashboard"> 
                Small Business Dashboard
                </a> provides small business
                designations as well as
                vendor-attribute designations based
                on the vendor information and
                socio-economic flags.
              </p>
                <h3>
                    Agency Profile Report (APR) 2.0
                </h3>
              <p>
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
                  It provides an overall summary of acquisitions by Department and enables peer to peer or Government-wide comparisons.

                </ul>


              </p>

            </div>

            <!-- <div class="padding-x-2 radius-lg border-05 border-primary-lighter">
                <img class="" src="{{site.baseurl}}/assets/images/screenshot/smal-business-common-centric-spend.png" alt="General Services Administration seal">
             </div> -->


      </div>
      </div>
</div>
<br>
</section>


