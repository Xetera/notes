<template>
  <div class="container">
    <div class="contact">
      <i class="fab fa-discord adaptive contact-button"></i> Xetera#0001
    </div>

    <div class="contact">
      <i class="fab fa-line adaptive contact-button" style="font-size: 28px"></i>
      xetera
    </div>

    <div class="contact">
      <i class="fas fa-globe-americas adaptive contact-button" style="font-size: 28px"></i> IRL
    </div>
  </div>
</template>

<style lang="stylus">
  @media screen and (max-width: 767px) {
    .container {
      grid-template-columns 1fr 1fr
      grid-template-rows auto
      flex-direction: column !important;
    }
  }

  .contact-button
    font-size: 28px
    margin-right: 10px !important

  .container
    display: grid;
    grid-template-rows 1fr
    grid-gap: 0.4rem
    grid-template-columns repeat(auto-fill, minmax(250px, 1fr))

  .contact
    padding: 1.4rem
    display: inline-flex
    max-width: 100%
    background-color: #fbfdff
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
</style>
