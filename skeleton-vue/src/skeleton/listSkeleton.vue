<template>
  <div class="skeleton-wrapper">
    <div class="skeleton">
      <div class="skeleton-head"></div>
      <div class="skeleton-body">
        <div class="skeleton-title"></div>
        <div class="skeleton-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'skeleton',
    mounted(){
      console.log('456')
    }
  };
</script>

<style scoped>
  .skeleton {    padding: 10px;}
  .skeleton .skeleton-head,
  .skeleton .skeleton-title,
  .skeleton .skeleton-content {
    background: rgb(194, 207, 214);
  }
  .skeleton-head {
    width: 100px;    height: 100px;    float: left;
  }
  .skeleton-body {
    margin-left: 110px;
  }
  .skeleton-title {
    width: 500px;    height: 60px;
  }
  .skeleton-content {
    width: 260px;    height: 30px;    margin-top: 10px;
  }
</style>