import { mapState } from 'vuex';
import lodashGet from 'lodash.get';

export default {

  computed: {
    ...mapState({
      city: state => state.city
    }),
    date () {
      return new Date().toLocaleDateString()
    },
    cityName () {
      return lodashGet(this, 'city.data.city.name', false);
    },
    country () {
      return lodashGet(this, 'city.data.city.country', false);
    }
  }
}
