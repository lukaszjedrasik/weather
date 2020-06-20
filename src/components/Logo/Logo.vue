<template functional>
  <div class="logo">
    <figure class="logo__wrapper">
      <img
        src="@/assets/icons/clouds.svg"
        alt="logo cloud clouds"
        class="logo__img"
        :style="{ width: props.width + 'px' }"
      >
    </figure>
    <h1
      class="logo__brand"
      :style="{ fontSize: props.fontSize + 'px' }"
    >
      AirApp
    </h1>
  </div>
</template>

<script>
  export default {
    name: "Logo",

    props: {
      width: {
        type: String,
        required: false
      },
      fontSize: {
        type: String,
        required: false
      }
    }
  }
</script>

<style scoped lang="scss" src="./Logo.scss" />
