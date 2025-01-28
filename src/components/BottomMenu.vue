<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleNavigation = (event: Event) => {
  const selectedPath = (event.target as HTMLSelectElement).value;
  if (selectedPath) {
    router.push(selectedPath);
  }
};
</script>

<template>
  <div class="lg:flex justify-center my-10 hidden">
    <ul class="flex gap-x-8 list-menu">
      <RouterLink to="/greenRoofs"><li>GREEN ROOFS</li></RouterLink>

      <RouterLink to="/turfdiagnostic"><li>SYNTHETIC TURF-GMAX</li></RouterLink>

      <RouterLink to="/golfcourse"><li>GOLF COURSES</li></RouterLink>
      <RouterLink to="/sportsturf"><li>SPORTS TURF</li></RouterLink>

      <RouterLink to="/landscapetesting"
        ><li>LANDSCAPE/SPECIALITY SOILS</li></RouterLink
      >
    </ul>
  </div>
  <div
    class="text-center w-1/2 mx-auto md:m-0 md:w-full md:text-end px-2 block lg:hidden"
  >
    <select
      @change="handleNavigation"
      class="p-2 border rounded w-full md:w-auto bg-white"
    >
      <option value="" disabled selected>Select a category</option>
      <option value="/greenRoofs">GREEN ROOFS</option>
      <option value="/turfdiagnostic">SYNTHETIC TURF-GMAX</option>
      <option value="/golfcourse">GOLF COURSES</option>
      <option value="/sportsturf">SPORTS TURF</option>
      <option value="/landscapetesting">LANDSCAPE/SPECIALITY SOILS</option>
    </select>
  </div>
</template>

<style scoped>
.list-menu li {
  cursor: pointer;
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.list-menu li:hover {
  background-color: #e4ecdc;
  transition-duration: 0.3s;
}
</style>
