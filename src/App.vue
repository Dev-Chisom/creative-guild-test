<template>
  <div class="container">
    <profile-section />
    <album-area />
  </div>
</template>

<script>
import AlbumArea from "./components/AlbumArea.vue";
import ProfileSection from "./components/ProfileSection.vue";

export default {
  name: "App",
  components: {
    ProfileSection,
    AlbumArea,
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1000px;
  margin: 40px auto;
}
</style>
