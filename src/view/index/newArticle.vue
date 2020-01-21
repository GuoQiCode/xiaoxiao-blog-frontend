<template>
  <div>
    <!--头部-->
    <Head></Head>
    <NewArticleBody></NewArticleBody>

  </div>
</template>

<script>
  import Head from "../../components/index/head";
  import NewArticleBody from "../../components/newArticle/Body"

  export default {
    name: "NewArticleList",
    components: {
      Head,
      NewArticleBody,

    }
  }
</script>

<style scoped>
</style>