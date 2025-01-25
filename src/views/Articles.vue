<script setup lang="ts">
import golfField from "./../assets/HomeImages/GolfField.jpg";
import golfMan from "./../assets/HomeImages/golf.jpg";
import plant from "./../assets/HomeImages/sedum-growing-media.jpg";
import labMan from "./../assets/HomeImages/labMan.jpg";
import { RouterLink } from "vue-router";
</script>
<template>
  <main class="px-5 md:px-24 lg:px-24 my-5">
    <div>
      <p class="text-3xl md:text-4xl lg:text-5xl text-center my-5">
        Useful Documents and Articles Library
      </p>
      <p class="text-xl text-red-700 text-center">
        On this page you will find links to documents, articles and newsletters
        prepared by our staff or select guests.
      </p>
      <div class="flex flex-col md:flex-row lg:flex-row my-10">
        <div
          class="md:w-1/3 lg:w-1/3 flex flex-col justify-center items-center gap-y-5"
        >
          <img :src="golfField" />
          <p class="text-xl text-center">
            Golf & Sports Field<br />

            Construction
          </p>
          <p class="text-sm">
            also applicable to other types of landscape soils.
          </p>
          <a
            href="https://turfdiag.com/mt-content/uploads/2023/02/usga-greens-resource-guide-tsd.pdf"
            >USGA Recommendations for Greens
          </a>
          <a
            href="https://turfdiag.com/mt-content/uploads/2023/02/tsd-bunker-testing-2020.pdf"
            >Guidelines for Evaluating Bunker Sand
          </a>
          <RouterLink to="/a-view-inside-the-green"
            >Diagnostic Profile Cores
          </RouterLink>
          <a
            href="https://turfdiag.com/mt-content/uploads/2020/08/52a7626a55e44.jpg"
            >Putting Green Sand Guide
          </a>
          <a
            href="https://turfdiag.com/mt-content/uploads/2023/02/astm-f2396-guide-for-sports-field-construction.pdf"
            >ASTM Guide for Sand-Based Athletic Fields
          </a>
          <a
            href="https://turfdiag.com/mt-content/uploads/2020/08/sampling_agb-march2010_.pdf"
            >Helpful Sampling Information
          </a>
        </div>
        <div
          class="md:w-1/3 lg:w-1/3 flex flex-col justify-center items-center gap-y-5"
        >
          <img :src="golfMan" />
          <p class="text-xl text-center">
            Gmax<br />

            Field Hardness
          </p>
          <RouterLink to="/understanding-gmax-reports"
            >Understanding the Gmax Test</RouterLink
          >
          <img :src="plant" />
          <p class="text-xl">Green Roof</p>
          <a
            href="https://turfdiag.com/mt-content/uploads/2020/08/52b1c14ca5d86.pdf"
            >Growing Media - Size Matters</a
          >
          <RouterLink to="/dirty-thoughts">Dirty Thoughts</RouterLink>
        </div>
        <div
          class="md:w-1/3 lg:w-1/3 flex flex-col justify-center items-center gap-y-5"
        >
          <img :src="labMan" />
          <p class="text-xl">
            General Testing and<br />
            Sampling Information
          </p>
          <a
            href="https://turfdiag.com/mt-content/uploads/2023/02/tsd-brochure.pdf"
            >Turf & Soil Diagnostics Brochure
          </a>
          <RouterLink to="/soiltestdescription"
            >Soil Test Descriptions</RouterLink
          >
          <a
            href="https://turfdiag.com/mt-content/uploads/2020/08/whytest-agbjan2010p68-70.pdf"
            >Why Test?????</a
          >
          <RouterLink to="/sample_pack">Shipping Samples to the Lab</RouterLink>
          <RouterLink to="/nutrient-testing"
            >How to Interpret Nutrient Test Reports</RouterLink
          >
          <RouterLink to="/core-aeration"
            >Core Aeration - How Much Field Area Does Your Cultivation Program
            Actually Impact?</RouterLink
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
