<script setup lang="ts">
import golfField from "./../assets/Home images/GolfField.jpg";
import golfMan from "./../assets/Home images/golf.jpg";
import plant from "./../assets/Home images/sedum-growing-media.jpg";
import labMan from "./../assets/Home images/labMan.jpg";
</script>
<template>
  <main class="px-24 my-5">
    <div>
      <p class="text-5xl text-center my-5">
        Useful Documents and Articles Library
      </p>
      <p class="text-xl text-red-700 text-center">
        On this page you will find links to documents, articles and newsletters
        prepared by our staff or select guests.
      </p>
      <div class="flex my-10">
        <div class="w-1/3 flex flex-col justify-center items-center gap-y-5">
          <img :src="golfField" />
          <p class="text-xl text-center">
            Golf & Sports Field<br />

            Construction
          </p>
          <p class="text-sm">
            also applicable to other types of landscape soils.
          </p>
          <a href="#">USGA Recommendations for Greens </a>
          <a href="#">Guidelines for Evaluating Bunker Sand </a>
          <a href="#">Diagnostic Profile Cores </a>
          <a href="#">Putting Green Sand Guide </a>
          <a href="#">ASTM Guide for Sand-Based Athletic Fields </a>
          <a href="#">Helpful Sampling Information </a>
        </div>
        <div class="w-1/3 flex flex-col justify-center items-center gap-y-5">
          <img :src="golfMan" />
          <p class="text-xl text-center">
            Gmax<br />

            Field Hardness
          </p>
          <a href="#">Understanding the Gmax Test</a>
          <img :src="plant" />
          <p class="text-xl">Green Roof</p>
          <a href="#">Growing Media - Size Matters</a>
          <a href="#">Dirty Thoughts</a>
        </div>
        <div class="w-1/3 flex flex-col justify-center items-center gap-y-5">
          <img :src="labMan" />
          <p class="text-xl">
            General Testing and<br />
            Sampling Information
          </p>
          <a href="#">Turf & Soil Diagnostics Brochure </a>
          <a href="#">Soil Test Descriptions</a>
          <a href="#">Why Test?????</a>
          <a href="#">Shipping Samples to the Lab</a>
          <a href="#">How to Interpret Nutrient Test Reports</a>
          <a href="#"
            >Core Aeration - How Much Field Area Does Your Cultivation Program
            Actually Impact?</a
          >
          <p>More Articles to come....</p>
          <p>Check back as we will continue to add articles to the library.</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
a {
  text-decoration: underline;
}
</style>
