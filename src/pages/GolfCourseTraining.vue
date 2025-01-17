<script setup lang="ts">
import Carousel from "../components/Carousel.vue";
import image from "../assets/Home images/golfCourse.jpg";
</script>

<template>
  <main class="px-32 my-16">
    <div class="text-4xl text-center">
      Golf Course Construction & Maintenance Testing
    </div>
    <div>
      <Carousel></Carousel>
    </div>
    <p class="my-5">
      Turf & Soil Diagnostics' laboratories are on the United States Golf
      Association list of recommended labs, and we are
      <a href="#" class="underline"
        >accredited for testing by the American Association for Laboratory
        Accreditation (A2LA).</a
      >
    </p>
    <div class="flex text-sm">
      <div class="w-2/3">
        <p class="text-red-400 my-5">
          Customer focused testing for superintendents, architects, builders,
          and suppliers to the golf industry.
        </p>
        <p class="my-5">
          The Turf & Soil Diagnostics (TSD) labs have performed testing and/or
          consulting for thousands of courses located throughout the world. We
          provide services that are used in three distinct areas.
        </p>
        <p class="my-5">
          1) Evaluation of existing golf courses. Turf growth and drainage
          issues are particular areas of expertise. Laboratory testing packages
          range from surface organic content tests to topdress sand evaluations
          to bunker sand quality determinations to complete diagnostics of the
          golf green rootzone. TSD’s reports provide guidance for material
          selection, maintenance practices, and aid in determination of
          renovation needs.
        </p>
        <p class="my-5">
          2) Evaluation of materials that are to be used for new construction or
          renovation. TSD’s assessments help determine if proposed materials
          meet project specifications, USGA recommendations, or other project
          goals. Quality control testing programs verify quality, consistent
          materials are used for construction of tees, fairways, bunkers, and
          greens.
        </p>
        <p>
          3) Innovative research and development for turf organizations and
          suppliers serving the golf course industry. TSD provides scientific
          data regarding the benefits and potential uses of products and
          practices.
        </p>
      </div>
      <div class="w-1/2 flex flex-col justify-center items-center">
        <img :src="image" class="my-5" />
        <p class="my-5">
          The Turf & Soil Diagnostics' laboratories follow the test methods of
          the American Society of Agronomy (ASA), American Society for Testing &
          Materials (ASTM) and the USGA Putting Green Construction
          Recommendations.
        </p>
        <a href="#" class="text-red-400"
          >Click here to read more <i class="fa-solid fa-angles-right"></i>
        </a>
      </div>
    </div>
  </main>
</template>
<style></style>
