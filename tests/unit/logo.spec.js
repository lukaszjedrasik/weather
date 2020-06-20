import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo/Logo.vue'

describe('Logo.vue', () => {
  it('render props width and font size when are passed', () => {
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
