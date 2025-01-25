<script setup>
import understanding2 from "./../assets/HomeImages/understandingGmax2.jpg";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24 text-sm">
    <div>
      <div class="text-start my-5 text-sm lg:text-lg">
        <p>Page 2 of 3 Page Article</p>
        <RouterLink
          to="/understanding-gmax-reports"
          class="text-red-500 underline"
          >Click Here to return to Page 1</RouterLink
        >
      </div>
      <div class="flex justify-center">
        <img :src="understanding2" />
      </div>
      <div class="text-end my-5 text-sm lg:text-lg">
        <p>Page 2 of 3 Page Article</p>
        <RouterLink
          to="/understanding-gmax-reports3"
          class="text-red-500 underline"
          >Click Here to go to Page 3
        </RouterLink>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
