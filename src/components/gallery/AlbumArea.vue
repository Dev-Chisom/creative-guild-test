<template>
  <article class="cards">
    <div v-for="album in profileData.album" :key="album.id" class="card">
      <img :src="`${publicPath}${album.img}`" alt="John" class="card__img" />
      <div class="hide">
        <h3 class="card__title">{{ album.title }}</h3>
        <div class="card__content">
          <p class="card__desc">{{ album.description }}</p>
          <div class="card-featured">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="card-featured__icon"
              v-show="album.featured"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="card-featured__date">{{ album.date }}</p>
          </div>
        </div>
      </div>
      <div class="card-middle">
        <h3 class="card-middle__title">{{ album.title }}</h3>

        <p class="card-middle__date">{{ album.date }}</p>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AlbumArea",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    ...mapGetters({ profileData: "profileData" }),
  },
  mounted() {
    this.$store.dispatch("fetchProfileData");
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  place-items: center;
  margin: 2rem;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 370px;
  max-width: 100%;
  height: 300px;
  position: relative;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  margin: 0 1rem;

  &__img {
    width: 100%;
    object-fit: cover;
    height: 60%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &__title {
    position: absolute;
    top: 140px;
    left: 1rem;
    color: white;
  }
  &__content {
    padding: 0.8rem;
    height: 40%;
  }
  &__desc {
    color: rgb(63, 61, 61);
    font-size: 0.9rem;
    word-spacing: 4px;
  }
  &-featured {
    display: flex;
    align-items: center;
    margin-top: 1.6rem;

    &__icon {
      width: 18px;
      height: 18px;
      color: #fc5748;
    }

    &__date {
      color: rgb(206, 199, 199);
      font-size: 0.8rem;
      margin-left: auto;
    }
  }
  &-middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;

    &__title {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 1.2em;
      margin-bottom: 0.4rem;
    }
  }

  .card:hover &__img {
    opacity: 0.3;
  }
  .card:hover &__title,
  .card:hover &__desc,
  .card:hover &-featured__icon,
  .card:hover &-featured__date {
    opacity: 0;
  }
  .card:hover &-middle {
    opacity: 1;
  }
}
@media (min-width: 320px) and (max-width: 520px) {
  .cards {
    margin: 1rem;
  }
  .card {
    width: 300px;
    max-width: 100%;
  }
}
</style>
