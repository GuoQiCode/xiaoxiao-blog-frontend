<template>
  <!--顶部的连接-->
  <div class="root">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="shortcut icon" href="assets/images/favicon/favicon.ico" type="image/x-icon"/>
    <link rel="apple-touch-icon" href="assets/images/favicon/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="57x57" href="assets/images/favicon/apple-touch-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="assets/images/favicon/apple-touch-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="assets/images/favicon/apple-touch-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="assets/images/favicon/apple-touch-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="assets/images/favicon/apple-touch-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="assets/images/favicon/apple-touch-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="assets/images/favicon/apple-touch-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/apple-touch-icon-180x180.png"/>
    <!---->
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700,900|Dancing+Script:400,700|Raleway:400,100,300,700,900|Reenie+Beanie&subset=latin,latin-ext'
          rel='stylesheet' type='text/css'>
    <div id="master-wrapper">
      <!--head-->

      <div id="top-bar" class="hidden-xs">
        <div class="container">
          <div class="col-sm-4">
        <!--    <ul class="list-inline">
              <li><a class="dribbble" href="#"><i class="fa fa-qq"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-wechat"></i></a></li>
            </ul>-->
          </div>
          <div class="col-sm-8">
            <ul class="secondary-menu list-inline pull-right">
              <li><a href="#">旅行</a></li>
              <li><a href="#">我的发生</a></li>
              <li><a href="#">运动</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="navbar nav-wrapper smoothie">
        <div class="container">
          <!--          选项-->
          <div class="col-sm-8 dropdown m">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
              <ul class="nav navbar-nav" style="margin-left: 450px">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                     aria-expanded="false">Home <span class="caret"></span></a>
                  <ul class="dropdown-menu  navbar-right">
                    <li>
                      <router-link to="/index">首页๑</router-link>
                    </li>
                    <li>
                      <router-link to="/magazine">文章杂谈๑</router-link>
                    </li>
                    <li>
                      <router-link to="/recommend">文章推荐๑</router-link>
                    </li>
                    <li><a href="index-agency.html">跳蚤๑</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                     aria-expanded="false">Portfolio <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link to="/photo">我的相册๑</router-link>
                    </li>
                    <li>
                      <router-link to="/mood">我的心情๑</router-link>
                    </li>
                    <li>
                      <router-link to="/drop">点点滴滴๑</router-link>
                    </li>
                    <li>
                      <router-link to="/share">个人分享๑</router-link>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                     aria-expanded="false">News <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link to="/meblog">我的博文๑</router-link>
                    </li>

                    <li>
                      <router-link to="/new_article">最新文章๑</router-link>
                    </li>
                    <li>
                      <router-link to="/type">分类文章๑</router-link>
                    </li>
                    <li>
                      <router-link to="/pigeonhole">归档๑</router-link>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                     aria-expanded="false">Pages <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link to="/leave_a_message">留言๑</router-link>
                    </li>
                    <li>
                      <router-link to="/about">关于我๑</router-link>
                    </li>
                    <li><a href="contact-us.html">接触我๑</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Site Overlay -->
        <div class="site-overlay"></div>
      </div>
      <div style="margin-left: 1100px">
        <div class="" style="float: left">
          <form class="form-inline">
            <button type="submit" class="btn btn-default pull-right" style="height: 39px"><i
                    class="glyphicon glyphicon-search"></i></button>
            <input type="text" class="form-control pull-left" style="height: 39px" placeholder="Search">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import "../../assets/bootstrap/js/bootstrap.min.js"

  export default {
    name: "Head",
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