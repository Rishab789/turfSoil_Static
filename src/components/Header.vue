<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<template>
  <header
    class="relative mx-auto w-[100%] flex justify-center lg:items-center lg:justify-between container bg-green-400"
  >
    <div class="">
      <img src="./../assets/finalfo.png" class="mx-auto w-16 md:w-24 lg:w-24" />
      <p class="text-center">Turf and Soil Diagnostics</p>
    </div>
    <nav class="hidden lg:block">
      <ul class="flex gap-5">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contacts">Contacts</RouterLink>
        <RouterLink to="/samplesubmittal">Sample Submittal</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/articles">Articles</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/labaccreditation">Lab Accreditation</RouterLink>
      </ul>
    </nav>
    <div class="absolute right-2 top-9 sm:top-5 md:top-10">
      <button class="block lg:hidden" @click="isMenuOpen = !isMenuOpen">
        <span class="text-4xl font-bold">&#9776;</span>
        <!-- Hamburger Icon -->
      </button>
    </div>
    <div class="">
      <nav
        :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
        class="bg-amber-900 text-white absolute -bottom-72 left-7 z-10 w-[90%]"
      >
        <ul class="flex flex-col gap-5 px-10 border-2 border-black">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/contacts">Contacts</RouterLink>
          <RouterLink to="/samplesubmittal">Sample Submittal</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <RouterLink to="/articles">Articles</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/labaccreditation">Lab Accreditation</RouterLink>
        </ul>
      </nav>
    </div>
  </header>
</template>
