<template>
  <div class="custom-block dialogue" @class="theme">
    <p class="custom-block-title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      theme: String,
      title: String,
    }
  };
</script>

<style lang="stylus">
  .custom-block.tip {
    background-color: #f3f5f7 !important;
  }
</style>
