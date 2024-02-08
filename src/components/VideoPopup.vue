<template>
  <div v-if="showPopup" class="popup" @click="closePopup()">
    <div class="inner__popup">
      <h1 class="title">Video playing: {{ getCurrentVideo().id }}</h1>

      <vimeo-player
        :key="getCurrentVideo().id"
        :video-id="getCurrentVideo().video"
        :player-height="height"
        :options="options"
        class="video"
      />
      <div class="pagination">
        <button v-for="(video, index) in videos" :key="index" @click.stop="openPopup(video.id)">
          {{ index + 1 }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['open-popup'])

const props = defineProps({
  showPopup: Boolean,
  closePopup: Function,
  videos: Array,
  currentVideoId: Number
})

const height = 500

const options = {
  muted: true,
  autoplay: true
}

const getCurrentVideo = () => {
  const video = props.videos.find((video) => video.id === props.currentVideoId)

  return video
}

const openPopup = (id) => {
  emit('open-popup', id)
}
</script>
<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-player {
  width: 80%;
  height: 80%;
}

.title {
  color: wheat;
}
.pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.inner__popup {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination button {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  margin: 0 5px;
  cursor: pointer;
}
.video {
  height: 400px;
}
</style>
