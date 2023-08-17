
import SLInput from './sl-input/sl-input.vue'
import SLButton from './sl-button/sl-button.vue'

const components = [
  SLInput,
  SLButton
]

export { SLInput,SLButton }

export const install = (app) => {
  components.forEach((component) => {
      app.component(component.__name, component)
  })
}

export const version = '0.0.1-alpha.1'

export default { version, install }