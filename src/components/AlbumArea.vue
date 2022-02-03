<template>
  <article class="cards">
    <div v-for="album in landscapes.album" :key="album.id" class="card">
      <img src="../assets/img/landscape1.jpeg" alt="John" class="card__img" />
      <div class="hide">
        <h3 class="card__title">{{ album.title }}</h3>
        <div class="card__content">
          <p class="card__desc">{{ album.description }}</p>
          <div class="card__featured">
            <p class="card__featured--icon" v-show="album.featured">Contact</p>
            <p class="card__featured--date">{{ album.date }}</p>
          </div>
        </div>
      </div>
      <div class="card__middle">
        <h3 class="card__middle--title">{{ album.title }}</h3>

        <p class="card__middle--date">{{ album.date }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "AlbumArea",
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
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 0 2rem;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 350px;
  height: 300px;
  position: relative;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;

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
  &__featured {
    display: flex;
    align-items: center;
    margin-top: 1.6rem;

    &--icon {
      display: flex;
      justify-content: flex-start;
    }

    &--date {
      color: rgb(206, 199, 199);
      font-size: 0.8rem;
      margin-left: auto;
    }
  }
  &__middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;

    &--title {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 1.2em;
      margin-bottom: 0.4rem;
    }
  }

  .card:hover &__img {
    opacity: 0.3;
    height: 100%;
  }
  .card:hover &__title,
  .card:hover &__desc,
  .card:hover &__featured--icon,
  .card:hover &__featured--date {
    opacity: 0;
  }
  .card:hover &__middle {
    opacity: 1;
  }
}
@media (min-width: 320px) and (max-width: 520px) {
  .cards {
    grid-template-columns: auto;
  }
  .card {
    max-width: 100vw;
    height: 350px;
    margin: 1rem;

    &__details {
      flex-direction: column;
    }
  }
}
@media (min-width: 521px) and (max-width: 650px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .card {
    max-width: 480px;
    margin: 1.5rem auto;

    &__details {
      flex-direction: column;
    }
  }
}
@media (min-width: 652px) and (max-width: 860px) {
  .cards {
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 2rem;
  }
  .card {
    height: 350px;
    max-width: 100%;

    &__details {
      flex-direction: column;
    }
  }
}
</style>
