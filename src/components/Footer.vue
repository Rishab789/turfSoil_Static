<script setup>
import { RouterLink } from "vue-router";
import grass from "./../assets/HomeImages/grassFooter.png";
</script>
<template>
  <footer class="bg-[#e4ecdc]">
    <div
      class="flex flex-col md:flex-col lg:flex-row lg:items-center justify-around h-[200px] text-sm md:text-xl lg:text-xl px-5 md:px-5 lg:px-0"
    >
      <div>
        <p>Turf & Soil Diagnostics - KS</p>
        <p>613 E. 1st Street</p>
        <p>Linwood, KS 66052 USA</p>
      </div>
      <div>
        <p>Phone: 1-855-769-4231</p>
        <RouterLink
          to="/privacy-policy"
          class="text-sm text-center underline text-red-500"
          >copyright/privacy policy</RouterLink
        >
      </div>
      <div>
        <p>Turf & Soil Diagnostics - NY</p>
        <p>35 King Street</p>
        <p>Trumansburg, NY 14886 USA</p>
      </div>
    </div>
  </footer>
</template>

<style>
.main {
  background-image: url("../assets/HomeImages/grassFooter.png");
}
</style>
