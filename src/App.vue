<template>
  <div class="container">
    <Spinner v-if="loadingStatus" />
    <section>
      <profile-section />
      <album-area />
    </section>
  </div>
</template>

<script>
import AlbumArea from "./components/gallery/AlbumArea.vue";
import ProfileSection from "./components/gallery/ProfileSection.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    ProfileSection,
    AlbumArea,
  },
  computed: {
    ...mapGetters({ loadingStatus: "loadingStatus" }),
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1000px;
  margin: 40px auto;
}
</style>
