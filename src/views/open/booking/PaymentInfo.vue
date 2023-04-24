<template>
  <BookingLayout>
    <template v-slot:card1>
      <div class="col-lg-8 col-xl-9">
       <div class="mb-5 shadow-soft bg-white rounded-sm">
         <ProcessCount />
        <div class="pt-4 pb-5 px-5">
          <h5 id="scroll-description" class="font-size-21 font-weight-bold text-dark mb-4">
            Your Card Information
          </h5>
          <!-- Nav Classic -->
          <ul class="nav nav-classic nav-choose border-0 nav-justified border mx-n3" role="tablist">
            <li class="nav-item mx-3 mb-4 mb-md-0">
              <a class="rounded py-5 border-width-2 border nav-link font-weight-medium active" id="pills-one-example2-tab" data-toggle="pill" href="hotel-booking.html#pills-one-example2" role="tab" aria-controls="pills-one-example2" aria-selected="true">
                <div class="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                  <i class="flaticon-tick text-white font-size-15"></i>
                </div>
                <div class="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                  <img class="img-fluid mb-3" src="/assets/open/img/199x35/img1.jpg" alt="Image-Description">
                  <div class="w-100 text-dark">Payment with credit card</div>
                </div>
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="rounded py-5 border-width-2 border nav-link font-weight-medium" id="pills-two-example2-tab" data-toggle="pill" href="hotel-booking.html#pills-two-example2" role="tab" aria-controls="pills-two-example2" aria-selected="false">
                <div class="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                  <i class="flaticon-tick text-white font-size-15"></i>
                </div>
                <div class="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                  <img class="img-fluid mb-3" src="/assets/open/img/199x35/img2.jpg" alt="Image-Description">
                  <div class="w-100 text-dark">Payment with paypal</div>
                </div>
              </a>
            </li>
          </ul>
          <!-- End Nav Classic -->

          <!-- Tab Content -->
          <div class="tab-content">
            <div class="tab-pane fade pt-8 show active" id="pills-one-example2" role="tabpanel" aria-labelledby="pills-one-example2-tab">
              <!-- Payment Form -->
              <form class="js-validate">
                <div class="row">
                  <!-- Input -->
                  <div class="col-sm-6 mb-4">
                    <div class="js-form-message">
                      <label class="form-label">
                        Card Holder Name
                      </label>

                      <input type="text" class="form-control" name="Cardname" placeholder="" aria-label="" required
                             data-msg="Please enter card holder name."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->

                  <!-- Input -->
                  <div class="col-sm-6 mb-4">
                    <div class="js-form-message">
                      <label class="form-label">
                        Card Number
                      </label>

                      <input type="number" class="form-control" name="Cardnumber" placeholder="" aria-label="" required
                             data-msg="Please enter card number."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->

                  <div class="w-100"></div>

                  <!-- Input -->
                  <div class="col-sm-6 mb-4">
                    <div class="row">
                      <div class="col-sm-6 mb-4 mb-md-0">
                        <div class="js-form-message">
                          <label class="form-label">
                            Expiry Month
                          </label>

                          <input type="number" class="form-control" name="Expirymonth" placeholder="" aria-label="" required
                                 data-msg="Please enter expiry month."
                                 data-error-class="u-has-error"
                                 data-success-class="u-has-success">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="js-form-message">
                          <label class="form-label">
                            Expiry Year
                          </label>

                          <input type="number" class="form-control" name="Expiryyear" placeholder="" aria-label="" required
                                 data-msg="Please enter expiry year."
                                 data-error-class="u-has-error"
                                 data-success-class="u-has-success">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Input -->

                  <!-- Input -->
                  <div class="col-sm-6 mb-4">
                    <div class="js-form-message">
                      <label class="form-label">
                        CCV
                      </label>

                      <input type="number" class="form-control" name="ccvnumber" placeholder="" aria-label="" required
                             data-msg="Please enter ccv number."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->

                  <div class="w-100"></div>

                  <div class="col">
                    <!-- Checkbox -->
                    <div class="js-form-message mb-5">
                      <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
                        <input type="checkbox" class="custom-control-input" id="termsCheckbox" name="termsCheckbox" required
                               data-msg="Please accept our Terms and Conditions."
                               data-error-class="u-has-error"
                               data-success-class="u-has-success">
                        <label class="custom-control-label" for="termsCheckbox">
                          <small>
                            By continuing, you agree to the
                            <a class="link-muted" href="https://transvelo.github.io/mytravel-html/html/pages/terms.html">Terms and Conditions</a>
                          </small>
                        </label>
                      </div>
                    </div>
                    <!-- End Checkbox -->
                    <button type="submit" class="btn btn-primary w-100 rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3">CONFIRM BOOKING</button>
                  </div>
                </div>
              </form>
              <!-- End Payment Form -->
            </div>

            <div class="tab-pane fade pt-8" id="pills-two-example2" role="tabpanel" aria-labelledby="pills-two-example2-tab">
              <form class="js-validate">
                <!-- Login -->
                <div id="login" data-target-group="idForm">
                  <!-- Form Group -->
                  <div class="form-group">
                    <div class="js-form-message js-focus-state">
                      <label class="sr-only" for="signinEmail">Email</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                                                                <span class="input-group-text" id="signinEmailLabel">
                                                                    <span class="fas fa-user"></span>
                                                                </span>
                        </div>
                        <input type="email" class="form-control" name="email" id="signinEmail" placeholder="Email" aria-label="Email" aria-describedby="signinEmailLabel" required
                               data-msg="Please enter a valid email address."
                               data-error-class="u-has-error"
                               data-success-class="u-has-success">
                      </div>
                    </div>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div class="form-group mb-4">
                    <div class="js-form-message js-focus-state">
                      <label class="sr-only" for="signinPassword">Password</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                                                                <span class="input-group-text" id="signinPasswordLabel">
                                                                    <span class="fas fa-lock"></span>
                                                                </span>
                        </div>
                        <input type="password" class="form-control" name="password" id="signinPassword" placeholder="Password" aria-label="Password" aria-describedby="signinPasswordLabel" required
                               data-msg="Your password is invalid. Please try again."
                               data-error-class="u-has-error"
                               data-success-class="u-has-success">
                      </div>
                    </div>
                  </div>
                  <!-- End Form Group -->

                  <div class="mb-2">
                    <button type="submit" class="btn btn-block btn-primary transition-3d-hover">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- End Tab Content -->
        </div>
      </div>
      </div>
    </template>

    <template v-slot:card2>
      <div class="col-lg-4 col-xl-3">
        <div class="shadow-soft bg-white rounded-sm">
        <div class="pt-5 pb-3 px-5 border-bottom">
          <a href="hotel-booking.html#" class="d-block mb-3">
            <img class="img-fluid rounded-xs" src="/assets/open/img/240x160/img3.jpg" alt="Image-Description">
          </a>
          <a href="hotel-booking.html#" class="text-dark font-weight-bold pr-xl-1">Park Avenue Baker Street London</a>
          <div class="my-1 flex-horizontal-center text-gray-1">
            <i class="icon flaticon-pin-1 mr-2 font-size-15"></i> United Kingdom
          </div>
        </div>
        <!-- Basics Accordion -->
        <div id="basicsAccordion">
          <!-- Card -->
          <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
            <div class="card-header card-collapse bg-transparent border-0" id="basicsHeadingOne">
              <h5 class="mb-0">
                <button type="button" class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                        data-toggle="collapse"
                        data-target="#basicsCollapseOne"
                        aria-expanded="true"
                        aria-controls="basicsCollapseOne">
                  Booking Detail

                  <span class="card-btn-arrow font-size-14 text-dark">
                                                    <i class="fas fa-chevron-down"></i>
                                                </span>
                </button>
              </h5>
            </div>
            <div id="basicsCollapseOne" class="collapse show"
                 aria-labelledby="basicsHeadingOne"
                 data-parent="#basicsAccordion">
              <div class="card-body px-4 pt-0">
                <!-- Fact List -->
                <ul class="list-unstyled font-size-1 mb-0 font-size-16">
                  <li class="d-flex justify-content-between py-2">
                                                    <span class="font-weight-medium">22 Sep 2019 - 23 Sep 2019 <br>
                                                        <span class="text-gray-1 font-weight-normal">1 x Comfort Room</span>
                                                    </span>
                    <span class="text-secondary"><a href="hotel-booking.html#" class="text-underline">Edit</a></span>
                  </li>
                  <li class="d-flex justify-content-between py-2">
                    <span class="font-weight-medium">Stay</span>
                    <span class="text-secondary">7 Night</span>
                  </li>

                  <li class="d-flex justify-content-between py-2">
                    <span class="font-weight-medium">Room</span>
                    <span class="text-secondary">2 Room</span>
                  </li>

                  <li class="d-flex justify-content-between py-2">
                    <span class="font-weight-medium">Adult</span>
                    <span class="text-secondary">4</span>
                  </li>
                </ul>
                <!-- End Fact List -->
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
            <div class="card-header card-collapse bg-transparent border-0" id="basicsHeadingTwo">
              <h5 class="mb-0">
                <button type="button" class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                        data-toggle="collapse"
                        data-target="#basicsCollapseTwo"
                        aria-expanded="true"
                        aria-controls="basicsCollapseTwo">
                  Extra

                  <span class="card-btn-arrow font-size-14 text-dark">
                                                    <i class="fas fa-chevron-down"></i>
                                                </span>
                </button>
              </h5>
            </div>
            <div id="basicsCollapseTwo" class="collapse"
                 aria-labelledby="basicsHeadingTwo"
                 data-parent="#basicsAccordion">
              <div class="card-body px-4 pt-0">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
            <div class="card-header card-collapse bg-transparent border-0" id="basicsHeadingThree">
              <h5 class="mb-0">
                <button type="button" class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                        data-toggle="collapse"
                        data-target="#basicsCollapseThree"
                        aria-expanded="false"
                        aria-controls="basicsCollapseThree">
                  Coupon Code

                  <span class="card-btn-arrow font-size-14 text-dark">
                                                    <i class="fas fa-chevron-down"></i>
                                                </span>
                </button>
              </h5>
            </div>
            <div id="basicsCollapseThree" class="collapse show"
                 aria-labelledby="basicsHeadingThree"
                 data-parent="#basicsAccordion">
              <div class="card-body px-4 pt-0 pb-4">
                <!-- Subscribe Form -->
                <form class="js-focus-state">
                  <label class="sr-only" for="CouponCodeExample1">Coupon Code</label>
                  <div class="input-group custom__input-group">
                    <input type="number" class="form-control" name="email" id="CouponCodeExample1" placeholder="" aria-label="" aria-describedby="CouponCodeExample2" required>
                    <div class="input-group-append ml-3">
                      <button class="btn btn-primary py-2" type="button" id="CouponCodeExample2">Apply</button>
                    </div>
                  </div>
                </form>
                <!-- End Subscribe Form -->
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
            <div class="card-header card-collapse bg-transparent border-0" id="basicsHeadingFour">
              <h5 class="mb-0">
                <button type="button" class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                        data-toggle="collapse"
                        data-target="#basicsCollapseFour"
                        aria-expanded="false"
                        aria-controls="basicsCollapseFour">
                  Payment

                  <span class="card-btn-arrow font-size-14 text-dark">
                                                    <i class="fas fa-chevron-down"></i>
                                                </span>
                </button>
              </h5>
            </div>
            <div id="basicsCollapseFour" class="collapse show"
                 aria-labelledby="basicsHeadingFour"
                 data-parent="#basicsAccordion">
              <div class="card-body px-4 pt-0">
                <!-- Fact List -->
                <ul class="list-unstyled font-size-1 mb-0 font-size-16">
                  <li class="d-flex justify-content-between py-2">
                    <span class="font-weight-medium">Subtotal</span>
                    <span class="text-secondary">€580,00</span>
                  </li>

                  <li class="d-flex justify-content-between py-2">
                    <span class="font-weight-medium">Extra Price</span>
                    <span class="text-secondary">€0,00</span>
                  </li>

                  <li class="d-flex justify-content-between py-2">
                    <span class="font-weight-medium">Tax</span>
                    <span class="text-secondary">0 %</span>
                  </li>

                  <li class="d-flex justify-content-between py-2 font-size-17 font-weight-bold">
                    <span class="font-weight-bold">Pay Amount</span>
                    <span class="">€580,00</span>
                  </li>
                </ul>
                <!-- End Fact List -->
              </div>
            </div>
          </div>
          <!-- End Card -->
        </div>
        <!-- End Basics Accordion -->
      </div>
      </div>
    </template>
  </BookingLayout>
</template>

<script setup>
import BookingLayout from "../../layouts/BookingLayout.vue";
import ProcessCount from "../../../components/Booking/ProcessCount.vue";
</script>