<template>
  <!--  -->
  <!-- <button class="carousel-control left" @click="$emit('prev')">Prev</button>
  <button class="carousel-control right" @click="$emit('next')">Next</button> -->

  <div
    @click="$emit('prev')"
    class="carousel-control left rounded-full cursor-pointer group"
  >
    <i
      class="fa-solid fa-caret-left text-xl md:text-2xl lg:text-3xl text-white group group-hover:text-black group-hover:duration-500"
    ></i>
  </div>
  <div
    @click="$emit('next')"
    class="carousel-control right rounded-full cursor-pointer group"
  >
    <i
      class="fa-solid fa-caret-right text-xl md:text-2xl lg:text-3xl text-white group-hover:text-black group-hover:duration-500"
    ></i>
  </div>
</template>

<script>
export default {
  emits: ["prev", "next"],
};
</script>

<style scoped>
.carousel-control {
  background-color: green;
  color: white;
  border: none;
  display: inline-block;
  position: absolute;

  top: calc(50% - 25px);
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

@media screen and (max-width: 500px) {
  .carousel-control {
    height: 40px;
    width: 40px;
  }
}
@media screen and (max-width: 400px) {
  .carousel-control {
    height: 30px;
    width: 30px;
  }
}
</style>
