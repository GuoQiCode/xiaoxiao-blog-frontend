<template>
  <div>
    <!--使用头部-->
    <MagazineHead></MagazineHead>
    <!--身体-->
    <MagazineBody></MagazineBody>
    <!--脚-->
    <Footer></Footer>
  </div>
</template>

<script>
  /**
   * 导入头部信息
   */
  import MagazineHead from "../../components/magazine/head"

  /**
   * 导入身体
   */
  import MagazineBody from "../../components/magazine/body"

  /**
   * 导入脚
   */
  import Footer from "../../components/index/footer"


  export default {
    name: "Magazine",
    components:{
      MagazineHead,
      MagazineBody,
      Footer
    }
  }
</script>

<style scoped>

</style>