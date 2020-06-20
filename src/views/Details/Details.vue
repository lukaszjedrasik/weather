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

    <Loader v-if="loader" />

    <div class="details__heading" v-else>
      <div class="details__items">
        <div class="details__title">Date:</div>
        <div class="details__subtitle">{{ date }}</div>
      </div>
      <div class="details__items">
        <div class="details__title">Location:</div>
        <div class="details__subtitle">{{ cityName }}, {{ country }}</div>
      </div>
    </div>

    <MoreDetails v-if="!loader" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import CityInformation from "@/mixins/CityInformation";
  import Logo from '@/components/Logo/Logo'
  import MoreDetails from "@/components/WeatherDetails/MoreDetails/MoreDetails";
  import Loader from "@/components/Loader/Loader";

  export default {
    name: "Details",

    mixins: [ CityInformation ],

    components: {
      Logo,
      MoreDetails,
      Loader
    },

    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$store.dispatch('city/getCityByGeoLocation', {
          lat: to.params.lat,
          lon: to.params.lon
        })
      })
    },

    computed: {
      ...mapState({
        loader: state => state.city.loader
      })
    },

    mounted () {
      window.scrollTo(0, 0);
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

<style lang="scss" src="./Details.scss" />
