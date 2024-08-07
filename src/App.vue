<template>

  <k-app theme="ios">
    <k-page :class="classPage">
      <router-view></router-view>
    </k-page>
  </k-app>

</template>

<script setup>

  import { ref } from 'vue'
  import { kApp, kPage } from 'konsta/vue';

  const classPage = ref('')

</script>