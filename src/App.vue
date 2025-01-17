<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <Header v-if="!route.meta.noHeaderFooter" />
  <main class="">
    <RouterView />
  </main>

  <Footer v-if="!route.meta.noHeaderFooter" />
</template>

<style scoped></style>
