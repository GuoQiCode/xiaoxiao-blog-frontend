<template>
  <div>
    <Head></Head>
    <!--文章内容-->
    <section class="white-wrapper">
      <div class="section-inner">
        <div class="container">
          <div class="row">
            <!--首图-->
            <div class="match-height nopaddingleftright mb60" style="width: 1000px;float: left">
              <div class="hover-effect smoothie">
                <img src="../../assets/images/blog/blog-slider-1.jpeg" alt="Image" class="img-responsive smoothie">
              </div>
            </div>
            <!--文章提示语-->
            <div style="float: end;">
              <div>
                <p class="section-sub-title" style="margin-left: 1030px;margin-top: 30px">The article brief introduction</p>
              </div>
            </div>
            <div class="col-sm-8">
              <h1 class="section-title mb20">An Example Single Post</h1>
              <div class="item-metas text-muted mb30 white">
                <span class="meta-item"><i class="pe-icon pe-7s-folder"></i> POSTED IN <span
                        class="secondary-font">News</span></span>
                <span class="meta-item"><i class="pe-icon pe-7s-ticket"></i> TAGS <span class="secondary-font">Photography</span></span>
                <span class="meta-item"><i class="pe-icon pe-7s-user"></i> AUTHOR <span class="secondary-font">Danny Jones</span></span>
                <span class="meta-item"><i class="pe-icon pe-7s-comment"></i> COMMENTS <span
                        class="secondary-font">3</span></span>
              </div>
              <p class="lead">Completely enhance an expanded array of internal or "organic" sources for prospective
                models. Collaboratively unleash installed base strategic theme areas with accurate partnerships.
                Credibly disintermediate unique content through fully.</p>
              <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis
                egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo.
                Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo
                  vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
                rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar
                facilisis. Ut felis.</p>
              <p>Conveniently negotiate ubiquitous "outside the box" thinking via bricks-and-clicks human capital.
                Compellingly aggregate cooperative leadership before one-to-one best practices. Appropriately streamline
                interdependent methods of empowerment and multimedia based e-business. Rapidiously enable 2.0
                deliverables without quality "outside the box" thinking. Globally morph technically sound customer
                service vis-a-vis extensive action items.</p>
              <p>Holisticly customize prospective leadership and virtual applications. Competently productivate reliable
                applications before cross functional technologies. Professionally mesh state of the art web services
                through seamless alignments. Rapidiously fashion B2B convergence whereas professional platforms.
                Proactively engineer client-based growth strategies without mission-critical growth strategies.
                Professionally conceptualize team building deliverables rather than distinctive partnerships.
                Continually initiate sticky networks after diverse supply chains. Quickly mesh interdependent technology
                and global materials. Quickly cultivate performance based content and exceptional results. Objectively
                maximize compelling communities via cross-unit scenarios.</p>

              <div class="mb90 clearfix"></div>

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
                      <p>Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably
                        but existence conveying for. Day his put off unaffected literature partiality inhabiting.</p>
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
                          <p>Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed
                            listening. Park gate sell they west hard for the. Abode stuff noisy manor blush yet the far.
                            Up colonel so between removed so do.</p>
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
                      <p>Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful
                        continuing. In appetite ecstatic opinions hastened by handsome admitted.</p>
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
                      <input type="text" class="form-control col-md-4 mb20" name="name" placeholder="Your Name *"
                             id="name" required data-validation-required-message="Please enter your name."/>
                      <input type="text" class="form-control col-md-4 mb20" name="email" placeholder="Your Email *"
                             id="email" required data-validation-required-message="Please enter your email address."/>
                      <input type="text" class="form-control col-md-4 mb20" name="website" placeholder="Your URL *"
                             id="website" required data-validation-required-message="Please enter your web address."/>
                      <textarea name="comments" class="form-control mb40" id="comments" placeholder="Your Message *"
                                required data-validation-required-message="Please enter a message."></textarea>
                      <a class="btn btn-primary pull-right mt30" href="#">Reply</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-sm-offset-1 sidebar">

              <Gallery></Gallery>


            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="our-work">
      <div class="section-inner nopaddingbottom">
        <div class="container">
          <div class="row mb60 text-center">
            <div class="col-sm-12">
              <h3 class="section-title">More Good Article'</h3>
              <p class="section-sub-title">Some other articles you will enjoy.</p>
            </div>
          </div>
        </div>

        <div class="container-fluid nopaddingleftright">
          <div class="row nopaddingleftright">
            <!--推荐文章-->
            <GridArticle></GridArticle>
          </div>
        </div>
      </div>
    </section>
    <!--脚-->
    <Footer></Footer>
  </div>
</template>

<script>
  /**
   * 头部信息
   */
  import Head from "../../components/index/head"

  /**
   * 脚步
   */
  import Footer from "../../components/index/footer"


  /**
   * 导入长廊组件
   */
  import Gallery from "../../common/gallery/gallery"


  /**
   * 导入推荐文章的获取
   */
  import GridArticle from "./gridArticle"

  export default {
    name: "Article",
    components: {
      Head,
      Footer,
      GridArticle,
      Gallery
    }
  }
</script>

<style scoped>

</style>