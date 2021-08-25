<template>
  <div class="container">
    <h1 class="text-center mt-4">APLIKASI BUKU</h1>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
