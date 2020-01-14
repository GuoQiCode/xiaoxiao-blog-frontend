<template>
  <div>
    <!--头部-->
    <Head></Head>
    <NewArticleBody></NewArticleBody>
    <Footer></Footer>
  </div>
</template>

<script>
  import Head from "../../components/index/head";
  import NewArticleBody from "../../components/newArticle/Body"
  import Footer from "../../components/index/footer"

  export default {
    name: "NewArticleList",
    components: {
      Head,
      NewArticleBody,
      Footer
    }
  }
</script>

<style scoped>
</style>