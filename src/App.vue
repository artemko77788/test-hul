<template>
  <div>
    <PhotoCarousel :videos="videos" @open-popup="openPopup" />
    <VideoPopup
      :videos="videos"
      :showPopup="showPopup"
      :closePopup="closePopup"
      :currentVideoId="currentVideoId"
      @open-popup="openPopup"
    />
  </div>
</template>

<script>
import axios from 'axios'

import 'vue3-carousel/dist/carousel.css'
import PhotoCarousel from './components/PhotoCarousel.vue'
import VideoPopup from './components/VideoPopup.vue'

export default {
  components: {
    PhotoCarousel,
    VideoPopup
  },
  data() {
    return {
      videos: [],
      showPopup: false,
      currentVideoId: null,
      name: 'Basic'
    }
  },

  mounted() {
    axios
      .get('https://api.vimeo.com/videos/824804225', {
        headers: {
          Authorization: 'Bearer 896fed222fdd73f6ca247cc30edc8ccc'
        }
      })
      .then((response) => {
        this.picture = response.data.pictures.base_link
        this.video = response.data.uri.split('/').slice(-1).join()
        this.createArrayOfObjects(this.video, this.picture)
      })
      .catch((error) => {
        console.error('Error fetching videos:', error)
      })
  },
  methods: {
    closePopup() {
      this.showPopup = false
    },
    openPopup(id) {
      this.currentVideoId = id
      this.showPopup = true
    },
    createArrayOfObjects(videoIds, pictures) {
      const arrayOfObjects = []
      for (let i = 0; i < 8; i++) {
        arrayOfObjects.push({
          id: i + 1,
          video: videoIds,
          picture: pictures
        })
      }
      this.videos = arrayOfObjects
    }
  }
}
</script>

<style scoped></style>
