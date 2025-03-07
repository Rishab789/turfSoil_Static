<script setup lang="ts">
import image from "./../assets/HomeImages/service-image.jpg";
import { RouterLink } from "vue-router";
</script>
<template>
  <main>
    <div class="px-5 md:px-24 lg:px-24">
      <div class="text-3xl md:text-4xl lg:text-5xl text-center">Services</div>
      <div
        class="flex flex-col md:flex-row lg:flex-row justify-between w-full my-10 gap-x-10"
      >
        <div class="md:w-1/3 lg:w-1/3 text-sm hidden md:block lg:block">
          <p class="my-2">
            Field evaluations by Turf Diagnostics feature Gmax field hardness
            testing, and a thorough evaluation of your sports field. Lab testing
            also available.
          </p>
          <p class="my-2">
            Laboratory analyses of green roof growing media, drainage material,
            and other green roof components.
          </p>
          <p class="my-2">
            Testing of greens mix, bunker sands, topdress, diagnostic core
            evaluations, drainage and compaction testing,and more.
          </p>
          <p class="my-2">
            Evaluation of soils, sands, gravels, and amendments for both natural
            and synthetic turf fields.
          </p>
          <p class="my-2">
            Specialty soil mix design and testing, including biosoils, retention
            basins, structural soils, and green roofs.
          </p>
          <p>Brief descriptions of some of our most common tests.</p>
        </div>
        <div class="md:w-1/3 lg:w-1/3">
          <p class="text-xl mb-5 text-red-500">
            Click on a link below to learn more
          </p>
          <ul class="flex flex-col gap-y-5">
            <RouterLink to="/turfdiagnostic">
              <li>
                <i class="fa-solid fa-check"></i
                ><a href="#">Gmax - Synthetic Turf Testing</a>
              </li>
              <p class="md:hidden lg:hidden">
                Field evaluations by Turf Diagnostics feature Gmax field
                hardness testing, and a thorough evaluation of your sports
                field. Lab testing also available.
              </p>
            </RouterLink>
            <RouterLink to="/greenroof">
              <li>
                <i class="fa-solid fa-check"></i
                ><a href="#">Green Roof Testing</a>
              </li>
              <p class="md:hidden lg:hidden">
                Laboratory analyses of green roof growing media, drainage
                material, and other green roof components.
              </p>
            </RouterLink>
            <RouterLink to="/golfcourse">
              <li>
                <i class="fa-solid fa-check"></i
                ><a href="#">Golf Course Testing</a>
              </li>
              <p class="md:hidden lg:hidden">
                Testing of greens mix, bunker sands, topdress, diagnostic core
                evaluations, drainage and compaction testing,and more.
              </p>
            </RouterLink>
            <RouterLink to="/sportsturf">
              <li>
                <i class="fa-solid fa-check"></i
                ><a href="#">Sports Turf Testing</a>
              </li>
              <p class="md:hidden lg:hidden">
                Evaluation of soils, sands, gravels, and amendments for both
                natural and synthetic turf fields.
              </p>
            </RouterLink>
            <RouterLink to="/landscapetesting">
              <li>
                <i class="fa-solid fa-check"></i
                ><a href="#">Landscape Testing</a>
              </li>
              <p class="md:hidden lg:hidden">
                Specialty soil mix design and testing, including biosoils,
                retention basins, structural soils, and green roofs.
              </p>
            </RouterLink>
            <RouterLink to="/soiltestdescription">
              <li>
                <i class="fa-solid fa-check"></i
                ><a href="#">Soil Test Descriptions</a>
              </li>
              <p class="md:hidden lg:hidden">
                Brief descriptions of some of our most common tests.
              </p>
            </RouterLink>
          </ul>
        </div>

        <div class="md:w-1/3 lg:w-1/3 text-sm">
          <img :src="image" class="mx-auto" />
          <p>
            <span
              >Turf & Soil Diagnostics provides soil physical testing and
              agronomic consulting for the golf course, sports field, and
              landscape industries.</span
            >
            Our laboratories are
            <a href="#" class="text-red-300"
              >accredited by the American Association for Laboratory
              Accreditation,</a
            >
            and we are on the USGA list of recommended labs.
          </p>
        </div>
      </div>
      <div class="my-5">
        <span>
          The Turf & Soil Diagnostics network is the leading provider of turf
          and landscape soil physical testing services. We have performed
          testing and/or consulting on thousands of golf courses, sports fields
          and landscapes located throughout the world.
        </span>
        We have been instrumental in ensuring that our clients utilize quality
        building materials in their golf greens, bunkers, sports fields, green
        roofs, and other turf and landscape areas.
      </div>
      <p class="mt-5 mb-10">
        No matter what the specifications or budget, we can help you to design,
        build, and maintain high quality growing media and drainage systems. Our
        services include construction materials evaluation and selection,
        quality control testing programs during construction and renovation,
        on-site and in-laboratory turf and soil evaluations, development of turf
        management programs, and product development for materials suppliers.
      </p>
    </div>
  </main>
</template>

<style scoped>
li {
  text-decoration: underline;
}

li i {
  margin-right: 0.5rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: green;
}

span {
  color: red;
}
</style>
