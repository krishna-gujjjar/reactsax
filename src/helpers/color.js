import { setColor } from './utils'
export default (
  selector,
  primary = false,
  success = false,
  warn = false,
  secondary = false,
  danger = false,
  dark = false,
  white = false,
  color = ''
) => {
  if (!selector || selector.nodeName === '#comment') return

  let componentColor =
    (danger && 'danger') ||
    (success && 'success') ||
    (warn && 'warn') ||
    (secondary && 'secondary') ||
    (dark && 'dark') ||
    (white && 'white') ||
    (primary && 'primary')
  console.log(color)

  console.log(componentColor)
  console.log(componentColor || color || 'primary')

  if (color || componentColor) {
    setColor('color', componentColor || color || 'primary', selector, true)

    // if ($refs.options) {
    //   setColor(
    //     'color',
    //     componentColor || color || 'primary',
    //     $refs.options,
    //     true
    //   )
    // }

    // if ($refs.tooltip) {
    //   setColor(
    //     'color',
    //     componentColor || color || 'primary',
    //     $refs.tooltip,
    //     true
    //   )
    // }
  }
  if (componentColor === 'dark' || color === 'dark') {
    selector.classList.add('rx-component-dark')
  } else {
    selector.classList.remove('rx-component-dark')
  }

  if (componentColor === 'white') {
    selector.classList.add('rx-component-white')
  } else {
    selector.classList.remove('rx-component-white')
  }
  console.log(componentColor)
  return componentColor
}
