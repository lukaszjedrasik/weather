<template>
  <div class="logo">
    <figure class="logo__wrapper">
      <img
        src="@/assets/icons/clouds.svg"
        alt="logo cloud clouds"
        class="logo__img"
        :style="{ width: width + 'px' }"
      >
    </figure>
    <h1 class="logo__brand">AirApp</h1>
  </div>
</template>

<script>
  export default {
    name: "Logo",

    props: {
      width: {
        type: String,
        required: false
      }
    }
  }
</script>

<style scoped lang="scss" src="./Logo.scss" />
