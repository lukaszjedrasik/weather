<template>
  <div class="details">
    <router-link
      to="/"
      class="details__link"
    >
      <Logo
        width="50"
        fontSize="28"
      />
    </router-link>

    <div class="details__heading">
      <div class="details__items">
        <div class="details__title">Date:</div>
        <div class="details__subtitle">{{ date }}</div>
      </div>
      <div class="details__items">
        <div class="details__title">Location:</div>
        <div class="details__subtitle">{{ cityName }}, {{ country }}</div>
      </div>
    </div>

    <MoreDetails />
  </div>
</template>

<script>
  import CityInformation from "@/mixins/CityInformation";
  import Logo from '@/components/Logo/Logo'
  import MoreDetails from "@/components/WeatherDetails/MoreDetails/MoreDetails";

  export default {
    name: "Details",

    mixins: [ CityInformation ],

    components: {
      Logo,
      MoreDetails
    },

    metaInfo () {
      const title = this.$route.params.id;
      return {
        title,
        titleTemplate: '%s | AirApp'
      }
    }
  }
</script>

<style scoped lang="scss" src="./Details.scss" />
