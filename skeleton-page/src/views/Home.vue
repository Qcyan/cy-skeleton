<template>
  <div class="home">
    <img style="padding-top: 50px" alt="Vue logo" src="../assets/logo.png">
    <router-link to="/list" style="color: red">跳转页面</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
