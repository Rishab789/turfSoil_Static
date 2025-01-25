<script setup lang="ts">
import pdf1 from "../assets/HomeImages/tsd-ks-accreditation-2024-25_page_1.jpg";
import pdf2 from "../assets/HomeImages/tsd-ks-accreditation-2024-25_page_2.jpg";
import pdf3 from "../assets/HomeImages/tsd-ny-accreditation-2024-25_page_1_page_1.jpg";
</script>
<template>
  <main class="px-5 md:px-24 lg:px-24 bg-green-200 my-10">
    <div class="">
      <p class="text-2xl md:text-4xl lg:text-5xl text-center my-5">
        TSD Scopes of Accreditation
      </p>
      <p class="text-sm text-center my-5">
        The Turf & Soil Diagnostics laboratories are accredited by American
        Association for Laboratory Accreditation (A2LA). Below are copies of our
        current accreditation certificates.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <img :src="pdf1" />
        <img :src="pdf2" />
        <img :src="pdf3" />
      </div>
    </div>
  </main>
</template>
<style scoped></style>
