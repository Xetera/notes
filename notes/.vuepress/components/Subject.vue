<template>
  <div class="subject chapter-container floating" @click="route">
    <div class="chapter-info">
      <div class="top">
        <span>
        <h2 class="chapter-title">
          {{ name }}</h2>
        <h3 class="chapter-prof">
          <Teacher class="chapter-icon"/>
          <span>{{ instructor }}</span>
        </h3>
         </span>
        <p class="description">{{ description }}</p>
      </div>
      <div class="flex dates">
        <p class="endsat"><b>Started:</b> {{ startDate }}</p>
        <p class="to-right endsat"><b>Ends:</b> {{ endDate }}</p>
      </div>
    </div>
    <span class="image-container">
        <div class="overlay"></div>
        <img :src="image" alt="image" class="chapter-image">
    </span>
  </div>
</template>

<script>
  import Book from "./Icons/Book";
  import Teacher from "./Icons/Teacher";

  export default {
    name: "Subject",
    components: { Book, Teacher },
    methods: {
      route() {
        this.$router.push(this.at);
      }
    },
    data() {
      const endDate = new Date(this.endDate);
      const ended = endDate.toString() !== "Invalid Date" && endDate > new Date();
      return {
        ended
      };
    },
    mounted() {
      console.log(this.ended);
      console.log(this.endDate);
    },
    props: {
      description: String,
      instructor: String,
      name: String,
      image: String,
      startDate: String,
      endDate: String,
      at: String
    }
  };
</script>

<style scoped lang="stylus">
  @media screen and (max-width: 767px) {
    .home .subject:nth-child(even) {
      flex-direction: column-reverse
    }

    .home .subject:nth-child(odd) {
      flex-direction: column-reverse
    }

    .image-container {
      width: 100% !important
      height: 200px
      overflow: hidden
    }

    .chapter-info {
      .chapter-title, .chapter-prof {
        font-size: 16px
      }
      height: 100%
      padding: 0 1rem
      width: unset !important
    }

    .chapter-container {
      flex-direction: row
      height: 100% !important
      display: flex
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }

  .description
    font-size: 14px

  .flex
    display: flex

  .dates
    font-size: 12px
    justify-content: space-between

  .chapter-icon
    min-width: 15px

  .top
    display: flex
    height: 100%
    flex-direction: column
    justify-content space-between
    width: 100%

  .overlay
    // background: -webkit-gradient(linear, left top, left bottom, color-stop(0, transparent), to(rgba(0, 0, 0, .75)));
    // background: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, .75));
    min-width: 0;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute
    overflow: hidden
    z-index 10

  .image-container
    position: relative
    width: 60%
    min-height: 200px

  .chapter-prof
    font-size: 16px

  .chapter-title
    font-size: 20px
    color: #373737

  .chapter-info
    padding: 1.8 rem
    width: 40%
    display: flex
    flex-direction: column
    justify-content space-between

  .chapter-image
    position: relative
    object-fit cover
    min-height: 100%

  .chapter-container
    @media screen and (min-width: 767px)
      flex-direction: row
      height: 100% !important
      display: flex
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    &:hover
      cursor: pointer
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: #ffffff
    flex-direction: column
    margin: 1rem 0
    position: relative
    justify-content space-between
</style>
