<template>
  <div class="tab-pane fade active show" id="pills-one-example2" role="tabpanel" aria-labelledby="pills-one-example2-tab">
    <!-- Search Jobs Form -->
    <div class="card border-0 tab-shadow">
      <div class="card-body">
        <form class="js-validate">
          <div class="row d-block nav-select d-lg-flex mb-lg-3 px-2 px-lg-3 align-items-end">
            <div class="col-sm-12 col-lg-3dot6 col-xl-3gdot5 mb-4 mb-lg-0">
              <span class="d-block text-gray-1 font-weight-normal text-left mb-0">Destination or Hotel Name</span>
              <!-- Select -->
              <select class="js-select selectpicker dropdown-select tab-dropdown col-12 pl-0 flaticon-pin-1 d-flex align-items-center text-primary font-weight-semi-bold" title="Where are you going?"
                      data-style=""
                      data-live-search="true"
                      data-searchbox-classes="input-group-sm">
                <option class="border-bottom border-color-1" value="project1" data-content='
                                                        <span class="d-flex align-items-center">
                                                            <span class="font-size-16">London, United Kingdom</span>
                                                        </span>'>
                  London, United Kingdom
                </option>
                <option class="border-bottom border-color-1" value="project2" data-content='
                                                        <span class="d-flex align-items-center">
                                                            <span class="font-size-16">New York, United States</span>
                                                        </span>'>
                  New York, United States
                </option>
                <option  class="border-bottom border-color-1" value="project3" data-content='
                                                        <span class="d-flex align-items-center">
                                                            <span class="font-size-16">New South Wales, Australia</span>
                                                        </span>'>
                  New South Wales, Australia
                </option>
                <option class="border-bottom border-color-1" value="project4" data-content='
                                                        <span class="d-flex align-items-center">
                                                            <span class="font-size-16">Istanbul, Turkey</span>
                                                        </span>'>
                  Istanbul, Turkey
                </option>
                <option class="" value="project4" data-content='
                                                        <span class="d-flex align-items-center">
                                                            <span class="font-size-16">Reykjavík, Iceland</span>
                                                        </span>'>
                  Reykjavík, Iceland
                </option>
              </select>
              <!-- End Select -->
            </div>

            <div class="col-sm-12 col-lg-3dot7 col-xl-3gdot5 mb-4 mb-lg-0 ">
              <!-- Input -->
              <span class="d-block text-gray-1 text-left font-weight-normal mb-0">Check In - Out</span>
              <div class="border-bottom border-width-2 border-color-1">
                <div id="datepickerWrapperFromOne" class="u-datepicker input-group">
                  <div class="input-group-prepend">
                                                            <span class="d-flex align-items-center mr-2">
                                                              <i class="flaticon-calendar text-primary font-weight-semi-bold"></i>
                                                            </span>
                  </div>
                  <input class="js-range-datepicker font-size-16 shadow-none font-weight-medium form-control hero-form bg-transparent  border-0" type="date"
                         data-rp-wrapper="#datepickerWrapperFromOne"
                         data-rp-type="range"
                         data-rp-date-format="M d / Y"
                         data-rp-default-date='["Jul 7 / 2020", "Aug 25 / 2020"]'>
                </div>
                <!-- End Datepicker -->
              </div>
              <!-- End Input -->
            </div>

            <div class="col-sm-12 col-xl-3 mb-4 mb-lg-0 dropdown-custom">
              <!-- Input -->
              <span class="d-block text-gray-1 text-left font-weight-normal mb-0">Rooms and Guests</span>
              <a id="basicDropdownClickInvoker" class="dropdown-nav-link dropdown-toggle d-flex pt-3 pb-2" href="javascript:;" role="button"
                 aria-controls="basicDropdownClick"
                 aria-haspopup="true"
                 aria-expanded="false"
                 data-unfold-event="click"
                 data-unfold-target="#basicDropdownClick"
                 data-unfold-type="css-animation"
                 data-unfold-duration="300"
                 data-unfold-delay="300"
                 data-unfold-hide-on-scroll="true"
                 data-unfold-animation-in="slideInUp"
                 data-unfold-animation-out="fadeOut">
                <i class="flaticon-plus d-flex align-items-center mr-3 font-size-18 text-primary font-weight-semi-bold"></i>
                <span class="text-black font-size-16 font-weight-semi-bold">2 Rooms - 3 Guests</span>
              </a>
              <div id="basicDropdownClick" class="dropdown-menu dropdown-unfold col-11 m-0" aria-labelledby="basicDropdownClickInvoker">
                <div class="w-100 py-2 px-3 mb-3">
                  <div class="js-quantity mx-3 row align-items-center justify-content-between">
                    <span class="d-block font-size-16 text-secondary font-weight-medium">Rooms</span>
                    <div class="d-flex">
                      <a class="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                        <small class="fas fa-minus btn-icon__inner"></small>
                      </a>
                      <input class="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1">
                      <a class="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                        <small class="fas fa-plus btn-icon__inner"></small>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="w-100 py-2 px-3 mb-3">
                  <div class="js-quantity mx-3 row align-items-center justify-content-between">
                    <span class="d-block font-size-16 text-secondary font-weight-medium">Adults</span>
                    <div class="d-flex">
                      <a class="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                        <small class="fas fa-minus btn-icon__inner"></small>
                      </a>
                      <input class="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1">
                      <a class="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                        <small class="fas fa-plus btn-icon__inner"></small>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="w-100 py-2 px-3">
                  <div class="js-quantity mx-3 row align-items-center justify-content-between">
                    <span class="d-block font-size-16 text-secondary font-weight-medium">Child</span>
                    <div class="d-flex">
                      <a class="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                        <small class="fas fa-minus btn-icon__inner"></small>
                      </a>
                      <input class="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1">
                      <a class="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                        <small class="fas fa-plus btn-icon__inner"></small>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="w-100 text-right py-1 pr-5">
                  <a class="text-primary font-weight-semi-bold font-size-16" href="home.html#">Done</a>
                </div>
              </div>
              <!-- End Input -->
            </div>

            <div class="col-sm-12 col-xl-2 align-self-lg-end text-md-right">
              <button type="submit" class="btn btn-primary w-100 border-radius-3 mb-xl-0 mb-lg-1 transition-3d-hover"><i class="flaticon-magnifying-glass font-size-20 mr-2"></i>Search</button>
            </div>
          </div>
          <!-- End Checkbox -->
        </form>
      </div>
    </div>
    <!-- End Search Jobs Form -->
  </div>
</template>

<script setup>

</script>