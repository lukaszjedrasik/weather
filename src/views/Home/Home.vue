<template>
  <div
    class="home"
    :style="{ height: isMobile ? `${docHeight}px` : {} }"
  >
    <Logo width="150" />

    <div class="home__title">
      Check the weather! Enter the city name, or
      <span class="home__title--bold">leave empty for geolocation</span>.
    </div>

    <p
      class="home__validation-message"
      v-if="errMessage"
    >
      We cannot get your geolocation. Please provide your City.
    </p>
    <Loader v-if="loader" class="home__loader" />

    <div class="home__actions" v-else>
      <gmap-autocomplete
        placeholder=""
        class="home__actions-input"
        @place_changed="setPlace"
      />
      <button
        class="home__actions-button"
        @click="usePlace"
      >
        Check
      </button>
    </div>

    <ShortDetails />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Logo from '@/components/Logo/Logo'
import ShortDetails from "@/components/WeatherDetails/ShortDetails/ShortDetails";
import Loader from "@/components/Loader/Loader";

export default {
  name: 'Home',

  components: {
    Logo,
    ShortDetails,
    Loader
  },

  data() {
    return {
      coords: {
        lat: '',
        lon: ''
      },
      place: null,
      docHeight: 0,
      errMessage: false
    }
  },

  computed: {
    ...mapState({
      city: state => state.city.data,
      loader: state => state.city.loader
    }),
    isMobile() {
      if (window.innerWidth <= 980) {
        return true
      } else return false
    }
  },

  methods: {
    getPosition() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          this.errMessage = false
          this.coords.lat = position.coords.latitude;
          this.coords.lon = position.coords.longitude;
          this.$store.dispatch('city/getCityByGeoLocation', this.coords)
        }, err => {
          this.errMessage = true
        })
      }
    },
    setPlace(place) {
      this.errMessage = false;
      this.place = place
    },
    usePlace(place) {
      if (this.place) {
        this.$store.dispatch('city/getCityByGeoLocation', {
          lat: this.place.geometry.location.lat(),
          lon: this.place.geometry.location.lng(),
        })
        this.place = null;
      } else {
      }
    }
  },

  mounted() {
    this.getPosition();
  },

  beforeMount() {
    if (this.isMobile) {
      const onResize = () => {
        this.docHeight = window.innerHeight;
      };
      window.addEventListener('resize', onResize);
      onResize();
      this.$on('hook:beforeDestroy', () => {
        window.removeEventListener('resize', onResize);
      });
    }
  },

  metaInfo: {
    title: 'Home Page',
    titleTemplate: '%s | AirApp'
  }
}
</script>

<style lang="scss" src="./Home.scss" />
