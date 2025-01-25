<script setup>
import understanding1 from "./../assets/HomeImages/understandingGmax1.jpg";
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24 text-sm">
    <div class="flex justify-center">
      <img :src="understanding1" />
    </div>
    <div class="text-end my-5 text-sm lg:text-lg">
      <p class="">Page 1 of 3 Page Article</p>
      <RouterLink
        to="/understanding-gmax-reports2"
        class="text-red-500 underline"
        >Click Here To Continue Reading...</RouterLink
      >
    </div>
  </main>
</template>
<style scoped></style>
