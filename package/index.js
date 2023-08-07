
import HXInput from './hx-input/hx-input.vue'

const components = [
  HXInput
]

export { HXInput }

export const install = (app) => {
  components.forEach((component) => {
    component.name &&
      app.component(component.name, component)
  })
}

export const version = '0.0.1-alpha.1'

export default { version, install }