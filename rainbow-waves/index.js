import isRainbowWaves from './packages/rainbow-waves.vue';

const components = [isRainbowWaves];

const install = vue => {
  components.map(component => {
    vue.component(component.name, component)
  })
}

if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  isRainbowWaves
};