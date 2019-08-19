<template>
    <div class="class-name">
        <Content slot-key="name" />
    </div>
</template>

<script>
export default {
    name: "ClassHome"
}
</script>

<style>
.class-banner {
    width: 100%;
    height: 400px;
    background: #ff9966;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff5e62, #ff9966); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>