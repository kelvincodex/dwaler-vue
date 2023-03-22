<template>
  <AppLayout>
    <main id="content">
      <!-- ========== HERO ========== -->
      <div class="hero-block hero-v1 bg-img-hero-bottom gradient-overlay-half-black-gradient text-center z-index-2" style="background-image: url(/src/assets/open/img/1920x800/img1.jpg);">
        <div class="container space-2 space-top-xl-9">
          <div class="row justify-content-md-center pb-xl-8">
            <!-- Info -->
            <div class="py-8 py-xl-10 pb-5">
              <h1 class="font-size-60 font-size-xs-30 text-white font-weight-bold">Let's The World Together!</h1>
              <p class="font-size-20 font-weight-normal text-white">Find awesome hotel, tour, car and activities in London</p>
            </div>
            <!-- End Info -->
          </div>
          <div class="mb-lg-n16">
            <!-- Nav Classic -->
            <ul class="nav tab-nav-rounded flex-nowrap pb-2 pb-md-4 tab-nav" role="tablist">
              <li class="nav-item">
                <a class="nav-link font-weight-medium active pl-md-5 pl-3" id="pills-one-example2-tab" data-toggle="pill" href="#pills-one-example2" role="tab" aria-controls="pills-one-example2" aria-selected="true">
                  <div class="d-flex flex-column flex-md-row  position-relative text-white align-items-center">
                    <figure class="ie-height-40 d-md-block mr-md-3">
                      <i class="icon flaticon-hotel font-size-3"></i>
                    </figure>
                    <span class="tabtext mt-2 mt-md-0 font-weight-semi-bold">Stays</span>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link font-weight-medium" id="pills-two-example2-tab" data-toggle="pill" href="#pills-two-example2" role="tab" aria-controls="pills-two-example2" aria-selected="true">
                  <div class="d-flex flex-column flex-md-row  position-relative text-white align-items-center">
                    <figure class="ie-height-40 d-md-block mr-md-3">
                      <i class="icon flaticon-global-1 font-size-3"></i>
                    </figure>
                    <span class="tabtext mt-2 mt-md-0 font-weight-semi-bold">Rents</span>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link font-weight-medium" id="pills-three-example2-tab" data-toggle="pill" href="#pills-three-example2" role="tab" aria-controls="pills-three-example2" aria-selected="true">
                  <div class="d-flex flex-column flex-md-row  position-relative text-white align-items-center">
                    <figure class=" ie-height-40  d-md-block mr-md-3">
                      <i class="icon flaticon-climbing font-size-3"></i>
                    </figure>
                    <span class="tabtext mt-2 mt-md-0 font-weight-semi-bold">Buy</span>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link font-weight-medium" id="pills-four-example2-tab" data-toggle="pill" href="#pills-four-example2" role="tab" aria-controls="pills-four-example2" aria-selected="true">
                  <div class="d-flex flex-column flex-md-row  position-relative text-white align-items-center">
                    <figure class="ie-height-40 d-md-block mr-md-3">
                      <i class="icon flaticon-home font-size-3"></i>
                    </figure>
                    <span class="tabtext mt-2 mt-md-0 font-weight-semi-bold">Lists</span>
                  </div>
                </a>
              </li>
            </ul>
            <!-- End Nav Classic -->
            <div class="tab-content hero-tab-pane">
            <Stay />
            </div>
          </div>
        </div>
      </div>
      <!-- ========== END HERO ========== -->

      <!-- Destinantion v1 -->
      <div class="destinantion-block destinantion-v1 border-bottom border-color-8">
        <div class="container space-bottom-1 space-top-lg-3">
          <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mt-4">
            <h2 class="section-title text-black font-size-30 font-weight-bold mb-0">Top Destination</h2>
          </div>
          <div class="row mb-1">
            <!-- Card Block -->
            <div class="col-md-6 mb-3 mb-md-4">
              <div class="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2 border-0 dropdown" style="background-image: url(/src/assets/open/img/630x350/img1.jpg);">
                <div class="w-100 d-flex justify-content-between mb-2">
                  <div class="position-relative">
                    <a href="others/destination.html" class="destination text-white font-weight-bold font-size-21 pb-3 mb-3 text-lh-1 d-block">United Kingdom</a>

                    <!-- Dropdown List -->
                    <div class="destination-dropdown v1">
                      <a class="dropdown-item" href="hotels/hotel-list.html">30 Hotel</a>
                      <a class="dropdown-item" href="tour/tour-list.html">48 Tour</a>
                      <a class="dropdown-item" href="activities/activities-list.html">46 Activity</a>
                      <a class="dropdown-item" href="yacht/yacht-list.html">32 Yacht</a>
                    </div>
                    <!-- End Dropdown List -->

                  </div>
                </div>
              </div>
            </div>
            <!-- End Card Block -->

            <!-- Card Block -->
            <div class="col-md-6 mb-3 mb-md-4">
              <div class="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2 border-0 dropdown" style="background-image: url(/src/assets/open/img/630x350/img2.jpg);">
                <header class="w-100 d-flex justify-content-between mb-2">
                  <div class="position-relative">
                    <a href="others/destination.html" class="destination text-white font-weight-bold font-size-21 pb-3 mb-3 text-lh-1 d-block">Turkey</a>

                    <!-- Dropdown List -->
                    <div class="destination-dropdown v1">
                      <a class="dropdown-item" href="hotels/hotel-list.html">30 Hotel</a>
                      <a class="dropdown-item" href="tour/tour-list.html">48 Tour</a>
                      <a class="dropdown-item" href="activities/activities-list.html">46 Activity</a>
                      <a class="dropdown-item" href="yacht/yacht-list.html">32 Yacht</a>
                    </div>
                    <!-- End Dropdown List -->


                  </div>
                </header>
              </div>
            </div>
            <!-- End Card Block -->

            <!-- Card Block -->
            <div class="col-md-6 col-xl-3 mb-3 mb-md-4">
              <div class="min-height-350 gradient-overlay-half-bg-gradient rounded-border p-5 bg-img-hero transition-3d-hover shadow-hover-2 border-0 dropdown" style="background-image: url(/src/assets/open/img/300x350/img1.jpg);">
                <header class="w-100 d-flex justify-content-between mb-2">
                  <div class="position-relative">
                    <a href="others/destination.html" class="destination text-white font-weight-bold font-size-21 pb-3 mb-3 text-lh-1 d-block">United States</a>

                    <!-- Dropdown List -->
                    <div class="destination-dropdown v1">
                      <a class="dropdown-item" href="hotels/hotel-list.html">30 Hotel</a>
                      <a class="dropdown-item" href="tour/tour-list.html">48 Tour</a>
                      <a class="dropdown-item" href="activities/activities-list.html">46 Activity</a>
                      <a class="dropdown-item" href="yacht/yacht-list.html">32 Yacht</a>
                    </div>
                    <!-- End Dropdown List -->


                  </div>
                </header>
              </div>
            </div>
            <!-- End Card Block -->

            <!-- Card Block -->
            <div class="col-md-6 col-xl-3 mb-3 mb-md-4">
              <div class="min-height-350 gradient-overlay-half-bg-gradient rounded-border p-5 bg-img-hero transition-3d-hover shadow-hover-2 border-0 dropdown" style="background-image: url(/src/assets/open/img/300x350/img3.jpg);">
                <header class="w-100 d-flex justify-content-between mb-2">
                  <div class="position-relative">
                    <a href="others/destination.html" class="destination text-white font-weight-bold font-size-21 pb-3 mb-3 text-lh-1 d-block">Ukraine</a>

                    <!-- Dropdown List -->
                    <div class="destination-dropdown v1">
                      <a class="dropdown-item" href="hotels/hotel-list.html">30 Hotel</a>
                      <a class="dropdown-item" href="tour/tour-list.html">48 Tour</a>
                      <a class="dropdown-item" href="activities/activities-list.html">46 Activity</a>
                      <a class="dropdown-item" href="yacht/yacht-list.html">32 Yacht</a>
                    </div>
                    <!-- End Dropdown List -->


                  </div>
                </header>
              </div>
            </div>
            <!-- End Card Block -->

            <!-- Card Block -->
            <div class="col-md-6 col-xl-3 mb-3 mb-md-4">
              <div class="min-height-350 gradient-overlay-half-bg-gradient rounded-border p-5 bg-img-hero transition-3d-hover shadow-hover-2 border-0 dropdown" style="background-image: url(/src/assets/open/img/300x350/img2.jpg);">
                <header class="w-100 d-flex justify-content-between mb-2">
                  <div class="position-relative">
                    <a href="others/destination.html" class="destination text-white font-weight-bold font-size-21 pb-3 mb-3 text-lh-1 d-block">France</a>

                    <!-- Dropdown List -->
                    <div class="destination-dropdown v1">
                      <a class="dropdown-item" href="hotels/hotel-list.html">30 Hotel</a>
                      <a class="dropdown-item" href="tour/tour-list.html">48 Tour</a>
                      <a class="dropdown-item" href="activities/activities-list.html">46 Activity</a>
                      <a class="dropdown-item" href="yacht/yacht-list.html">32 Yacht</a>
                    </div>
                    <!-- End Dropdown List -->

                  </div>
                </header>
              </div>
            </div>
            <!-- End Card Block -->

            <!-- Card Block -->
            <div class="col-md-6 col-xl-3 mb-3 mb-md-4">
              <div class="min-height-350 gradient-overlay-half-bg-gradient rounded-border p-5 bg-img-hero transition-3d-hover shadow-hover-2 border-0 dropdown" style="background-image: url(/src/assets/open/img/300x350/img4.jpg);">
                <header class="w-100 d-flex justify-content-between mb-2">
                  <div class="position-relative">
                    <a href="others/destination.html" class="destination text-white font-weight-bold font-size-21 pb-3 mb-3 text-lh-1 d-block">India</a>

                    <!-- Dropdown List -->
                    <div class="destination-dropdown v1">
                      <a class="dropdown-item" href="hotels/hotel-list.html">30 Hotel</a>
                      <a class="dropdown-item" href="tour/tour-list.html">48 Tour</a>
                      <a class="dropdown-item" href="activities/activities-list.html">46 Activity</a>
                      <a class="dropdown-item" href="yacht/yacht-list.html">32 Yacht</a>
                    </div>
                    <!-- End Dropdown List -->


                  </div>
                </header>
              </div>
            </div>
            <!-- End Card Block -->
          </div>
        </div>
      </div>
      <!-- End Destinantion v1 -->

      <!-- Tabs v1 -->
      <div class="tabs-block tab-v1">
        <div class="container space-1">
          <div class="w-md-80 w-lg-50 text-center mx-md-auto my-3">
            <h2 class="section-title text-black font-size-30 font-weight-bold mb-0">Trending</h2>
          </div>
          <!-- Nav Classic -->
          <ul class="nav tab-nav-pill flex-nowrap pb-4 pb-lg-5 tab-nav justify-content-lg-center" role="tablist">
            <li class="nav-item">
              <a class="nav-link font-weight-medium active" id="pills-one-example-t1-tab" data-toggle="pill" href="home.html#pills-one-example-t1" role="tab" aria-controls="pills-one-example-t1" aria-selected="true">
                <div class="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                  <span class="tabtext font-weight-semi-bold">Tour</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-medium" id="pills-two-example-t1-tab" data-toggle="pill" href="home.html#pills-two-example-t1" role="tab" aria-controls="pills-two-example-t1" aria-selected="true">
                <div class="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                  <span class="tabtext font-weight-semi-bold">Hotel</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-medium" id="pills-three-example-t1-tab" data-toggle="pill" href="home.html#pills-three-example-t1" role="tab" aria-controls="pills-three-example-t1" aria-selected="true">
                <div class="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                  <span class="tabtext font-weight-semi-bold">Activity</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-medium" id="pills-four-example-t1-tab" data-toggle="pill" href="home.html#pills-four-example-t1" role="tab" aria-controls="pills-four-example-t1" aria-selected="true">
                <div class="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                  <span class="tabtext font-weight-semi-bold">Rental</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-medium" id="pills-five-example-t1-tab" data-toggle="pill" href="home.html#pills-five-example-t1" role="tab" aria-controls="pills-five-example-t1" aria-selected="true">
                <div class="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                  <span class="tabtext font-weight-semi-bold">Car</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-medium" id="pills-six-example-t1-tab" data-toggle="pill" href="home.html#pills-six-example-t1" role="tab" aria-controls="pills-six-example-t1" aria-selected="true">
                <div class="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                  <span class="tabtext font-weight-semi-bold">Yatch</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-medium" id="pills-seven-example-t1-tab" data-toggle="pill" href="home.html#pills-seven-example-t1" role="tab" aria-controls="pills-seven-example-t1" aria-selected="true">
                <div class="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                  <span class="tabtext font-weight-semi-bold">Flights</span>
                </div>
              </a>
            </li>
          </ul>
          <!-- End Nav Classic -->
          <div class="tab-content">
            <div class="tab-pane fade active show" id="pills-one-example-t1" role="tabpanel" aria-labelledby="pills-one-example-t1-tab">
              <div class="row">
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="tour/tour-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img1.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="tour/tour-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Greater London, United Kingdom
                        </div>
                      </a>
                      <a href="tour/tour-single-v1.html" class="card-title font-size-17 font-weight-bold mb-0 text-dark">Stonehenge, Windsor Castle,<br>and Bath from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="tour/tour-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img2.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                          <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="tour/tour-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="tour/tour-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="tour/tour-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img3.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                          <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="tour/tour-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="tour/tour-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">NYC One World Observatory Skip-the-Line Ticket</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="tour/tour-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img4.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                          <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="tour/tour-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="tour/tour-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Small-Group Blue Mountains Day Trip from Sydney with River Cruise</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="tour/tour-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img5.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="tour/tour-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="tour/tour-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Windsor Castle, Stonehenge, and Oxford Day Trip from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="tour/tour-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img6.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                          <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="tour/tour-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="tour/tour-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Snaefellsnes Peninsula Classic Day Tour from Reykjavik</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="tour/tour-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img7.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                          <a href="tour/tour-single-v1.html" class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="tour/tour-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="tour/tour-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Giverny and Versailles Small Group Day Trip</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="tour/tour-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img8.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                          <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="tour/tour-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="tour/tour-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Two Hour Walking Tour of Manhattan</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-two-example-t1" role="tabpanel" aria-labelledby="pills-two-example-t1-tab">
              <div class="row">
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img2.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="hotels/hotel-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img5.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="hotels/hotel-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Windsor Castle, Stonehenge, and Oxford Day Trip from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img1.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Greater London, United Kingdom
                        </div>
                      </a>
                      <a href="hotels/hotel-single-v1.html" class="card-title font-size-17 font-weight-bold mb-0 text-dark">Stonehenge, Windsor Castle,<br>and Bath from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img4.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="hotels/hotel-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Small-Group Blue Mountains Day Trip from Sydney with River Cruise</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img8.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="hotels/hotel-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Two Hour Walking Tour of Manhattan</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img3.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="hotels/hotel-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">NYC One World Observatory Skip-the-Line Ticket</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img6.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="hotels/hotel-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Snaefellsnes Peninsula Classic Day Tour from Reykjavik</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img7.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="hotels/hotel-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="hotels/hotel-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Giverny and Versailles Small Group Day Trip</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-three-example-t1" role="tabpanel" aria-labelledby="pills-three-example-t1-tab">
              <div class="row">
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="activities/activities-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img7.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="activities/activities-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="activities/activities-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Giverny and Versailles Small Group Day Trip</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="activities/activities-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img3.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="activities/activities-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="activities/activities-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">NYC One World Observatory Skip-the-Line Ticket</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="activities/activities-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img5.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="activities/activities-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="activities/activities-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Windsor Castle, Stonehenge, and Oxford Day Trip from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="activities/activities-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img8.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="activities/activities-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="activities/activities-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Two Hour Walking Tour of Manhattan</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="activities/activities-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img1.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="activities/activities-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Greater London, United Kingdom
                        </div>
                      </a>
                      <a href="activities/activities-single-v1.html" class="card-title font-size-17 font-weight-bold mb-0 text-dark">Stonehenge, Windsor Castle,<br>and Bath from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="activities/activities-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img2.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="activities/activities-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="activities/activities-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="activities/activities-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img4.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="activities/activities-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="activities/activities-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Small-Group Blue Mountains Day Trip from Sydney with River Cruise</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="activities/activities-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img6.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="activities/activities-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="activities/activities-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Snaefellsnes Peninsula Classic Day Tour from Reykjavik</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-four-example-t1" role="tabpanel" aria-labelledby="pills-four-example-t1-tab">
              <div class="row">
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="rental/rental-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img5.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="rental/rental-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="rental/rental-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Windsor Castle, Stonehenge, and Oxford Day Trip from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="rental/rental-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img8.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="rental/rental-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="rental/rental-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Two Hour Walking Tour of Manhattan</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="rental/rental-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img2.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="rental/rental-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="rental/rental-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="rental/rental-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img1.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="rental/rental-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Greater London, United Kingdom
                        </div>
                      </a>
                      <a href="rental/rental-single-v1.html" class="card-title font-size-17 font-weight-bold mb-0 text-dark">Stonehenge, Windsor Castle,<br>and Bath from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="rental/rental-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img4.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="rental/rental-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="rental/rental-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Small-Group Blue Mountains Day Trip from Sydney with River Cruise</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="rental/rental-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img3.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="rental/rental-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="rental/rental-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">NYC One World Observatory Skip-the-Line Ticket</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="rental/rental-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img6.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="rental/rental-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="rental/rental-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Snaefellsnes Peninsula Classic Day Tour from Reykjavik</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="rental/rental-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img7.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="rental/rental-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="rental/rental-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Giverny and Versailles Small Group Day Trip</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-five-example-t1" role="tabpanel" aria-labelledby="pills-five-example-t1-tab">
              <div class="row">
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="cars/cars-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img4.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="cars/cars-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="cars/cars-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Small-Group Blue Mountains Day Trip from Sydney with River Cruise</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="cars/cars-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img2.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="cars/cars-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="cars/cars-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="cars/cars-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img3.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="cars/cars-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="cars/cars-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">NYC One World Observatory Skip-the-Line Ticket</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="cars/cars-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img1.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="cars/cars-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Greater London, United Kingdom
                        </div>
                      </a>
                      <a href="cars/cars-single-v1.html" class="card-title font-size-17 font-weight-bold mb-0 text-dark">Stonehenge, Windsor Castle,<br>and Bath from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="cars/cars-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img7.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="cars/cars-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="cars/cars-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Giverny and Versailles Small Group Day Trip</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="cars/cars-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img8.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="cars/cars-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="cars/cars-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Two Hour Walking Tour of Manhattan</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="cars/cars-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img5.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="cars/cars-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="cars/cars-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Windsor Castle, Stonehenge, and Oxford Day Trip from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="cars/cars-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img6.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="cars/cars-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="cars/cars-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Snaefellsnes Peninsula Classic Day Tour from Reykjavik</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-six-example-t1" role="tabpanel" aria-labelledby="pills-six-example-t1-tab">
              <div class="row">
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img8.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="yacht/yacht-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Two Hour Walking Tour of Manhattan</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img1.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Greater London, United Kingdom
                        </div>
                      </a>
                      <a href="yacht/yacht-single-v1.html" class="card-title font-size-17 font-weight-bold mb-0 text-dark">Stonehenge, Windsor Castle,<br>and Bath from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img2.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="yacht/yacht-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img5.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="yacht/yacht-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Windsor Castle, Stonehenge, and Oxford Day Trip from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img7.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="yacht/yacht-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Giverny and Versailles Small Group Day Trip</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img4.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="yacht/yacht-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Small-Group Blue Mountains Day Trip from Sydney with River Cruise</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img6.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="yacht/yacht-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">Snaefellsnes Peninsula Classic Day Tour from Reykjavik</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img3.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="yacht/yacht-single-v1.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="yacht/yacht-single-v1.html" class="card-title text-dark font-size-17 font-weight-bold">NYC One World Observatory Skip-the-Line Ticket</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-seven-example-t1" role="tabpanel" aria-labelledby="pills-seven-example-t1-tab">
              <div class="row">
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="flights/flights-list.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img1.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="flights/flights-list.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Greater London, United Kingdom
                        </div>
                      </a>
                      <a href="flights/flights-list.html" class="card-title font-size-17 font-weight-bold mb-0 text-dark">Stonehenge, Windsor Castle,<br>and Bath from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="flights/flights-list.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img2.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="flights/flights-list.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="flights/flights-list.html" class="card-title text-dark font-size-17 font-weight-bold">Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="flights/flights-list.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img5.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-primary px-4 py-2 font-size-14 font-weight-normal">Featured</span>
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£350.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="flights/flights-list.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="flights/flights-list.html" class="card-title text-dark font-size-17 font-weight-bold">Windsor Castle, Stonehenge, and Oxford Day Trip from London</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="flights/flights-list.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img4.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="flights/flights-list.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="flights/flights-list.html" class="card-title text-dark font-size-17 font-weight-bold">Small-Group Blue Mountains Day Trip from Sydney with River Cruise</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="flights/flights-list.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img3.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="flights/flights-list.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="flights/flights-list.html" class="card-title text-dark font-size-17 font-weight-bold">NYC One World Observatory Skip-the-Line Ticket</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="flights/flights-list.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img8.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Culturals Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£550.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="flights/flights-list.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="flights/flights-list.html" class="card-title text-dark font-size-17 font-weight-bold">Two Hour Walking Tour of Manhattan</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="flights/flights-list.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img6.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 left-0 pt-5 pl-3">
                        <span class="badge badge-pill bg-white text-danger px-3 ml-3 py-2 font-size-14 font-weight-normal">%25</span>
                      </div>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Multi-day Tours</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£899.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="flights/flights-list.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="flights/flights-list.html" class="card-title text-dark font-size-17 font-weight-bold">Snaefellsnes Peninsula Classic Day Tour from Reykjavik</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                  <div class="card mb-1 transition-3d-hover shadow-hover-2 tab-card h-100">
                    <div class="position-relative mb-2">
                      <a href="flights/flights-list.html" class="d-block gradient-overlay-half-bg-gradient-v5">
                        <img class="card-img-top" src="/src/assets/open/img/300x230/img7.jpg" alt="img">
                      </a>
                      <div class="position-absolute top-0 right-0 pt-5 pr-3">
                        <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                          <span class="flaticon-valentine-heart"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="justify-content-between align-items-center">
                          <div class="px-3 pb-2">
                            <span class="text-white font-weight-normal font-size-14">Attraction Tickets</span>
                            <h2 class="h5 text-white mb-0 font-weight-bold"><small class="mr-2">From</small>£590.00</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 py-2">
                      <a href="flights/flights-list.html" class="d-block">
                        <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> Istanbul, Turkey
                        </div>
                      </a>
                      <a href="flights/flights-list.html" class="card-title text-dark font-size-17 font-weight-bold">Giverny and Versailles Small Group Day Trip</a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-17 text-lh-1">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                        </div>
                      </div>
                      <div class="mb-1 d-flex align-items-center font-size-14 text-gray-1">
                        <i class="icon flaticon-clock-circular-outline mr-2 font-size-14"></i> 3 hours 45 minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Tabs v1 -->

      <!-- Banner v1-->
      <div class="banner-block banner-v1 bg-img-hero space-3" style="background-image: url(/src/assets/open/img/1920x500/img1.jpg);">
        <div class="max-width-650 mx-auto text-center mt-xl-5 mb-xl-2 px-3 px-md-0">
          <h6 class="text-white font-size-40 font-weight-bold mb-1">Travel Tips</h6>
          <p class="text-white font-size-18 font-weight-normal mb-4 pb-1 px-md-3 px-lg-0">Northern Ireland’s is now contingent. Britain is getting a divorce Northern Ireland is being offered a trial separation for Britain there is a one</p>
          <a class="btn btn-outline-white border-width-2 rounded-xs min-width-200 font-weight-normal transition-3d-hover" href="blog/blog-list.html">Get Inspired</a>
        </div>
      </div>
      <!-- End Banner v1-->

      <!-- Icon Block v1 -->
      <div class="icon-block-center icon-center-v1 border-bottom border-color-8">
        <div class="container text-center space-1">
          <!-- Title -->
          <div class="w-md-80 w-lg-50 text-center mx-md-auto pb-1 mt-3">
            <h2 class="section-title text-black font-size-30 font-weight-bold">Why Choose</h2>
          </div>
          <!-- End Title -->

          <!-- Features -->
          <div class="mb-2">
            <div class="row">
              <!-- Icon Block -->
              <div class="col-md-4">
                <i class="flaticon-price text-primary font-size-80 mb-3"></i>
                <h5 class="font-size-17 text-dark font-weight-bold mb-2"><a href="home.html#">Competitive Pricing</a></h5>
                <p class="text-gray-1 px-xl-2 px-uw-7">With 500+ suppliers and the purchasing power of 300 million members, mytravel.com can save you more!</p>
              </div>
              <!-- End Icon Block -->

              <!-- Icon Block -->
              <div class="col-md-4">
                <i class="flaticon-medal text-primary font-size-80 mb-3"></i>
                <h5 class="font-size-17 text-dark font-weight-bold mb-2"><a href="home.html#">Award-Winning Service</a></h5>
                <p class="text-gray-1 px-xl-2 px-uw-7">Travel worry-free knowing that we're here if you needus, 24 hours a day</p>
              </div>
              <!-- End Icon Block -->

              <!-- Icon Block -->
              <div class="col-md-4">
                <i class="flaticon-global-1 text-primary font-size-80 mb-3"></i>
                <h5 class="font-size-17 text-dark font-weight-bold mb-2"><a href="home.html#">Worldwide Coverage</a></h5>
                <p class="text-gray-1 px-xl-2 px-uw-7">Over 1,200,000 hotels in more than 200 countries and regions & flights to over 5,000 cities</p>
              </div>
              <!-- End Icon Block -->
            </div>
          </div>
          <!-- End Features -->
        </div>
      </div>
      <!-- End Icon Block v1 -->

      <!-- Deal Carousel v1 -->
      <div class="deals-carousel-block deals-carousel-v1 border-bottom border-color-8">
        <div class="container space-1">
          <h2 class="section-title text-center mb-5 mt-3">Today's Top Deals</h2>
          <div class="js-slick-carousel u-slick u-slick--gutters-3" data-slides-show="3" data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic u-slick__arrow-classic--v2 u-slick__arrow-centered--y rounded-circle" data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-xl-n8" data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-xl-n8"
               data-pagi-classes="d-lg-none text-center u-slick__pagination mt-4" data-responsive='[ { "breakpoint": 1025, "settings": { "slidesToShow": 3 } }, { "breakpoint": 992, "settings": { "slidesToShow": 2 } }, { "breakpoint": 768, "settings": { "slidesToShow": 1 } }, { "breakpoint": 554, "settings": { "slidesToShow": 1 } } ]'>
            <div class="js-slide mb-4">
              <a class="d-block rounded-xs overflow-hidden mb-3" href="blog/blog-single.html">
                <img class="img-fluid w-100" src="/src/assets/open/img/410x300/img1.jpg" alt="Image-Description">
              </a>
              <h6 class="font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1 text-gray-6">
                <a href="blog/blog-single.html">Earning Asiana Club Miles Just Got Easier!</a>
              </h6>
              <a class="text-gray-1" href="blog/blog-single.html">
                <span>Book Hotels and Earn Asiana Club Miles!</span>
              </a>
            </div>
            <div class="js-slide mb-4">
              <a class="d-block rounded-xs overflow-hidden mb-3" href="blog/blog-single.html">
                <img class="img-fluid w-100" src="/src/assets/open/img/410x300/img2.jpg" alt="Image-Description">
              </a>
              <h6 class="font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1 text-gray-6">
                <a href="blog/blog-single.html">Save big on hotels!</a>
              </h6>
              <a class="text-gray-1" href="blog/blog-single.html">
                <span>Book and save with Trip.com on your next stay</span>
              </a>
            </div>
            <div class="js-slide mb-4">
              <a class="d-block rounded-xs overflow-hidden mb-3" href="blog/blog-single.html">
                <img class="img-fluid w-100" src="/src/assets/open/img/410x300/img3.jpg" alt="Image-Description">
              </a>
              <h6 class="font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1 text-gray-6">
                <a href="blog/blog-single.html">Experience Europe Your Way</a>
              </h6>
              <a class="text-gray-1" href="blog/blog-single.html">
                <span>With up to 30% Off, experience Europe your way!</span>
              </a>
            </div>
            <div class="js-slide mb-4">
              <a class="d-block rounded-xs overflow-hidden mb-3" href="blog/blog-single.html">
                <img class="img-fluid w-100" src="/src/assets/open/img/410x300/img1.jpg" alt="Image-Description">
              </a>
              <h6 class="font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1 text-gray-6">
                <a href="blog/blog-single.html">Earning Asiana Club Miles Just Got Easier!</a>
              </h6>
              <a class="text-gray-1" href="blog/blog-single.html">
                <span>Book Hotels and Earn Asiana Club Miles!</span>
              </a>
            </div>
            <div class="js-slide mb-4">
              <a class="d-block rounded-xs overflow-hidden mb-3" href="blog/blog-single.html">
                <img class="img-fluid w-100" src="/src/assets/open/img/410x300/img2.jpg" alt="Image-Description">
              </a>
              <h6 class="font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1 text-gray-6">
                <a href="blog/blog-single.html">Save big on hotels!</a>
              </h6>
              <a class="text-gray-1" href="blog/blog-single.html">
                <span>Book and save with Trip.com on your next stay</span>
              </a>
            </div>

            <div class="js-slide mb-4">
              <a class="d-block rounded-xs overflow-hidden mb-3" href="blog/blog-single.html">
                <img class="img-fluid w-100" src="/src/assets/open/img/410x300/img3.jpg" alt="Image-Description">
              </a>
              <h6 class="font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1 text-gray-6">
                <a href="blog/blog-single.html">Experience Europe Your Way</a>
              </h6>
              <a class="text-gray-1" href="blog/blog-single.html">
                <span>With up to 30% Off, experience Europe your way!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- End Deal Carousel v1 -->
    </main>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue";
import {useMeta} from "vue-meta";
import Stay from "../../components/tab/hero/Stay.vue";

 useMeta({
  title:"Home"
})
</script>