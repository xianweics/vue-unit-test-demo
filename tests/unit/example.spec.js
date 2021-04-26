import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

const src = "./logo.png";
describe("HelloWorld.vue", () => {
  it("passed", () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        src
      }
    });
    expect(wrapper.html()).toBe(`<img src="./logo.png">`);
  });
});
/**
 * https://stackoverflow.com/questions/54808134/test-logo-component-in-react-jest
 */
