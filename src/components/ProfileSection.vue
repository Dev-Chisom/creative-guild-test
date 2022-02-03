<template>
  <div class="profile">
    <!-- profile img -->
    <img class="img" src="" alt="profile image" />
    <div class="">
      <h2>name</h2>
      <div class="bio">
        <small> Bio </small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi
          fugiat corrupti quisquam numquam, minus repellendus soluta porro
          veniam. Ipsam dignissimos quos natus? Repellat obcaecati, esse qui
          repellendus, odio eveniet voluptatem aliquam aperiam provident porro
          voluptatibus? Voluptatibus dolor accusamus veniam maxime optio,
          suscipit pariatur numquam inventore odit aperiam facere harum.
        </p>
        <div>
          <ul class="contact">
            <li>phone: 0807070</li>
            <li>emal: lllneg</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import axios from "axios";
import profile from "../assets/landscapes";

export default {
  name: "ProfileSection",
  data() {
    return {};
  },
  mounted() {
    this.fetchLandscapes();
  },
  methods: {
    // ...mapActions({
    //   fetchLandscapes: "fetchLandscapes",
    // }),
    async fetchLandscapes() {
      try {
        const landscapes = await axios.get(profile);
        console.log("logging ", landscapes);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2em;
  padding: 2em 5em;

  .img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
  }

  .bio {
    display: flex;

    .contact {
      li {
        list-style: none;
      }
    }
  }
}
</style>
