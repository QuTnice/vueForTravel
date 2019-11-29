<template>
  <div class="home">
    <div>111</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/pages/index.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
