<template>
  <div>
    <!--头部-->
    <Head></Head>
    <!--留言的身体-->
    <LeaveAMessageBody></LeaveAMessageBody>
    <!--脚部-->
    <Footer></Footer>
  </div>
</template>

<script>
  import Head from "../../components/index/head"
  import LeaveAMessageBody from "../../components/message/body"
  import Footer from "../../components/index/footer"
  export default {
    name: "LeaveAMessage",
    components:{
      Head,
      LeaveAMessageBody,
      Footer
    }
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