<template>
  <div>
    <Carousel v-bind="settings">
      <Slide
        v-for="video in videos"
        :key="video.id"
        style="carousel__slide"
        @click="openPopup(video.id)"
      >
        <img :src="video.picture" alt="Video thumbnail" class="carousel__item" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { ref } from 'vue'
const emit = defineEmits(['open-popup'])

const settings = ref({
  itemsToShow: 4,
  snapAlign: 'start'
})

defineProps({
  videos: Array
})

const openPopup = (id) => {
  emit('open-popup', id)
}
</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 5px;
}

::v-deep .carousel__prev,
::v-deep .carousel__next {
  box-sizing: content-box;
  border: 1px solid white;
  background-color: red;
  color: rgb(250, 250, 250);
  border-radius: 50%;
}

::v-deep .carousel__prev:hover,
::v-deep .carousel__next:hover {
  box-sizing: content-box;
  border: 1px solid white;
  background-color: rgb(212, 25, 25);
  color: rgb(154, 154, 154);
  border-radius: 50%;
}
</style>
