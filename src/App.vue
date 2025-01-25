<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { ref } from "vue"; // Import ref for reactivity

const route = useRoute();
</script>

<template>
  <div class="">
    <Header v-if="!route.meta.noHeaderFooter" />
  </div>
  <main class="bg-green-100">
    <RouterView />
  </main>
  <Footer v-if="!route.meta.noHeaderFooter" />
</template>

<style scoped></style>
