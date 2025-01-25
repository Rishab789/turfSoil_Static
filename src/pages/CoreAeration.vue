<script setup>
import grass from "./../assets/HomeImages/grass.jpg";
import truck from "./../assets/HomeImages/topdress.jpg";
import pdf1 from "../assets/HomeImages/pdf1.jpg";
import pdf2 from "../assets/HomeImages/pdf2.jpg";
import pdf3 from "../assets/HomeImages/pdf3.jpg";
import BottomMenu from "../components/BottomMenu.vue";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24 my-16 text-sm">
    <div>
      <p class="text-xl text-center">
        Turf Diagnostics & Design<br />

        Helping You Have Healthy Turf
      </p>
      <div class="text-center">
        <span class="mr-10">Issue 2</span>
        <span>2004</span>
      </div>
      <p class="text-red-500 text-sm sm:text-lg md:text-3xl lg:text-3xl my-5">
        HOW MUCH FIELD AREA DOES YOUR CORE CULTIVATION PROGRAM ACTUALLY IMPACT?
      </p>

      <div class="flex flex-col gap-2 lg:flex-row my-5">
        <div class="lg:w-2/3">
          <p>By D.D. Minner, Iowa State University</p>
          <p>
            Use the following tables to determine how much of the field area is
            actually being impacted by your coring program.
            <span class="text-red-500"
              >Did you realize that using a 3/4-inch hollow tine more than
              doubles the area of the field that is impacted compared to a
              1/2-inch tine?</span
            >
            Let's suppose that your goal is to remove 50% of the field area to a
            depth of your aerifier tine. The field is predominately clay and you
            want to begin to remove it from the field and replace it with sand.
            If you remove cores on 3-inch centers, it will require 22 passes
            over the field using 1/2-inch hollow tines in order to meet your
            goal of removing 50% of the clay soil. At two corings per year this
            would require 11 years and that might be too long to wait. By using
            3/4-inch tines you can achieve the same goal in 10 passes over the
            field. If you increase your aerification and topdressing to three
            times per year you can achieve your goal of replacing 50% of the
            surface in nearly three years.
          </p>
        </div>
        <div class="lg:w-1/3 flex justify-center items-center">
          <img :src="grass" />
        </div>
      </div>
      <p class="my-5">
        In the case of soil modification, the most effective modification,
        <span class="text-red-500"
          >greatest change in physical properties with the least amount of added
          sand, has been obtained from sands in the very coarse to coarse size
          range.</span
        >
        Rounded sands that are narrowly graded and have coefficient of
        uniformity less than 2 are preferred. Select a uniform coarse sand (80%
        of the particles between 1.0 and 0.5 mm and 90% between 2.0 and 0.5 mm)
        to maximize large pore space when modifying native soil fields high in
        silt and clay. Mixtures of predominately coarse and medium sand, with
        some fine sand, are best for amending native soils. Adding very fine
        sand or silt and clay does little to improve soils already high in silt,
        clay, and very fine sand. Golf course topdressing sands containing at
        least 60% in the medium and fine category are acceptable for topdressing
        sport fields. Avoid using sands high in the fine and very fine range
        since they do not contribute to increasing macropore space.
      </p>
      <div class="flex flex-col lg:flex-row justify-evenly my-10">
        <div>
          <img :src="truck" />
        </div>
        <div class="my-5">
          <p class="text-center">
            Topdressing and Amending Sands for Native Soil
          </p>
          <img :src="pdf1" />
        </div>
      </div>
      <div class="w-2/3 my-5">
        <p>Cultivation Goals</p>
        <p>
          There are many cultivation methods available for sports turf
          management. The best method of cultivation can be selected when
          specific cultivation goals have been determined.
        </p>
      </div>
      <div>
        <img :src="pdf2" />
      </div>
      <div class="flex flex-col justify-end items-end my-5">
        <p>
          Amount of Sand Required and Area Impacted for Various Coring &
          Topdressing Programs
        </p>
        <div>
          <img :src="pdf3" />
        </div>
      </div>
      <BottomMenu />
    </div>
  </main>
</template>
<style scoped></style>
