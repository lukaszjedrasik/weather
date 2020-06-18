<template>
  <div class="short-details" v-if="temperature || date || description">
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
        <p class="short-details__subtitle">{{ cityName }}</p>
      </div>
      <div class="short-details__items" v-if="description">
        <p class="short-details__title">Description:</p>
        <p class="short-details__subtitle">{{ description }}</p>
      </div>
    </div>
    <div class="short-details__right" v-if="temperature || date || description">
      <button class="short-details__button">more</button>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import lodashGet from 'lodash.get';

  export default {
    name: "ShortInformation",

    computed: {
      ...mapState({
        city: state => state.city
      }),
      temperature () {
        const temp = lodashGet(this, 'city.data.details.shortDetails[0].main.temp', false);
        return temp ? temp.toFixed() : false
      },
      date () {
        let date = lodashGet(this, 'city.data.details.shortDetails[0].dt_txt', false);
        if (!date) {
          return
        }
        date = date.split(' ')[0].split('-').reverse().join('.')
        return date
      },
      cityName () {
        return lodashGet(this, 'city.data.city.name', false);
      },
      description () {
        return lodashGet(this, 'city.data.details.shortDetails[0].weather[0].description', false);
      }
    }
  }
</script>

<style scoped lang="scss" src="./ShortDetaiils.scss" />
