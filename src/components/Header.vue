<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="flex items-center justify-between container">
    <div>
      <img src="./../assets/finalfo.png" width="100" />
      <p>Turf and Soil Diagnostics</p>
    </div>
    <nav class="">
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
  </header>
</template>
