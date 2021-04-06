import { shallowMount } from '@vue/test-utils'
import KatSquare from '@/components/KatSquare.vue'

describe('NavButtons.vue', () => {
  it('renders Square', () => {
    const wrapper = shallowMount(KatSquare, {
      props: { url: "", id: "123", fav: false }
    })
    console.log(wrapper.html);

    expect(wrapper.text()).toMatch("")
  })
})
