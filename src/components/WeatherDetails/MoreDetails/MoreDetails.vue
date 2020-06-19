<template>
  <div class="more-details">
    <ul class="more-details__heading">
      <li class="more-details__item">Hour</li>
      <li class="more-details__item">Temperature</li>
      <li class="more-details__item">Description</li>
    </ul>

    <div class="more-details__content-wrapper" v-if="customMoreDetails">
      <ul
        class="more-details__content"
        v-for="(data, index) in customMoreDetails"
      >
        <li class="more-details__item more-details__item--light">{{ data.hour }}</li>
        <li class="more-details__item more-details__item--light">{{ data.temp }} <span class="more-details__celsius">&#8451;</span></li>
        <li class="more-details__item more-details__item--light">{{ data.desc }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import CityInformation from "@/mixins/CityInformation";
  import lodashGet from 'lodash.get';

  export default {
    name: "MoreDetails",

    mixins: [ CityInformation ],

    computed: {
      customMoreDetails () {
        const data = lodashGet(this, 'city.data.details.moreDetails', false);
        if (!data) {
          return
        }
        return data.map(v => {
          let hour = v.dt_txt.split(' ')[1].split(':')
          hour = `${hour[0]}:${hour[1]}`
          const temp = v.main.temp.toFixed();
          const desc = v.weather[0].description;

          return {
            hour,
            temp,
            desc
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss" src="./MoreDetails.scss" />
