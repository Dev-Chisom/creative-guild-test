<template>
  <div class="profile">
    <!-- profile img -->
    <div class="profile__details">
      <img
        class="profile__details--img"
        :src="`${publicPath}${landscapes.profile_picture}`"
        alt="profile image"
      />
      <div class="flex">
        <div>
          <h2 class="profile__details--name">{{ landscapes.name }}</h2>
          <div>
            <div class="profile__details--bio">
              <small> Bio </small>
              <p class="profile__details--info">
                {{ landscapes.bio }}
              </p>
            </div>
          </div>
        </div>

        <div>
          <ul class="profile__details--contact">
            <li>
              phone:<br />
              <span class="profile__details--number">{{
                landscapes.phone
              }}</span>
            </li>
            <li>
              email:<br />
              <span class="profile__details--email">{{
                landscapes.email
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
    landscapes() {
      return this.$store.state.landscapes;
    },
  },
  mounted() {
    this.$store.dispatch("fetchLandscapes");
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

  &__details {
    display: flex;
    align-items: center;
    &--img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
    }
    &--name {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 1.2em;
      margin-bottom: 1rem;
      margin-left: 1rem;
    }
    &--bio small {
      color: rgb(126, 121, 121);
      font-weight: 500;
      font-size: 1rem;
      margin-left: 1rem;
    }
    &--info {
      color: rgb(206, 199, 199);
      font-size: 0.8rem;
      margin-left: 1rem;
    }
    &--contact {
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
@media (min-width: 690px) and (max-width: 110px) {
}

@media (min-width: 320px) and (max-width: 689px) {
  .flex {
    flex-direction: column;
    text-align: center;
    margin-top: 0.6rem;
  }
  .profile {
    flex-direction: column;
    margin: 2rem;

    &__details {
      flex-direction: column;
    }
  }
}
@media (min-width: 689px) and (max-width: 768px) {
  .profile {
    margin: 2rem;
  }
}
</style>
