<script setup lang="ts">
import leaf from "./../assets/HomeImages/tea-leaves.png";
import box from "./../assets/HomeImages/Box.jpg";
</script>
<template>
  <main class="px-5 md:px-24 lg:px-24">
    <div>
      <p class="text-2xl md:text-4xl lg:text-5xl text-center">
        Sending in samples to <br />
        ​​​​​​​Turf & Soil Diagnostics?
      </p>
      <p class="flex items-center justify-center my-5">
        <img :src="leaf" width="40" />
        <a
          target="_blank"
          href="https://turfdiag.com/mt-content/uploads/2022/11/tsd-sample-submittal-form.pdf"
          class="underline text-lg md:text-xl lg:text-xl"
        >
          Click Here for quick access to TSD Sample Submittal Form</a
        >
      </p>
    </div>
    <!--  -->
    <div class="flex flex-col lg:flex-row my-5">
      <div>
        <img :src="box" class="mx-auto lg:m-0" />
        <p class="text-sm font-semibold lg:w-3/4 my-5">
          Below are forms and permits that are encouraged or required when
          sending samples to our labs. Please feel free to contact us via phone
          or email prior to sending samples, if you have any questions or
          special needs.
        </p>
      </div>
      <div class="text-sm flex flex-col gap-y-2">
        <p class="text-xl text-red-500">Quick Tips for Sample Submission</p>
        <p>
          Whether you are shipping samples to our New York or Kansas
          laboratories, following these quick tips will help ensure your samples
          arrive safely and can be tested in a timely manner.
        </p>
        <p>
          - Place one gallon of sand, soil, and/or fine aggregate samples in
          high-quality zipper top bags (double bag for added protection)
        </p>
        <p>
          - For profile cores, send 2" (5 cm) diameter pvc tubes with carefully
          packed soil. Pack the inside of the sample tube tightly with paper or
          equivalent, seal the ends with duct tape.
        </p>
        <p>
          - Send 5 gallons of green roof media samples & large gravels in
          plastic buckets.
        </p>
        <div class="block">
          <p>- Label outside of bags/buckets with indelible markers</p>
          <p>
            - include completed sample submittal form inside of shipping
            container
          </p>
          <p>
            - include plenty of packing material to protect samples during
            shipment
          </p>
        </div>
        <a
          href="https://www.turfdiag.com/mt-content/uploads/2020/08/sampling_agb-march2010_.pdf"
          class="text-xl underline"
          >Click here for Sampling Instructions</a
        >
      </div>
    </div>
    <!--  -->
    <div class="text-sm my-5">
      <p class="text-2xl md:text-4xl lg:text-5xl text-center my-5">
        Submittal Form
      </p>
      <p>
        <span class="text-red-600 my-5"
          >A completed Turf & Soil Diagnostics Submittal Form (link below)</span
        >
        should be included with all sample submissions. This form provides
        information for testing of golf, sports turf, green roof, and landscape
        soils.
      </p>
      <p class="flex items-center justify-center">
        <img :src="leaf" width="40" />
        <a
          target="_blank"
          href="https://turfdiag.com/mt-content/uploads/2022/11/tsd-sample-submittal-form.pdf"
          class="text-xl underline my-5"
        >
          Sample Submittal Form</a
        >
      </p>
      <p>
        The submittal form tells the lab who the client is and what testing to
        perform. In case of any confusion, the form provides information so that
        we can contact the correct individuals.
      </p>
      <p>
        In summary, a completed submittal form allows your testing to be
        performed in an efficient manner.
      </p>
      <div
        class="flex flex-col md:flex-row lg:flex-row gap-x-36 my-5 gap-y-5 md:gap-y-0 lg:gap-y-0"
      >
        <p>
          - For samples being sent to our Kansas lab, ship to: Turf & Soil
          Diagnostics - KS 613 E. 1st Street Linwood, KS 66052 USA
        </p>
        <p>
          - For samples being sent to our New York lab, ship to: Turf & Soil
          Diagnostics - NY 35 King Street Trumansburg, NY 14886 USA
        </p>
      </div>
    </div>
    <!--  -->
    <div>
      <p class="text-2xl md:text-4xl lg:text-5xl text-center my-5">
        Soil Permits
      </p>
      <div class="lg:w-1/2 text-sm">
        <p class="text-red-600">
          Soil import permits allow our labs the ability to accept soil samples
          from around the globe for testing.
        </p>
        <p>
          International Clients (outside of US and Canada) - please contact us
          for a shipping label that is required by US Customs. We will email you
          the proper soil import label to place on the outside of your container
          or box. A copy of our complete permit should also be included inside
          of the shipping container. This will ensure that the samples can clear
          through customs.
        </p>
        <p class="text-red-600 my-5">
          Each of our lab has its own soil permit. Please contact our labs for
          complete instructions and documentation needed, to send samples
          international samples to TSD.
        </p>
      </div>
    </div>
    <!--  -->
    <div
      class="flex flex-col gap-y-5 md:flex-row lg:flex-row text-sm justify-between"
    >
      <div class="">
        <p class="flex items-center">
          <img :src="leaf" width="40" />
          <a
            target="_blank"
            href="https://turfdiag.com/mt-content/uploads/2022/12/tsd-ks-soil-permit-label-12-15-22-to-12-15-25.pdf"
            class="underline"
          >
            TSD-KS Soil Import Label</a
          >
        </p>
        <p class="text-red-600">
          Turf & Soil Diagnostics - KS holds USDA Permit #525-22-349-2183
        </p>
        <p>Select this link when sending samples to our Linwood Kansas lab.</p>
      </div>
      <div>
        <p class="flex items-center">
          <img :src="leaf" width="40" />
          <a
            target="_blank"
            href="https://turfdiag.com/mt-content/uploads/2024/08/soil-permit-label-ny-2024-2027_66cf29c937d26.pdf"
            class="underline"
          >
            TSD-NY Soil Import Label</a
          >
        </p>
        <p class="text-red-600">
          Turf & Soil Diagnostics - NY holds USDA Permit #525-24-110-64996.
        </p>
        <p>
          Select this link when sending samples to our Trumansburg New York lab.
        </p>
      </div>
    </div>
    <div class="text-xl my-5">
      Important Note: Turf & Soil Diagnostics does not accept samples containing
      hazardous materials. Our labs only have capability to work with clean
      soils, sands, aggregates, etc.
    </div>
  </main>
</template>
<style scoped></style>
