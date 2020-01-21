<template>
  <div>
    <!--使用头部-->
    <MagazineHead></MagazineHead>
    <!--身体-->
    <MagazineBody></MagazineBody>

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




  export default {
    name: "Magazine",
    components:{
      MagazineHead,
      MagazineBody,
    }
  }
</script>

<style scoped>

</style>