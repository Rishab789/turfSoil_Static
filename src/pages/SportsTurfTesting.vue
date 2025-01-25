<script setup>
import { sportsTurfImages } from "../services/homeImages";

import Carousel from "../components/carousel/Carousel.vue";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24 my-16 text-sm">
    <div class="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
      Sports Turf Testing
    </div>
    <div class="flex justify-center">
      <carousel
        :slides="sportsTurfImages"
        :interval="5000"
        controls
        indicators
      ></carousel>
    </div>
    <p class="my-5">
      <span>Turf & Soil Diagnostics - our name says it all.</span> We are the
      leading sports turf physical testing company, with unrivaled knowledge,
      experience, and dedication to the sports turf industry. Our labs have
      proven testing procedures for natural turf rootzones, ball diamond skin
      areas, and synthetic turf base materials.
    </p>
    <p>
      From professional fields to parks & rec, our services have been utilized
      to helping leading field managers, architects, consultants, and builders.
      Whether you're constructing new fields or perfecting your infield mixes,
      Turf & Soil Diagnostics' testing can provide the information you need to
      build and manage your sports fields for optimum performance.
    </p>
  </main>
</template>
<style></style>
