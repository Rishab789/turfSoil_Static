<script setup lang="ts">
import roof from "../assets/Home images/roof.jpg";
import roofperson from "../assets/Home images/roofperson.jpg";
import media from "../assets/Home images/media-loading2.jpg";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24">
    <div class="text-3xl md:text-4xl lg:text-5xl text-center my-5">
      Green Roof Component Testing
    </div>
    <div class="flex flex-col md:flex-row lg:flex-row text-sm">
      <div class="md:w-1/3 lg:w-1/3">
        <img :src="roof" class="m-auto md:m-0 lg:m-0" />
      </div>
      <div class="flex flex-col gap-y-5 md:w-2/3 lg:w-2/3">
        <p>
          <span class="text-red-600">At Turf & Soil Diagnostics,</span> we
          provide accredited Green Roof Testing with great service.
        </p>
        <p>
          <span class="text-red-600"
            >We perform compliance testing and research & development on</span
          >
          Growing media (intensive, extensive, lawn, and specialty mixes)
          Aggregates and Drainage Materials Fabrics and Filters Tray Systems
        </p>
        <p>
          Our green roof testing services include standardized methods and
          specialized techniques developed in our laboratory. Test results can
          be compared to industry standards such as FLL or product/project
          specifications. All work is performed according to standard operating
          procedures and reviewed by our professional scientists.
        </p>
        <p>Let us help you to "manage the elements through science".</p>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row lg:flex-row text-sm justify-around my-10"
    >
      <div
        class="flex flex-col md:flex-row lg:flex-row md:w-2/3 lg:w-2/3 gap-5"
      >
        <img :src="roofperson" class="w-36" />
        <div>
          <p>
            <span class="text-red-600">Green Roof Testing Services</span> ASTM
            Standards E2396 to E2399 Growing Media Evaluations Permeability of
            Granular Drainage Material Determination of Dead Loads & Live Loads
            Water Capture & Media Retention of Geocomposite Drain Layers Maximum
            Media Density for Dead Load Analysis Granulometric Determination
            (Particle Size) Wet and Dry Densities Total and Air-Filled
            Porosities Organic Matter Content
          </p>
        </div>
      </div>
      <img :src="media" width="150" class="my-5" />
    </div>
  </main>
</template>
<style></style>
