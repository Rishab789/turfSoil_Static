<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <main>
    <div class="w-full flex px-24 pt-20">
      <!-- contact information  -->
      <div class="w-1/2 px-10 mt-16">
        <p class="text-4xl my-2">Contact information:</p>
        <div class="my-5">
          <p>Telephone: +1 855-769-4231</p>
          <p>E-mail: <a href="#">lab@turfdiag.com</a></p>
        </div>
        <p class="my-5">
          Turf & Soil Diagnostics has branches located in Linwood, KS and
          Trumansburg, NY.
        </p>
        <p class="my-5">
          Please stop by when you are in the area. We are happy to arrange lab
          tours for interested customers.
        </p>

        <div class="my-5">
          <p class="text-red-400">Turf & Soil Diagnostics - NY</p>
          <p>35 King Street</p>
          <p>Trumansburg, NY 14886 USA</p>
        </div>
        <div class="my-5">
          <p class="text-red-400">Turf & Soil Diagnostics - KS</p>
          <p>613 E. 1st Street</p>
          <p>Linwood, KS 66052 USA</p>
        </div>

        <div class="">
          <p class="text-4xl my-5">Contact form:</p>
          <form class="flex flex-col gap-y-5">
            <div>
              <input
                type="text"
                placeholder="Name*"
                class="border border-black w-full h-10 px-2"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email*"
                class="border border-black w-full h-10 px-2"
              />
            </div>
            <div>
              <input type="text" class="border border-black w-full h-10 px-2" />
            </div>
            <div>
              <textarea
                placeholder="Message*"
                class="border border-black w-full h-32"
              ></textarea>
            </div>
            <div class="flex justify-end">
              <button class="border border-black px-6 py-2">Send</button>
            </div>
          </form>
        </div>
      </div>
      <!-- staff contacts  -->
      <div class="w-1/2 staff-content">
        <div class="text-6xl my-5">Staff / Contacts</div>
        <div class="my-5">
          <span class="">Duane Otto - President </span>
          <p>
            Duane is the Presdident of Turf & Soil Diagnostics. Mr. Otto has
            considerable experience with sports turf design and evaluation. He
            provides our customers with assistance & guidance regarding their
            landscape, golf and sports turf projects. He also functions as
            quality manager for our laboratories. His expertise includes lab and
            field testing, new construction specifications, soil evaluation and
            diagnostics.
          </p>
        </div>
        <p class="my-5">
          Mr. Otto joined Turf & Soil Diagnostics' predecessor company (Turf
          Diagnostics & Design) as a consulting agronomist and soil scientist in
          1996. He has performed GMax (field hardness) testing on sports fields
          throughout the country, and he is a leading expert in the evaluation
          of synthetic turf fields.
        </p>
        <p class="my-5">
          Duane received a Bachelor of Arts in Mathematics and Agribusiness from
          Mid America Nazarene College while working as a laboratory technician
          for Turf Diagnostics & Design. He also performed graduate studies in
          Soil and Water Science at the University of Arizona. His thesis work
          involved the statistical evaluation of mathematical
          evapo-transpiration models.
        </p>
        <div class="my-5">
          <span>Sam Ferro - Vice President </span>
          <p>
            Sam is our technical manager, with duties including reporting, data
            review and evaluation. He provides client consulting related to
            soils, growing media, turf, materials testing, and soil drainage
            issues. He is responsible for research and development of new
            laboratory methods and techniques. He also assists with laboratory
            quality and safety issues.
          </p>
        </div>
        <p class="my-5">
          Mr. Ferro has a Bachelor of Science in Chemistry from the University
          of Missouri and a Masters of Business Administration from the Keller
          Graduate School of Management. He started working for Turf Diagnostics
          & Design in 1998, and he has worked in laboratories at scientist and
          management levels since 1983.
        </p>
        <p class="my-5">
          Sam has made numerous contributions to industry publications, and is a
          frequent speaker at landscape and turf functions.
        </p>
        <div class="my-5">
          <span>Chip Halderman - Consultant </span>
          <p>
            Chip is responsible for performing soil testing and reporting, and
            providing customer service and consultation. .
          </p>
        </div>
        <p class="my-5">
          Mr. Halderman joined Turf & Soil Diagnostics in 2023. Before joining
          Turf & Soil Diagnostics, Halderman served as Superintendent at The
          Orchards Golf Course in Lawrence, KS. At the Orchards, he managed golf
          course operations and staff, including keeping top quality course
          conditions, and planning and scheduling maintenance activities
          according to assessment and agronomic needs.
        </p>
        <p class="my-5">
          Prior to working at The Orchards, Halderman held various laboratory
          positions with responsibilities including sample testing and personnel
          management. Chip is a Class A Superintendent, with degrees in Sports
          Turf Management from the University of Georgia and Biological Sciences
          from Kansas University.
        </p>
        <div class="my-5">
          <span>Kyle Lanham - Field Technician </span>
          <p>
            Kyle is responsible for performing on-site and laboratory testing
            and reporting, and providing customer service and consultation. He
            schedules and performs Gmax and Permeability testing at sports
            fields throghout the country.
          </p>
        </div>
        <p>
          Mr. Lanham joined Turf & Soil Diagnostics in 2018. Since then he has
          performed testing on hundreds of fields. Kyle holds a Bachelor of
          Science degree from Washburn University and has a Sports Turf
          Management certificate from the University of Georgia.
        </p>
      </div>
    </div>
    <div class="flex justify-center my-10">
      <ul class="flex gap-x-8 list-menu">
        <RouterLink to="/greenRoofs"><li>GREEN ROOFS</li></RouterLink>

        <RouterLink to="/turfdiagnostic"
          ><li>SYNTHETIC TURF-GMAX</li></RouterLink
        >

        <RouterLink to="/golfcourse"><li>GOLF COURSES</li></RouterLink>
        <RouterLink to="/sportsturf"><li>SPORTS TURF</li></RouterLink>

        <RouterLink to="/landscapetesting"
          ><li>LANDSCAPE/SPECIALITY SOILS</li></RouterLink
        >
      </ul>
    </div>
  </main>
</template>

<style scoped>
span {
  color: red;
}

.list-menu li {
  cursor: pointer;
  border: 1px solid black;
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
}

.list-menu li:hover {
  background-color: burlywood;
  color: white;
}

.staff-content p,
span {
  font-size: 0.9rem;
}
</style>
