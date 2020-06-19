import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo/Logo.vue'

describe('Logo.vue', () => {
  it('renders props width and font size when passed', () => {
    const width = '200';
    const fontSize = '64';

    const wrapper = shallowMount(Logo, {
      propsData: {
        width,
        fontSize
      }
    })
    expect(wrapper.props().width).toBe('200');
    expect(wrapper.props().fontSize).toBe('64');
  })
})
