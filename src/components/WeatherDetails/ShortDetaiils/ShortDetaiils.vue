<template>
  <div class="short-details">
    <div class="short-details__left">
      {{  }}
    </div>
    <div class="short-details__center"></div>
    <div class="short-details__right"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "ShortInformation",

    computed: {
      ...mapState({
        city: state => state.city.data
      })
    }
  }
</script>

<style scoped lang="scss" src="./ShortDetaiils.scss" />
