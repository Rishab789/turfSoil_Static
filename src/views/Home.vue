<script setup>
import { RouterLink } from "vue-router";

import { images } from "../services/homeImages";
import { gridImages } from "../services/homeImages";
import Carousel from "./../components/carousel/Carousel.vue";
</script>
<template>
  <div class="px-5 md:px-24 lg:px-24">
    <p class="text-2xl md:text-3xl lg:text-3xl text-center my-5 lg:my-10">
      Testing Services for Golf Courses, Sports Fields, Public and Commercial
      Landscapes
    </p>
    <!-- carousel div  -->
    <div class="flex justify-center">
      <carousel
        :slides="images"
        :interval="5000"
        controls
        indicators
      ></carousel>
    </div>

    <!-- Grid Section  -->
    <div class="">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5"
      >
        <div
          v-for="item in gridImages"
          class="flex flex-col justify-center items-center bg-[#dddddd] w-60 md:w-2/3 lg:w-2/3 h-48 m-auto"
        >
          <img :src="item.image" class="w-2/3 h-32" />
          <RouterLink :to="item.path" class="underline text-green-700">{{
            item.text
          }}</RouterLink>
        </div>
      </div>
    </div>

    <div class="text-sm">
      <p class="my-5">
        Turf & Soil Diagnostics (TSD) provides our customers with accredited
        testing of soil, aggregate, growing media, soil amendments, and drainage
        systems. We also perform research and development, on-site evalutions,
        and Gmax field hardness testing.
      </p>
      <p class="my-5">
        Our customer base is world-wide, and includes superintendents, field
        managers, contractors, architects, and suppliers working with everything
        from parks and recreations fields, to professional athletic and golf
        facilities, to major public and private landscapes.
      </p>
      <p class="my-5">
        The TSD labs are located in Kansas and New York (USA), where we provide
        our employees with good work environment, competitive pay, and
        opportunities for growth.
      </p>
      <p class="my-5">
        Note: Turf & Soil Diagnostics does not accept samples containing
        hazardous materials. Our labs only work with clean soils, sands,
        amendments, etc.
      </p>
      <div class="text-center text-xl text-red-500 underline">
        <RouterLink to="/about"
          >click here to learn more about our company</RouterLink
        >
      </div>
    </div>
  </div>
</template>
