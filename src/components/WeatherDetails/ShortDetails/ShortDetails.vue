<template>
  <div class="short-details" v-if="temperature && cityName && country && description">
    <div
      class="short-details__left"
      v-if="temperature"
    >
      {{ temperature }} <span class="short-details__celsius">&#8451;</span>
    </div>
    <div class="short-details__center">
      <div class="short-details__items" v-if="date">
        <p class="short-details__title">Date:</p>
        <p class="short-details__subtitle">{{ date }}</p>
      </div>
      <div class="short-details__items" v-if="cityName">
        <p class="short-details__title">Location:</p>
        <p class="short-details__subtitle">{{ cityName }}, {{ country }}</p>
      </div>
      <div class="short-details__items" v-if="description">
        <p class="short-details__title">Description:</p>
        <p class="short-details__subtitle">{{ description }}</p>
      </div>
    </div>
    <div class="short-details__right">
      <button
        class="short-details__button"
        @click="showMoreDetails"
      >
        more
      </button>
    </div>
  </div>
</template>

<script>
  import lodashGet from 'lodash.get';
  import CityInformation from "@/mixins/CityInformation";

  export default {
    name: "ShortDetails",

    mixins: [ CityInformation ],

    computed: {
      temperature () {
        const temp = lodashGet(this, 'city.data.details.shortDetails[0].main.temp', false);
        return temp ? temp.toFixed() : false
      },
      description () {
        return lodashGet(this, 'city.data.details.shortDetails[0].weather[0].description', false);
      },
      coords () {
        return lodashGet(this, 'city.data.city.coord', false);
      }
    },

    methods: {
      showMoreDetails () {
        if (!this.cityName && !this.coords) {
          return
        }
        this.$router.push(`/${this.cityName}&${this.coords.lat}&${this.coords.lon}`)
      }
    }
  }
</script>

<style scoped lang="scss" src="./ShortDetails.scss" />
