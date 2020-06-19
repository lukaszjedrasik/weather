<template>
  <div class="page-not-found">
    <Logo
      width="200"
      fontSize="64"
    />
    <router-link
      class="page-not-found__link"
      to="/"
    >
      Upss. Something went wrong... Click here and back to Home
    </router-link>
  </div>
</template>

<script>
  import Logo from '@/components/Logo/Logo'

  export default {
    name: "PageNotFound",

    components: {
      Logo
    },

    metaInfo: {
      title: 'Page Not Found',
      titleTemplate: '%s | AirApp'
    }
  }
</script>

<style scoped lang="scss" src="./PageNotFound.scss" />
