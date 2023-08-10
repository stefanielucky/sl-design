
import HXInput from './hx-input/hx-input.vue'

export const components = [
  HXInput
]

export { HXInput }

export const install = (app) => {
  components.forEach((component) => {
      app.component(component.__name, component)
  })
}

export const version = '0.0.1-alpha.1'

export default { version, install }