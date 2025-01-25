<template>
  <div class="carousel-indicators">
    <button
      class="carousel-indicator-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script>
export default {
  emits: ["switch"],
  props: ["total", "currentIndex"],
};
</script>

<style>
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;
}

.carousel-indicator-item {
  width: 15px;
  height: 15px;
  border: none;
  background: green;
  opacity: 0.2;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
}

.active {
  opacity: 1;
}

@media (max-width: 837px) {
  .carousel-indicators {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 8em;
    z-index: 2;
  }

  .carousel-indicator-item {
    width: 10px;
    height: 10px;
    border: none;
    background: green;
    margin: 0.2em;
    border-radius: 50%;
    cursor: pointer;
  }

  @media (max-width: 263px) {
    .carousel-indicators {
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      bottom: 10em;
      z-index: 2;
    }
    .carousel-indicator-item {
      width: 5px;
      height: 5px;
      border: none;
      background: green;
      margin: 0.2em;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>
