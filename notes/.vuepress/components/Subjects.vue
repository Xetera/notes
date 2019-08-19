
<template>
  <div class="subject-container">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Subjects",
  };
</script>

<style scoped lang="stylus">
.subject-container {
    display: flex;
    flex-direction: column;
}
</style>
