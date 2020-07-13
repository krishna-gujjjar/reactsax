import { setColor } from './utils'

const defineColors = (colors) => {
  Object.keys(colors).forEach((item) => {
    setColor(item, colors[item], document.body)
  })
}

export const defineReactsaxOptions = (options) => {
  if (!!options.colors) {
    defineColors(options.colors)
  }
}
