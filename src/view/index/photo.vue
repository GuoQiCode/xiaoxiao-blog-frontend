<template>
  <div>
    <Head></Head>
    <PhotoBody></PhotoBody>
  </div>
</template>

<script>
  import Head from "../../components/index/head"
  import PhotoBody from "../../components/photo/body"
  export default {
    name: "Photo",
    components:{
      Head,
      PhotoBody
    }
  }
</script>

<style scoped>

</style>