<template>
  <div>

    <section class="white-wrapper">
      <div class="section-inner">
        <div class="container">
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1">
              <div class="owl-carousel remove-item-paddings mb90" data-items="1">
                <div class="match-height nopaddingleftright">
                  <div class="hover-effect smoothie">
                    <img src="../../assets/images/blog/blog-slider-1.jpeg" alt="Image" class="img-responsive smoothie">
                  </div>
                </div>
                <div class="match-height nopaddingleftright">
                  <div class="hover-effect smoothie">
                    <img src="../../assets/images/blog/blog-slider-2.jpeg" alt="Image" class="img-responsive smoothie">
                  </div>
                </div>
              </div>

              <div id="comments-list" class="wow fadeIn" data-wow-delay="0.2s">
                <div class="mt60 mb50 single-section-title">
                  <h3>3 Comments</h3>
                </div>
                <div class="media">
                  <div class="pull-left">
                    <img class="avatar comment-avatar" src="http://lorempixel.com/g/80/80/people/9" alt="">
                  </div>
                  <div class="media-body">
                    <div class="well">
                      <div class="media-heading">
                        <span class="heading-font">Dave Evans</span>&nbsp; <small>30th Jan, 2015</small>
                      </div>
                      <p>Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.</p>
                      <a class="btn btn-primary pull-right mt30" href="#">Reply</a>
                    </div>
                    <div class="media">
                      <div class="pull-left">
                        <img class="avatar comment-avatar" src="http://lorempixel.com/g/80/80/people/5" alt="">
                      </div>
                      <div class="media-body">
                        <div class="well">
                          <div class="media-heading">
                            <span class="heading-font">Dave Evans</span>&nbsp; <small>30th Jan, 2015</small>
                          </div>
                          <p>Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Abode stuff noisy manor blush yet the far. Up colonel so between removed so do.</p>
                          <a class="btn btn-primary pull-right mt30" href="#">Reply</a>
                        </div>
                      </div>
                    </div><!--/.media-->
                  </div>
                </div><!--/.media-->
                <div class="media mb60">
                  <div class="pull-left">
                    <img class="avatar comment-avatar" src="http://lorempixel.com/g/80/80/people/6" alt="">
                  </div>
                  <div class="media-body">
                    <div class="well">
                      <div class="media-heading">
                        <span class="heading-font">Dave Evans</span>&nbsp; <small>30th Jan, 2015</small>
                      </div>
                      <p>Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted.</p>
                      <a class="btn btn-primary pull-right mt30" href="#">Reply</a>
                    </div>
                  </div>
                </div><!--/.media-->

                <div id="comments-form" class="row wow fadeIn" data-wow-delay="0.2s">
                  <div class="col-md-12">
                    <div class="mt60 mb50 single-section-title">
                      <h3>Leave A Reply</h3>
                    </div>
                    <div id="message"></div>
                    <form method="post" id="commentform" class="comment-form">
                      <input type="text" class="form-control col-md-4 mb20" name="name" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." />
                      <input type="text" class="form-control col-md-4 mb20" name="email" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." />
                      <input type="text" class="form-control col-md-4 mb20" name="website" placeholder="Your URL *" id="website" required data-validation-required-message="Please enter your web address." />
                      <textarea name="comments" class="form-control mb40" id="comments" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
                      <a class="btn btn-primary pull-right mt30" href="#">Reply</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
  export default {
    name: "LeaveMessageBody"
  }
</script>

<style scoped>
  @import "../../assets/bootstrap/css/bootstrap.min.css";
  @import "../../assets/pe-icons/css/pe-icon-7-stroke.css";
  @import "../../assets/font-awesome/css/font-awesome.min.css";
  @import "../../assets/css/animate.css";
  @import "../../assets/css/plugins.css";
  @import "../../assets/css/style.css";

</style>