<template>
  <div class="profile">
    <!-- profile img -->
    <div class="profile-details">
      <img
        class="profile-details__img"
        :src="`${publicPath}${profileData.profile_picture}`"
        alt="profile image"
      />
      <div class="flex">
        <div>
          <h2 class="profile-details__name">{{ profileData.name }}</h2>
          <div>
            <div class="profile-details__bio">
              <small> Bio </small>
              <p class="profile-details__info">
                {{ profileData.bio }}
              </p>
            </div>
          </div>
        </div>

        <div>
          <ul class="profile-details__contact">
            <li>
              phone:<br />
              <span class="profile-details__number">{{
                profileData.phone
              }}</span>
            </li>
            <li>
              email:<br />
              <span class="profile-details__email">{{
                profileData.email
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSection",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    profileData() {
      return this.$store.state.profileData;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProfileData");
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
}
.profile {
  display: flex;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2em;
  padding: 2em 4em;
  margin: 2rem;

  &-details {
    display: flex;
    align-items: center;
    &__img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
    }
    &__name {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 1.2em;
      margin-bottom: 1rem;
      margin-left: 1rem;
    }
    &__bio small {
      color: rgb(126, 121, 121);
      font-weight: 500;
      font-size: 1rem;
      margin-left: 1rem;
    }
    &__info {
      color: rgb(206, 199, 199);
      font-size: 0.8rem;
      margin-left: 1rem;
    }
    &__contact {
      padding-top: 2.3rem;
      li {
        font-weight: 500;
        font-size: 1rem;
        list-style: none;
        color: rgb(126, 121, 121);
        text-transform: capitalize;
      }
      span {
        color: rgb(241, 145, 209);
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
}
@media (min-width: 320px) and (max-width: 689px) {
  .flex {
    flex-direction: column;
    text-align: center;
    margin-top: 0.6rem;
  }
  .profile {
    flex-direction: column;

    &-details {
      flex-direction: column;
    }
  }
}
</style>
