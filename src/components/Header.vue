<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import logoText from "./../assets/HomeImages/LogoText.png";

const isMenuOpen = ref(false);
</script>

<template>
  <header
    class="relative mx-auto w-[100%] flex justify-center lg:items-center lg:justify-between container bg-green-100"
  >
    <div class="flex flex-col justify-center items-center">
      <RouterLink to="/">
        <img
          src="./../assets/finalfo.png"
          class="mx-auto w-16 md:w-24 lg:w-24 cursor-pointer"
        />
      </RouterLink>
      <!-- <p class="text-center text-xl">Turf and Soil Diagnostics</p> -->
      <img :src="logoText" class="w-2/3" />
    </div>
    <nav class="hidden lg:block">
      <ul class="flex gap-5">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/contacts">Contacts</RouterLink></li>
        <li><RouterLink to="/samplesubmittal">Sample Submittal</RouterLink></li>
        <li><RouterLink to="/services">Services</RouterLink></li>
        <li><RouterLink to="/articles">Articles</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li>
          <RouterLink to="/labaccreditation">Lab Accreditation</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="absolute right-2 top-9 sm:top-5 md:top-10">
      <button class="block lg:hidden" @click="isMenuOpen = !isMenuOpen">
        <span class="text-4xl font-bold">&#9776;</span>
        <!-- Hamburger Icon -->
      </button>
    </div>
    <div>
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

<style scoped>
ul li {
  padding: 0.2rem 0.2rem;
  transition: all 0.3s ease; /* Smooth transition for hover effects */
  border-radius: 5px;
}

ul li:hover {
  padding: 0.2rem 0.2rem;
  border-radius: 5px;
  background-color: brown;

  color: white;
}

ul .router-link-active {
  border-radius: 5px;
  background-color: brown;
  /* border-bottom: 2px solid brown; */

  color: white;
  padding: 0.2rem 0.2rem;
}
</style>
