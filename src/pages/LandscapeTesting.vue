<script setup lang="ts">
import image1 from "./../assets/HomeImages/landscape.jpg";
import image2 from "./../assets/HomeImages/hand_holding_a_seedling_and.jpg";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24 text-sm">
    <div class="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
      Landscape/ Specialty Soil Testing
    </div>
    <div class="flex flex-col md:flex-row lg:flex-row gap-x-10">
      <div class="md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center">
        <img :src="image1" />
        <p class="my-5">
          <span class="text-red-400"
            >The Turf & Soil Diagnostics lab network has over 40 years of
            combined experience</span
          >
          providing quality services and advice to leading designers,
          landscapers, developers, and contractors. s
        </p>
        <p>
          We have two accredited laboratories that provide physical testing and
          agronomic consulting for a variety of specialty soil, drainage, plant
          growth, maintenance and materials testing issues. Our services help
          our clients to build and maintain soil systems with optimum air and
          water movement and retention.
        </p>
      </div>
      <div class="md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center">
        <img :src="image2" />
        <p class="text-red-400 my-5">
          Building a retention basin, structural soil, or other engineered soil?
        </p>
        <p>
          Turf & Soil Diagnostics can provide the testing services to ensure
          that your soil mixes meet project specifications and provide optimum
          performance.
        </p>
        <p>
          We have helped hundreds of suppliers, contractors, and architects to
          design and provide biosoils, rain garden mixes, green roof soils, and
          other specialty soils.
        </p>
        <p class="my-5">
          <span class="text-red-400">Don't guess! </span>- Send us the
          individual base components. Our experienced technicians will evaluate
          materials and provide precise information and guidance so you can
          create soil mixes that meet specs and perform as desired.
        </p>
      </div>
    </div>
  </main>
</template>
<style></style>
