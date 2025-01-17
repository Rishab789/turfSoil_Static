<script setup lang="ts">
import { images } from "../services/homeImages";
import { gridImages } from "../services/homeImages";






</script>
<template>
  <div>
    <p class="text-3xl">
      Testing Services for Golf Courses, Sports Fields, Public and Commercial
      Landscapes
    </p>
    <!-- carousel div  -->
    <div class="flex justify-center">
      <div class="flex items-center gap-5">
        <div
          class="bg-green-600 h-14 w-14 flex justify-center items-center rounded-full cursor-pointer group"
        >
          <i
            class="fa-solid fa-caret-left text-3xl text-white group group-hover:text-black group-hover:duration-500"
          ></i>
        </div>
        <div>
          <div
            v-for="(image, index) in images"
            :key="index"
            class="flex items-center"
          >
            <img :src="image.image" width="200" />
            <div v-html="image.text"></div>
          </div>
        </div>
        <div
          class="bg-green-600 h-14 w-14 flex justify-center items-center rounded-full cursor-pointer group"
        >
          <i
            class="fa-solid fa-caret-right text-3xl text-white group-hover:text-black group-hover:duration-500"
          ></i>
        </div>
      </div>
    </div>

    <!-- Grid Section  -->
    <div class="">
      <div class="grid grid-cols-3 justify-center items-center">
        <div
          v-for="item in gridImages"
          class="flex flex-col justify-center items-center bg-red-300 w-2/3 gap-x-5"
        >
          <img :src="item.image" width="200" />
          <a href="#" class="underline text-green-700">{{ item.text }}</a>
        </div>
      </div>
    </div>

    <div>
      <p>
        Turf & Soil Diagnostics (TSD) provides our customers with accredited
        testing of soil, aggregate, growing media, soil amendments, and drainage
        systems. We also perform research and development, on-site evalutions,
        and Gmax field hardness testing.
      </p>
      <p>
        Our customer base is world-wide, and includes superintendents, field
        managers, contractors, architects, and suppliers working with everything
        from parks and recreations fields, to professional athletic and golf
        facilities, to major public and private landscapes.
      </p>
      <p>
        The TSD labs are located in Kansas and New York (USA), where we provide
        our employees with good work environment, competitive pay, and
        opportunities for growth.
      </p>
      <p>
        Note: Turf & Soil Diagnostics does not accept samples containing
        hazardous materials. Our labs only work with clean soils, sands,
        amendments, etc.
      </p>
      <a href="#">click here to learn more about our company</a>
    </div>
  </div>
</template>
