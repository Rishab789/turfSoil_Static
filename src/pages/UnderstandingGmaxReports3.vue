<script setup>
import understanding3 from "./../assets/HomeImages/understandingGmax3.jpg";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24 text-sm">
    <div>
      <div class="text-start my-5 text-sm lg:text-lg">
        <p>Page 3 of 3 Page Article</p>
        <RouterLink
          to="/understanding-gmax-reports2"
          class="text-red-500 underline"
          >Click Here to return to Page 2</RouterLink
        >
      </div>
      <div class="flex justify-center">
        <img :src="understanding3" />
      </div>
      <div class="text-end my-5 text-sm lg:text-lg">
        <p>Page 3 of 3 Page Article</p>
        <RouterLink
          to="/understanding-gmax-reports3"
          class="text-red-500 underline"
          >Click Here to go to Page 1
        </RouterLink>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
