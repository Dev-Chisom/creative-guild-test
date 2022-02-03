<template>
  <div class="container">
    <profile-section class="profile" />
    <album-area class="album" />
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
  max-width: 800px;
  margin: auto;
  margin-top: 40px;
  .profle{
  }

  .album {
  }
}
</style>
