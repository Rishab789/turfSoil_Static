<script setup lang="ts">
import turfLogo from "./../assets/HomeImages/Turf.png";
import turfImage from "./../assets/HomeImages/turfImage.jpg";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24 mt-16">
    <div class="text-3xl md:text-4xl lg:text-5x text-center">
      Synthetic Turf Testing - Gmax
    </div>
    <div class="flex flex-col md:flex-row lg:flex-row gap-5">
      <div class="md:w-1/2 lg:w-1/2 flex justify-center items-center">
        <img :src="turfLogo" width="300" />
      </div>
      <div class="md:w-1/2 lg:w-1/2 text-sm">
        <p class="my-5">
          <span class="text-red-400"
            >Turf Diagnostics is an industry leading synthetic turf evaluation
            company.</span
          >
          We have tested hundreds of synthetic turf sports fields located
          throughout the country, providing our clients with the information
          needed to maintain optimal playing conditions.
        </p>
        <p class="my-5">
          One of the key components of our field evaluations is field hardness -
          Gmax testing performed with our Sports Surface Impact Test System.
          This system features a standard A type missile that allows us to
          perform testing according to ASTM method F355A and ASTM F1936. These
          test standards are applicable for testing of both synthetic turf
          (artificial turf) and natural turf fields. Among the critical
          information provided by these test procedures are the field's shock
          absorbing properties and head injury criterion.
        </p>
        <p>
          We also provide turf shear testing. Our equipment can be used to
          evaluate natural and synthetic turf without damaging the turf or
          backing material. The overall goal is to achieve consistent shear
          strength values across the entire playing surface. This testing is
          often performed in cojunction with Gmax testing to provide a more
          in-depth assessment of field consistency.
        </p>
      </div>
    </div>
    <div
      class="flex flex-col gap-5 md:flex-row lg:flex-row justify-around text-sm"
    >
      <div>
        <p class="text-red-400">Our synthetic turf evaluations include:</p>
        <p>a. Gmax values (field hardness)</p>
        <p>b. Impact Velocity</p>
        <p>c. Severity Index</p>
        <p>d. Head Injury Criterion</p>
        <p>e. Turf and Infill Depths</p>
        <p>f. Seam and Inlay Evaluations</p>
        <p>g. Maintenance Recommendations (if desired)</p>
      </div>
      <div>
        <img :src="turfImage" />
      </div>
    </div>
    <div class="text-sm">
      <p class="my-5">
        Due to the portability of the test equipment our fully trained and
        knowledgeable personnel are able to test a field and provide a data
        summary while on site at your location. We have performed testing on all
        levels of sports fields throughout the U.S. We provide accurate results,
        prompt service, and unsurpassed professional capabilities.
      </p>
      <p class="my-5">
        Our testing services have been used to evaluate sports fields and golf
        courses at the high school, college, and professional level. Industry
        suppliers also use this testing service to evaluate their products.
        Initial testing is performed after new construction of an athletic
        field. This allows for independent verification that the contractors and
        manufacturers have built a field that meets specifications and
        standards. Annual maintenance testing is then performed to ensure that
        fields continue to meet specifications and to ensure that the field
        continues to meet the manufacturers warranty provisions.
      </p>
      <p class="my-5">
        We make every effort to limit our testing and travel time, which helps
        us to keep the costs at very reasonable level. Whether you are in need
        of testing during construction or post construction, Turf Diagnostics
        can provide you with unbiased, cost-effective testing services.
      </p>
    </div>
  </main>
</template>
<style></style>
