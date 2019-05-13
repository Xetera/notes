<template>
  <div class="home">
    <slot></slot>
  </div>
</template>

<style lang="stylus">
  .home .subject:nth-child(even)
    flex-direction: column-reverse

  .home .subject:nth-child(odd)
    flex-direction: column
</style>
